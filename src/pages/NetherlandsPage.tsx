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

const NetherlandsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in the Netherlands — Innovative, International, Inspiring',
      subtitle:
        'Join top-ranked universities with practical, research-driven learning in a vibrant, English-friendly environment',
      stats: '100% English-Taught Programs | Schengen | High Employability'
    },
    {
      image:
        'https://images.pexels.com/photos/398982/pexels-photo-398982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'World-Class Education with Global Recognition',
      subtitle: 'Project-based learning, strong industry links, and modern campuses',
      stats: 'TU Delft | UvA | Erasmus | Eindhoven'
    },
    {
      image:
        'https://images.pexels.com/photos/302548/pexels-photo-302548.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Live in a Safe, Diverse and Welcoming Society',
      subtitle: 'Excellent quality of life, biking culture, canals, and historic cities',
      stats: 'Work During Study | Post-Study Residence | Startup Culture'
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
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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

      {/* Why Study in the Netherlands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-700 mb-4 relative inline-block">
              Why Study in the Netherlands?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              The Netherlands is a global leader in student-centered, practical education with strong
              industry connections, high English proficiency, and diverse international communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-orange-700 hover:border-orange-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Problem-based, project-driven learning</li>
                <li>Top QS-ranked universities</li>
                <li>Research excellence, modern labs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarships & Affordability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Holland/Orange Tulip scholarships</li>
                <li>Institutional tuition waivers</li>
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
                <li>Strong tech, engineering, logistics</li>
                <li>Internships & company collaborations</li>
                <li>Post-study residence options</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-amber-500 hover:border-amber-400 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality of Life</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Safe, inclusive, English-friendly</li>
                <li>Bike culture, canals, rich heritage</li>
                <li>Excellent transport & services</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4 relative inline-block">
              Top Universities in the Netherlands
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Study at globally respected institutions known for innovation, research excellence,
              and close ties to industry.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* TU Delft */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/302548/pexels-photo-302548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Delft University of Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Engineering Leader
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Delft University of Technology (TU Delft)</h3>
                <p className="text-gray-600 mb-4">Delft</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Top Engineering</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> International Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Robotics</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Aerospace</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Hands-on labs and design projects</li>
                  <li>Strong industry partnerships</li>
                  <li>Cutting-edge research facilities</li>
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

            {/* University of Amsterdam */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Amsterdam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-orange-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Research Excellence
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-orange-800 mb-2">University of Amsterdam (UvA)</h3>
                <p className="text-gray-600 mb-4">Amsterdam</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Top Rankings</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-orange-600" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong research impact and global reputation</li>
                  <li>Interdisciplinary programs</li>
                  <li>Vibrant city campus</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-orange-700 hover:text-orange-800 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Eindhoven University of Technology (TU/e) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/257006/pexels-photo-257006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Eindhoven University of Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Tech & Innovation
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-purple-800 mb-2">Eindhoven University of Technology (TU/e)</h3>
                <p className="text-gray-600 mb-4">Eindhoven</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Engineering Leader</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-purple-600" /> Industry Links</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>High employability in tech companies</li>
                  <li>Strong R&D collaboration</li>
                  <li>Cutting-edge labs and facilities</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-purple-700 hover:text-purple-900 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Costs & Living */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
              Study Costs & Living in the Netherlands
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Budget realistically with typical tuition and monthly living expenses for international students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tuition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tuition (Non‑EU)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Bachelor: €6,000–€12,000/year</li>
                <li>Master: €8,000–€20,000/year</li>
                <li>Varies by university and program</li>
              </ul>
            </motion.div>

            {/* Living */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Living Expenses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>€900–€1,300/month typical</li>
                <li>Higher in Amsterdam & major cities</li>
                <li>Include rent, transport, food, utilities</li>
              </ul>
            </motion.div>

            {/* Food & Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Food & Transport</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Groceries: €200–€300/month</li>
                <li>Public transport or biking discounts</li>
                <li>Student deals widely available</li>
              </ul>
            </motion.div>
          </div>

          {/* Scholarship Banner */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Scholarships & Funding</h3>
                <p className="text-white/90">
                  Holland Scholarship, Orange Tulip Scholarship, and university-specific tuition waivers available for international students.
                </p>
              </div>
              <div className="text-right">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition-colors"
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
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-orange-600" /> Eligibility
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /><span>Strong academics; program-specific requirements</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /><span>English proficiency: IELTS/TOEFL (if applicable)</span></li>
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
                <FileText className="h-6 w-6 text-orange-600" /> Required Documents
              </h3>
              <ol className="space-y-2 list-decimal list-inside text-gray-700">
                <li>Passport, academic certificates & transcripts</li>
                <li>English test score (IELTS/TOEFL) if required</li>
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
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Application Timeline</h4>
                <p className="text-white/90">Plan 6–10 months ahead of intake for best results.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Intakes</h4>
                <p className="text-white/90">Fall (Sept), with limited Spring (Feb) intakes.</p>
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
                  className="bg-white text-orange-700 hover:bg-gray-100 py-3 px-8 rounded-full font-semibold transition-colors"
                >
                  Get Free Guidance
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work & Post-Study */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white relative overflow-hidden">
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
                  className="bg-white text-orange-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
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
              <p className="text-white/90">Residence permit option available to seek jobs after graduation.</p>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
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
              <p className="text-white/90">Strong links to tech, engineering, logistics, and design sectors.</p>
              <Link to="/contact" className="inline-block mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 hover:bg-gray-100 py-2 px-5 rounded-full text-sm font-semibold"
                >
                  Explore Options
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Life in the Netherlands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in the Netherlands
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-orange-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              A vibrant international community, practical learning, and excellent campus facilities make Dutch cities ideal for students.
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
                <li>Student rooms via SSH/DUWO and private market</li>
                <li>Shared flats and campus housing options</li>
                <li>Apply early in Amsterdam, Delft, Eindhoven</li>
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
                <li>Opportunities in tech, logistics, services</li>
                <li>Internships and company collaborations</li>
                <li>University career centers & fairs</li>
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
                <li>OV-chipkaart discounts and bike culture</li>
                <li>Excellent intercity trains and EU travel</li>
                <li>Cost‑effective city travel cards</li>
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
                <li>Basic insurance required (as applicable)</li>
                <li>Safe cities with strong student wellbeing</li>
                <li>University guidance on registration</li>
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
                <li>Affordable chains: Albert Heijn, Jumbo, Lidl</li>
                <li>Plenty of halal/vegetarian options</li>
                <li>Student discounts at many stores</li>
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
                <li>Student unions, clubs, and associations</li>
                <li>Museums, canals, festivals, and sports</li>
                <li>English widely spoken across campuses</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Visago.World for the Netherlands */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for the Netherlands
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mt-8">
              End‑to‑end Dutch admissions, scholarships, residence permits and arrival support.
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
              <ul className="text-orange-100 space-y-1">
                <li>High offer/visa approval rates</li>
                <li>Hundreds of students placed</li>
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
              <ul className="text-orange-100 space-y-1">
                <li>Course shortlisting & applications</li>
                <li>Scholarship and SOP/LoR guidance</li>
                <li>Residence permit file review</li>
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
              <ul className="text-orange-100 space-y-1">
                <li>Fast‑track processing & transparent fees</li>
                <li>Timeline tracking & dedicated counselor</li>
                <li>On‑ground alumni/community links</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Netherlands Application Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Our expert consultants will help you choose the right university, secure scholarships, and guide your visa process end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
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

export default NetherlandsPage;