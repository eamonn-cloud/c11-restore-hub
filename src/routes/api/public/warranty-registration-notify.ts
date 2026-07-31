import { createFileRoute } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const Body = z.object({ id: z.string().uuid() })

export const Route = createFileRoute('/api/public/warranty-registration-notify')({
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
          .from('warranty_registrations')
          .select('*')
          .eq('id', parsed.id)
          .maybeSingle()

        if (error || !data) {
          return Response.json({ error: 'Not found' }, { status: 404 })
        }

        try {
          await sendTemplateEmail('warranty-registration', 'service@c11recovery.com', {
            idempotencyKey: `warranty-registration-${data.id}`,
            replyTo: data.email ?? undefined,
            templateData: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address ?? '',
              model: data.model,
              serial: data.serial,
              purchaseDate: data.purchase_date ?? '',
              retailer: data.retailer ?? '',
              installDate: data.install_date ?? '',
              installedBy: data.installed_by ?? '',
              notes: data.notes ?? '',
              reference: String(data.id).slice(0, 8),
            },
          })
        } catch (err) {
          console.error('warranty registration email failed', err)
          return Response.json({ error: 'Email failed' }, { status: 500 })
        }

        return Response.json({ ok: true })
      },
    },
  },
})
