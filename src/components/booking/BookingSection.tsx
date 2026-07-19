import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const BookingSection: React.FC = () => {
  const { t, locale } = useTranslation();
  
  // Date Picker State
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Slot selection state
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  
  // Error / Success state
  const [errorMessage, setErrorMessage] = useState('');

  // Calendar parameters
  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Check if Saturday (Saturday off)
    if (date.getDay() === 6) {
      setErrorMessage(t('book_closed'));
      return;
    }
    // Check if past date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return;
    }
    setSelectedDate(date);
    setErrorMessage('');
  };

  const morningSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'];
  const eveningSlots = ['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      setErrorMessage('Please select a date.');
      return;
    }
    if (!selectedSlot) {
      setErrorMessage('Please select a time slot.');
      return;
    }
    if (!name.trim() || !phone.trim() || !concern) {
      setErrorMessage('All required details must be completed.');
      return;
    }

    setErrorMessage('');

    // Format date string
    const formattedDate = selectedDate.toLocaleDateString(locale === 'mr' ? 'mr-IN' : 'en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Format WhatsApp message
    const message = encodeURIComponent(
      `🏥 श्रीरामकृष्ण होमिओपैथिक सेंटर\n` +
      `📅 Appointment Request\n\n` +
      `Name: ${name}\n` +
      `Date: ${formattedDate}\n` +
      `Time: ${selectedSlot}\n` +
      `Concern: ${t(`specialties.${concern}.title`)}\n` +
      `Phone: ${phone}\n\n` +
      `Please confirm my slot. Thank you! 🙏`
    );

    const whatsappLink = `https://wa.me/919423838866?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  // Build Calendar grid cells
  const totalDays = daysInMonth(currentMonth);
  const startDay = startDayOfMonth(currentMonth);
  const gridCells = [];

  // Padding cells before day 1
  for (let i = 0; i < startDay; i++) {
    gridCells.push(<div key={`pad-${i}`} className="p-2"></div>);
  }

  // Actual day cells
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const isSaturday = date.getDay() === 6;
    const isPast = date < today;
    const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear();

    gridCells.push(
      <button
        key={`day-${day}`}
        type="button"
        disabled={isPast}
        onClick={() => selectDate(day)}
        className={`p-2.5 sm:p-3.5 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center transition-all ${
          isSelected
            ? 'bg-[var(--forest-500)] text-white shadow-md'
            : isPast
            ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
            : isSaturday
            ? 'text-red-500 dark:text-red-400 bg-red-500/5 hover:bg-red-500/10'
            : 'hover:bg-[var(--surface-2)] text-[var(--text-primary)] border border-transparent hover:border-[var(--border)]'
        }`}
      >
        <span className="relative">
          {day}
          {isSaturday && (
            <span className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 text-[7px] text-red-500 font-extrabold uppercase scale-90">
              Off
            </span>
          )}
        </span>
      </button>
    );
  }

  return (
    <section 
      id="booking" 
      className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-1)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Secure Your Consultation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('book_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('book_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Interactive Widget Grid Layout */}
        <form onSubmit={handleConfirm} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Date & Time Picker (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Date Selection Box */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-[var(--forest-500)]" />
                {t('book_date_label')}
              </h4>

              {/* Month navigation controller */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-4">
                <button 
                  type="button" 
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h5 className="font-serif font-bold text-sm sm:text-base text-[var(--forest-900)]">
                  {currentMonth.toLocaleString(locale === 'mr' ? 'mr-IN' : 'en-IN', { month: 'long', year: 'numeric' })}
                </h5>
                <button 
                  type="button" 
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Weekdays header row */}
              <div className="grid grid-cols-7 gap-1 text-center font-bold text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div className="text-red-500">Sa</div>
              </div>

              {/* Grid cell wrapper */}
              <div className="grid grid-cols-7 gap-1">
                {gridCells}
              </div>
            </div>

            {/* Time Selection Box */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-[var(--forest-500)]" />
                {t('book_time_label')}
              </h4>

              {/* Morning Timing Group */}
              <div className="mb-6">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                  {t('book_morning_session')}
                </h5>
                <div className="flex flex-wrap gap-2.5">
                  {morningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                        selectedSlot === slot
                          ? 'bg-[var(--forest-500)] border-[var(--forest-500)] text-white shadow-sm'
                          : 'bg-[var(--surface-1)] border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evening Timing Group */}
              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                  {t('book_evening_session')}
                </h5>
                <div className="flex flex-wrap gap-2.5">
                  {eveningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                        selectedSlot === slot
                          ? 'bg-[var(--forest-500)] border-[var(--forest-500)] text-white shadow-sm'
                          : 'bg-[var(--surface-1)] border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Column 2: Personal Details & Confirmation (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Details Intake Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <User className="w-4.5 h-4.5 text-[var(--forest-500)]" />
                {t('book_details_label')}
              </h4>

              <div className="flex flex-col gap-4">
                {/* Full name input */}
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('book_name_placeholder')}
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-sm font-medium focus:outline-none"
                  />
                </div>

                {/* WhatsApp phone number input */}
                <div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder={t('book_phone_placeholder')}
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-sm font-medium focus:outline-none"
                  />
                </div>

                {/* Primary health concern dropdown */}
                <div>
                  <select
                    required
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--forest-500)] focus:border-transparent bg-[var(--surface-1)] text-[var(--text-primary)] text-sm font-semibold focus:outline-none"
                  >
                    <option value="">{t('book_concern_label')}</option>
                    <option value="diabetes">{t('specialties.diabetes.title')}</option>
                    <option value="skin">{t('specialties.skin.title')}</option>
                    <option value="digestive">{t('specialties.digestive.title')}</option>
                    <option value="women">{t('specialties.women.title')}</option>
                    <option value="lungs">{t('specialties.lungs.title')}</option>
                    <option value="ent">{t('specialties.ent.title')}</option>
                    <option value="joints">{t('specialties.joints.title')}</option>
                    <option value="mental">{t('specialties.mental.title')}</option>
                    <option value="kidney">{t('specialties.kidney.title')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Summary Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-4">
                {t('book_summary_title')}
              </h4>

              <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2.5">
                  <span className="text-[var(--text-secondary)]">{t('book_summary_doctor')}</span>
                  <span>{t('book_summary_dr_name')}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2.5">
                  <span className="text-[var(--text-secondary)]">{t('book_summary_date')}</span>
                  <span className={selectedDate ? 'text-[var(--forest-700)]' : 'text-gray-400'}>
                    {selectedDate 
                      ? selectedDate.toLocaleDateString(locale === 'mr' ? 'mr-IN' : 'en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
                      : 'None selected'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)]/50 pb-2.5">
                  <span className="text-[var(--text-secondary)]">{t('book_summary_time')}</span>
                  <span className={selectedSlot ? 'text-[var(--forest-700)]' : 'text-gray-400'}>
                    {selectedSlot || 'None selected'}
                  </span>
                </div>
              </div>

              {/* Alert Message */}
              {errorMessage && (
                <div className="mt-4 p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-xl text-center">
                  {errorMessage}
                </div>
              )}

              {/* Submit Trigger CTA */}
              <button
                type="submit"
                className="w-full mt-6 py-4 rounded-xl bg-[var(--forest-700)] hover:bg-[var(--forest-600)] text-white font-extrabold text-xs uppercase tracking-wider shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 focus:outline-none"
              >
                <span>{t('book_btn_confirm')}</span>
              </button>

              <p className="text-[9px] text-[var(--text-secondary)] text-center leading-normal mt-4">
                {t('book_success_note')}
              </p>
            </div>

          </div>

        </form>

      </div>
    </section>
  );
};

export default BookingSection;
