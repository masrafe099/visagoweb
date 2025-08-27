import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, DollarSign, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Plane, Banknote, Home, FlaskConical, Heart, Award, ShieldCheck, CalendarClock, FileText, Wallet, Utensils, Bus, Wifi, Book, MapPin, Star, MessageSquare, Handshake, BriefcaseBusiness, Lightbulb, BookOpenText, UtensilsCrossed, ShoppingBag, Smartphone, Map, LifeBuoy, HeartPulse, UsersRound, CalendarCheck, CheckCircle, Building, Globe, Search, Upload, PhoneCall, MessageSquareText, MailOpen, MapPinned, Facebook, Instagram, Youtube } from 'lucide-react';

const ChinaPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in China - Where Ancient Wisdom Meets Modern Innovation',
      subtitle: 'Join 500,000+ international students in the world\'s fastest-growing education hub',
      stats: '95% Success Rate | 10+ Years | 50+ Countries',
    },
    {
      image: 'https://images.pexels.com/photos/3735729/pexels-photo-3735729.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'World-Class Education at Affordable Costs',
      subtitle: 'Access cutting-edge research facilities and expert faculty',
      stats: '60% Lower Costs Than Western Countries',
    },
    {
      image: 'https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Experience Rich Culture While You Learn',
      subtitle: 'Immerse yourself in 5,000 years of history and tradition',
      stats: 'Learn Mandarin + Gain Global Perspective',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds
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
            <div className="absolute inset-0 bg-black/40"></div> {/* Dark gradient overlay */}
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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

      {/* Why Study in China Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
              Why Study in China?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              China has emerged as one of the world's top study destinations, attracting over 500,000 international students annually, offering a unique blend of ancient culture and modern innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Academic Excellence */}
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
                <li><span className="font-semibold">42 universities</span> in QS Top 500</li>
                <li>Leading in AI & Technology Research</li>
                <li>English programs in 300+ universities</li>
                <li>World-class research facilities</li>
                <li>Expert international faculty</li>
              </ul>
            </motion.div>

            {/* Card 2: Affordable Education */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">60-70% Lower Costs</span> than Western countries</li>
                <li>Tuition fees: $2,000-8,000/year</li>
                <li>Living costs: $3,000-6,000/year</li>
                <li><span className="font-semibold">85% Students</span> Receive Funding</li>
                <li>Part-time work permitted</li>
              </ul>
            </motion.div>

            {/* Card 3: Global Career Opportunities */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Career Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">2nd Largest Global Economy</span></li>
                <li>Multinational Company Hub</li>
                <li>High Demand for China Experience</li>
                <li>International business exposure</li>
                <li>Mandarin language advantage</li>
              </ul>
            </motion.div>

            {/* Card 4: Cultural Immersion */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Immersion</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">5,000 Years of History</span></li>
                <li>56 Ethnic Groups</li>
                <li>Rich Arts & Philosophy</li>
                <li>Ancient landmarks visit</li>
                <li>Traditional festivals participation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Top Universities in China */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in China
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Choose from world-renowned institutions ranked globally for their academic excellence and research.
            </p>
          </div>

          {/* Tier 1 Universities */}
          <div className="space-y-12 mb-20">
            {/* Tsinghua University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/3735729/pexels-photo-3735729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tsinghua University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #17
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Tsinghua University</h3>
                <p className="text-gray-600 mb-4">Beijing</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #17</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> 3,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 50+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1911</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Computer Science</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>MBA Program - Global Recognition</li>
                  <li>Civil Engineering - Top in Asia</li>
                  <li>Architecture - Award-Winning Faculty</li>
                  <li>AI Research - Cutting-Edge Labs</li>
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
                <div className="mt-4 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  95% Scholarship Rate
                </div>
              </div>
            </motion.div>

            {/* Peking University */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Peking University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #14
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-800 mb-2">Peking University</h3>
                <p className="text-gray-600 mb-4">Beijing</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #14</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> 4,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 60+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1898</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Liberal Arts</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Highest diversity of international students</li>
                  <li>Historical significance (oldest modern university)</li>
                  <li>Strong humanities programs</li>
                  <li>Central Beijing location advantage</li>
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
                <div className="mt-4 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  90% Scholarship Rate
                </div>
              </div>
            </motion.div>

            {/* Fudan University */}
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
                  alt="Fudan University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #34
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">Fudan University</h3>
                <p className="text-gray-600 mb-4">Shanghai</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #34</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-500" /> 2,500+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 40+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1905</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Journalism</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Financial hub location</li>
                  <li>International business opportunities</li>
                  <li>Modern city lifestyle</li>
                  <li>Strong alumni network in finance</li>
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
                <div className="mt-4 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  88% Scholarship Rate
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tier 2 Universities */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Other Highly Ranked Universities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shanghai Jiao Tong University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shanghai Jiao Tong University"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Shanghai Jiao Tong University</h4>
                <p className="text-gray-600 text-sm mb-3">Shanghai</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #46 | Medical & Engineering Excellence
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

            {/* Zhejiang University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Zhejiang University"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Zhejiang University</h4>
                <p className="text-gray-600 text-sm mb-3">Hangzhou</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #45 | Beautiful Hangzhou Campus
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

            {/* USTC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="University of Science and Technology of China"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">USTC</h4>
                <p className="text-gray-600 text-sm mb-3">Hefei</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #93 | Science & Technology Pioneer
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
          </div>

          {/* Popular Programs Showcase */}
          <div className="text-center mt-20 mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Popular Programs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-blue-50 p-8 rounded-2xl">
            {/* Business & Economics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Business & Economics</h4>
              <ul className="text-gray-700 space-y-1">
                <li>International Business</li>
                <li>Finance</li>
                <li>Economics</li>
                <li>Marketing</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">~15,000 students | 3-4 years</p>
            </motion.div>

            {/* Engineering & Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <FlaskConical className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Engineering & Technology</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Computer Science</li>
                <li>Civil Engineering</li>
                <li>Electrical Engineering</li>
                <li>Robotics</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">~20,000 students | 4 years</p>
            </motion.div>

            {/* Medicine & Health */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <Heart className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Medicine & Health</h4>
              <ul className="text-gray-700 space-y-1">
                <li>MBBS</li>
                <li>Pharmacy</li>
                <li>Public Health</li>
                <li>Nursing</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">~10,000 students | 5-6 years</p>
            </motion.div>

            {/* Liberal Arts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Liberal Arts</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Chinese Language & Culture</li>
                <li>International Relations</li>
                <li>Journalism</li>
                <li>History</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">~8,000 students | 3-4 years</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Requirements for Studying in China */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Requirements for Studying in China
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Everything you need to know about eligibility and documents for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1: Academic Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-50 rounded-2xl p-8 shadow-lg border-t-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Academic Requirements</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Undergraduate Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> High school diploma or equivalent</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Minimum GPA: 3.0/4.0</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Age: 18-25 years</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Good health certificate</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Graduate Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Bachelor's degree from recognized institution</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Minimum GPA: 3.2/4.0 (Master's), 3.5/4.0 (PhD)</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Age limits and research proposal requirements</li>
                </ul>
              </div>
            </motion.div>

            {/* Column 2: Language Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-red-50 rounded-2xl p-8 shadow-lg border-t-4 border-red-600"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-12 w-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Language Requirements</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">English-Taught Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> IELTS Requirement: 6.0-6.5</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> TOEFL Requirement: 80-90 iBT</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> Alternative Tests: University internal tests accepted</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Chinese-Taught Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> HSK 4: Undergraduate minimum</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> HSK 5-6: Graduate programs</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> Preparation Option: 1-year Chinese language course</li>
                </ul>
              </div>
            </motion.div>

            {/* Column 3: Document Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-green-50 rounded-2xl p-8 shadow-lg border-t-4 border-green-600"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-12 w-12 text-green-600 mr-4" /> {/* Reusing BookOpen for document stack */}
                <h3 className="text-2xl font-bold text-gray-900">Document Checklist</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Valid passport (6+ months validity)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Completed application form</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Academic transcripts (notarized)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Diploma certificates (translated)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> English proficiency scores</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Recommendation letters (2)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Personal statement (800-1500 words)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Health certificate & HIV test</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Police clearance certificate</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Passport photos (recent)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Financial proof documents</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Scholarship application forms</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Cost Breakdown - Study in China */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Cost Breakdown - Study in China
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Transparent pricing with no hidden fees. <span className="font-semibold text-blue-700">60-80% SAVINGS vs Western Countries!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel: Detailed Cost Structure */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Detailed Cost Structure</h3>

              {/* Tuition Fees Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><GraduationCap className="h-7 w-7 mr-3 text-blue-600" /> Tuition Fees</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-lg text-gray-700 mb-2">Undergraduate Programs</p>
                    <div className="flex items-center mb-1">
                      <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                      <p className="text-gray-600">Top Universities (Tier 1): <span className="font-semibold">$4,000-8,000 USD/year</span></p>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
                      <p className="text-gray-600">Good Universities (Tier 2): <span className="font-semibold">$2,500-5,000 USD/year</span></p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-amber-700 rounded-full mr-2"></span>
                      <p className="text-gray-600">Regular Universities: <span className="font-semibold">$1,500-3,500 USD/year</span></p>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                      <p className="text-gray-600">Medical Programs (MBBS): <span className="font-semibold">$5,000-10,000 USD/year</span></p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700 mb-2">Graduate Programs</p>
                    <div className="flex items-center mb-1">
                      <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                      <p className="text-gray-600">Master's Programs: <span className="font-semibold">$3,000-10,000 USD/year</span></p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
                      <p className="text-gray-600">PhD Programs: <span className="font-semibold">$2,000-8,000 USD/year</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Living Expenses Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><Home className="h-7 w-7 mr-3 text-green-600" /> Living Expenses (Monthly Estimate)</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-lg text-gray-700 mb-2">Accommodation</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>University Dormitory: <span className="font-semibold">$100-300</span></li>
                      <li>Shared Apartment: <span className="font-semibold">$200-500</span></li>
                      <li>Private Apartment: <span className="font-semibold">$300-800</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700 mb-2">Food & Dining</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>Campus Cafeteria: <span className="font-semibold">$80-150</span></li>
                      <li>Local Restaurants: <span className="font-semibold">$120-200</span></li>
                      <li>Cooking at Home: <span className="font-semibold">$100-180</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700 mb-2">Transportation & Other</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>Transportation: <span className="font-semibold">$20-50</span></li>
                      <li>Utilities (Internet, Phone): <span className="font-semibold">$30-60</span></li>
                      <li>Personal Expenses: <span className="font-semibold">$50-150</span></li>
                    </ul>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-200">
                    Estimated Monthly Total: <span className="text-blue-600">$280 - $1,490</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: International Comparison & Financial Aid */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">International Comparison & Financial Aid</h3>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><Plane className="h-7 w-7 mr-3 text-purple-600" /> Annual Cost Comparison</h4>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Cost (USD)</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">vs China</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-blue-50 font-semibold text-blue-800">
                      <td className="px-6 py-4 whitespace-nowrap">🇨🇳 China</td>
                      <td className="px-6 py-4 whitespace-nowrap">$8,000-25,000</td>
                      <td className="px-6 py-4 whitespace-nowrap">-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇺🇸 USA</td>
                      <td className="px-6 py-4 whitespace-nowrap">$40,000-70,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-600">-60%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇬🇧 UK</td>
                      <td className="px-6 py-4 whitespace-nowrap">$35,000-55,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-600">-65%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇦🇺 Australia</td>
                      <td className="px-6 py-4 whitespace-nowrap">$30,000-50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-600">-50%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇨🇦 Canada</td>
                      <td className="px-6 py-4 whitespace-nowrap">$25,000-45,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-600">-45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Scholarship Highlight Box */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-4 flex items-center"><Banknote className="h-7 w-7 mr-3" /> Scholarship Opportunities</h4>
                <p className="text-lg mb-4">
                  <span className="font-bold">Up to 100% Scholarship Coverage Available!</span>
                </p>
                <p className="mb-4">
                  <span className="font-semibold">85% of our students receive funding.</span>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Chinese Government Scholarship (CGS)</li>
                  <li>University-specific scholarships</li>
                  <li>Bilateral agreements</li>
                  <li>Private foundations</li>
                </ul>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-white text-orange-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore Scholarships
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6: Scholarship Opportunities in China */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Scholarship medal patterns */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Scholarship Opportunities in China
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mt-8">
              Up to 100% tuition coverage + living allowance
            </p>
            <div className="mt-8 bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              85% of our students receive funding
            </div>
          </div>

          {/* Featured Scholarship: Chinese Government Scholarship (CSC) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-r from-red-700 to-red-900 rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-500 mb-12"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-2/5 h-64 lg:h-auto p-8 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3735729/pexels-photo-3735729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="CSC Scholarship"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <Award className="h-24 w-24 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-white mb-2">CSC Scholarship</h3>
                  <p className="text-yellow-200 text-lg">Chinese Government Scholarship</p>
                  <div className="mt-4 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold inline-block">
                    FULL COVERAGE
                  </div>
                  <p className="text-yellow-100 text-sm mt-2">90% approval through Visago.World</p>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 bg-red-800/80 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6">Coverage Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <p className="flex items-center text-white"><GraduationCap className="h-6 w-6 mr-3 text-yellow-400" /> Full Tuition: 100% fees covered</p>
                  <p className="flex items-center text-white"><DollarSign className="h-6 w-6 mr-3 text-yellow-400" /> Living Allowance: $300-400 USD monthly</p>
                  <p className="flex items-center text-white"><Home className="h-6 w-6 mr-3 text-yellow-400" /> Accommodation: Free dormitory or housing allowance</p>
                  <p className="flex items-center text-white"><ShieldCheck className="h-6 w-6 mr-3 text-yellow-400" /> Medical Insurance: Comprehensive coverage</p>
                  <p className="flex items-center text-white"><Wallet className="h-6 w-6 mr-3 text-yellow-400" /> Settlement Allowance: One-time payment</p>
                </div>
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Application Timeline</h4>
                  <div className="flex items-center space-x-4 text-lg text-white">
                    <CalendarClock className="h-8 w-8 text-yellow-400" />
                    <span>January - April: Application Period</span>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-red-900 py-3 px-8 rounded-full font-bold transition-colors shadow-lg"
                    >
                      Apply Now - Free Assessment
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* University Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tsinghua University Scholarship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-600"
            >
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tsinghua University Scholarship</h4>
              <p className="text-gray-700 mb-2">Up to 100% tuition + living allowance</p>
              <p className="text-sm text-blue-500 font-semibold">Available for ALL international students</p>
              <p className="text-sm text-gray-500 mt-3">75% acceptance rate for qualified applicants</p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Peking University Excellence Award */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-600"
            >
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Peking University Excellence Award</h4>
              <p className="text-gray-700 mb-2">Full or partial tuition coverage</p>
              <p className="text-sm text-red-500 font-semibold">Merit-based & Need-based options</p>
              <p className="text-sm text-gray-500 mt-3">Access to influential alumni network</p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Shanghai Government Scholarship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-indigo-600"
            >
              <MapPin className="h-12 w-12 text-indigo-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Shanghai Government Scholarship</h4>
              <p className="text-gray-700 mb-2">Tuition + living expenses in Shanghai</p>
              <p className="text-sm text-indigo-500 font-semibold">Available for ALL Shanghai universities</p>
              <p className="text-sm text-gray-500 mt-3">Internships in financial hub</p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Bilateral & Private Scholarships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-600"
            >
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bilateral & Private Scholarships</h4>
              <p className="text-gray-700 mb-2">Varies by country partnership</p>
              <ul className="text-sm text-gray-500 list-disc list-inside mb-3">
                <li>Confucius Institute Scholarships</li>
                <li>Jack Ma Foundation Awards</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Check Your Country's Agreements
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Scholarship Success Calculator */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Scholarship Success Calculator</h3>
            <p className="text-lg text-gray-700 mb-8">Input your profile to find your scholarship match percentage and estimated funding.</p>
            {/* Placeholder for interactive calculator */}
            <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center text-gray-500 text-xl font-semibold">
              Interactive Calculator Coming Soon!
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition-colors shadow-lg"
              >
                Book Scholarship Consultation
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Visa Process & Requirements */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Visa Process & Requirements
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Step-by-step guidance for hassle-free visa approval.
            </p>
            <div className="mt-8 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              <ShieldCheck className="inline-block h-6 w-6 mr-2" /> 95% Visa Success Rate
            </div>
          </div>

          {/* Visa Types Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* X1 Visa Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md border-t-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">X1 Visa (Long-term)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Duration: 180+ days study programs</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Best For: Degree programs, long-term courses</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Processing: 10-15 working days</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Validity: Multiple entry, extendable</li>
              </ul>
            </motion.div>

            {/* X2 Visa Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md border-t-4 border-green-600"
            >
              <FileText className="h-12 w-12 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">X2 Visa (Short-term)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Duration: Under 180 days programs</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Best For: Language courses, exchange programs</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Processing: 7-10 working days</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Validity: Single/double entry</li>
              </ul>
            </motion.div>
          </div>

          {/* Step-by-Step Process Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Step-by-Step Visa Process</h3>
            <div className="relative flex flex-col md:flex-row justify-between items-center">
              {/* Line connecting steps */}
              <div className="absolute hidden md:block h-1 bg-gray-300 w-full top-1/2 -translate-y-1/2"></div>

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">1. Receive Admission Letter</h4>
                <p className="text-sm text-gray-600">Weeks 1-4</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">2. Gather Visa Documents</h4>
                <p className="text-sm text-gray-600">Week 5</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">3. Health Certificate & Tests</h4>
                <p className="text-sm text-gray-600">Week 5-6</p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">4. Submit Visa Application</h4>
                <p className="text-sm text-gray-600">Week 6</p>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5"
              >
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">5. Receive Visa & Prepare</h4>
                <p className="text-sm text-gray-600">Weeks 7-8</p>
              </motion.div>
            </div>
          </div>

          {/* Visa Requirements Deep Dive */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visa Requirements Deep Dive</h3>
            <p className="text-lg text-gray-700 text-center mb-8">Select your country to view specific requirements and processing times.</p>
            {/* Placeholder for interactive country selector */}
            <div className="bg-white p-12 rounded-lg flex items-center justify-center text-gray-500 text-xl font-semibold">
              Interactive Country Selector Coming Soon!
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition-colors shadow-lg"
                >
                  Get Personalized Visa Guidance
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Student Life in China */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in China
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-purple-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-8">
              Experience the perfect blend of tradition and modernity, academic rigor and vibrant culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1: Campus Life & Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-600"
            >
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Campus Life & Facilities</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Modern Libraries & Research Labs</li>
                <li>Sports Centers & Student Housing</li>
                <li>International Dining Options</li>
                <li>High-speed WiFi & Smart Classrooms</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Explore Campus
                </motion.button>
              </Link>
            </motion.div>

            {/* Category 2: Cultural Experiences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-600"
            >
              <Landmark className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cultural Experiences</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Traditional Festivals & Historical Sites</li>
                <li>Language Immersion & Daily Practice</li>
                <li>Modern City Exploration</li>
                <li>Rich Arts & Philosophy</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Discover Culture
                </motion.button>
              </Link>
            </motion.div>

            {/* Category 3: Career Opportunities & Networking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-600"
            >
              <BriefcaseBusiness className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Career Opportunities & Networking</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Internship Programs & Job Placement</li>
                <li>Part-time Work Opportunities</li>
                <li>Professional Networking & Alumni</li>
                <li>Post-graduation Work Visa Pathways</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Boost Your Career
                </motion.button>
              </Link>
            </motion.div>

            {/* Category 4: Support Services & Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-600"
            >
              <LifeBuoy className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Support Services & Community</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Dedicated International Student Offices</li>
                <li>Buddy System Program & Mentorship</li>
                <li>Health & Medical Services</li>
                <li>Community Integration & Local Tips</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Get Support
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Student Testimonials Carousel */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Student Testimonials</h3>
            <p className="text-lg text-gray-700 mb-8">Hear from our successful students about their experiences.</p>
            {/* Placeholder for video carousel */}
            <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center text-gray-500 text-xl font-semibold">
              Video Testimonials Carousel Coming Soon!
            </div>
          </div>

          {/* Mobile App Integration */}
          <div className="mt-16 bg-gray-100 rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Essential Mobile Apps & Guides</h3>
            <p className="text-lg text-gray-700 mb-8">Navigate life in China with these indispensable tools and resources.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
                <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">WeChat & Payment Apps</h4>
                <p className="text-gray-700 text-center">Essential for communication, payments, and daily life.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
                <Map className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Transportation & Navigation</h4>
                <p className="text-gray-700 text-center">Didi, Metro apps, and bike sharing for easy travel.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
                <BookOpenText className="h-12 w-12 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Learning & University Platforms</h4>
                <p className="text-gray-700 text-center">Chinese learning apps and university-specific tools.</p>
              </div>
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition-colors shadow-lg"
              >
                Download Getting Started Guide
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 9: Application Process & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Your Journey to China Starts Here
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Simple 4-phase process with expert guidance every step.
            </p>
            <div className="mt-8 flex items-center justify-center text-blue-600 text-lg font-semibold">
              <ArrowRight className="h-6 w-6 mr-2 animate-pulse" /> Start Your Journey <ArrowRight className="h-6 w-6 ml-2 animate-pulse" /> Success
            </div>
          </div>

          {/* Interactive Process Visualization */}
          <div className="space-y-12">
            {/* Phase 1: Preparation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-blue-50 rounded-2xl shadow-lg p-8 border-l-8 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <Search className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Phase 1: Preparation</h3>
                  <p className="text-blue-700 font-semibold">3-6 Months Before Departure</p>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold mb-2">1.1 Research & University Selection</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>University rankings and program comparison</li>
                    <li>Location preferences (Beijing, Shanghai, Guangzhou)</li>
                    <li>Specialization matching to career goals</li>
                    <li>Budget planning and scholarship opportunities</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Free consultation to identify best-fit universities</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">1.2 Document Preparation</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Transcripts and certificates (notarization required)</li>
                    <li>English translations by certified translators</li>
                    <li>GPA conversion to Chinese standard</li>
                    <li>IELTS/TOEFL scheduling and preparation</li>
                    <li>HSK testing (if required for program)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Document verification and translation services</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">1.3 Financial Planning</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Total cost estimation for 4-year program</li>
                    <li>Scholarship application preparation</li>
                    <li>Financial proof documentation</li>
                    <li>Bank statement requirements</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Scholarship application assistance and financial planning</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 2: Application Submission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 rounded-2xl shadow-lg p-8 border-l-8 border-green-600"
            >
              <div className="flex items-center mb-6">
                <Upload className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Phase 2: Application Submission</h3>
                  <p className="text-green-700 font-semibold">4-6 Months Before Departure</p>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold mb-2">2.1 University Applications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Primary choices: 2-3 top-tier universities</li>
                    <li>Safe options: 2-3 mid-tier universities</li>
                    <li>Backup choices: 1-2 guaranteed acceptance</li>
                    <li>Online application forms completion</li>
                    <li>Personal statement writing and optimization</li>
                    <li>Recommendation letter coordination</li>
                    <li>Portfolio preparation (if required)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Complete application management and submission</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">2.2 Scholarship Applications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Chinese Government Scholarship (CSC) - Deadline: April 30</li>
                    <li>University-specific scholarships</li>
                    <li>Bilateral agreement scholarships</li>
                    <li>Private foundation grants</li>
                    <li>Scholarship-specific essays and statements</li>
                    <li>Additional recommendation letters</li>
                    <li>Research proposals (for advanced degrees)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Advantage: 85% scholarship success rate through expert guidance</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">2.3 Application Tracking</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Application submission confirmations</li>
                    <li>University acknowledgments</li>
                    <li>Interview scheduling (if required)</li>
                    <li>Decision timeline tracking</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Communication: Regular updates on application progress</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 3: Admission & Visa */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-yellow-50 rounded-2xl shadow-lg p-8 border-l-8 border-yellow-600"
            >
              <div className="flex items-center mb-6">
                <Award className="h-12 w-12 text-yellow-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Phase 3: Admission & Visa</h3>
                  <p className="text-yellow-700 font-semibold">2-3 Months Before Departure</p>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold mb-2">3.1 Admission Confirmation</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Compare multiple offers received</li>
                    <li>Evaluate scholarship packages</li>
                    <li>Consider location and program preferences</li>
                    <li>Make final university selection</li>
                    <li>Accept admission offer officially</li>
                    <li>Pay enrollment deposit (usually $500-1000)</li>
                    <li>Receive JW201/JW202 forms for visa application</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Guidance on selecting best offer and terms negotiation</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">3.2 Health Certificate & Testing</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Complete physical examination at authorized clinic</li>
                    <li>HIV test (mandatory for all international students)</li>
                    <li>Vaccination records and updates</li>
                    <li>Mental health assessment (some universities)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Authorized Clinics: We provide list of approved medical centers</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">3.3 Visa Application Process</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Admission letter and JW forms</li>
                    <li>Health certificate and HIV test results</li>
                    <li>Financial proof documentation</li>
                    <li>Passport and photograph requirements</li>
                    <li>Online appointment booking</li>
                    <li>Document submission and review</li>
                    <li>Visa fee payment ($140-200 USD)</li>
                    <li>Processing timeline (10-15 working days)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Visa application guidance and document review</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 4: Pre-departure & Arrival */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-purple-50 rounded-2xl shadow-lg p-8 border-l-8 border-purple-600"
            >
              <div className="flex items-center mb-6">
                <Plane className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Phase 4: Pre-departure & Arrival</h3>
                  <p className="text-purple-700 font-semibold">1 Month Before & After</p>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold mb-2">4.1 Travel Arrangements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Best flight routes to university city</li>
                    <li>Luggage allowances for international students</li>
                    <li>Travel insurance requirements</li>
                    <li>Airport pickup services coordination</li>
                    <li>University dormitory confirmation</li>
                    <li>Temporary housing if needed</li>
                    <li>Roommate coordination</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Support: Travel planning assistance and airport pickup coordination</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">4.2 Pre-departure Preparation</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Download essential Chinese apps (WeChat, Alipay)</li>
                    <li>Basic Mandarin phrases learning</li>
                    <li>Cultural orientation and expectations setting</li>
                    <li>Emergency contact information</li>
                    <li>Multiple copies of important documents</li>
                    <li>Digital backups in cloud storage</li>
                    <li>Emergency funds and card arrangements</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Final Checklist: 30-item pre-departure verification list</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">4.3 Arrival & Initial Setup</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Airport pickup and transfer to accommodation</li>
                    <li>University registration and enrollment completion</li>
                    <li>Residence permit application at PSB office</li>
                    <li>Bank account opening and local SIM card</li>
                    <li>Campus orientation and facility tours</li>
                    <li>Buddy system introduction</li>
                    <li>Local area familiarization</li>
                    <li>Academic advisor meetings</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Visago Continued Support: First month settlement assistance included</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Why Choose Visago.World for Your China Journey? */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for China
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mt-8">
              Your trusted partner for a successful study abroad journey.
            </p>
            <div className="mt-8 bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              95% Success Rate
            </div>
          </div>

          {/* Our Expertise Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-blue-700 rounded-xl p-6 shadow-md border-t-4 border-yellow-400"
            >
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Success in China</h3>
              <p className="text-blue-200 mb-2">10+ Years Excellence</p>
              <ul className="text-blue-100 space-y-1">
                <li><span className="font-semibold">500+ Students</span> Placed</li>
                <li><span className="font-semibold">95% Visa Approval</span> Rate</li>
                <li><span className="font-semibold">85% Scholarship</span> Success</li>
                <li><span className="font-semibold">50+ Partner</span> Universities</li>
              </ul>
              <div className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold inline-block">
                Partner University Carousel Coming Soon!
              </div>
            </motion.div>

            {/* Column 2: Comprehensive Support Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-blue-700 rounded-xl p-6 shadow-md border-t-4 border-green-400"
            >
              <Handshake className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Comprehensive Support Services</h3>
              <p className="text-blue-200 mb-2">End-to-End Support</p>
              <ul className="text-blue-100 space-y-1">
                <li>Free Consultation & Profile Assessment</li>
                <li>Document Preparation & Test Coaching</li>
                <li>Application Management & Scholarship Assistance</li>
                <li>Visa Guidance & Pre-departure Prep</li>
                <li>Arrival Support & Ongoing Guidance</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  View All Services
                </motion.button>
              </Link>
            </motion.div>

            {/* Column 3: Unique Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
              className="bg-blue-700 rounded-xl p-6 shadow-md border-t-4 border-purple-400"
            >
              <Lightbulb className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Unique Advantages</h3>
              <p className="text-blue-200 mb-2">Industry Leadership</p>
              <ul className="text-blue-100 space-y-1">
                <li>Mandarin-Speaking Team & On-Ground Support</li>
                <li>Fast-Track Processing & Guaranteed Placement</li>
                <li>Money-Back Guarantee (Visa/Admission/Scholarship)</li>
                <li>24/7 Online Portal & Mobile App</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Learn About Our Guarantee
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Success Stories Showcase */}
          <div className="mt-16 bg-blue-700/50 rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Success Stories</h3>
            <p className="text-lg text-blue-100 mb-8">Hear from our students who achieved their China dreams.</p>
            {/* Placeholder for testimonial grid */}
            <div className="bg-blue-600 p-12 rounded-lg flex items-center justify-center text-blue-200 text-xl font-semibold">
              Interactive Testimonial Grid Coming Soon!
            </div>
          </div>

          

          
        </div>
      </section>

      {/* Section 11: Contact & Free Consultation */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your China Journey Today!</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mt-8">
              Book your FREE consultation and take the first step.
            </p>
            <div className="mt-8 bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              Next scholarship deadline in [Countdown Timer]
            </div>
          </div>

          {/* Free Consultation Offer Highlight */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">FREE Consultation Worth $200</h3>
            <p className="text-lg text-gray-700 text-center mb-8">Get personalized guidance from China education experts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> University Selection</p>
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Scholarship Assessment</p>
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Cost Planning</p>
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Timeline Creation</p>
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Document Review</p>
              <p className="flex items-center text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Visa Guidance</p>
            </div>
          </div>

          {/* Quick Assessment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Quick Assessment Form</h3>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Personal Information */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h4>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Current Country</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Nepal</option>
                    <option>Sri Lanka</option>
                  </select>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Preferred Contact Method:</p>
                    <div className="flex gap-4">
                      <label className="flex items-center"><input type="radio" name="contactMethod" value="email" className="mr-2" /> Email</label>
                      <label className="flex items-center"><input type="radio" name="contactMethod" value="phone" className="mr-2" /> Phone</label>
                      <label className="flex items-center"><input type="radio" name="contactMethod" value="whatsapp" className="mr-2" /> WhatsApp</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Academic & Preferences */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Academic & Preferences</h4>
                <div className="space-y-4">
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Education Level</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                    <option>Other</option>
                  </select>
                  <input type="text" placeholder="Field of Interest (e.g., Engineering, Business)" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Preferred Cities (e.g., Beijing, Shanghai)" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="range" min="0" max="100000" step="1000" className="w-full" />
                  <p className="text-sm text-gray-600">Budget Range: $0 - $100,000</p>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Current GPA/Percentage" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="English Test Score (IELTS/TOEFL, optional)" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Scholarship Interest:</p>
                    <div className="flex gap-4">
                      <label className="flex items-center"><input type="radio" name="scholarshipInterest" value="yes" className="mr-2" /> Yes</label>
                      <label className="flex items-center"><input type="radio" name="scholarshipInterest" value="no" className="mr-2" /> No</label>
                    </div>
                  </div>
                  <textarea placeholder="Specific Questions (optional)" rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                </div>
              </div>
              <div className="lg:col-span-2 text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white py-4 px-12 rounded-full text-xl font-semibold transition-colors shadow-lg"
                >
                  Get My Free Consultation
                </motion.button>
                <p className="text-sm text-gray-600 mt-4">Response within 2 hours during business hours. Your information is secure and confidential.</p>
              </div>
            </form>
          </div>

          {/* Multiple Contact Options */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Multiple Contact Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Option 1: Phone Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <PhoneCall className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Call for Immediate Help</h4>
                <p className="text-gray-700 mb-2">+880-1234-567890</p>
                <a href="tel:+8801234567890">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                  >
                    Call Now
                  </motion.button>
                </a>
                <p className="text-xs text-gray-500 mt-2">Mon-Sat: 9AM-8PM</p>
              </motion.div>

              {/* Option 2: WhatsApp Chat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                className="bg-green-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <MessageSquareText className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Chat on WhatsApp</h4>
                <p className="text-gray-700 mb-2">+880-1234-567890</p>
                <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                  >
                    Start Chat
                  </motion.button>
                </a>
                <p className="text-xs text-gray-500 mt-2">Immediate response</p>
              </motion.div>

              {/* Option 3: Email Inquiry */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                className="bg-purple-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <MailOpen className="h-12 w-12 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Email Your Questions</h4>
                <p className="text-gray-700 mb-2">china@visago.world</p>
                <a href="mailto:china@visago.world">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                  >
                    Send Email
                  </motion.button>
                </a>
                <p className="text-xs text-gray-500 mt-2">Response within 4 hours</p>
              </motion.div>

              {/* Option 4: Office Visit */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                className="bg-yellow-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <MapPinned className="h-12 w-12 text-yellow-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Visit Our Office</h4>
                <p className="text-gray-700 mb-2">Visago.World Education Consultancy, Kushtia Branch</p>
                <a href="https://maps.app.goo.gl/your-google-maps-link" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                  >
                    Get Directions
                  </motion.button>
                </a>
                <p className="text-xs text-gray-500 mt-2">Schedule a visit</p>
              </motion.div>
            </div>
          </div>

          {/* Limited-Time Offers */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-xl p-8 text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Limited-Time Offers!</h3>
            <p className="text-lg mb-4">Apply before March 31st - <span className="font-bold">20% off service fees!</span></p>
            <p className="text-lg mb-4">Scholarship Guarantee: <span className="font-bold">50% refund if no scholarship secured!</span></p>
            <div className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              Offer expires in [X] days!
            </div>
          </div>

          {/* Social Proof & Final Trust Signals */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Trusted by Thousands</h3>
            <p className="text-lg text-gray-700 mb-8">Join our community of successful students.</p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center text-gray-700">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold">4.9/5 stars</span> (200+ reviews)
              </div>
              <div className="flex items-center text-gray-700">
                <UsersRound className="h-6 w-6 text-blue-500 mr-2" />
                <span className="font-semibold">3 students</span> got scholarships this week!
              </div>
            </div>
            <div className="flex justify-center gap-6 text-gray-700 text-4xl">
              <a href="https://facebook.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Facebook /></a>
              <a href="https://instagram.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><Instagram /></a>
              <a href="https://youtube.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><Youtube /></a>
            </div>
          </div>

          {/* Footer Contact Information */}
          <div className="bg-gray-800 text-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Your Dream University in China is Just One Call Away!</h3>
            <p className="text-xl text-gray-300 mb-8">Book Your Free Consultation Now</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 rounded-full text-xl font-semibold transition-colors shadow-lg"
              >
                Book Free Consultation
              </motion.button>
            </Link>
            <p className="text-sm text-gray-400 mt-4">Risk-free consultation with money-back guarantee</p>
            <div className="mt-8 border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-bold text-lg mb-3">Office Address</h4>
                <p className="text-gray-400">Visago.World Education Consultancy</p>
                <p className="text-gray-400">Kushtia Branch, Bangladesh</p>
                <a href="https://maps.app.goo.gl/your-google-maps-link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Get Directions</a>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Contact Numbers</h4>
                <p className="text-gray-400">Main: +880-1234-567890</p>
                <p className="text-gray-400">WhatsApp: +880-1234-567890</p>
                <p className="text-gray-400">Emergency: +880-9876-543210</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Business Hours</h4>
                <p className="text-gray-400">Mon-Sat: 9AM-8PM</p>
                <p className="text-gray-400">Sun: 10AM-6PM</p>
                <p className="text-gray-400">Email: china@visago.world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChinaPage;