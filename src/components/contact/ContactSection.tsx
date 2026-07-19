import React, { useState } from 'react';
import { Mail, Send, MessageSquare, AlertTriangle, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [message, setMessage] = useState('');

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    const urgencyLabels: Record<string, string> = {
      normal: t('contact_urgency_normal'),
      urgent: t('contact_urgency_urgent'),
      emergency: t('contact_urgency_emergency')
    };

    const formattedMessage = encodeURIComponent(
      `🏥 श्रीरामकृष्ण होमिओपैथिक सेंटर\n` +
      `✉️ General Inquiry / Message\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Urgency Level: ${urgencyLabels[urgency] || urgency}\n` +
      `Message:\n${message}\n\n` +
      `Please get back to me. Thank you! 🙏`
    );

    const whatsappLink = `https://wa.me/919423838866?text=${formattedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-[var(--surface-1)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-2)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('contact_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('contact_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* 3-Touchpoint cards strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/919423838866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-3 focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25d366] flex items-center justify-center">
              <MessageSquare className="w-5.5 h-5.5 fill-current" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">WhatsApp Support</h4>
            <p className="text-[11px] text-[var(--text-secondary)]">Immediate response via chat</p>
            <span className="text-xs font-extrabold text-[var(--forest-500)] mt-2">+91 9423838866</span>
          </a>

          {/* Card 2: Voice Call */}
          <a
            href="tel:+919423838866"
            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-3 focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-[var(--forest-100)] text-[var(--forest-500)] flex items-center justify-center">
              <Phone className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Direct Voice line</h4>
            <p className="text-[11px] text-[var(--text-secondary)]">Call our clinic desk</p>
            <span className="text-xs font-extrabold text-[var(--forest-500)] mt-2">+91 9423838866</span>
          </a>

          {/* Card 3: Location directions */}
          <a
            href="https://maps.google.com/?q=Tilak+Path,+Gadhinglaj,+Kolhapur,+Maharashtra+416502"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-3 focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-[var(--saffron-100)] text-[var(--saffron-600)] flex items-center justify-center">
              <MapPin className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Location</h4>
            <p className="text-[11px] text-[var(--text-secondary)]">Tilak Path, Gadhinglaj</p>
            <span className="text-xs font-extrabold text-[var(--forest-500)] mt-2">Get Map View</span>
          </a>

        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-0)] shadow-md">
          <form onSubmit={handleMessageSubmit} className="flex flex-col gap-5">
            
            {/* Input grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold focus:outline-none"
                />
              </div>
            </div>

            {/* Urgency selection dropdown */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                {t('contact_urgency_label')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['normal', 'urgent', 'emergency'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setUrgency(level)}
                    className={`py-2 px-1 text-[10px] font-bold uppercase tracking-wider rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 ${
                      urgency === level
                        ? level === 'emergency'
                          ? 'bg-red-500 border-red-500 text-white shadow-sm'
                          : 'bg-[var(--forest-500)] border-[var(--forest-500)] text-white shadow-sm'
                        : 'bg-[var(--surface-1)] border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]'
                    }`}
                  >
                    {level === 'emergency' && <AlertTriangle className="w-3.5 h-3.5 shrink-0" />}
                    <span>{level === 'normal' ? 'Normal' : level === 'urgent' ? 'Urgent' : 'Emergency'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message block */}
            <div>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('contact_message_placeholder')}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold focus:outline-none"
              ></textarea>
            </div>

            {/* Confirm send trigger button */}
            <button
              type="submit"
              className="py-4 px-6 rounded-xl bg-[var(--forest-700)] hover:bg-[var(--forest-600)] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none mt-2"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>{t('contact_send')}</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
