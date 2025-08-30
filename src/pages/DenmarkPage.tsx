import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, DollarSign, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Wallet, Utensils, Bus, Wifi, Home, FlaskConical, HeartPulse, BriefcaseBusiness, Lightbulb, CalendarCheck, CalendarClock, Award, ShieldCheck, FileText } from 'lucide-react';

const DenmarkPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in Denmark - Innovation, Sustainability, Quality Education',
      subtitle: 'Join a thriving, student-friendly society known for design, green tech, and happiness',
      stats: 'High Visa Success | 15+ Years Experience | EU Schengen Advantage',
    },
    {
      image: 'https://images.pexels.com/photos/1796726/pexels-photo-1796726.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'World-Class Universities & Research Culture',
      subtitle: 'Experience project-based learning and cutting-edge research with industry links',
      stats: 'Top QS Ranked Universities | English-taught Programs',
    },
    {
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Safe, Sustainable, and Student-Centric',
      subtitle: 'Live in one of the safest and happiest countries with excellent work rights',
      stats: 'Part-time Work | Post-study Opportunities | High Quality of Life',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
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
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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

      {/* Why Study in Denmark Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4 relative inline-block">
              Why Study in Denmark?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Denmark blends world-class education, innovative teaching, and a safe, sustainable society—perfect for international students seeking career-readiness and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Academic Excellence & PBL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence & PBL</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Top-ranked</span> UCPH, DTU, Aarhus</li>
                <li>Problem-based learning (PBL) & group projects</li>
                <li>Strong research and innovation culture</li>
                <li>Industry-linked curricula</li>
              </ul>
            </motion.div>

            {/* Card 2: Affordability & Support */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordability & Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Tuition: €6k–€16k/year (non‑EU; varies)</li>
                <li>Living costs: €900–€1,200/month</li>
                <li>Scholarships: Govt., Erasmus+, university</li>
                <li>Part-time work: up to 20 hours/week</li>
              </ul>
            </motion.div>

            {/* Card 3: Career & Work Opportunities */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career & Work Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>IT, green tech, pharma, shipping, design</li>
                <li>Post-study job-seeking period available</li>
                <li>High demand for STEM & life sciences</li>
                <li>Nordic work culture experience</li>
              </ul>
            </motion.div>

            {/* Card 4: Quality of Life & Safety */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-pink-600 hover:border-pink-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality of Life & Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Among the world’s happiest and safest</li>
                <li>Bike-friendly, sustainable cities</li>
                <li>90%+ English proficiency</li>
                <li>Public healthcare access with CPR</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in Denmark Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4 relative inline-block">
              Top Universities in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Study at leading Danish institutions known for innovation, research excellence, and close ties to industry.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* University of Copenhagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/213615/pexels-photo-213615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Copenhagen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS Top 100
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-900 mb-2">University of Copenhagen (UCPH)</h3>
                <p className="text-gray-600 mb-4">Copenhagen</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Research Excellence</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> 5,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1479</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Life Sciences</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Humanities</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong global research impact</li>
                  <li>Interdisciplinary learning environment</li>
                  <li>Vibrant city campus</li>
                  <li>Close industry and hospital ties</li>
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

            {/* Technical University of Denmark (DTU) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Technical University of Denmark"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS Top 150
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-800 mb-2">Technical University of Denmark (DTU)</h3>
                <p className="text-gray-600 mb-4">Lyngby (Copenhagen region)</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Engineering Leader</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> Int. & Industry Links</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> Project-Based Learning</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1829</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Green Tech</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Robotics</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong R&D and innovation ecosystem</li>
                  <li>Industry collaborations and internships</li>
                  <li>Entrepreneurial and startup culture</li>
                  <li>State-of-the-art labs and facilities</li>
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

            {/* Aarhus University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Aarhus University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS Top 150
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-purple-800 mb-2">Aarhus University</h3>
                <p className="text-gray-600 mb-4">Aarhus</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Research Impact</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-purple-500" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1928</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Social Sciences</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Arts</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Collaborative learning environment</li>
                  <li>Strong industry partnerships</li>
                  <li>Modern campus and facilities</li>
                  <li>High student satisfaction</li>
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
                  <Link to="/contact" className="flex items-center text-purple-600 hover:text-purple-800 font-semibold">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-semibold transition-colors"
              >
                Start Application
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Study Costs & Living in Denmark Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Study Costs & Living in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Budget realistically with typical tuition and monthly living expenses for international students in Denmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tuition Fees */}
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
                <li>Bachelor: DKK 45k–120k/year</li>
                <li>Master: DKK 60k–160k/year</li>
                <li>EU/EEA: many programs are tuition-free</li>
              </ul>
            </motion.div>

            {/* Living Expenses */}
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
                <li>DKK 7,000–10,500/month typical</li>
                <li>Copenhagen is on the higher end</li>
                <li>Include rent, transport, food, utilities</li>
              </ul>
            </motion.div>

            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accommodation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Student housing: DKK 3,500–6,000/month</li>
                <li>Shared apartments save costs</li>
                <li>Apply early for dorms in big cities</li>
              </ul>
            </motion.div>

            {/* Food */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Food</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Groceries: DKK 1,800–2,500/month</li>
                <li>Cooking at home keeps budget low</li>
                <li>Student canteens offer discounts</li>
              </ul>
            </motion.div>

            {/* Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Bus className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Monthly pass: DKK 300–500 (student)</li>
                <li>Bike-friendly cities reduce costs</li>
                <li>Regional discounts available</li>
              </ul>
            </motion.div>

            {/* Internet & Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Wifi className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Internet & Mobile</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Internet: DKK 200–300/month</li>
                <li>Mobile: DKK 100–200/month (SIM)</li>
                <li>Many student bundle deals</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-semibold transition-colors"
              >
                Get Budget Guidance
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs & Intakes in Denmark */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Programs & Intakes in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Choose from career-focused, English-taught programs. Main intakes are September and February.
            </p>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* STEM & Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FlaskConical className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">STEM & Engineering</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Mechanical, Electrical, Robotics</li>
                <li>Renewable Energy & Green Tech</li>
                <li>Computer Science & Data</li>
              </ul>
            </motion.div>

            {/* Business & Economics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-600 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <BriefcaseBusiness className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business & Economics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>International Business & Finance</li>
                <li>Supply Chain & Maritime</li>
                <li>Entrepreneurship & Innovation</li>
              </ul>
            </motion.div>

            {/* Design & IT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-600 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design & IT</h3>
              <ul className="space-y-2 text-gray-700">
                <li>UX/UI & Product Design</li>
                <li>Digital Media & Animation</li>
                <li>Software Development</li>
              </ul>
            </motion.div>

            {/* Health & Life Sciences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-green-600 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <HeartPulse className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health & Life Sciences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Biotech & Bioinformatics</li>
                <li>Public Health & Nursing</li>
                <li>Pharmaceutical Sciences</li>
              </ul>
            </motion.div>
          </div>

          {/* Intakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* September Intake */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <CalendarCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-blue-800">September Intake</h4>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Apply by: March–April</li>
                <li>• Decisions: May–June</li>
                <li>• Visa window: June–August</li>
              </ul>
            </motion.div>

            {/* February Intake */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <CalendarCheck className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-red-800">February Intake</h4>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Apply by: October–December</li>
                <li>• Decisions: December–January</li>
                <li>• Visa window: December–January</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Check Eligibility
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarships & Funding in Denmark */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Scholarships & Funding in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Explore funding options for international students, including government awards, university waivers, and part‑time work opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Government Scholarships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Govt. Scholarships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Danish Government Scholarships (limited)</li>
                <li>Country‑specific bilateral programs</li>
                <li>Research & PhD funding opportunities</li>
              </ul>
            </motion.div>

            {/* University Waivers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-600 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">University Waivers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Merit‑based tuition reductions</li>
                <li>Departmental awards & grants</li>
                <li>Partial waivers for high achievers</li>
              </ul>
            </motion.div>

            {/* Erasmus+/Mobility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-600 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Erasmus+ / Mobility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Exchange funding for eligible students</li>
                <li>Semester abroad stipends</li>
                <li>Research mobility grants</li>
              </ul>
            </motion.div>

            {/* Work While Studying */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-green-600 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Work While Studying</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Up to 20 hrs/week during semesters</li>
                <li>Full‑time during holidays</li>
                <li>Internships with Danish companies</li>
              </ul>
            </motion.div>
          </div>

          {/* Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ShieldCheck className="h-6 w-6 text-emerald-600 mr-2" />
                Eligibility Basics
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Strong academics and clear SOP</li>
                <li>• Relevant experience or portfolio</li>
                <li>• Early applications increase chances</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-600 mr-2" />
                How to Improve Your Chances
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Apply to multiple eligible programs</li>
                <li>• Tailor SOP for each university</li>
                <li>• Highlight projects and outcomes</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-full font-semibold transition-colors"
              >
                Get Scholarship Guidance
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Life in Denmark */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Safe cities, bike-friendly culture, and high English proficiency make Denmark an easy, enjoyable place to live and study.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation & Housing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accommodation & Housing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Student dorms and shared apartments</li>
                <li>Apply early in major cities like Copenhagen</li>
                <li>Utilities often included; CPR needed for contracts</li>
              </ul>
            </motion.div>

            {/* Part-Time Work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Part‑Time Work & Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Up to 20 hrs/week during semesters</li>
                <li>Full‑time during holidays; internships common</li>
                <li>Great for networking in Danish industry</li>
              </ul>
            </motion.div>

            {/* Transport & Biking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Bus className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport & Biking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>World‑class cycling lanes; student passes</li>
                <li>Reliable metro, train, and bus networks</li>
                <li>Lower costs with bikes and regional discounts</li>
              </ul>
            </motion.div>

            {/* Healthcare & Safety */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <HeartPulse className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare & Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Register for CPR to access public healthcare</li>
                <li>One of the safest countries globally</li>
                <li>Emergency services are efficient and accessible</li>
              </ul>
            </motion.div>

            {/* Food, Internet & Essentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Food, Internet & Essentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Affordable student canteens and supermarkets</li>
                <li>Fast, reliable internet and mobile SIM plans</li>
                <li>Plenty of halal/vegetarian options in big cities</li>
              </ul>
            </motion.div>

            {/* Culture & Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Culture & Community</h3>
              <ul className="space-y-2 text-gray-700">
                <li>90%+ English proficiency; Danish optional</li>
                <li>Student unions, clubs, and events</li>
                <li>Hygge lifestyle: cozy, friendly, inclusive</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Plan Your Student Life
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Requirements & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Visa Requirements & Documents
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Prepare these key documents for your Danish residence permit (study). Requirements can vary by nationality and program—use this as a practical checklist.
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Admission Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Admission Offer</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Official admission/acceptance letter</li>
                <li>• Program details and start date</li>
              </ul>
            </motion.div>

            {/* Financial Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Proof</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Bank statements / sponsor letter</li>
                <li>• Tuition payment receipt (if applicable)</li>
              </ul>
            </motion.div>

            {/* Passport & Photos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passport & Photos</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Valid passport (full duration preferred)</li>
                <li>• Passport-size photographs</li>
              </ul>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Insurance until CPR registration</li>
                <li>• Proof of coverage if required</li>
              </ul>
            </motion.div>

            {/* English Proficiency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Language Proof</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• IELTS/TOEFL (if applicable)</li>
                <li>• Medium-of-Instruction letter (where accepted)</li>
              </ul>
            </motion.div>

            {/* Biometrics & SIRI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CalendarClock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biometrics & SIRI</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Residence permit (SIRI) application</li>
                <li>• Biometric appointment & fee</li>
              </ul>
            </motion.div>
          </div>

          {/* Mini Timeline */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Processing Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold text-2xl">
                  1
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Offer & Tuition</h4>
                <p className="text-gray-600 text-sm">Receive offer, pay fees (if applicable)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
                  2
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Permit Application</h4>
                <p className="text-gray-600 text-sm">Submit SIRI docs + biometrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 font-bold text-2xl">
                  3
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Decision & Travel</h4>
                <p className="text-gray-600 text-sm">Get decision, arrange arrival</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Visa Checklist
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
{/* Scholarship Opportunities Spotlight */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Scholarship Opportunities in Denmark
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Discover popular scholarships and funding paths for international students. Apply early—deadlines often close months before intake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Danish Government Scholarship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Danish Government Scholarship</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Tuition waivers + possible living stipends</li>
                <li>Offered by select Danish universities</li>
                <li>Highly competitive—apply early</li>
              </ul>
            </motion.div>

            {/* University Scholarships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-600 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">University Scholarships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Merit-based partial/tuition waivers</li>
                <li>Departmental and faculty awards</li>
                <li>Deadlines align with program intakes</li>
              </ul>
            </motion.div>

            {/* Erasmus Mundus Joint Masters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-600 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Erasmus Mundus Joint Masters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Fully-funded EU mobility programs</li>
                <li>Study across multiple countries</li>
                <li>Best for top academic profiles</li>
              </ul>
            </motion.div>

            {/* Research & PhD Funding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-green-600 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <FlaskConical className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research &amp; PhD Funding</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Grants via projects and centers</li>
                <li>Strong industry collaboration</li>
                <li>Supervisor‑led opportunities</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Check Scholarship Eligibility
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
{/* Why Choose Visago.World for Denmark */}
<section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
        Why 95% Choose Visago.World for Denmark
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </h2>
      <p className="text-xl text-white/90 max-w-3xl mx-auto mt-8">
        End‑to‑end Denmark guidance—from shortlisting and scholarships to residence permit and arrival support.
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
        <Trophy className="h-12 w-12 text-yellow-300 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Proven Success</h3>
        <ul className="text-red-50 space-y-1">
          <li>High offer & visa approval rates</li>
          <li>Scholarship guidance expertise</li>
          <li>Partner network across Denmark</li>
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
        <ul className="text-red-50 space-y-1">
          <li>Applications, SOP/LoR & scholarships</li>
          <li>Residence permit file review (SIRI)</li>
          <li>Pre‑departure & arrival assistance</li>
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
        <ul className="text-red-50 space-y-1">
          <li>Fast‑track processing & transparent fees</li>
          <li>Timeline tracking & dedicated counselor</li>
          <li>On‑ground alumni/community links</li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>

{/* Final CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Study in Denmark with Confidence</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Get personalized guidance from application to arrival. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent transition-all duration-300"
                >
                  Start Application
                </motion.button>
              </Link>
            </div>

            <div className="text-white/80 text-sm">
              15+ Years Experience • High Success Rate • Trusted by Students
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DenmarkPage;
