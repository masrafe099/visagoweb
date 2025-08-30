import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import { GraduationCap, DollarSign, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Plane, Banknote, Home, FlaskConical, Heart, Award, ShieldCheck, CalendarClock, FileText, Wallet, Utensils, Bus, Wifi, Book, MapPin, Star, MessageSquare, Handshake, BriefcaseBusiness, Lightbulb, BookOpenText, UtensilsCrossed, ShoppingBag, Smartphone, Map, LifeBuoy, HeartPulse, UsersRound, CalendarCheck, CheckCircle, Building, Globe, Search, Upload, PhoneCall, MessageSquareText, MailOpen, MapPinned, Facebook, Instagram, Youtube } from 'lucide-react';

const HungaryPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow content for the hero section, tailored for Hungary
  const slides = [
    {
      image: 'https://images.pexels.com/photos/163064/buda-castle-hungary-vienna-gate-163064.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop',
      headline: 'Study in Hungary - A European Degree of Global Value',
      subtitle: 'Join over 40,000 international students in the heart of Europe',
      stats: '95% Success Rate | 10+ Years | 50+ Countries',
    },
    {
      image: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop',
      headline: 'World-Class Education at an Affordable Price',
      subtitle: 'Access high-quality, internationally recognized degrees in a vibrant cultural setting',
      stats: 'Up to 70% Lower Costs Than the US/UK',
    },
    {
      image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop',
      headline: 'Experience Rich History While You Learn',
      subtitle: 'Immerse yourself in over 1,000 years of captivating history and culture',
      stats: 'Gateway to Europe + Gain a Global Perspective',
    },
  ];

  // Effect to cycle through the slides automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds
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
            <ImageWithFallback
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

      {/* Why Study in Hungary Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
              Why Study in Hungary?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Hungary has emerged as a top study destination in Europe, attracting students with its unique blend of high-quality education, rich culture, and affordable living.
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
                <li><span className="font-semibold">9 universities</span> in QS World Rankings</li>
                <li>Strong in Medicine, Engineering & IT</li>
                <li>English programs in 60+ institutions</li>
                <li>Internationally recognized EU degrees</li>
                <li>13 Nobel Prize laureates</li>
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
                <li><span className="font-semibold">50-70% Lower Costs</span> than US/UK</li>
                <li>Tuition fees: €4,000-8,000/year</li>
                <li>Living costs: €400-700/month</li>
                <li><span className="font-semibold">Stipendium Hungaricum</span> Scholarship</li>
                <li>Part-time work (24 hrs/week) permitted</li>
              </ul>
            </motion.div>

            {/* Card 3: European Career Opportunities */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">European Career Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Schengen Area Member</span></li>
                <li>Access to the entire EU job market</li>
                <li>Post-study work visa (9 months)</li>
                <li>Hub for multinational companies</li>
                <li>Strong startup ecosystem in Budapest</li>
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
                <li><span className="font-semibold">1,000+ Years of History</span></li>
                <li>Stunning architecture & thermal baths</li>
                <li>Vibrant arts & music festivals</li>
                <li>Central location to explore Europe</li>
                <li>Safe and welcoming for students</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Top Universities in Hungary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in Hungary
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Choose from world-renowned institutions ranked globally for their academic excellence and research.
            </p>
          </div>

          {/* Tier 1 Universities */}
          <div className="space-y-12 mb-20">
            {/* University of Debrecen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Debrecen"
                  className="w-full h-full object-cover"
                  fallbackSrc='https://placehold.co/800x600/334155/FFFFFF?text=Debrecen'
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS World #671-680
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">University of Debrecen</h3>
                <p className="text-gray-600 mb-4">Debrecen</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #671-680</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> 7,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 80+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1538</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Computer Science</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>One of the largest universities in Hungary.</li>
                  <li>Highly popular for Medical and Health Science programs.</li>
                  <li>Modern campus with excellent research facilities.</li>
                  <li>Vibrant student city life.</li>
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
                  Stipendium Hungaricum Partner
                </div>
              </div>
            </motion.div>

            {/* Eötvös Loránd University */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Eötvös Loránd University"
                  className="w-full h-full object-cover"
                  fallbackSrc='https://placehold.co/800x600/78350F/FFFFFF?text=ELTE'
                />
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS World #701-710
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-800 mb-2">Eötvös Loránd University (ELTE)</h3>
                <p className="text-gray-600 mb-4">Budapest</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #701-710</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> 4,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 60+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1635</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Humanities</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Social Sciences</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>One of the oldest and most prestigious universities in Hungary.</li>
                  <li>Leading research university in a wide range of fields.</li>
                  <li>Located in the vibrant capital city of Budapest.</li>
                  <li>Strong international student community.</li>
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
                  Stipendium Hungaricum Partner
                </div>
              </div>
            </motion.div>

            {/* University of Szeged */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Szeged"
                  className="w-full h-full object-cover"
                  fallbackSrc='https://placehold.co/800x600/1E40AF/FFFFFF?text=Szeged'
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  QS World #601-610
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">University of Szeged</h3>
                <p className="text-gray-600 mb-4">Szeged</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #601-610</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-500" /> 5,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 70+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1581</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Health Sciences</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Humanities</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Ranked as the best university in Hungary.</li>
                  <li>Located in the "City of Sunshine", a vibrant student town.</li>
                  <li>Greenest university with a strong focus on sustainability.</li>
                  <li>Excellent programs in Health and Natural Sciences.</li>
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
                  Stipendium Hungaricum Partner
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Requirements for Studying in Hungary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Requirements for Studying in Hungary
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
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Proof of English proficiency</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Entrance exam (for some programs)</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Good academic record</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Graduate Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Bachelor's degree from recognized institution</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Minimum GPA may be required</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-500" /> Relevant work experience (for some MBAs)</li>
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
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> IELTS Requirement: 5.5 - 6.5</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> TOEFL Requirement: 70 - 90 iBT</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> Duolingo & other tests may be accepted</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Hungarian-Taught Programs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> B2 level Hungarian proficiency</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-red-500" /> Preparatory language courses available</li>
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
                <FileText className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Document Checklist</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Valid passport</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Completed application form</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Academic transcripts (translated)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Diploma certificates</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> English proficiency scores</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Recommendation letters (2)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Motivation Letter / Personal Statement</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> CV / Resume</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Medical certificate</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Passport photos (recent)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-green-500" /> Proof of application fee payment</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Cost Breakdown - Study in Hungary */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Cost Breakdown - Study in Hungary
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Transparent pricing with no hidden fees. <span className="font-semibold text-blue-700">Great value for a European education!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel: Detailed Cost Structure */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Detailed Cost Structure (EUR)</h3>

              {/* Tuition Fees Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><GraduationCap className="h-7 w-7 mr-3 text-blue-600" /> Tuition Fees (Annual)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg text-gray-700">Business & Arts:</p>
                    <p className="text-gray-600">€4,000 - €7,000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700">Engineering & IT:</p>
                    <p className="text-gray-600">€5,000 - €8,000</p>
                  </div>
                   <div>
                    <p className="font-semibold text-lg text-gray-700">Medicine & Dentistry:</p>
                    <p className="text-gray-600">€12,000 - €16,000</p>
                  </div>
                </div>
              </div>

              {/* Living Expenses Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><Home className="h-7 w-7 mr-3 text-green-600" /> Living Expenses (Monthly)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg text-gray-700">Accommodation:</p>
                    <p className="text-gray-600">€200 - €400</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700">Food & Dining:</p>
                    <p className="text-gray-600">€150 - €250</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700">Transportation & Other:</p>
                    <p className="text-gray-600">€100 - €150</p>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-200">
                    Estimated Monthly Total: <span className="text-blue-600">€450 - €800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: International Comparison & Financial Aid */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">International Comparison</h3>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><Plane className="h-7 w-7 mr-3 text-purple-600" /> Annual Cost Comparison (EUR)</h4>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-blue-50 font-semibold text-blue-800">
                      <td className="px-6 py-4 whitespace-nowrap">🇭🇺 Hungary</td>
                      <td className="px-6 py-4 whitespace-nowrap">€10,000 - €18,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇬🇧 UK</td>
                      <td className="px-6 py-4 whitespace-nowrap">€30,000 - €45,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇮🇪 Ireland</td>
                      <td className="px-6 py-4 whitespace-nowrap">€25,000 - €35,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇳🇱 Netherlands</td>
                      <td className="px-6 py-4 whitespace-nowrap">€20,000 - €30,000</td>
                    </tr>
                     <tr>
                      <td className="px-6 py-4 whitespace-nowrap">🇺🇸 USA</td>
                      <td className="px-6 py-4 whitespace-nowrap">€40,000 - €70,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Scholarship Highlight Box */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-4 flex items-center"><Banknote className="h-7 w-7 mr-3" /> Scholarship Opportunities</h4>
                <p className="text-lg mb-4">
                  <span className="font-bold">Study for FREE with the Stipendium Hungaricum!</span>
                </p>
                <p className="mb-4">
                  <span className="font-semibold">85% of our students receive some form of funding.</span>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Stipendium Hungaricum (Fully Funded)</li>
                  <li>University-specific scholarships</li>
                  <li>Bilateral agreements</li>
                  <li>Erasmus+ Mobility Grants</li>
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

      {/* Section 6: Scholarship Opportunities in Hungary */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Scholarship medal patterns */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Scholarship Opportunities in Hungary
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mt-8">
              Study for FREE with the prestigious Stipendium Hungaricum Scholarship.
            </p>
            <div className="mt-8 bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              85% of our students receive funding
            </div>
          </div>

          {/* Featured Scholarship: Stipendium Hungaricum */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-r from-red-700 to-green-800 rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-500 mb-12"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-2/5 h-64 lg:h-auto p-8 flex items-center justify-center">
                 <img
                  src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Hungarian Parliament"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <Award className="h-24 w-24 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-white mb-2">Stipendium Hungaricum</h3>
                  <p className="text-yellow-200 text-lg">Hungarian Government Scholarship</p>
                  <div className="mt-4 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold inline-block">
                    FULLY FUNDED
                  </div>
                  <p className="text-yellow-100 text-sm mt-2">90% approval through Visago.World</p>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 bg-gray-800/80 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6">Coverage Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <p className="flex items-center text-white"><GraduationCap className="h-6 w-6 mr-3 text-yellow-400" /> Full Tuition Fees</p>
                  <p className="flex items-center text-white"><DollarSign className="h-6 w-6 mr-3 text-yellow-400" /> Monthly Stipend (~€120)</p>
                  <p className="flex items-center text-white"><Home className="h-6 w-6 mr-3 text-yellow-400" /> Free Dormitory Place</p>
                  <p className="flex items-center text-white"><ShieldCheck className="h-6 w-6 mr-3 text-yellow-400" /> Medical Insurance</p>
                </div>
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Application Timeline</h4>
                  <div className="flex items-center space-x-4 text-lg text-white">
                    <CalendarClock className="h-8 w-8 text-yellow-400" />
                    <span>November - January 15th: Application Period</span>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-8 rounded-full font-bold transition-colors shadow-lg"
                    >
                      Apply Now - Free Assessment
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
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
              Step-by-step guidance for hassle-free visa approval for Hungary.
            </p>
            <div className="mt-8 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              <ShieldCheck className="inline-block h-6 w-6 mr-2" /> 95% Visa Success Rate
            </div>
          </div>

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
                  <Award className="h-8 w-8" />
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
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">3. Submit at Embassy</h4>
                <p className="text-sm text-gray-600">Week 6</p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5 mb-8 md:mb-0"
              >
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">4. Receive Visa & Prepare</h4>
                <p className="text-sm text-gray-600">Weeks 7-8</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Student Life in Hungary */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in Hungary
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
                <li>ESN Events & Student Unions</li>
                <li>High-speed WiFi & Smart Classrooms</li>
              </ul>
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
                <li>Thermal Baths & Ruin Bars</li>
                <li>Sziget Music Festival</li>
                <li>Weekend trips to Vienna, Prague</li>
                <li>Rich history and architecture</li>
              </ul>
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
              <h4 className="text-xl font-bold text-gray-900 mb-3">Career Opportunities</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Internship Programs & Job Fairs</li>
                <li>Part-time Work (24 hrs/week)</li>
                <li>Access to EU Job Market</li>
                <li>Post-graduation Work Visa (9 months)</li>
              </ul>
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
              <h4 className="text-xl font-bold text-gray-900 mb-3">Support & Community</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Dedicated International Student Offices</li>
                <li>Erasmus Student Network (ESN)</li>
                <li>Health & Medical Services</li>
                <li>Vibrant international community</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why 95% Choose Visago.World for Hungary */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for Hungary
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mt-8">
              End‑to‑end Hungary guidance—from course shortlisting and scholarships (Stipendium Hungaricum) to visa file review and arrival assistance.
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
              <ul className="text-blue-50 space-y-1">
                <li>High offer & visa approval rates</li>
                <li>Scholarship guidance expertise</li>
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
              <ul className="text-blue-50 space-y-1">
                <li>Applications, SOP/LoR & scholarships</li>
                <li>Residence permit file review</li>
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
              <ul className="text-blue-50 space-y-1">
                <li>Fast‑track processing & transparent fees</li>
                <li>Timeline tracking & dedicated counselor</li>
                <li>Alumni & on‑ground community links</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 11: Contact & Free Consultation */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Hungarian Journey Today!</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mt-8">
              Book your FREE consultation and take the first step.
            </p>
            <div className="mt-8 bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold inline-block shadow-lg">
              Stipendium Hungaricum deadline: Jan 15th!
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
                  <input type="text" placeholder="Preferred Cities (e.g., Budapest, Debrecen)" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Current GPA/Percentage" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="English Test Score (IELTS/TOEFL, optional)" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Scholarship Interest:</p>
                    <div className="flex gap-4">
                      <label className="flex items-center"><input type="radio" name="scholarshipInterest" value="yes" className="mr-2" /> Yes</label>
                      <label className="flex items-center"><input type="radio" name="scholarshipInterest" value="no" className="mr-2" /> No</label>
                    </div>
                  </div>
                  <textarea placeholder="Specific Questions (optional)" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
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

          {/* Social Proof & Final Trust Signals */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Trusted by Thousands</h3>
            <p className="text-lg text-gray-700 mb-8">Join our community of successful students.</p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center text-gray-700">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold">4.9/5 stars</span> (200+ reviews)
              </div>
              <div className="flex items-center text-gray-700">
                <UsersRound className="h-6 w-6 text-blue-500 mr-2" />
                <span className="font-semibold">5 students</span> got scholarships this week!
              </div>
            </div>
            <div className="flex justify-center gap-6 text-gray-700 text-4xl">
              <a href="https://facebook.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Facebook /></a>
              <a href="https://instagram.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><Instagram /></a>
              <a href="https://youtube.com/visagoworld" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
      </section>
      {/* All other sections follow the same structure */}
    </div>
  );
};

export default HungaryPage;