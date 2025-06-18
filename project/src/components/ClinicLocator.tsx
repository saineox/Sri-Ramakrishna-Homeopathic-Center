import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Search, Filter } from 'lucide-react';

const ClinicLocator: React.FC = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const states = [
    { key: 'all', name: 'All Locations', count: 1 },
    { key: 'maharashtra', name: 'Maharashtra', count: 1 }
  ];

  const clinics = [
    {
      id: 1,
      name: "श्रीरामकृष्ण होमिओपैथिक सेंटर",
      address: "ओम गणेशा सकुल, बॅंक ऑफ बडोदा जवळ, टिळक पथ, गडहिंगलज, जि. कोल्हापूर पिन-416502",
      phone: "+91-9423-838866",
      alternatePhone: "+91-7720-838866",
      rating: 4.9,
      reviews: 150,
      hours: "By Appointment Only",
      specialties: ["मधुमेह", "त्वचा रोग", "पोटाचे विकार", "स्त्रियांचे आजार", "मानसिक विकार"],
      state: "maharashtra",
      featured: true,
      doctor: "Dr. Nandkumar Krishna Gavde",
      qualification: "M.D. (Hom)"
    }
  ];

  const filteredClinics = clinics.filter(clinic => {
    const matchesState = selectedState === 'all' || clinic.state === selectedState;
    const matchesSearch = searchTerm === '' || 
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesState && matchesSearch;
  });

  return (
    <section id="clinics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-homeo-green-800 mb-4">
            Find Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit Dr. Nandkumar Krishna Gavde's homeopathic clinic for comprehensive natural treatment and consultation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by clinic name, location, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent"
              />
            </div>

            {/* State Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeo-green-500 focus:border-transparent bg-white"
              >
                {states.map(state => (
                  <option key={state.key} value={state.key}>
                    {state.name} ({state.count})
                  </option>
                ))}
              </select>
            </div>

            <button className="bg-homeo-green-600 text-white px-8 py-3 rounded-lg hover:bg-homeo-green-700 transition-colors flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </button>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-medium">
                <strong>महत्वपूर्ण सूचना:</strong> पेशंटनी तपासणीसाठी येण्यापूर्वी कृपया फोन करून यावे
              </p>
              <p className="text-sm text-yellow-600 mt-1">
                Important Notice: Please call before visiting for consultation
              </p>
            </div>
          </div>
        </div>

        {/* Clinics List */}
        <div className="grid lg:grid-cols-1 gap-8">
          {filteredClinics.map(clinic => (
            <div
              key={clinic.id}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                clinic.featured ? 'ring-2 ring-homeo-orange-500' : ''
              }`}
            >
              {clinic.featured && (
                <div className="inline-flex items-center bg-homeo-orange-100 text-homeo-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Main Clinic
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-2">
                    {clinic.name}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-homeo-green-600">{clinic.doctor}</p>
                    <p className="text-gray-600">{clinic.qualification}</p>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{clinic.address}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-gray-400 mr-2" />
                    <div>
                      <span className="text-gray-600">{clinic.phone}</span>
                      <br />
                      <span className="text-gray-600">{clinic.alternatePhone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{clinic.hours}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{clinic.rating}</span>
                      <span className="ml-2 text-gray-500">({clinic.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-700 mb-3">Treatment Specialties:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {clinic.specialties.map((specialty, index) => (
                        <div
                          key={index}
                          className="flex items-center px-3 py-2 bg-homeo-green-100 text-homeo-green-700 text-sm rounded-lg"
                        >
                          <div className="w-2 h-2 bg-homeo-green-500 rounded-full mr-2"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button className="bg-homeo-green-600 text-white px-6 py-3 rounded-lg hover:bg-homeo-green-700 transition-colors text-center font-semibold">
                      Call: +91-9423-838866
                    </button>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-center font-semibold">
                      WhatsApp: +91-9423-838866
                    </button>
                    <button className="border-2 border-homeo-green-600 text-homeo-green-600 px-6 py-3 rounded-lg hover:bg-homeo-green-600 hover:text-white transition-colors text-center font-semibold">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredClinics.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No clinics found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or location filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-homeo-green-600 to-homeo-orange-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold font-playfair mb-4">
              Ready for Natural Healing?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Contact Dr. Nandkumar Krishna Gavde for comprehensive homeopathic treatment and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-homeo-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Call Now: +91-9423-838866
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-homeo-green-700 transition-colors">
                WhatsApp Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocator;