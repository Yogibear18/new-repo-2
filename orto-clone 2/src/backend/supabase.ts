import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (replace with your own credentials in production)
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-supabase-project.supabase.co';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';
  
  return createClient(supabaseUrl, supabaseKey);
};

// For server-side only operations
export const supabaseAdmin = createSupabaseClient();
