import React from 'react';
import { Calendar, UserCheck, MapPin, BookOpen, Video, Stethoscope, Heart, Database } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "त्वचा रोग (Skin Disorders)",
      description: "Complete treatment for all types of skin conditions including eczema, psoriasis, and chronic skin problems.",
      color: "bg-red-50 text-red-600",
      hoverColor: "hover:bg-red-100"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "कान, नाक व घशयाचे विकार",
      description: "ENT disorders treatment including chronic sinusitis, hearing problems, and throat infections.",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "छातीचे व फुफ्फुसाचे विकार",
      description: "Respiratory system disorders including asthma, bronchitis, and chronic cough treatment.",
      color: "bg-green-50 text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "स्त्रियांचे व लहान मुलांचे आजार",
      description: "Women's health and pediatric care including menstrual disorders and children's health issues.",
      color: "bg-pink-50 text-pink-600",
      hoverColor: "hover:bg-pink-100"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "मानसिक व मेंदूचे विकार",
      description: "Mental health and neurological disorders including depression, anxiety, and memory problems.",
      color: "bg-purple-50 text-purple-600",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "पोटाचे विकार",
      description: "Digestive system disorders including acidity, ulcers, IBS, and chronic stomach problems.",
      color: "bg-yellow-50 text-yellow-600",
      hoverColor: "hover:bg-yellow-100"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "मूत्राशयाचे व मूत्रपिंडाचे विकार",
      description: "Urinary system and kidney disorders including stones, infections, and chronic kidney problems.",
      color: "bg-indigo-50 text-indigo-600",
      hoverColor: "hover:bg-indigo-100"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "हाडांचे व सांध्यांचे विकार",
      description: "Bone and joint disorders including arthritis, joint pain, and musculoskeletal problems.",
      color: "bg-teal-50 text-teal-600",
      hoverColor: "hover:bg-teal-100"
    }
  ];

  const additionalTreatments = [
    "मधुमेह (Diabetes)",
    "ब्लडप्रेशर (Hypertension)", 
    "कॅन्सर (Cancer Support)",
    "थायरॉईडचे आजार (Thyroid Disorders)",
    "व इतर विषयकालीन व्याधी (Other Chronic Diseases)"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-homeo-orange-100 text-homeo-orange-700 px-4 py-2 rounded-full mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            <span className="font-medium">संपूर्ण होमिओपैथिक उपचार व समुपदेशन</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-homeo-green-800 mb-4">
            Complete Homeopathic Treatment & Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Nandkumar Krishna Gavde provides comprehensive homeopathic treatment for all types of chronic and acute diseases with 25+ years of experience.
          </p>
        </div>

        {/* Main Treatment Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${feature.hoverColor}`}
            >
              <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-playfair text-homeo-green-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Treatments */}
        <div className="bg-gradient-to-r from-homeo-green-50 to-homeo-orange-50 p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-6 text-center">
            विशेष उपचार (Special Treatments)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalTreatments.map((treatment, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <div className="w-3 h-3 bg-homeo-orange-500 rounded-full mr-3"></div>
                <span className="text-homeo-green-700 font-medium">{treatment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor's Note */}
        <div className="bg-gradient-to-r from-homeo-green-600 to-homeo-orange-500 text-white p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl font-bold font-playfair mb-4">
            पेशंटनी तपासणीसाठी येण्यापूर्वी कृपया फोन करून यावे
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Please call before visiting for consultation to ensure proper appointment scheduling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-homeo-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Call: +91-9423-838866
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-homeo-green-700 transition-colors">
              WhatsApp: +91-9423-838866
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;