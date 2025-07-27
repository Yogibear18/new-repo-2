import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    party: '2',
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
        date: '',
        time: '',
        party: '2',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Reservations | ORTO Santa Monica</title>
        <meta name="description" content="Book a table at ORTO Santa Monica. We welcome reservations for dinner and weekend brunch." />
      </Head>
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-4">RESERVATIONS</h1>
          <p className="text-center max-w-2xl mx-auto mb-12">
            For parties of 6 or more, please call us directly at (310) 314-2700. 
            For same-day reservations, please call us or use the form below.
          </p>
          
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-medium mb-4">Thank You!</h2>
                <p className="mb-6">Your reservation request has been submitted. We'll contact you shortly to confirm your reservation.</p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div>
                    <label htmlFor="date" className="block mb-2">Date *</label>
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
                  <div>
                    <label htmlFor="time" className="block mb-2">Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="party" className="block mb-2">Party Size *</label>
                  <select
                    id="party"
                    name="party"
                    value={formData.party}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People (Please call)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Reservation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}