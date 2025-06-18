import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, User, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-homeo-green-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91-9423-838866 / 7720-838866</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91-9423-838866</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>🏥 श्रीरामकृष्ण होमिओपैथिक सेंटर</span>
            <span>AYUSH Certified</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-homeo-green-600 to-homeo-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-playfair">MC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-homeo-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">405°</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-playfair text-homeo-green-700">
                श्रीरामकृष्ण होमिओपैथिक सेंटर
              </h1>
              <p className="text-sm text-homeo-green-600">Dr. Nandkumar Krishna Gavde • M.D. (Hom)</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              About Dr. Gavde
            </a>
            <a href="#services" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              Services
            </a>
            <a href="#diabetes" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              Diabetes Care
            </a>
            <a href="#clinics" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              Find Clinic
            </a>
            <a href="#contact" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-homeo-orange-500 text-white px-4 py-2 rounded-lg hover:bg-homeo-orange-600 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <button className="flex items-center space-x-2 border-2 border-homeo-green-700 text-homeo-green-700 px-4 py-2 rounded-lg hover:bg-homeo-green-700 hover:text-white transition-colors">
              <User className="w-4 h-4" />
              <span>Patient Portal</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                Home
              </a>
              <a href="#about" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                About Dr. Gavde
              </a>
              <a href="#services" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                Services
              </a>
              <a href="#diabetes" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                Diabetes Care
              </a>
              <a href="#clinics" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                Find Clinic
              </a>
              <a href="#contact" className="text-homeo-green-700 hover:text-homeo-orange-500 font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="flex items-center justify-center space-x-2 bg-homeo-orange-500 text-white px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-homeo-green-700 text-homeo-green-700 px-4 py-2 rounded-lg">
                  <User className="w-4 h-4" />
                  <span>Patient Portal</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;