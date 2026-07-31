import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface FileLink {
  name: string
  url?: string
}

interface Props {
  name?: string
  company?: string
  email?: string
  phone?: string
  address?: string
  model?: string
  serial?: string
  purchased?: string
  installedBy?: string
  area?: string
  errorCode?: string
  frequency?: string
  started?: string
  waterTemp?: string
  description?: string
  checks?: string[]
  files?: FileLink[]
  access?: string
  availability?: string
  reference?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value && value.trim() ? (
    <Text style={row}>
      <span style={labelStyle}>{label}</span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const Email = ({
  name,
  company,
  email,
  phone,
  address,
  model,
  serial,
  purchased,
  installedBy,
  area,
  errorCode,
  frequency,
  started,
  waterTemp,
  description,
  checks = [],
  files = [],
  access,
  availability,
  reference,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New support request${model ? ` - ${model}` : ''}${name ? ` - ${name}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>✳ C11 Recovery - Aftercare</Text>
        <Heading style={h1}>NEW TECHNICAL SUPPORT REQUEST</Heading>
        {reference ? <Text style={ref}>Reference: {reference}</Text> : null}

        <Hr style={hr} />
        <Text style={section}>Customer</Text>
        <Row label="Name" value={name} />
        <Row label="Company / site" value={company} />
        <Row label="Email" value={email} />
        <Row label="Phone" value={phone} />
        <Row label="Address" value={address} />

        <Hr style={hr} />
        <Text style={section}>Product</Text>
        <Row label="Model" value={model} />
        <Row label="Serial number" value={serial} />
        <Row label="Purchase / install date" value={purchased} />
        <Row label="Installed by" value={installedBy} />

        <Hr style={hr} />
        <Text style={section}>Issue</Text>
        <Row label="Issue area" value={area} />
        <Row label="Error code" value={errorCode} />
        <Row label="Frequency" value={frequency} />
        <Row label="First noticed" value={started} />
        <Row label="Water temp" value={waterTemp} />
        <Text style={body}>{description || 'No description provided.'}</Text>

        <Hr style={hr} />
        <Text style={section}>Already checked</Text>
        {checks.length ? (
          checks.map((c) => (
            <Text key={c} style={body}>
              - {c}
            </Text>
          ))
        ) : (
          <Text style={body}>Nothing checked yet.</Text>
        )}

        <Hr style={hr} />
        <Text style={section}>Media</Text>
        {files.length ? (
          files.map((file, i) => (
            <Text key={`${file.name}-${i}`} style={body}>
              {file.url ? (
                <Link href={file.url} style={link}>
                  {file.name}
                </Link>
              ) : (
                file.name
              )}
            </Text>
          ))
        ) : (
          <Text style={body}>No files attached.</Text>
        )}
        {files.length ? <Text style={note}>Download links expire in 7 days.</Text> : null}

        <Hr style={hr} />
        <Text style={section}>Next step</Text>
        <Row label="Site access" value={access} />
        <Row label="Availability" value={availability} />

        <Hr style={hr} />
        <Section>
          <Text style={note}>Engineered to restore.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Support request - ${data['model'] || 'C11'}${data['serial'] ? ` - ${data['serial']}` : ''}${
      data['name'] ? ` - ${data['name']}` : ''
    }`,
  displayName: 'Technical support request (internal)',
  to: 'service@c11recovery.com',
  previewData: {
    name: 'Jane Doe',
    company: 'Northside Performance',
    email: 'jane@example.com',
    phone: '+353 85 000 0000',
    model: 'Kinos Plus',
    serial: 'KP-2024-0198',
    area: 'Not pumping / low flow (P01)',
    errorCode: 'P01',
    frequency: 'Intermittent',
    description: 'Unit shows P01 after 10 minutes of running. Filter cleaned yesterday.',
    checks: ['Cleaned or replaced the filter', 'Power-cycled the unit at the isolator'],
    files: [{ name: 'display-error.jpg', url: 'https://example.com/file' }],
    access: 'Yes, keys with reception',
    availability: 'Weekdays after 2pm',
    reference: 'a1b2c3d4',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '640px' }
const eyebrow = {
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#204296',
  margin: '0 0 12px',
}
const h1 = {
  fontSize: '26px',
  lineHeight: '1.1',
  fontWeight: 700,
  color: '#121212',
  margin: '0 0 8px',
  letterSpacing: '-0.01em',
}
const ref = { fontSize: '12px', color: '#6b6b6b', margin: '0' }
const hr = { borderColor: '#C9C9C9', margin: '24px 0 16px' }
const section = {
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#121212',
  fontWeight: 700,
  margin: '0 0 10px',
}
const row = { fontSize: '14px', color: '#121212', margin: '0 0 6px' }
const labelStyle = { display: 'inline-block', width: '170px', color: '#6b6b6b' }
const valueStyle = { color: '#121212' }
const body = { fontSize: '14px', lineHeight: '1.6', color: '#121212', margin: '0 0 6px' }
const link = { color: '#204296', textDecoration: 'underline' }
const note = { fontSize: '12px', color: '#6b6b6b', margin: '8px 0 0' }
