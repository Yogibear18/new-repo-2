import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function Menu() {
  // This would be fetched from Sanity in the getStaticProps function
  const menuSections = [
    {
      id: 1,
      title: "STARTERS",
      items: [
        { name: "HOUSE FOCACCIA", description: "extra virgin olive oil", price: "6" },
        { name: "MIXED OLIVES", description: "orange zest, fennel seed", price: "7" },
        { name: "ROASTED ALMONDS", description: "rosemary, sea salt", price: "6" },
      ]
    },
    {
      id: 2,
      title: "SMALL PLATES",
      items: [
        { name: "BURRATA", description: "grilled apricot, prosciutto, pistachios, aged balsamic", price: "18" },
        { name: "BEEF TARTARE", description: "dijon, capers, shallots, egg yolk, carta di musica", price: "21" },
        { name: "CALAMARI", description: "butter beans, olive, parsley, lemon aioli", price: "19" },
      ]
    },
    {
      id: 3,
      title: "PASTA",
      items: [
        { name: "SPAGHETTI", description: "manila clams, garlic, white wine, chili, parsley", price: "26" },
        { name: "TAGLIATELLE", description: "slow braised beef ragu, parmigiano", price: "28" },
        { name: "PAPPARDELLE", description: "wild mushroom, garlic, thyme, truffle butter", price: "27" },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Menu | ORTO Santa Monica</title>
        <meta name="description" content="Explore our California-Italian inspired menu featuring fresh, locally-sourced ingredients." />
      </Head>
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-12">MENU</h1>
          
          <div className="max-w-3xl mx-auto">
            {menuSections.map((section) => (
              <div key={section.id} className="mb-12">
                <h2 className="text-2xl font-medium mb-6 pb-2 border-b">{section.title}</h2>
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="font-medium">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 text-gray-600">
            <p>Menu items and prices subject to change.</p>
            <p className="mt-2">Please inform your server of any allergies or dietary restrictions.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}