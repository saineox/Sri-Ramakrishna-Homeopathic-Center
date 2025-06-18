import React, { useState } from 'react';
import { TrendingDown, Apple, Activity, Calculator, CheckCircle, ArrowRight, Target, Clock, Users, Award } from 'lucide-react';

const DiabetesSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('beginner');

  const plans = {
    beginner: {
      title: "Beginner (0-3 months)",
      diet: ["Whole grains (brown rice, quinoa)", "Leafy greens & vegetables", "Lean proteins", "Herbal teas"],
      exercise: ["15-min morning walks", "Basic yoga poses", "Breathing exercises", "Light stretching"],
      homeopathy: ["Syzygium jambolanum", "Gymnema sylvestre", "Abroma augusta", "Cephalandra indica"]
    },
    intermediate: {
      title: "Intermediate (3-6 months)",
      diet: ["Complex carbs timing", "Portion control", "Anti-inflammatory foods", "Probiotic foods"],
      exercise: ["30-min cardio", "Strength training", "Advanced yoga", "Meditation"],
      homeopathy: ["Arsenicum album", "Lycopodium", "Natrum sulph", "Phosphoric acid"]
    },
    advanced: {
      title: "Advanced (6+ months)",
      diet: ["Intermittent fasting", "Ayurvedic meal timing", "Seasonal eating", "Detox protocols"],
      exercise: ["HIIT workouts", "Marathon training", "Advanced asanas", "Pranayama mastery"],
      homeopathy: ["Constitutional remedies", "Miasmatic treatment", "Organ support", "Maintenance doses"]
    }
  };

  return (
    <section id="diabetes" className="py-20 bg-gradient-to-br from-homeo-cream-100 to-homeo-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 mr-2" />
            <span className="font-medium">Diabetes Reversal Program</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-homeo-green-800 mb-4">
            Your Complete Diabetes Reversal Pathway
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientifically-proven 3D approach (Diet-Discipline-Dhara) has helped thousands of Indians reverse diabetes naturally.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-homeo-green-700 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-homeo-green-700 mb-2">6-12</div>
            <div className="text-gray-600">Months Average</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-homeo-green-700 mb-2">15,000+</div>
            <div className="text-gray-600">Lives Transformed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-homeo-green-700 mb-2">85%</div>
            <div className="text-gray-600">Insulin Reduction</div>
          </div>
        </div>

        {/* 3D Approach */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Diet */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Apple className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              Diet (आहार)
            </h3>
            <p className="text-gray-600 mb-6">
              Indian cuisine-focused meal plans with traditional foods that naturally regulate blood sugar levels.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Bajra, jowar, and quinoa rotis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Karela, methi, and bitter gourd preparations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Turmeric, cinnamon, and fenugreek integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ayurvedic meal timing and combinations</span>
              </li>
            </ul>
          </div>

          {/* Discipline */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              Discipline (अनुशासन)
            </h3>
            <p className="text-gray-600 mb-6">
              Structured exercise routines combining yoga, pranayama, and modern fitness for optimal results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Surya Namaskara sequences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Kapalbhati and Anulom Vilom</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Walking meditation practices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Strength training for insulin sensitivity</span>
              </li>
            </ul>
          </div>

          {/* Dhara */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-homeo-green-800 mb-4">
              Dhara (धारा)
            </h3>
            <p className="text-gray-600 mb-6">
              Natural flow of homeopathic remedies tailored to your unique constitution and diabetes pattern.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Constitutional remedy selection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Organ-specific support medicines</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Miasmatic treatment approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Gradual insulin reduction protocol</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Diabetes Reversal Timeline */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold font-playfair text-homeo-green-800 mb-8 text-center">
            Your Personalized Reversal Timeline
          </h3>
          
          {/* Plan Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(plans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPlan === key
                    ? 'bg-homeo-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>

          {/* Selected Plan Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-homeo-green-700 flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Diet Plan
              </h4>
              <ul className="space-y-2">
                {plans[selectedPlan as keyof typeof plans].diet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-homeo-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-homeo-green-700 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Exercise Routine
              </h4>
              <ul className="space-y-2">
                {plans[selectedPlan as keyof typeof plans].exercise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-homeo-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-homeo-green-700 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Homeopathy
              </h4>
              <ul className="space-y-2">
                {plans[selectedPlan as keyof typeof plans].homeopathy.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-homeo-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Insulin Reduction Calculator */}
        <div className="bg-gradient-to-r from-homeo-orange-500 to-homeo-green-600 text-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold font-playfair mb-4">
            Insulin Reduction Calculator
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Calculate your potential insulin reduction journey with our personalized assessment tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-homeo-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Calculate My Reduction
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-homeo-green-700 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiabetesSection;