import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gatayhbuutiknhewmjhd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhdGF5aGJ1dXRpa25oZXdtamhkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Njg4ODc1MSwiZXhwIjoyMDkyNDY0NzUxfQ.i2Un4sEe_ICJoyb-GLzdN5B0oBXGzaE7vzb1eLlTL1M'
);

// Check existing tables
const { data: tables, error: tablesErr } = await supabase
  .from('profiles')
  .select('id')
  .limit(1);

if (tablesErr) {
  console.log('Profiles table check:', tablesErr.message);
} else {
  console.log('Profiles table exists, connected OK');
}

// Check if project_files table already exists
const { error: pfErr } = await supabase.from('project_files').select('id').limit(1);
if (!pfErr) {
  console.log('project_files table already exists, skipping...');
} else {
  console.log('project_files does not exist yet, need to create via SQL editor');
}

// Check if messages table already exists
const { error: msgErr } = await supabase.from('messages').select('id').limit(1);
if (!msgErr) {
  console.log('messages table already exists');
} else {
  console.log('messages does not exist yet');
}

// Check if credits table exists
const { error: credErr } = await supabase.from('credits').select('id').limit(1);
if (!credErr) {
  console.log('credits table already exists');
} else {
  console.log('credits does not exist yet');
}

// Check projects columns
const { data: proj, error: projErr } = await supabase
  .from('projects')
  .select('*')
  .limit(1);
if (projErr) {
  console.log('projects error:', projErr.message);
} else {
  const cols = proj.length > 0 ? Object.keys(proj[0]) : [];
  console.log('projects columns:', cols.join(', '));
  console.log('Has project_type:', cols.includes('project_type'));
}

console.log('\n--- SQL to run in Supabase Dashboard SQL Editor ---');
console.log('Go to: https://supabase.com/dashboard/project/gatayhbuutiknhewmjhd/sql/new');
console.log('Paste the migration SQL below:\n');

const sql = `
-- ============================================
-- MIGRATION: Builder tables for AI app builder
-- ============================================

-- 1. project_files: stores generated code
CREATE TABLE IF NOT EXISTS project_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  path TEXT NOT NULL,
  content TEXT NOT NULL,
  version INTEGER DEFAULT 1,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(project_id, path)
);

-- 2. messages: chat history
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  file_changes JSONB DEFAULT '[]',
  credits_used NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. project_versions: version snapshots
CREATE TABLE IF NOT EXISTS project_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  message_id UUID REFERENCES messages(id),
  snapshot JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. credits: user credit balance
CREATE TABLE IF NOT EXISTS credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  balance NUMERIC DEFAULT 50,
  lifetime_used NUMERIC DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

-- 5. credit_transactions: audit trail
CREATE TABLE IF NOT EXISTS credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL,
  reason TEXT NOT NULL,
  message_id UUID REFERENCES messages(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Alter projects table (add new columns safely)
DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS project_type TEXT DEFAULT 'app';
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS connected_supabase_url TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS connected_supabase_anon_key TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS github_repo TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS github_token TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS last_deploy_url TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS published_url TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS custom_domain TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE projects ADD COLUMN IF NOT EXISTS knowledge TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

-- 7. Alter profiles table
DO $$ BEGIN
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS anthropic_api_key TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS daily_credits_given_at DATE;
EXCEPTION WHEN others THEN NULL;
END $$;

-- 8. RLS policies for new tables
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_transactions ENABLE ROW LEVEL SECURITY;

-- project_files: users can access files for their own projects
CREATE POLICY "Users can manage their project files" ON project_files
  FOR ALL USING (
    project_id IN (SELECT id FROM projects WHERE user_id = auth.uid())
  );

-- messages: users can access messages for their own projects
CREATE POLICY "Users can manage their messages" ON messages
  FOR ALL USING (
    project_id IN (SELECT id FROM projects WHERE user_id = auth.uid())
  );

-- project_versions: users can access versions for their own projects
CREATE POLICY "Users can manage their versions" ON project_versions
  FOR ALL USING (
    project_id IN (SELECT id FROM projects WHERE user_id = auth.uid())
  );

-- credits: users can only see their own credits
CREATE POLICY "Users can view their credits" ON credits
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Service role can manage credits" ON credits
  FOR ALL USING (true);

-- credit_transactions: users can view their own transactions
CREATE POLICY "Users can view their transactions" ON credit_transactions
  FOR SELECT USING (user_id = auth.uid());

-- 9. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_project_files_project ON project_files(project_id);
CREATE INDEX IF NOT EXISTS idx_messages_project ON messages(project_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(project_id, created_at);
CREATE INDEX IF NOT EXISTS idx_project_versions_project ON project_versions(project_id);
CREATE INDEX IF NOT EXISTS idx_credits_user ON credits(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user ON credit_transactions(user_id);

-- 10. Auto-create credits row on new user signup
CREATE OR REPLACE FUNCTION create_user_credits()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO credits (user_id, balance) VALUES (NEW.id, 50)
  ON CONFLICT (user_id) DO NOTHING;
  INSERT INTO credit_transactions (user_id, amount, reason) VALUES (NEW.id, 50, 'signup_bonus');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_profile_created_credits ON profiles;
CREATE TRIGGER on_profile_created_credits
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION create_user_credits();
`;

console.log(sql);
