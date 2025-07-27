import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/config/supabase/client';
import Image from 'next/image';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      router.push('/admin');
    } catch (err: any) {
      setError(err?.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | ORTO Santa Monica</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">ORTO</h1>
            <p className="text-gray-600">Admin Access</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded border border-red-200">
                {error}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="admin@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>For demo purposes, you can use:</p>
            <p className="mt-1">Email: admin@ortosantamonica.com</p>
            <p>Password: orto2023</p>
            <p className="mt-4">
              <a href="/" className="text-gray-600 hover:underline">
                ← Back to Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}