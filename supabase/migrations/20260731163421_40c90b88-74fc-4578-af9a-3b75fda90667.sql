CREATE TABLE public.support_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  model text NOT NULL,
  serial text NOT NULL,
  purchased text,
  installed_by text,
  issue_area text,
  error_code text,
  frequency text,
  started text,
  water_temp text,
  description text NOT NULL,
  checks jsonb NOT NULL DEFAULT '[]'::jsonb,
  files jsonb NOT NULL DEFAULT '[]'::jsonb,
  access text,
  availability text,
  summary text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

GRANT INSERT ON public.support_requests TO anon, authenticated;
GRANT ALL ON public.support_requests TO service_role;

ALTER TABLE public.support_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a support request"
  ON public.support_requests FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can upload support media"
  ON storage.objects FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'support-uploads');