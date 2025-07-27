import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About | ORTO Santa Monica</title>
        <meta name="description" content="Learn about ORTO, a neighborhood restaurant in Santa Monica serving California-Italian inspired cuisine." />
      </Head>
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-12">ABOUT US</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 aspect-w-16 aspect-h-9 relative h-[400px]">
              {/* In production, this would be an actual image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Restaurant Interior Image</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                ORTO is a neighborhood restaurant in the heart of Santa Monica serving California-Italian inspired cuisine. 
                Our menu reflects the seasonality of locally sourced ingredients and the bounty of the Santa Monica Farmers Market.
              </p>
              
              <p>
                The word "orto" means vegetable garden in Italian, which reflects our commitment to fresh, seasonal produce 
                and our farm-to-table philosophy. Our dishes are crafted with simplicity and respect for ingredients, allowing 
                their natural flavors to shine.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">Our Team</h2>
              
              <p>
                Led by Executive Chef Marco Rossetti, our culinary team brings decades of experience from renowned 
                restaurants across Italy and California. Our front-of-house staff, under the direction of General Manager 
                Sofia Chen, is dedicated to providing warm, attentive service that makes every guest feel welcome.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div>
                  <div className="aspect-w-1 aspect-h-1 relative h-[300px] mb-4">
                    {/* Placeholder for chef image */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Chef Image</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">Marco Rossetti</h3>
                  <p className="text-gray-600">Executive Chef</p>
                </div>
                
                <div>
                  <div className="aspect-w-1 aspect-h-1 relative h-[300px] mb-4">
                    {/* Placeholder for manager image */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Manager Image</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium">Sofia Chen</h3>
                  <p className="text-gray-600">General Manager</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">Our Space</h2>
              
              <p>
                Located in a historic building on Santa Monica Boulevard, our restaurant features an open kitchen, 
                comfortable dining room, and a charming patio for al fresco dining. The warm, inviting space is 
                designed to make you feel at home while enjoying exceptional food and service.
              </p>
              
              <div className="my-8 aspect-w-16 aspect-h-9 relative h-[300px]">
                {/* Placeholder for restaurant exterior */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Restaurant Exterior Image</p>
                </div>
              </div>
              
              <p>
                We look forward to welcoming you to ORTO soon!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}