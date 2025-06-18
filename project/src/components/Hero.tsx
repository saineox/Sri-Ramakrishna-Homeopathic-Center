import React from 'react';
import { ArrowRight, Play, Shield, Award, Heart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-homeo-cream-100 via-white to-homeo-green-50 py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-homeo-orange-500 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-homeo-green-600 rounded-full opacity-10 animate-bounce-subtle"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Doctor Introduction */}
            <div className="inline-flex items-center bg-homeo-orange-100 text-homeo-orange-700 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="font-medium">Dr. Nandkumar Krishna Gavde • M.D. (Hom) • होमिओपैथिक कन्सल्टेंट</span>
            </div>

            {/* Main Tagline */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold font-playfair text-homeo-green-800 mb-4">
                Say <span className="text-red-600 line-through">NO</span> to
              </h1>
              <ul className="text-2xl lg:text-3xl text-red-600 font-medium mb-6 space-y-2">
                <li>• Diabetes</li>
                <li>• Unwanted Medicines</li>
                <li>• Insulin Injections</li>
              </ul>
            </div>

            {/* Counter Tagline */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold font-playfair text-homeo-green-800 mb-4">
                Say <span className="text-homeo-green-600">YES</span> to
              </h2>
              <ul className="text-2xl lg:text-3xl text-homeo-green-600 font-medium mb-6 space-y-2">
                <li>• Healthy Life with Proper Diet</li>
                <li>• Exercise and</li>
                <li>• Rediscovered Homeopathy</li>
              </ul>
            </div>

            {/* Hindi Tagline */}
            <div className="mb-8 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-bold text-pink-700 mb-2" style={{fontFamily: 'serif'}}>
                श्रीरामकृष्ण होमिओपैथिक सेंटर
              </h3>
              <p className="text-lg text-purple-700 font-medium">
                संपूर्ण होमिओपैथिक उपचार व समुपदेशन
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-homeo-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-homeo-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 flex items-center justify-center">
                Contact for Proper Guidance RIGHT NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-homeo-green-700 text-homeo-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-homeo-green-700 hover:text-white transition-colors flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Success Stories
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-homeo-green-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                <span>Complete Homeopathic Treatment</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>AYUSH Certified</span>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Symbol */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-homeo-green-600 to-homeo-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold font-playfair text-homeo-green-700 mb-2">
                      MC
                    </div>
                    <div className="text-2xl font-bold text-homeo-orange-600">
                      405°
                    </div>
                    <div className="text-sm text-homeo-green-600 mt-2">
                      Healing Symbol
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-8 h-8 bg-homeo-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce-subtle">
                  🌿
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="w-8 h-8 bg-homeo-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce-subtle">
                  💊
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                <div className="w-8 h-8 bg-homeo-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce-subtle">
                  🍎
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                <div className="w-8 h-8 bg-homeo-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce-subtle">
                  🧘
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;