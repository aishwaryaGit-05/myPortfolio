import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects'];

  return (
    <nav className="fixed w-full backdrop-blur-sm shadow-sm z-50 transition-all nav-style">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-m font-bold">
            {portfolioData.name}'s<span className="ml-2">Porfolio</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold hover:text-gray-300 transition-colors">
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
                className="block px-3 py-2 text-base font-medium hover:bg-gray-200 hover:text-gray-300 rounded-md"
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