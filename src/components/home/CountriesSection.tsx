import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Briefcase, GraduationCap } from 'lucide-react';

const CountriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const countries = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      category: 'study',
      highlight: 'Scholarships Available',
      description: 'World-class education with work opportunities',
      features: ['Post-study work visa', 'High quality of life', 'Multicultural society'],
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      category: 'both',
      highlight: 'Study & Work',
      description: 'Excellent education and immigration pathways',
      features: ['Express Entry system', 'Free healthcare', 'Bilingual advantage'],
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      category: 'work',
      highlight: 'EU Blue Card',
      description: 'Strong economy with excellent work opportunities',
      features: ['No tuition fees', 'Strong economy', 'Central location in Europe'],
      image: 'https://images.pexels.com/photos/161901/berlin-brandenburg-gate-landmark-symbol-161901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Slovenia',
      flag: '🇸🇮',
      category: 'work',
      highlight: 'Best Job Opportunities',
      description: 'Growing economy with excellent work-life balance',
      features: ['EU membership', 'Beautiful landscapes', 'Growing tech sector'],
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'China',
      flag: '🇨🇳',
      category: 'study',
      highlight: '100% Scholarships',
      description: 'Full scholarships with living allowances available',
      features: ['Full scholarships', 'Rich culture', 'Growing economy'],
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      category: 'both',
      highlight: 'Technology Hub',
      description: 'Innovation and technology excellence',
      features: ['Advanced technology', 'Rich culture', 'High safety standards'],
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Countries', icon: MapPin },
    { id: 'study', label: 'Study Destinations', icon: GraduationCap },
    { id: 'work', label: 'Work Opportunities', icon: Briefcase },
    { id: 'both', label: 'Study & Work', icon: Star }
  ];

  const filteredCountries = selectedCategory === 'all' 
    ? countries 
    : countries.filter(country => country.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Countries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore opportunities across 50+ countries worldwide. From study destinations to work opportunities, we help you find the perfect match.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Countries grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCountries.map((country, index) => (
            <motion.div
              key={country.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Country image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-2xl">{country.flag}</span>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {country.highlight}
                </div>
              </div>

              {/* Country info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {country.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all countries CTA */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            View All 50+ Countries
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;