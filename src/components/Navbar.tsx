
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Vento</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary transition-colors">How It Works</a>
            <a href="#why-vento" className="text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary transition-colors">Why Vento</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">Log In</Button>
            <Button className="rounded-full gradient-bg hover:opacity-90">Join Waitlist</Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary">How It Works</a>
            <a href="#why-vento" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary">Why Vento</a>
            <a href="#faq" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-vento-primary dark:hover:text-vento-primary">FAQ</a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="rounded-full w-full">Log In</Button>
              <Button className="rounded-full w-full gradient-bg hover:opacity-90">Join Waitlist</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
