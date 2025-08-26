import React from 'react';
import { motion } from 'framer-motion';
import { Gift, GraduationCap, Briefcase, Clock, ArrowRight } from 'lucide-react';

const SpecialOffers = () => {
  const studyOffers = [
    {
      title: 'China Scholarship Programs',
      description: 'Up to 100% Tuition Coverage + Living Allowance',
      icon: '🇨🇳',
      highlight: 'Limited Time',
      features: ['Full tuition coverage', 'Monthly stipend', 'Accommodation provided']
    },
    {
      title: 'Australia Merit Scholarships',
      description: 'Apply Now for 2024 Intake',
      icon: '🇦🇺',
      highlight: 'Apply Now',
      features: ['Up to $20,000 value', 'Top universities', 'Work while studying']
    },
    {
      title: 'Free IELTS Preparation',
      description: 'Complete course with expert instructors',
      icon: '📚',
      highlight: 'Free Course',
      features: ['Online & offline classes', 'Practice tests', 'Score guarantee']
    }
  ];

  const workOffers = [
    {
      title: 'Slovenia Job Guarantee',
      description: 'Guaranteed job placement or money back',
      icon: '🇸🇮',
      highlight: 'Guarantee',
      features: ['Job guarantee', 'EU work permit', 'Relocation support']
    },
    {
      title: 'EU Blue Card Fast Track',
      description: 'Expedited processing for skilled professionals',
      icon: '🇪🇺',
      highlight: 'Fast Track',
      features: ['Quick processing', '27 EU countries', 'Family inclusion']
    },
    {
      title: 'Free Resume Building',
      description: 'Professional CV optimization service',
      icon: '📄',
      highlight: 'Free Service',
      features: ['ATS optimization', 'Industry specific', 'LinkedIn profile']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Special Offers & Programs
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our exclusive offers and programs designed to make your visa journey more affordable and successful.
          </p>
        </div>

        {/* Study Visa Offers */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Study Visa Highlights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyOffers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{offer.icon}</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {offer.highlight}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {offer.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Visa Offers */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Work Visa Highlights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workOffers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{offer.icon}</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {offer.highlight}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {offer.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">Limited Time Offers!</h3>
          </div>
          <p className="text-lg mb-6">
            These exclusive programs have limited seats. Book your free consultation today to secure your spot.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;