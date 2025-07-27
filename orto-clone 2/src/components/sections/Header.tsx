import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          ORTO
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/menu" className="hover:underline underline-offset-4">MENU</Link>
          <Link href="/reservations" className="hover:underline underline-offset-4">RESERVATIONS</Link>
          <Link href="/events" className="hover:underline underline-offset-4">EVENTS</Link>
          <Link href="/about" className="hover:underline underline-offset-4">ABOUT</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">CONTACT</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 focus:outline-none" 
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-6 items-center text-xl">
            <Link href="/menu" onClick={() => setIsMenuOpen(false)} className="hover:underline underline-offset-4">MENU</Link>
            <Link href="/reservations" onClick={() => setIsMenuOpen(false)} className="hover:underline underline-offset-4">RESERVATIONS</Link>
            <Link href="/events" onClick={() => setIsMenuOpen(false)} className="hover:underline underline-offset-4">EVENTS</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline underline-offset-4">ABOUT</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:underline underline-offset-4">CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;