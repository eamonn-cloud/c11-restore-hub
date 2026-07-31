import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const Body = z.object({ id: z.string().uuid() })

export const Route = createFileRoute('/api/public/support-request-notify')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed
        try {
          parsed = Body.parse(await request.json())
        } catch {
          return Response.json({ error: 'Invalid request' }, { status: 400 })
        }

        const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
        const { data, error } = await supabaseAdmin
          .from('support_requests')
          .select('*')
          .eq('id', parsed.id)
          .maybeSingle()

        if (error || !data) {
          return Response.json({ error: 'Not found' }, { status: 404 })
        }

        const rawFiles = Array.isArray(data.files) ? (data.files as any[]) : []
        const files: { name: string; url?: string }[] = []
        for (const file of rawFiles) {
          const path = typeof file?.path === 'string' ? file.path : null
          let url: string | undefined
          if (path) {
            const signed = await supabaseAdmin.storage
              .from('support-uploads')
              .createSignedUrl(path, 60 * 60 * 24 * 7)
            url = signed.data?.signedUrl
          }
          files.push({ name: String(file?.name ?? 'attachment'), url })
        }

        try {
          await sendTemplateEmail('support-request', 'service@c11recovery.com', {
            idempotencyKey: `support-request-${data.id}`,
            replyTo: data.email ?? undefined,
            templateData: {
              name: data.name,
              company: data.company ?? '',
              email: data.email,
              phone: data.phone,
              address: data.address ?? '',
              model: data.model,
              serial: data.serial,
              purchased: data.purchased ?? '',
              installedBy: data.installed_by ?? '',
              area: data.issue_area ?? '',
              errorCode: data.error_code ?? '',
              frequency: data.frequency ?? '',
              started: data.started ?? '',
              waterTemp: data.water_temp ?? '',
              description: data.description,
              checks: Array.isArray(data.checks) ? (data.checks as string[]) : [],
              files,
              access: data.access ?? '',
              availability: data.availability ?? '',
              reference: String(data.id).slice(0, 8),
            },
          })
        } catch (err) {
          console.error('support request email failed', err)
          return Response.json({ error: 'Email failed' }, { status: 500 })
        }

        return Response.json({ ok: true })
      },
    },
  },
})
