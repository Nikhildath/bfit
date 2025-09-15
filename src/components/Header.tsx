import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className={`h-8 w-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
            <span className={`font-bold text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              B FIT
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Join Now
            </button>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;