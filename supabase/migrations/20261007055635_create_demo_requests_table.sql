/*
# Create demo_requests table (single-tenant, no auth)

1. New Tables
- `demo_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — requester's full name
  - `business_name` (text, not null) — jewellery business name
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email
  - `business_type` (text, not null) — type of jewellery business
  - `message` (text) — optional message from the requester
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `demo_requests`.
- Allow anon + authenticated INSERT only (public can submit demo requests).
- No SELECT/UPDATE/DELETE for anon — only INSERT, since these are lead submissions
  that admin reviews in the Supabase dashboard, not from the frontend.
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_demo_requests" ON demo_requests;
CREATE POLICY "anon_insert_demo_requests"
ON demo_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
