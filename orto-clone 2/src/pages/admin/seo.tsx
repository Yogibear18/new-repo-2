import Head from 'next/head';
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import SEOEditor from '@/components/admin/seo/SEOEditor';

interface PageSEO {
  slug: string;
  title: string;
  description: string;
  ogImage: string;
  keywords: string;
  canonical: string;
}

export default function AdminSEO() {
  const [pages, setPages] = useState<PageSEO[]>([]);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      // In a real application, this would fetch data from an API
      // This is just a simulation
      setTimeout(() => {
        const dummyPages: PageSEO[] = [
          {
            slug: '',
            title: 'ORTO | Santa Monica',
            description: 'ORTO is a neighborhood restaurant in the heart of Santa Monica serving California-Italian inspired cuisine.',
            ogImage: '/images/og-home.jpg',
            keywords: 'restaurant, santa monica, italian, california cuisine',
            canonical: 'https://ortosantamonica.com'
          },
          {
            slug: 'menu',
            title: 'Menu | ORTO Santa Monica',
            description: 'Explore our California-Italian inspired menu featuring fresh, locally-sourced ingredients.',
            ogImage: '/images/og-menu.jpg',
            keywords: 'menu, food, pasta, italian food, santa monica restaurant',
            canonical: 'https://ortosantamonica.com/menu'
          },
          {
            slug: 'about',
            title: 'About | ORTO Santa Monica',
            description: 'Learn about ORTO, a neighborhood restaurant in Santa Monica serving California-Italian inspired cuisine.',
            ogImage: '/images/og-about.jpg',
            keywords: 'about, chef, restaurant story, santa monica',
            canonical: 'https://ortosantamonica.com/about'
          }
        ];
        
        setPages(dummyPages);
        setSelectedPage(dummyPages[0].slug);
        setIsLoading(false);
      }, 800);
    };

    fetchPages();
  }, []);

  const handleSaveSEO = async (data: any) => {
    // In a real app, this would send data to an API
    console.log('Saving SEO data:', data);
    
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setPages(pages.map(page => 
          page.slug === selectedPage ? { ...page, ...data } : page
        ));
        resolve();
      }, 800);
    });
  };

  const selectedPageData = pages.find(page => page.slug === selectedPage);

  return (
    <>
      <Head>
        <title>SEO Management | ORTO Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <AdminLayout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">SEO Management</h1>
          <p className="text-gray-600 mt-2">Optimize your website for search engines</p>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium mb-4">Pages</h2>
                <ul className="space-y-2">
                  {pages.map((page) => (
                    <li key={page.slug}>
                      <button
                        onClick={() => setSelectedPage(page.slug)}
                        className={`w-full text-left p-2 rounded hover:bg-gray-100 ${
                          selectedPage === page.slug ? 'bg-gray-100 font-medium' : ''
                        }`}
                      >
                        /{page.slug || 'home'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3">
              {selectedPageData && (
                <SEOEditor
                  initialData={selectedPageData}
                  pageSlug={selectedPageData.slug || 'home'}
                  onSave={handleSaveSEO}
                />
              )}
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}
