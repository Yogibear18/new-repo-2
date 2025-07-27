import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { useState } from 'react';

export default function Events() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, this would send data to a server or API
    // This is just a simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guestCount: '',
        date: '',
        message: ''
      });
    }, 1500);
  };

  const eventTypes = [
    {
      title: "Private Dining",
      description: "Our private dining room can accommodate up to 20 guests for a seated dinner or 30 for a standing reception. Perfect for intimate celebrations, corporate dinners, or special gatherings.",
      image: "private-dining.jpg"
    },
    {
      title: "Full Restaurant Buyout",
      description: "For larger events, consider a full restaurant buyout. Our space can accommodate up to 80 guests for a seated dinner or 120 for a standing reception. Our team will work with you to create a custom menu and experience.",
      image: "buyout.jpg"
    },
    {
      title: "Catering",
      description: "Let us bring the ORTO experience to your location. Our catering team can create a custom menu for your event, whether it's a corporate lunch, cocktail party, or special celebration.",
      image: "catering.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Events | ORTO Santa Monica</title>
        <meta name="description" content="Host your next private event at ORTO. We offer private dining, buyouts, and catering services." />
      </Head>
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-4">EVENTS</h1>
          <p className="text-center max-w-3xl mx-auto mb-12">
            From intimate private dining experiences to full restaurant buyouts, ORTO offers a variety of options for your next event. 
            Our team will work with you to create a customized menu and experience that meets your needs and exceeds your expectations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {eventTypes.map((event, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-w-3 aspect-h-2 relative h-[200px] mb-4">
                  {/* Placeholder for event images */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">{event.title} Image</p>
                  </div>
                </div>
                <h2 className="text-xl font-medium mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
            ))}
          </div>
          
          {!showContactForm && !isSubmitted && (
            <div className="text-center">
              <button 
                onClick={() => setShowContactForm(true)}
                className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition"
              >
                Inquire About Events
              </button>
            </div>
          )}
          
          {showContactForm && !isSubmitted && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-medium mb-6 text-center">Event Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block mb-2">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      <option value="">Select type</option>
                      <option value="Private Dining">Private Dining</option>
                      <option value="Full Buyout">Full Buyout</option>
                      <option value="Catering">Catering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block mb-2">Guest Count *</label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Event Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please share any details about your event, including time, food and beverage preferences, or special requirements."
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {isSubmitted && (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-medium mb-4">Thank You!</h2>
              <p className="mb-6">Your event inquiry has been submitted. A member of our events team will be in touch with you shortly to discuss your event in more detail.</p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setShowContactForm(false);
                }} 
                className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition"
              >
                Return to Events
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}