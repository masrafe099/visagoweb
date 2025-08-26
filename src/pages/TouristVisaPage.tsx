import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Camera, MapPin, Users, Heart, Globe, ArrowRight } from 'lucide-react';

const TouristVisaPage = () => {
  const features = [
    {
      icon: Globe,
      title: 'Cultural Exploration',
      description: 'Immerse yourself in diverse cultures and traditions'
    },
    {
      icon: Camera,
      title: 'Adventure Opportunities',
      description: 'Create unforgettable memories and experiences'
    },
    {
      icon: Heart,
      title: 'Personal Enrichment',
      description: 'Broaden your perspective and personal growth'
    },
    {
      icon: Users,
      title: 'Language Immersion',
      description: 'Practice and improve language skills naturally'
    },
    {
      icon: MapPin,
      title: 'Photography & Memories',
      description: 'Capture stunning moments and beautiful landscapes'
    },
    {
      icon: Plane,
      title: 'Global Perspective',
      description: 'Gain a deeper understanding of the world'
    }
  ];

  const destinations = [
    {
      name: 'European Union',
      flag: '🇪🇺',
      highlight: 'Schengen Visa - 27 Countries',
      description: 'Visit 27 countries with a single visa',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Single visa for 27 countries', 'Rich history and culture', 'Excellent transportation']
    },
    {
      name: 'USA',
      flag: '🇺🇸',
      highlight: 'Diverse Attractions',
      description: 'From cities to national parks',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Iconic landmarks', 'Diverse landscapes', 'Entertainment capital']
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      highlight: 'Unique Culture',
      description: 'Traditional meets modern',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Rich traditions', 'Modern technology', 'Delicious cuisine']
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      highlight: 'Natural Wonders',
      description: 'Unique wildlife and landscapes',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Unique wildlife', 'Beautiful beaches', 'Adventure activities']
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      highlight: 'Natural Beauty',
      description: 'Stunning landscapes and friendly people',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Breathtaking nature', 'Friendly locals', 'Outdoor activities']
    },
    {
      name: 'UK',
      flag: '🇬🇧',
      highlight: 'Historical Heritage',
      description: 'Rich history and royal heritage',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Historical sites', 'Royal heritage', 'Cultural diversity']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          >
            <div className="absolute inset-0 bg-purple-900/70"></div>
          </div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Explore the World - Your Adventure Awaits
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-purple-100"
            >
              Hassle-free tourist visa processing for your dream destinations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Travel Internationally?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International travel offers enriching experiences that broaden your horizons and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Tourist Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing destinations around the world with our expert visa assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-2xl">{destination.flag}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <div className="bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {destination.highlight}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {destination.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Plan Trip</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Tourist Visa Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your travel visa needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Visa Processing',
                description: 'Complete visa application processing with expert guidance',
                features: ['Document preparation', 'Application submission', 'Status tracking']
              },
              {
                title: 'Travel Insurance',
                description: 'Comprehensive travel insurance coverage',
                features: ['Medical coverage', 'Trip cancellation', 'Emergency assistance']
              },
              {
                title: 'Itinerary Planning',
                description: 'Customized travel itinerary planning',
                features: ['Destination research', 'Activity recommendations', 'Booking assistance']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you plan your perfect international adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Planning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Get Travel Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TouristVisaPage;