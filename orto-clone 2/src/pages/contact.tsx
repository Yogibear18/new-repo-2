import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact | ORTO Santa Monica</title>
        <meta name="description" content="Contact ORTO Santa Monica. We'd love to hear from you!" />
      </Head>
      
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-12">CONTACT</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-medium mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <address className="not-italic">
                      502 Santa Monica Blvd<br />
                      Santa Monica, CA 90401
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p><a href="tel:+13103142700" className="hover:underline">(310) 314-2700</a></p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p><a href="mailto:info@ortosantamonica.com" className="hover:underline">info@ortosantamonica.com</a></p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours</h3>
                    <p>Monday - Friday: 5pm - 10pm</p>
                    <p>Saturday - Sunday: 11am - 10pm</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium text-lg mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                {isSubmitted ? (
                  <div className="py-8">
                    <h2 className="text-2xl font-medium mb-4">Thank You!</h2>
                    <p className="mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                      
                      <div>
                        <label htmlFor="subject" className="block mb-2">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-16">
              <h2 className="text-2xl font-medium mb-6">Location</h2>
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                {/* Placeholder for map */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Google Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}