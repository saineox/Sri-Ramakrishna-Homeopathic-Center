import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart, Shield, Award, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-homeo-green-800 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img 
                    src="/Logo.png" 
                    alt="श्रीरामकृष्ण होमिओपैथिक सेंटर Logo" 
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-playfair">श्रीरामकृष्ण होमिओपैथिक सेंटर</h3>
                  <p className="text-sm text-homeo-green-200">Dr. Nandkumar Krishna Gavde</p>
                </div>
              </div>
              <p className="text-homeo-green-100 mb-6 leading-relaxed">
                संपूर्ण होमिओपैथिक उपचार व समुपदेशन। 25+ years of experience in natural healing and diabetes reversal through homeopathy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-homeo-green-700 hover:bg-homeo-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-homeo-green-700 hover:bg-homeo-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-homeo-green-700 hover:bg-homeo-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-playfair">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-homeo-green-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-homeo-green-100 hover:text-white transition-colors">About Dr. Gavde</a></li>
                <li><a href="#services" className="text-homeo-green-100 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#diabetes" className="text-homeo-green-100 hover:text-white transition-colors">Diabetes Care</a></li>
                <li><a href="#contact" className="text-homeo-green-100 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">Patient Testimonials</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">Treatment Gallery</a></li>
              </ul>
            </div>

            {/* Treatment Specialties */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-playfair">Treatment Specialties</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">त्वचा रोग (Skin Disorders)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">मधुमेह (Diabetes)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">पोटाचे विकार (Digestive Issues)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">स्त्रियांचे आजार (Women's Health)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">मानसिक विकार (Mental Health)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">हाडांचे विकार (Joint Problems)</a></li>
                <li><a href="#" className="text-homeo-green-100 hover:text-white transition-colors">कॅन्सर सपोर्ट (Cancer Support)</a></li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-playfair">Contact & Support</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-homeo-green-300" />
                  <div>
                    <p className="text-white font-medium">Direct Contact</p>
                    <p className="text-homeo-green-100 text-sm">+91-9423-838866</p>
                    <p className="text-homeo-green-100 text-sm">+91-7720-838866</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-homeo-green-300" />
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-homeo-green-100 text-sm">+91-9423-838866</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-homeo-green-300" />
                  <div>
                    <p className="text-white font-medium">Clinic Address</p>
                    <p className="text-homeo-green-100 text-sm">ओम गणेशा सकुल, बॅंक ऑफ बडोदा जवळ</p>
                    <p className="text-homeo-green-100 text-sm">गडहिंगलज, कोल्हापूर - 416502</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-homeo-green-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-homeo-orange-400 mr-2" />
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <p className="text-homeo-green-200">Years Experience</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-homeo-orange-400 mr-2" />
                <span className="text-3xl font-bold text-white">1000+</span>
              </div>
              <p className="text-homeo-green-200">Patients Treated</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-homeo-orange-400 mr-2" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-homeo-green-200">Success Rate</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-homeo-orange-400 mr-2" />
                <span className="text-3xl font-bold text-white">M.D.</span>
              </div>
              <p className="text-homeo-green-200">Homeopathy Degree</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-homeo-green-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-homeo-orange-400 mr-2" />
              <span className="text-homeo-green-100">AYUSH Certified</span>
            </div>
            <div className="flex items-center">
              <Award className="w-6 h-6 text-homeo-orange-400 mr-2" />
              <span className="text-homeo-green-100">M.D. (Homeopathy)</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-homeo-orange-400 mr-2" />
              <span className="text-homeo-green-100">Registered Practitioner</span>
            </div>
            <div className="flex items-center">
              <Award className="w-6 h-6 text-homeo-orange-400 mr-2" />
              <span className="text-homeo-green-100">25+ Years Practice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-homeo-green-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-homeo-green-200 text-sm mb-4 md:mb-0">
              © 2024 श्रीरामकृष्ण होमिओपैथिक सेंटर. All rights reserved. Dr. Nandkumar Krishna Gavde - M.D. (Hom)
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-homeo-green-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-homeo-green-200 hover:text-white">Terms of Service</a>
              <a href="#" className="text-homeo-green-200 hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;