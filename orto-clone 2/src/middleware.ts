import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  // Initialize Supabase auth helper
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  // Check if session exists
  const { data: { session } } = await supabase.auth.getSession();
  
  // Check if the request is for an admin route
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  
  // If trying to access admin route but not authenticated, redirect to login
  if (isAdminRoute && req.nextUrl.pathname !== '/admin/login' && !session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  return res;
}

// Only run middleware on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
