import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, DollarSign, Clock, FileText, CheckCircle } from 'lucide-react';

const CountryPage = () => {
  const { countryName: rawCountryName } = useParams();
  const countryName = rawCountryName || '';

  // This would typically come from an API or database
  const countryData = {
    name: countryName || 'Country',
    flag: '🇦🇺',
    description: 'Australia offers world-class education opportunities with excellent post-study work options.',
    image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    highlights: [
      'Post-study work visa available',
      'High quality of life',
      'Multicultural society',
      'Strong job market'
    ],
    universities: [
      {
        name: 'University of Melbourne',
        ranking: '#33 Global',
        courses: ['Engineering', 'Business', 'Medicine', 'Arts']
      },
      {
        name: 'Australian National University',
        ranking: '#27 Global',
        courses: ['Computer Science', 'Economics', 'Law', 'Sciences']
      },
      {
        name: 'University of Sydney',
        ranking: '#38 Global',
        courses: ['Architecture', 'Medicine', 'Engineering', 'Business']
      }
    ],
    requirements: [
      'Bachelor\'s degree or equivalent',
      'IELTS 6.5 overall (6.0 in each band)',
      'Financial proof of AUD 21,041 per year',
      'Health insurance (OSHC)',
      'Genuine Temporary Entrant (GTE) statement'
    ],
    costs: {
      tuition: 'AUD 20,000 - 45,000 per year',
      living: 'AUD 18,000 - 25,000 per year',
      accommodation: 'AUD 8,000 - 15,000 per year',
      total: 'AUD 46,000 - 85,000 per year'
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={countryData.image}
            alt={countryData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <span className="text-6xl mr-4">{countryData.flag}</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Study in {countryData.name}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              {countryData.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose {countryData.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countryData.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Universities
            </h2>
            <p className="text-xl text-gray-600">
              World-renowned institutions offering excellent education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countryData.universities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {university.name}
                  </h3>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {university.ranking}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {university.courses.map((course) => (
                      <span
                        key={course}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Entry Requirements
                </h2>
              </div>

              <div className="space-y-4">
                {countryData.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Cost Breakdown
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Tuition Fees</span>
                    <span className="text-gray-900 font-bold">{countryData.costs.tuition}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Living Expenses</span>
                    <span className="text-gray-900 font-bold">{countryData.costs.living}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Accommodation</span>
                    <span className="text-gray-900 font-bold">{countryData.costs.accommodation}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total Estimated Cost</span>
                      <span className="text-lg font-bold text-blue-600">{countryData.costs.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey to {countryData.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert consultants are here to guide you through every step of the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Download Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;