import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-corporate-primary">
            {portfolioData.name}<span className="text-corporate">.</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-gray-600 hover:text-corporate-primary transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-corporate-primary rounded-md"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}