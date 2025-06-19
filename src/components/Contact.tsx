import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Mail, MapPin, Send, Headphones, Calendar, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-homeo-green-50 to-homeo-cream-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">Contact for Proper Guidance RIGHT NOW</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-homeo-green-800 mb-4">
            Dr. Nandkumar Krishna Gavde
          </h2>
          <p className="text-2xl text-homeo-green-600 mb-4 font-medium">
            M.D. (Hom) • होमिओपैथिक कन्सल्टेंट
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get immediate consultation and guidance from our experienced homeopathic doctor. Available for emergency consultations and regular appointments.
          </p>
        </div>

        {/* 3-Touchpoint System */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              WhatsApp Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Direct chat with Dr. Gavde for immediate health guidance and appointment booking.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Headphones className="w-4 h-4 mr-2" />
                <span>Direct Doctor Contact</span>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold">
              Chat on WhatsApp
              <br />
              <span className="text-sm opacity-90">+91-9423-838866</span>
            </button>
          </div>

          {/* Primary Phone */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              Primary Contact
            </h3>
            <p className="text-gray-600 mb-6">
              Speak directly with Dr. Gavde for consultation, appointment booking, and health guidance.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Direct Doctor Line</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Headphones className="w-4 h-4 mr-2" />
                <span>Immediate Response</span>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Call Now
              <br />
              <span className="text-sm opacity-90">+91-9423-838866</span>
            </button>
          </div>

          {/* Secondary Phone */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              Alternative Contact
            </h3>
            <p className="text-gray-600 mb-6">
              Secondary contact line for appointments and general inquiries about treatments.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Appointment Booking</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Headphones className="w-4 h-4 mr-2" />
                <span>General Inquiries</span>
              </div>
            </div>
            <button className="w-full bg-purple-500 text-white px-6 py-4 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
              Call Alternative
              <br />
              <span className="text-sm opacity-90">+91-7720-838866</span>
            </button>
          </div>
        </div>

        {/* Clinic Address */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold font-playfair text-homeo-green-800 mb-8 text-center">
            श्रीरामकृष्ण होमिओपैथिक सेंटर
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-homeo-green-700 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Clinic Address
              </h4>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">ओम गणेशा सकुल, बॅंक ऑफ बडोदा जवळ,</p>
                <p>टिळक पथ, गडहिंगलज,</p>
                <p>जि. कोल्हापूर पिन-416502</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-homeo-green-700 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Important Note
              </h4>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-gray-700 font-medium">
                  पेशंटनी तपासणीसाठी येण्यापूर्वी कृपया फोन करून यावे
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please call before visiting for consultation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold font-playfair text-homeo-green-800 mb-8 text-center">
            Get Personalized Health Guidance
          </h3>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
                placeholder="+91-XXXXX-XXXXX"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Health Concern
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
              >
                <option value="">Select your primary concern</option>
                <option value="diabetes">मधुमेह / Diabetes</option>
                <option value="skin">त्वचा रोग / Skin Disorders</option>
                <option value="respiratory">छातीचे व फुफ्फुसाचे विकार</option>
                <option value="digestive">पोटाचे विकार / Digestive Issues</option>
                <option value="women-health">स्त्रियांचे आजार / Women's Health</option>
                <option value="mental-health">मानसिक विकार / Mental Health</option>
                <option value="joint-pain">हाडांचे व सांध्यांचे विकार</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
                placeholder="Please describe your symptoms, current medications, and any specific questions..."
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-homeo-green-600 text-white px-8 py-4 rounded-lg hover:bg-homeo-green-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message & Get Consultation
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-homeo-green-100 text-homeo-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-homeo-green-800 mb-2">Primary Contact</h4>
            <p className="text-gray-600 text-sm">+91-9423-838866</p>
            <p className="text-gray-600 text-sm">+91-7720-838866</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-homeo-green-100 text-homeo-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-homeo-green-800 mb-2">WhatsApp</h4>
            <p className="text-gray-600 text-sm">+91-9423-838866</p>
            <p className="text-gray-600 text-sm">Direct Doctor Contact</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-homeo-green-100 text-homeo-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-homeo-green-800 mb-2">Clinic Location</h4>
            <p className="text-gray-600 text-sm">गडहिंगलज, कोल्हापूर</p>
            <p className="text-gray-600 text-sm">Maharashtra, India</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-homeo-green-100 text-homeo-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-homeo-green-800 mb-2">Consultation</h4>
            <p className="text-gray-600 text-sm">By Appointment</p>
            <p className="text-gray-600 text-sm">Please Call Before Visit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;