import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Wallet, Home, Utensils, Bus, ShieldCheck, FileText, CheckCircle, Award, CalendarClock, Heart } from 'lucide-react';

const AustraliaPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in Australia — World-Class Degrees & Lifestyle',
      subtitle: 'Top-ranked universities, work rights during study, and generous post-study pathways',
      stats: 'High Visa Success | 1,000+ Programs | Safe & Multicultural',
    },
    {
      image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Work While You Study',
      subtitle: 'Up to 48 hours per fortnight during study and full-time during breaks',
      stats: 'Internships | Industry Links | Career Support',
    },
    {
      image: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Live in Vibrant, Safe Cities',
      subtitle: 'Enjoy world-leading quality of life and student support',
      stats: 'Sydney | Melbourne | Brisbane | Perth | Adelaide',
    },
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
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-gray-400 opacity-60'}`}
            />
          ))}
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
              Why Study in Australia?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Australia combines globally ranked universities, flexible work rights, and an exceptional quality of life—making it one of the most popular destinations for international students.
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
                <li>Universities in global top 50</li>
                <li>Industry-aligned curriculum</li>
                <li>Research-led teaching</li>
                <li>Supportive international student services</li>
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
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Work & Career</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Work up to 48 hours/fortnight during study</li>
                <li>Full-time during semester breaks</li>
                <li>Post-Study Work Visa (subclass 485)</li>
                <li>Strong graduate employment outcomes</li>
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
                <ShieldCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe & Multicultural</h3>
              <ul className="space-y-2 text-gray-700">
                <li>World-leading student safety standards</li>
                <li>Diverse and welcoming communities</li>
                <li>Global alumni networks</li>
                <li>Beautiful campuses and cities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-orange-500 hover:border-orange-400 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarships & Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Destination Australia & University scholarships</li>
                <li>Merit and need-based funding</li>
                <li>Dedicated international support services</li>
                <li>IELTS/PTE preparation guidance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in Australia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in Australia
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Choose from globally renowned institutions with outstanding teaching, research, and employability outcomes.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* ANU */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Australian National University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 50
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Australian National University (ANU)</h3>
                <p className="text-gray-600 mb-4">Canberra</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> 7,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 200+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1946</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Public Policy</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Computer Science</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong research intensity</li>
                  <li>Policy and government connections</li>
                  <li>International exchange opportunities</li>
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

            {/* University of Melbourne */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Melbourne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 20
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-800 mb-2">University of Melbourne</h3>
                <p className="text-gray-600 mb-4">Melbourne</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 300+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1853</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Law</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Top employability outcomes</li>
                  <li>Vibrant city lifestyle</li>
                  <li>Industry-linked learning</li>
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
                  <Link to="/contact" className="flex items-center text-red-600 hover:text-red-800 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* University of Sydney */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Sydney"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 20
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">University of Sydney</h3>
                <p className="text-gray-600 mb-4">Sydney</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-500" /> STEM & Health</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 300+ Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Beautiful sandstone campus</li>
                  <li>Top-ranked in medicine and engineering</li>
                  <li>Strong industry partnerships</li>
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
                  <Link to="/contact" className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other Highly Ranked */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Other Highly Ranked Universities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'UNSW Sydney', city: 'Sydney', highlight: 'Engineering & Business', img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Monash University', city: 'Melbourne', highlight: 'Medicine & Pharmacy', img: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'University of Queensland (UQ)', city: 'Brisbane', highlight: 'Life Sciences', img: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            ].map((u, i) => (
              <motion.div
                key={u.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                whileHover={{ y: -6, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <img src={u.img} alt={u.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{u.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{u.city}</p>
                  <div className="flex items-center text-gray-700 text-sm mb-4">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> {u.highlight}
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-semibold transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Overview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Typical Annual Costs (AUD)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  <tr className="bg-blue-50/60 font-semibold text-blue-800">
                    <td className="px-4 py-3">Tuition (Bachelor)</td>
                    <td className="px-4 py-3">A$20,000 – A$45,000</td>
                    <td className="px-4 py-3">Varies by program and university</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tuition (Master)</td>
                    <td className="px-4 py-3">A$22,000 – A$50,000</td>
                    <td className="px-4 py-3">MBA/Medicine are higher</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living (Accommodation, food, transport)</td>
                    <td className="px-4 py-3">A$21,000 – A$27,000</td>
                    <td className="px-4 py-3">City dependent (Sydney/Melbourne higher)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">OSHC (Health Insurance)</td>
                    <td className="px-4 py-3">A$600 – A$900</td>
                    <td className="px-4 py-3">Required for students</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Visa Application Fee</td>
                    <td className="px-4 py-3">~A$700</td>
                    <td className="px-4 py-3">Subject to change by DHA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-right">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-full font-semibold"
                >
                  Get Personalized Budget Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa & Work Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Visa Essentials</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><FileText className="h-5 w-5 text-blue-600 mr-2 mt-1" /> Confirmation of Enrollment (CoE) from an Australian institution</li>
                <li className="flex items-start"><ShieldCheck className="h-5 w-5 text-green-600 mr-2 mt-1" /> Genuine Student requirement and financial capacity</li>
                <li className="flex items-start"><Heart className="h-5 w-5 text-red-500 mr-2 mt-1" /> Overseas Student Health Cover (OSHC)</li>
                <li className="flex items-start"><CalendarClock className="h-5 w-5 text-purple-600 mr-2 mt-1" /> Processing typically 4–8 weeks</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Rights & After Graduation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Briefcase className="h-5 w-5 text-purple-600 mr-2 mt-1" /> Work up to 48 hours per fortnight during study, full-time in breaks</li>
                <li className="flex items-start"><CalendarDays className="h-5 w-5 text-blue-600 mr-2 mt-1" /> Temporary Graduate (subclass 485): 2–4 years post-study work</li>
                <li className="flex items-start"><Users className="h-5 w-5 text-indigo-600 mr-2 mt-1" /> Dependents may have work rights (varies by program)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" /> Pathways towards skilled migration in select fields</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Talk to an Australia Expert
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Study in Australia?</h2>
            <p className="text-xl text-blue-100 mb-8">Get personalized university shortlists, scholarship options, and visa guidance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
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

export default AustraliaPage;