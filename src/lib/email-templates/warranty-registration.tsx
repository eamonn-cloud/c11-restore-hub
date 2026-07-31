import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  phone?: string
  address?: string
  model?: string
  serial?: string
  purchaseDate?: string
  retailer?: string
  installDate?: string
  installedBy?: string
  notes?: string
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
  email,
  phone,
  address,
  model,
  serial,
  purchaseDate,
  retailer,
  installDate,
  installedBy,
  notes,
  reference,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New warranty registration - ${model || 'C11'}${serial ? ` - ${serial}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>✳ C11 Recovery - Aftercare</Text>
        <Heading style={h1}>NEW WARRANTY REGISTRATION</Heading>
        {reference ? <Text style={ref}>Reference: {reference}</Text> : null}

        <Hr style={hr} />
        <Text style={section}>Customer</Text>
        <Row label="Name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Phone" value={phone} />
        <Row label="Install address" value={address} />

        <Hr style={hr} />
        <Text style={section}>Product</Text>
        <Row label="Model" value={model} />
        <Row label="Serial number" value={serial} />
        <Row label="Purchase date" value={purchaseDate} />
        <Row label="Purchased from" value={retailer} />

        <Hr style={hr} />
        <Text style={section}>Installation</Text>
        <Row label="Install date" value={installDate} />
        <Row label="Installed by" value={installedBy} />

        {notes && notes.trim() ? (
          <>
            <Hr style={hr} />
            <Text style={section}>Notes</Text>
            <Text style={body}>{notes}</Text>
          </>
        ) : null}

        <Hr style={hr} />
        <Text style={note}>Engineered to restore.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Warranty registration - ${data['model'] || 'C11'}${data['serial'] ? ` - ${data['serial']}` : ''}${
      data['name'] ? ` - ${data['name']}` : ''
    }`,
  displayName: 'Warranty registration (internal)',
  to: 'service@c11recovery.com',
  previewData: {
    name: 'Rob Byrne',
    email: 'rob@example.com',
    phone: '+353 85 000 0000',
    address: '12 Main St, Dublin, D01 X2F2',
    model: 'Kinos Plus',
    serial: 'KP-2026-0142',
    purchaseDate: '2026-06-18',
    retailer: 'c11recovery.com',
    installDate: '2026-07-02',
    installedBy: 'Self-installed',
    notes: 'Outdoor install, covered position.',
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
const note = { fontSize: '12px', color: '#6b6b6b', margin: '8px 0 0' }
