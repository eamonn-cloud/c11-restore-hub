CREATE TABLE public.warranty_registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  model text NOT NULL,
  serial text NOT NULL,
  purchase_date text,
  retailer text,
  install_date text,
  installed_by text,
  notes text
);

GRANT INSERT ON public.warranty_registrations TO anon, authenticated;
GRANT ALL ON public.warranty_registrations TO service_role;

ALTER TABLE public.warranty_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a warranty registration"
  ON public.warranty_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);