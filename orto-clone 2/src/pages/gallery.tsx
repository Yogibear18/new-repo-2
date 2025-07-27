import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Gallery from '@/components/gallery/Gallery';
import SEO from '@/components/common/SEO';

export default function GalleryPage() {
  // This would normally be fetched from your CMS or API
  const galleryImages = [
    {
      id: '1',
      src: '/images/gallery/interior-1.jpg',
      alt: 'Restaurant Interior - Main Dining Room',
      width: 1200,
      height: 800
    },
    {
      id: '2',
      src: '/images/gallery/food-1.jpg',
      alt: 'House Pasta Special',
      width: 1200,
      height: 800
    },
    {
      id: '3',
      src: '/images/gallery/bar-1.jpg',
      alt: 'Bar Area',
      width: 1200,
      height: 800
    },
    {
      id: '4',
      src: '/images/gallery/patio-1.jpg',
      alt: 'Outdoor Patio Dining',
      width: 1200,
      height: 800
    },
    {
      id: '5',
      src: '/images/gallery/food-2.jpg',
      alt: 'Seasonal Salad',
      width: 1200,
      height: 800
    },
    {
      id: '6',
      src: '/images/gallery/dessert-1.jpg',
      alt: 'Tiramisu',
      width: 1200,
      height: 800
    }
  ];

  return (
    <>
      <SEO 
        title="Gallery | ORTO Santa Monica"
        description="Explore our restaurant interior, delicious dishes, and events at ORTO Santa Monica."
      />
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-12">GALLERY</h1>
          <Gallery images={galleryImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}
