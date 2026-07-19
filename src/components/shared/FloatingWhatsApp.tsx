import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    window.open("https://wa.me/919423838866?text=Hello%20Dr.%20Gavde%2C%20I%20would%20like%20to%20consult%20regarding%20homeopathic%20treatment.", "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Label */}
      <span className={`px-3 py-1.5 bg-[var(--surface-0)] border border-[var(--border)] text-xs font-semibold rounded-lg shadow-lg text-[var(--text-primary)] transition-all duration-300 transform ${
        isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}>
        Chat with Dr. Gavde
      </span>

      {/* Pulsing trigger button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 relative"
        aria-label="Contact clinic on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:hidden"></span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
