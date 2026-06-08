-- Run this in the Supabase SQL editor for the Aransas Automation project.

create table if not exists contact_submissions (
  id            uuid        default gen_random_uuid() primary key,
  name          text        not null,
  business_name text        not null,
  email         text        not null,
  phone         text,
  message       text        not null,
  created_at    timestamptz default now()
);

-- Lock down public access. The API route uses the service role key, which
-- bypasses RLS, so no additional policies are needed for writes.
alter table contact_submissions enable row level security;
