import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Globe, Users, Award, Building, ArrowRight } from 'lucide-react';

const WorkVisaPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Higher Salary Potential',
      description: 'Access to higher-paying international job markets'
    },
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Gain valuable global work experience and skills'
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Learn new technologies and methodologies'
    },
    {
      icon: Building,
      title: 'Permanent Residency',
      description: 'Clear pathways to permanent residency and citizenship'
    },
    {
      icon: Users,
      title: 'Cultural Exposure',
      description: 'Work in diverse, multicultural environments'
    },
    {
      icon: Briefcase,
      title: 'Career Advancement',
      description: 'Accelerate your career with international opportunities'
    }
  ];

  const countries = [
    {
      name: 'Germany',
      flag: '🇩🇪',
      highlight: 'EU Blue Card opportunities',
      description: 'Strong economy with excellent work opportunities',
      image: 'https://images.pexels.com/photos/161901/berlin-brandenburg-gate-landmark-symbol-161901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['No language requirement for many jobs', 'Strong social benefits', 'Path to EU citizenship']
    },
    {
      name: 'Slovenia',
      flag: '🇸🇮',
      highlight: 'Best job opportunities highlighted',
      description: 'Growing economy with excellent work-life balance',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['EU membership benefits', 'Beautiful landscapes', 'Growing tech sector']
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      highlight: 'Technical skills in demand',
      description: 'Innovation and technology excellence',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Advanced technology sector', 'High safety standards', 'Unique work culture']
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      highlight: 'Growing economy opportunities',
      description: 'Emerging market with diverse opportunities',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Lower cost of living', 'English-speaking environment', 'Strategic location']
    },
    {
      name: 'Netherlands',
      flag: '🇳🇱',
      highlight: 'Tech hub of Europe',
      description: 'Leading technology and innovation center',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['High English proficiency', 'Excellent work-life balance', 'Innovation ecosystem']
    },
    {
      name: 'France',
      flag: '🇫🇷',
      highlight: 'Cultural and business hub',
      description: 'Rich culture with strong business opportunities',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Rich cultural heritage', 'Strong economy', 'Central European location']
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
              backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          >
            <div className="absolute inset-0 bg-green-900/70"></div>
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
              Work Abroad - Build Your Global Career
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100"
            >
              Unlock international job opportunities with our visa expertise
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of Working Abroad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working internationally opens doors to countless opportunities for personal and professional growth.
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-green-600" />
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

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Work Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover countries with the best work opportunities and career growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Hot
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {country.highlight}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {country.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {country.features.map((feature, idx) => (
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
                    <span>Explore Jobs</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Visa Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make the work visa process simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Skills Assessment',
                description: 'Evaluate your qualifications and match with job opportunities'
              },
              {
                step: '02',
                title: 'Job Matching',
                description: 'Connect with employers looking for your specific skills'
              },
              {
                step: '03',
                title: 'Visa Application',
                description: 'Complete visa application with expert guidance'
              },
              {
                step: '04',
                title: 'Relocation Support',
                description: 'Assistance with relocation and settling in your new country'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Advance Your Career Internationally?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let our experts help you find the perfect work opportunity abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Job Opportunities
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkVisaPage;