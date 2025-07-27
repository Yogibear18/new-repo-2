import React, { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '@/config/supabase/client';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error || !data.session) {
        router.push('/admin/login');
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">ORTO Admin</h1>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2 text-gray-400 uppercase text-xs">Content</div>
          <ul>
            <li>
              <Link 
                href="/admin" 
                className={`flex items-center px-6 py-3 hover:bg-gray-800 ${router.pathname === '/admin' ? 'bg-gray-800' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/menu" 
                className={`flex items-center px-6 py-3 hover:bg-gray-800 ${router.pathname.startsWith('/admin/menu') ? 'bg-gray-800' : ''}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/events" 
                className={`flex items-center px-6 py-3 hover:bg-gray-800 ${router.pathname.startsWith('/admin/events') ? 'bg-gray-800' : ''}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/reservations" 
                className={`flex items-center px-6 py-3 hover:bg-gray-800 ${router.pathname.startsWith('/admin/reservations') ? 'bg-gray-800' : ''}`}
              >
                Reservations
              </Link>
            </li>
          </ul>

          <div className="px-4 py-2 mt-6 text-gray-400 uppercase text-xs">Settings</div>
          <ul>
            <li>
              <Link 
                href="/admin/settings" 
                className={`flex items-center px-6 py-3 hover:bg-gray-800 ${router.pathname === '/admin/settings' ? 'bg-gray-800' : ''}`}
              >
                Site Settings
              </Link>
            </li>
            <li>
              <button 
                onClick={handleSignOut}
                className="flex items-center px-6 py-3 w-full text-left hover:bg-gray-800 text-red-400"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;