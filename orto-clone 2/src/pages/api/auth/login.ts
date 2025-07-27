import { NextApiRequest, NextApiResponse } from 'next';
import { createSupabaseClient } from '@/backend/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;
    const supabase = createSupabaseClient();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    
    return res.status(200).json({ 
      user: data.user,
      session: data.session
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(401).json({ 
      error: 'Invalid credentials' 
    });
  }
}
