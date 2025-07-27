import Head from 'next/head';
import { useState, useEffect } from 'react';

// Components will be imported here
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>ORTO | Santa Monica</title>
        <meta name="description" content="ORTO is a neighborhood restaurant in the heart of Santa Monica serving California-Italian inspired cuisine." />
      </Head>
      
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
          <div className="animate-pulse text-3xl font-semibold">ORTO</div>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <section className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">Welcome to ORTO Santa Monica</h1>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}