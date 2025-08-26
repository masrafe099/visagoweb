import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Plane, ArrowRight } from 'lucide-react';

const VisaCategories = () => {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Study Visa',
      description: 'Access world-class education in top universities across Australia, Canada, UK, USA, and Europe',
      features: ['Scholarship guidance', 'University selection', 'IELTS preparation'],
      cta: 'Explore Study Options',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Work Permit Visa',
      description: 'Build your international career with work opportunities in Europe, Australia, and emerging markets',
      features: ['Job placement assistance', 'Resume building', 'Interview preparation'],
      cta: 'Find Work Opportunities',
      color: 'green'
    },
    {
      icon: Plane,
      title: 'Tourist Visa',
      description: 'Experience the world\'s most beautiful destinations with hassle-free visa processing',
      features: ['Multiple entry options', 'Travel insurance', 'Itinerary planning'],
      cta: 'Plan Your Trip',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-purple-50',
      icon: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      border: 'border-purple-200'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Visa Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to study, work, or explore the world, we have the expertise to guide you through every step of the visa process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`${colors.icon} mb-6`}>
                  <Icon className="h-16 w-16" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 ${colors.icon.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${colors.button} text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors`}
                >
                  <span>{category.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;