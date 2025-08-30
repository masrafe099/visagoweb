import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  DollarSign,
  Briefcase,
  Landmark,
  Trophy,
  Users,
  BookOpen,
  CalendarDays,
  ArrowRight,
  Wallet,
  Home,
  Utensils,
  Bus,
  ShieldCheck,
  FileText,
  CheckCircle,
  Award
} from 'lucide-react';

const FrancePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in France — Excellence, Culture, Global Opportunity',
      subtitle:
        'Join world-class universities with strong research, innovation and arts traditions in a vibrant, international setting',
      stats: 'Top QS Rankings | Schengen | English & French Programs'
    },
    {
      image:
        'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Research-Driven Learning with Industry Links',
      subtitle: 'Strong STEM, business, arts and humanities with global recognition',
      stats: 'Sorbonne | PSL | École Polytechnique | Paris-Saclay'
    },
    {
      image:
        'https://images.pexels.com/photos/161901/paris-france-eiffel-tower-tower-161901.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Live in a Safe, Diverse and Culturally Rich Society',
      subtitle: 'Historic cities, modern lifestyle, and excellent transport',
      stats: 'Work During Study | Post-Study Residence | Scholarships'
    }
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 10, stiffness: 100 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {slides[currentSlide].headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 via-white to-red-600 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold bg-transparent transition-all duration-300"
                >
                  Free Consultation
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block text-sm font-medium text-white"
            >
              {slides[currentSlide].stats}
            </motion.div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-gray-400 opacity-60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Study in France */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 relative inline-block">
              Why Study in France?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              France offers globally recognized education, cutting-edge research, diverse programs in English and French, and an unmatched cultural experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-800 hover:border-blue-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Top-ranked universities and Grandes Écoles</li>
                <li>Strong STEM, business, arts & humanities</li>
                <li>Modern research labs and innovation hubs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-green-600 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarships & Affordability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Eiffel Excellence Scholarship & Campus France</li>
                <li>University tuition waivers and grants</li>
                <li>Part-time work opportunities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-600 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career & Industry</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Strong aerospace, AI, luxury, energy sectors</li>
                <li>Internships and company collaborations</li>
                <li>Post-study job-seeking residence options</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-600 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality of Life</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Safe, inclusive, international environment</li>
                <li>Rich culture, cuisine, and arts</li>
                <li>Excellent public transport</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in France */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in France
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Choose from globally recognized institutions celebrated for research excellence and innovation.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* Sorbonne University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/161901/paris-france-eiffel-tower-tower-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sorbonne University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS Top Rankings
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Sorbonne University</h3>
                <p className="text-gray-600 mb-4">Paris</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Research Excellence</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> International Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Historic Roots</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Sciences</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Humanities</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong interdisciplinary research</li>
                  <li>Central Paris campus location</li>
                  <li>Diverse international student body</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* École Polytechnique */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="École Polytechnique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Engineering Leader
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-800 mb-2">École Polytechnique</h3>
                <p className="text-gray-600 mb-4">Palaiseau (Paris region)</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Top Engineering</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-600" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Cutting-edge research and labs</li>
                  <li>Industry partnerships and internships</li>
                  <li>Entrepreneurship and innovation focus</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-red-700 hover:text-red-900 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Université Paris-Saclay */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Université Paris-Saclay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Research Powerhouse
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">Université Paris-Saclay</h3>
                <p className="text-gray-600 mb-4">Paris Region</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Top QS Rankings</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-600" /> International Network</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong STEM and interdisciplinary programs</li>
                  <li>High-impact research outputs</li>
                  <li>Modern campus and facilities</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-indigo-700 hover:text-indigo-900 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Costs & Living */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Typical Annual Costs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Range (EUR)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  <tr className="bg-blue-50/60 font-semibold text-blue-800">
                    <td className="px-4 py-3">Tuition (Bachelor)</td>
                    <td className="px-4 py-3">€2,800 – €10,000 / year</td>
                    <td className="px-4 py-3">Higher at Grandes Écoles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tuition (Master)</td>
                    <td className="px-4 py-3">€3,000 – €15,000 / year</td>
                    <td className="px-4 py-3">Varies by program & university</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living (Monthly)</td>
                    <td className="px-4 py-3">€900 – €1,300</td>
                    <td className="px-4 py-3">Accommodation, food, transport</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarship Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Scholarships & Funding</h3>
                <p className="text-white/90">
                  Eiffel Excellence Scholarship, Campus France programs, and university tuition waivers are available for international students.
                </p>
              </div>
              <div className="text-right">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition-colors"
                  >
                    Explore Scholarships <Award className="h-5 w-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application & Requirements */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-blue-600" /> Eligibility
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /><span>Strong academics; program-specific requirements</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /><span>English or French proficiency per program (IELTS/TOEFL/DELF etc.)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /><span>Proof of funds and valid passport</span></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" /> Required Documents
              </h3>
              <ol className="space-y-2 list-decimal list-inside text-gray-700">
                <li>Passport, academic certificates & transcripts</li>
                <li>Language test score as applicable</li>
                <li>SOP/Motivation letter and CV/Resume</li>
                <li>Recommendation letters</li>
                <li>Proof of funds and medical insurance</li>
              </ol>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Application Timeline</h4>
                <p className="text-white/90">Plan 6–10 months ahead of intake for best results.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Intakes</h4>
                <p className="text-white/90">Fall (Sept/Oct), with some Spring (Jan/Feb) intakes.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Processing & Visa</h4>
                <p className="text-white/90">Offer + residence permit processing typically in 1–3 months.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-full font-semibold transition-colors"
                >
                  Get Free Guidance
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work & Post-Study */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-red-700 text-white relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Work During Study</h4>
              <p className="text-white/90">Students can work part-time during studies as per visa rules.</p>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Post-Study Residence</h4>
              <p className="text-white/90">Job-seeking residence options are available for graduates.</p>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
                >
                  Check Eligibility
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Industry & Internship</h4>
              <p className="text-white/90">Strong links to aerospace, AI, luxury, energy and research sectors.</p>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
                >
                  Explore Options
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Life in France */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in France
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-red-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              France offers a world-class student lifestyle with historic cities, modern campuses, excellent public transport, and diverse international communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation & Housing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accommodation & Housing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>CROUS residences and private student homes</li>
                <li>Shared apartments to lower costs</li>
                <li>Apply early in Paris, Lyon, and Toulouse</li>
              </ul>
            </motion.div>

            {/* Part‑Time Work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Part‑Time Work</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Authorized hours during term; more in vacations</li>
                <li>Internships and company collaborations</li>
                <li>Strong university career services</li>
              </ul>
            </motion.div>

            {/* Transport & Travel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Bus className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport & Travel</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Student discounts on metro, tram, and TGV</li>
                <li>Excellent intercity connectivity</li>
                <li>Easy Schengen travel across Europe</li>
              </ul>
            </motion.div>

            {/* Healthcare & Safety */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare & Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Student social security and insurance options</li>
                <li>Campus wellbeing & counselling support</li>
                <li>Safe cities with active student services</li>
              </ul>
            </motion.div>

            {/* Food & Essentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Food & Essentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>University restaurants (Resto U) with low-cost meals</li>
                <li>Halal/vegetarian options widely available</li>
                <li>Student discounts across major chains</li>
              </ul>
            </motion.div>

            {/* Culture & Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Culture & Community</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Student unions, clubs, and cultural societies</li>
                <li>Museums, arts, music, and sports</li>
                <li>Diverse international communities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Visago.World for France */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-red-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for France
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mt-8">
              Complete support from course selection and scholarships to visa guidance and arrival assistance in France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
              className="bg-white/10 rounded-xl p-6 shadow-md border-t-4 border-yellow-400"
            >
              <Trophy className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Success</h3>
              <ul className="text-blue-100 space-y-1">
                <li>High offer & visa approval rates</li>
                <li>Scholarship guidance expertise</li>
                <li>Strong partner university network</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
              className="bg-white/10 rounded-xl p-6 shadow-md border-t-4 border-green-400"
            >
              <ShieldCheck className="h-12 w-12 text-green-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Comprehensive Support</h3>
              <ul className="text-blue-100 space-y-1">
                <li>Applications, SOP/LoR, and scholarships</li>
                <li>Visa file review and interview prep</li>
                <li>Pre‑departure & arrival assistance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
              className="bg-white/10 rounded-xl p-6 shadow-md border-t-4 border-pink-400"
            >
              <Award className="h-12 w-12 text-pink-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Unique Advantages</h3>
              <ul className="text-blue-100 space-y-1">
                <li>Fast‑track processing & transparent fees</li>
                <li>Timeline tracking & dedicated counselor</li>
                <li>Alumni & on‑ground community links</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your France Application Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Our expert consultants will help you choose the right university, secure scholarships, and guide your visa process end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Check Eligibility
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FrancePage;