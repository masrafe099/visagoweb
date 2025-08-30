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
  Award,
  CalendarClock
} from 'lucide-react';

const UKPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in the UK — World-Class Education',
      subtitle:
        'Home to Oxford, Cambridge, and 160+ universities with global reputation',
      stats: 'High Visa Success | Graduate Route | 25,000+ Programs'
    },
    {
      image:
        'https://images.pexels.com/photos/34632/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Graduate Route: Stay and Work After Study',
      subtitle:
        '2 years (Bachelor/Master) or 3 years (PhD) post-study work opportunities',
      stats: 'Part-time Work | Internships | Career Support'
    },
    {
      image:
        'https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Diverse, Innovative, and Globally Connected',
      subtitle:
        'Cutting-edge research, multicultural cities, and rich cultural heritage',
      stats: 'Top 10 Globally | QS/Times Rankings'
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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

      {/* Why Study in the UK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
              Why Study in the UK?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              The UK offers centuries of academic excellence, globally recognized degrees, and strong employability outcomes for international students.
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
                <li>Top-ranked universities: Oxford, Cambridge, Imperial</li>
                <li>Innovative teaching and research strength</li>
                <li>Shorter degrees (3-year BSc/BA, 1-year MSc/MA)</li>
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
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Recognition</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Degrees widely respected by employers</li>
                <li>Strong alumni networks worldwide</li>
                <li>Pathways to professional accreditations</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Graduate Route post-study work visa</li>
                <li>Internships & placement years</li>
                <li>Strong industry links across sectors</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Culture & Lifestyle</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Historic cities and vibrant student life</li>
                <li>Multicultural communities</li>
                <li>World-class museums, arts, and travel</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in the UK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in the UK
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Explore globally renowned institutions known for cutting-edge research and exceptional teaching quality.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* University of Oxford */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Oxford"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 5
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">University of Oxford</h3>
                <p className="text-gray-600 mb-4">Oxford</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS/THE Top Tier
                  </span>
                  <span className="flex items-center text-gray-700 text-sm">
                    <Users className="h-4 w-4 mr-1 text-blue-500" /> 10,000+ Int. Students
                  </span>
                  <span className="flex items-center text-gray-700 text-sm">
                    <BookOpen className="h-4 w-4 mr-1 text-green-500" /> 300+ Programs
                  </span>
                  <span className="flex items-center text-gray-700 text-sm">
                    <CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1096
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Law</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Computer Science</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Historic collegiate system</li>
                  <li>Global research impact</li>
                  <li>Strong scholarship opportunities</li>
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

            {/* University of Cambridge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Cambridge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 5
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-800 mb-2">University of Cambridge</h3>
                <p className="text-gray-600 mb-4">Cambridge</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS/THE Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 300+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1209</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Mathematics</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Collegiate teaching model</li>
                  <li>Strong STEM and research outcomes</li>
                  <li>Entrepreneurial ecosystem</li>
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

            {/* Imperial College London */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Imperial College London"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 10
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">Imperial College London</h3>
                <p className="text-gray-600 mb-4">London</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS/THE Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-500" /> STEM Focus</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> Engineering, Computing, Business</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Industry partnerships in London</li>
                  <li>High employability outcomes</li>
                  <li>Cutting-edge labs and facilities</li>
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
            {[{
              name: 'UCL (University College London)',
              city: 'London',
              highlight: 'QS Top 10',
              img: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },{
              name: 'LSE (London School of Economics)',
              city: 'London',
              highlight: 'Social Sciences Leader',
              img: 'https://images.pexels.com/photos/34632/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },{
              name: 'University of Manchester',
              city: 'Manchester',
              highlight: 'Research Powerhouse',
              img: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }].map((u, i) => (
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
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Typical Annual Costs</h2>
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
                    <td className="px-4 py-3">£12,000 – £25,000</td>
                    <td className="px-4 py-3">Varies by program and university</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tuition (Master)</td>
                    <td className="px-4 py-3">£12,000 – £35,000</td>
                    <td className="px-4 py-3">MBA/Medicine are higher</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living (Outside London)</td>
                    <td className="px-4 py-3">£9,000 – £12,000</td>
                    <td className="px-4 py-3">Accommodation, food, utilities</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living (London)</td>
                    <td className="px-4 py-3">£12,000 – £15,000</td>
                    <td className="px-4 py-3">Higher rent and transport</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarship Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Scholarships & Funding</h3>
                <p className="text-white/90">
                  Chevening, Commonwealth, GREAT Scholarships, and university-specific bursaries available for international students.
                </p>
              </div>
              <div className="text-right">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-600 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition-colors"
                  >
                    Check Eligibility
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Entry Requirements</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Academic transcripts (SSC/HSC/Bachelor as applicable)',
                  'English proficiency (IELTS 6.0–7.0 typically)',
                  'Statement of Purpose (SOP) & CV',
                  'Letters of Recommendation (as required)',
                  'Portfolio for design/architecture (if required)',
                  'Financial proof & TB test (as applicable)'
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Application Process</h3>
              </div>
              <ol className="space-y-2 list-decimal list-inside text-gray-700">
                <li>Shortlist programs and universities</li>
                <li>Prepare documents and apply (direct/UCAS)</li>
                <li>Receive offer (conditional/unconditional)</li>
                <li>Pay deposit and confirm CAS</li>
                <li>Apply for UK Student Visa (PBS)</li>
                <li>Book accommodation and travel</li>
              </ol>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
            {[
              { title: 'Counseling', text: 'Choose course & university' },
              { title: 'Apply', text: 'Submit application & docs' },
              { title: 'Offer', text: 'Receive offer & pay deposit' },
              { title: 'Visa', text: 'CAS issued & visa submitted' },
              { title: 'Fly', text: 'Arrive & register at university' }
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow border w-full md:w-auto"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 mx-auto mb-3 flex items-center justify-center">
                  <CalendarClock className="h-6 w-6" />
                </div>
                <div className="font-bold text-gray-900">{s.title}</div>
                <div className="text-sm text-gray-600 mt-1">{s.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work & Post-Study Opportunities */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-7 w-7 text-yellow-300 mr-3" />
                <h3 className="text-xl font-bold">Work During Study</h3>
              </div>
              <ul className="space-y-2 text-blue-50">
                <li>Up to 20 hours/week during term</li>
                <li>Full-time during holidays</li>
                <li>On-campus and off-campus roles</li>
              </ul>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-full font-semibold"
                >
                  Find Roles
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-7 w-7 text-green-300 mr-3" />
                <h3 className="text-xl font-bold">Graduate Route</h3>
              </div>
              <ul className="space-y-2 text-blue-50">
                <li>2 years PSW (Bachelors/Masters)</li>
                <li>3 years PSW (PhD)</li>
                <li>Transition to Skilled Worker possible</li>
              </ul>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-400 text-blue-900 py-2 px-4 rounded-full font-semibold"
                >
                  Discuss Options
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Award className="h-7 w-7 text-pink-300 mr-3" />
                <h3 className="text-xl font-bold">Career Support</h3>
              </div>
              <ul className="space-y-2 text-blue-50">
                <li>Career fairs & employer connections</li>
                <li>CV workshops & interview prep</li>
                <li>Placement year opportunities</li>
              </ul>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-400 text-blue-900 py-2 px-4 rounded-full font-semibold"
                >
                  Start Planning
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Life in the UK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in the UK
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              The UK offers an outstanding student experience with diverse communities, world-class facilities, and extensive career support across cities and campuses.
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
                <li>University halls and private student residences</li>
                <li>Shared apartments for cost savings</li>
                <li>On-campus support for accommodation allocation</li>
              </ul>
            </motion.div>

            {/* Part-Time Work */}
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
                <li>Up to 20 hours/week during term</li>
                <li>Internships and placement years</li>
                <li>Careers services and employer fairs</li>
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
                <li>Student discounts on buses, trains, and tube</li>
                <li>Great connectivity across the UK & Europe</li>
                <li>City travel cards for cost-effective commuting</li>
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
                <li>Access NHS services via IHS (visa) contribution</li>
                <li>Campus safety teams & wellbeing support</li>
                <li>24/7 emergency and helpline availability</li>
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
                <li>Affordable supermarkets & student meal plans</li>
                <li>Wide availability of halal/vegetarian options</li>
                <li>Student discounts on essentials and clothing</li>
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
                <li>Student unions, societies, and clubs</li>
                <li>Museums, theatres, music and sports</li>
                <li>Diverse communities in every major city</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Visago.World for the UK */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for the UK
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mt-8">
              Your trusted partner for UK admissions, scholarships, and visa guidance—end to end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proven Success */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
              className="bg-white/10 rounded-xl p-6 shadow-md border-t-4 border-yellow-400"
            >
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Success</h3>
              <ul className="text-blue-100 space-y-1">
                <li>High visa approval & scholarship success</li>
                <li>Hundreds of students placed</li>
                <li>Strong partner university network</li>
              </ul>
            </motion.div>

            {/* Comprehensive Support */}
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
                <li>Course shortlisting & application help</li>
                <li>Scholarship and SOP/LoR guidance</li>
                <li>Visa file review & pre-departure prep</li>
              </ul>
            </motion.div>

            {/* Unique Advantages */}
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
                <li>Fast-track processing, transparent fees</li>
                <li>Offer & visa timeline tracking</li>
                <li>Dedicated counselor & ongoing support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your UK Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Our expert consultants will guide you through every step of the process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UKPage;