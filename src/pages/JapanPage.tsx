import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, DollarSign, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Home, FlaskConical, Heart, Award, ShieldCheck, CalendarClock, FileText, Wallet, Utensils, Bus, Wifi, Book, MapPin, Star, BriefcaseBusiness, Lightbulb, BookOpenText, UtensilsCrossed, ShoppingBag, Smartphone, Map, HeartPulse, UsersRound, CalendarCheck, CheckCircle, Building, PhoneCall, MailOpen, MapPinned } from 'lucide-react';

const JapanPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in Japan - Where Tradition Meets Innovation',
      subtitle: 'Join 300,000+ international students in the land of cutting-edge technology and rich culture',
      stats: '98% Success Rate | 15+ Years Experience | 60+ Countries Served',
    },
    {
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'World-Class Education & Advanced Technology',
      subtitle: 'Access Nobel Prize-winning research and cutting-edge innovation',
      stats: 'Home to 39+ Universities in QS Top 500',
    },
    {
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Experience Unique Japanese Culture',
      subtitle: 'Immerse yourself in harmony, discipline, and continuous improvement',
      stats: 'Learn Japanese + Gain Global Perspective',
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

      {/* Why Study in Japan Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4 relative inline-block">
              Why Study in Japan?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Japan offers world-class education, cutting-edge technology, and rich cultural experiences, attracting over 300,000 international students annually to this land of innovation and tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Academic Excellence */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">39 universities</span> in QS Top 500</li>
                <li>World leader in robotics & AI research</li>
                <li>Nobel Prize-winning faculty</li>
                <li>Advanced technology facilities</li>
                <li>Strong industry partnerships</li>
              </ul>
            </motion.div>

            {/* Card 2: Affordable Education */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">50-60% Lower Costs</span> than US/UK</li>
                <li>Tuition fees: $3,000-10,000/year</li>
                <li>Living costs: $8,000-12,000/year</li>
                <li><span className="font-semibold">MEXT Scholarships</span> available</li>
                <li>Part-time work permitted (28 hours/week)</li>
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
                <li><span className="font-semibold">3rd Largest Global Economy</span></li>
                <li>Tech giants: Sony, Nintendo, Toyota</li>
                <li>High demand for Japan experience</li>
                <li>Post-graduation work visa available</li>
                <li>Japanese language advantage globally</li>
              </ul>
            </motion.div>

            {/* Card 4: Cultural Immersion */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Immersion</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Unique Japanese Culture</span></li>
                <li>Discipline and continuous improvement</li>
                <li>Traditional arts & modern innovation</li>
                <li>Safe and clean environment</li>
                <li>Rich festivals and traditions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in Japan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4 relative inline-block">
              Top Universities in Japan
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Study at world-renowned Japanese institutions known for their academic excellence, cutting-edge research, and innovation in technology.
            </p>
          </div>

          {/* Tier 1 Universities */}
          <div className="space-y-12 mb-20">
            {/* University of Tokyo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Tokyo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #23
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-900 mb-2">University of Tokyo (Todai)</h3>
                <p className="text-gray-600 mb-4">Tokyo</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #23</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> 4,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 100+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1877</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Natural Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Japan's most prestigious university</li>
                  <li>11 Nobel Prize winners among faculty/alumni</li>
                  <li>Leading research in AI and robotics</li>
                  <li>Strong government and industry connections</li>
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
                  90% MEXT Scholarship Rate
                </div>
              </div>
            </motion.div>

            {/* Kyoto University */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Kyoto University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #33
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-800 mb-2">Kyoto University</h3>
                <p className="text-gray-600 mb-4">Kyoto</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #33</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> 3,200+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 80+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1897</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Research</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Chemistry</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Historic cultural city location</li>
                  <li>iPS cell research pioneer</li>
                  <li>Liberal academic atmosphere</li>
                  <li>Traditional Japanese architecture campus</li>
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
                  85% Scholarship Rate
                </div>
              </div>
            </motion.div>

            {/* Osaka University */}
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
                  alt="Osaka University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World #68
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-purple-800 mb-2">Osaka University</h3>
                <p className="text-gray-600 mb-4">Osaka</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #68</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-purple-500" /> 2,800+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 60+ English Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1931</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Business</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Strong in engineering and technology</li>
                  <li>Business hub location advantages</li>
                  <li>Active international exchange programs</li>
                  <li>Modern research facilities</li>
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
                <div className="mt-4 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  80% Scholarship Rate
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tier 2 Universities */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Other Highly Ranked Universities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tokyo Institute of Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tokyo Institute of Technology"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tokyo Institute of Technology</h4>
                <p className="text-gray-600 text-sm mb-3">Tokyo</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #91 | Engineering & Technology Excellence
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-semibold transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Tohoku University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tohoku University"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tohoku University</h4>
                <p className="text-gray-600 text-sm mb-3">Sendai</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #113 | Research-Intensive University
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-semibold transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Nagoya University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nagoya University"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Nagoya University</h4>
                <p className="text-gray-600 text-sm mb-3">Nagoya</p>
                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS #115 | Strong in Sciences & Engineering
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-semibold transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Study Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Popular Study Programs in Japan
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Explore cutting-edge programs designed to prepare you for the future, with Japan leading in technology, engineering, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engineering & Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-red-600 hover:border-red-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FlaskConical className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering & Technology</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Robotics & Automation</li>
                <li>• Artificial Intelligence</li>
                <li>• Mechanical Engineering</li>
                <li>• Electronics & Computer Science</li>
                <li>• Automotive Engineering</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 2-4 years</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">High Demand</span>
              </div>
            </motion.div>

            {/* Business & Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business & Management</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• International Business</li>
                <li>• MBA Programs</li>
                <li>• Supply Chain Management</li>
                <li>• Digital Marketing</li>
                <li>• Entrepreneurship</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 1-3 years</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Global Focus</span>
              </div>
            </motion.div>

            {/* Medicine & Health Sciences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-600 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <HeartPulse className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medicine & Health Sciences</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Medical Research</li>
                <li>• Biotechnology</li>
                <li>• Public Health</li>
                <li>• Nursing</li>
                <li>• Pharmaceutical Sciences</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 4-6 years</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Research Heavy</span>
              </div>
            </motion.div>

            {/* Natural Sciences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-600 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Sciences</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Physics & Astronomy</li>
                <li>• Chemistry</li>
                <li>• Materials Science</li>
                <li>• Environmental Science</li>
                <li>• Mathematics</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 2-5 years</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Nobel Legacy</span>
              </div>
            </motion.div>

            {/* Japanese Studies & Culture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-pink-600 hover:border-pink-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <BookOpenText className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Japanese Studies & Culture</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Japanese Language</li>
                <li>• Cultural Studies</li>
                <li>• History & Literature</li>
                <li>• International Relations</li>
                <li>• Translation & Interpretation</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 1-4 years</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">Cultural Deep Dive</span>
              </div>
            </motion.div>

            {/* Arts & Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600 hover:border-orange-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arts & Design</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Animation & Game Design</li>
                <li>• Manga & Illustration</li>
                <li>• Fashion Design</li>
                <li>• Architecture</li>
                <li>• Digital Media Arts</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: 2-4 years</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Creative Industry</span>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore Your Future?</h3>
            <p className="text-xl mb-8 opacity-90">
              Find the perfect program that matches your passion and career goals in Japan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors hover:bg-gray-100"
                >
                  Get Program Details
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent transition-colors hover:bg-white hover:text-red-600"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4 relative inline-block">
              Application Process for Japan
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Follow our streamlined application process designed to make your journey to studying in Japan as smooth as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center relative"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-4">Initial Consultation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Free assessment call</li>
                <li>• Course selection guidance</li>
                <li>• University recommendations</li>
                <li>• Timeline planning</li>
              </ul>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center relative"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Document Preparation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Academic transcripts</li>
                <li>• Language certificates</li>
                <li>• Statement of purpose</li>
                <li>• Recommendation letters</li>
              </ul>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center relative"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Application Submission</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• University applications</li>
                <li>• Scholarship applications</li>
                <li>• Application fee payment</li>
                <li>• Interview preparation</li>
              </ul>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white rotate-90" />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center relative"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Visa & Departure</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Student visa processing</li>
                <li>• Accommodation booking</li>
                <li>• Pre-departure orientation</li>
                <li>• Airport assistance</li>
              </ul>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Application Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="h-10 w-10 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Spring Intake (April)</h4>
                <p className="text-gray-600 text-sm">Apply by: November previous year</p>
                <p className="text-gray-600 text-sm">Visa processing: January-March</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Fall Intake (September)</h4>
                <p className="text-gray-600 text-sm">Apply by: April same year</p>
                <p className="text-gray-600 text-sm">Visa processing: June-August</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarClock className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Processing Time</h4>
                <p className="text-gray-600 text-sm">University decision: 2-4 months</p>
                <p className="text-gray-600 text-sm">Visa processing: 1-2 months</p>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
              <div className="text-gray-500 text-sm">University Admissions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Scholarship Rate</div>
              <div className="text-gray-500 text-sm">MEXT & University Scholarships</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">3-4</div>
              <div className="text-gray-700 font-medium">Months</div>
              <div className="text-gray-500 text-sm">Average Processing Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years</div>
              <div className="text-gray-500 text-sm">Experience in Japan</div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Application Today
              </motion.button>
            </Link>
            <p className="text-gray-600 mt-4">Get expert guidance throughout your application journey</p>
          </div>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 relative inline-block">
              Admission Requirements for Japan
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Meet the requirements to study at top Japanese universities and secure your place in world-class education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Academic Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Academic Requirements</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Bachelor's Programs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High school completion (12 years education)</li>
                    <li>• Minimum GPA 3.0/4.0 or equivalent</li>
                    <li>• SAT/ACT scores (for some programs)</li>
                    <li>• EJU (Examination for Japanese University) may be required</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Master's Programs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bachelor's degree (16 years education)</li>
                    <li>• Minimum GPA 3.2/4.0 or equivalent</li>
                    <li>• Research proposal (for research programs)</li>
                    <li>• Relevant academic background</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">PhD Programs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Master's degree or equivalent</li>
                    <li>• Strong research background</li>
                    <li>• Detailed research proposal</li>
                    <li>• Publications (preferred)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Language Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Book className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Language Requirements</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">English Programs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• IELTS: 6.0-7.0 overall</li>
                    <li>• TOEFL iBT: 79-100</li>
                    <li>• TOEIC: 730-900</li>
                    <li>• PTE Academic: 58-65</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Japanese Programs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• JLPT N2 or N1 level</li>
                    <li>• EJU Japanese score 200+</li>
                    <li>• BJT (Business Japanese) 400+</li>
                    <li>• University entrance exam</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center text-green-800 mb-2">
                    <ShieldCheck className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Language Support</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Many universities offer preparatory Japanese language courses for international students.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Financial Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-800">Financial Requirements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">¥2-3M</div>
                <div className="text-gray-700 font-medium mb-2">Annual Tuition</div>
                <div className="text-gray-500 text-sm">($15,000-22,000 USD)</div>
                <div className="text-gray-500 text-sm">Varies by university type</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">¥1.5-2M</div>
                <div className="text-gray-700 font-medium mb-2">Living Expenses</div>
                <div className="text-gray-500 text-sm">($11,000-15,000 USD)</div>
                <div className="text-gray-500 text-sm">Per year including accommodation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">¥3M+</div>
                <div className="text-gray-700 font-medium mb-2">Bank Statement</div>
                <div className="text-gray-500 text-sm">($22,000+ USD)</div>
                <div className="text-gray-500 text-sm">Proof of financial capability</div>
              </div>
            </div>
          </div>

          {/* Document Checklist */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">Required Documents</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Academic Documents
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Official transcripts</li>
                  <li>• Degree certificates</li>
                  <li>• Academic recommendations</li>
                  <li>• Research proposal (for research programs)</li>
                  <li>• Portfolio (for art/design programs)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Personal Documents
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid passport</li>
                  <li>• Passport-sized photographs</li>
                  <li>• Statement of purpose</li>
                  <li>• CV/Resume</li>
                  <li>• Health certificate</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Financial Documents
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bank statements</li>
                  <li>• Income proof</li>
                  <li>• Scholarship letters (if applicable)</li>
                  <li>• Financial guarantee letter</li>
                  <li>• Tax returns</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Language Certificates
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• IELTS/TOEFL scores</li>
                  <li>• JLPT certificate</li>
                  <li>• EJU scores (if required)</li>
                  <li>• University language test</li>
                  <li>• Medium of instruction letter</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-4">Special Requirements & Tips</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-yellow-300">For MEXT Scholarship:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Age limits apply (under 35 for most programs)</li>
                  <li>• Must not hold Japanese government scholarships</li>
                  <li>• Health certificate required</li>
                  <li>• Country nomination or university recommendation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-yellow-300">Pro Tips:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Start application 12-18 months early</li>
                  <li>• Contact professors before applying</li>
                  <li>• Apostille all documents</li>
                  <li>• Get documents translated by certified translators</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Requirements Checklist
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Japan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4 relative inline-block">
              Living in Japan as a Student
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-green-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Experience life in one of the world's most unique countries while pursuing your education in a safe, modern, and culturally rich environment.
            </p>
          </div>

          {/* Cost of Living */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Monthly Living Costs</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><Home className="h-4 w-4 mr-2" />Accommodation</span>
                  <span className="font-semibold text-gray-900">¥40,000-80,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><Utensils className="h-4 w-4 mr-2" />Food & Groceries</span>
                  <span className="font-semibold text-gray-900">¥30,000-50,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><Bus className="h-4 w-4 mr-2" />Transportation</span>
                  <span className="font-semibold text-gray-900">¥10,000-15,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><Wifi className="h-4 w-4 mr-2" />Internet & Phone</span>
                  <span className="font-semibold text-gray-900">¥8,000-12,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><Book className="h-4 w-4 mr-2" />Study Materials</span>
                  <span className="font-semibold text-gray-900">¥5,000-10,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 flex items-center"><ShoppingBag className="h-4 w-4 mr-2" />Personal Expenses</span>
                  <span className="font-semibold text-gray-900">¥15,000-25,000</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-100 px-4 rounded-lg mt-4">
                  <span className="font-semibold text-green-800">Total Monthly Cost</span>
                  <span className="font-bold text-green-900 text-lg">¥110,000-190,000</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">≈ $800-1,400 USD per month</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">City Comparison</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Tokyo (Most Expensive)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">¥150,000-220,000/month</p>
                  <p className="text-gray-600 text-sm">World-class facilities, unlimited opportunities, highest living costs</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-blue-500 mr-2" />
                    Osaka (Moderate)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">¥120,000-180,000/month</p>
                  <p className="text-gray-600 text-sm">Great food culture, business hub, balanced cost of living</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Kyoto (Cultural)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">¥110,000-160,000/month</p>
                  <p className="text-gray-600 text-sm">Historic charm, traditional culture, student-friendly</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-purple-500 mr-2" />
                    Regional Cities (Affordable)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">¥80,000-130,000/month</p>
                  <p className="text-gray-600 text-sm">Lower costs, authentic Japanese experience, smaller communities</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-blue-800 text-sm font-medium">💡 Pro Tip: Regional cities offer excellent value while maintaining high quality of life and education standards.</p>
              </div>
            </motion.div>
          </div>

          {/* Accommodation Options */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Accommodation Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* University Dormitory */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-3">University Dormitory</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">¥20,000-50,000</div>
                <div className="text-sm text-gray-500 mb-4">per month</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cheapest option</li>
                  <li>• On-campus convenience</li>
                  <li>• International community</li>
                  <li>• Limited availability</li>
                </ul>
              </motion.div>

              {/* Share House */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <UsersRound className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-3">Share House</h4>
                <div className="text-2xl font-bold text-green-600 mb-2">¥40,000-70,000</div>
                <div className="text-sm text-gray-500 mb-4">per month</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cultural exchange</li>
                  <li>• Furnished rooms</li>
                  <li>• Flexible contracts</li>
                  <li>• Social environment</li>
                </ul>
              </motion.div>

              {/* Private Apartment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-purple-800 mb-3">Private Apartment</h4>
                <div className="text-2xl font-bold text-purple-600 mb-2">¥60,000-120,000</div>
                <div className="text-sm text-gray-500 mb-4">per month</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complete privacy</li>
                  <li>• Your own space</li>
                  <li>• Long-term stability</li>
                  <li>• Higher initial costs</li>
                </ul>
              </motion.div>

              {/* Host Family */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="text-lg font-bold text-pink-800 mb-3">Host Family</h4>
                <div className="text-2xl font-bold text-pink-600 mb-2">¥70,000-100,000</div>
                <div className="text-sm text-gray-500 mb-4">per month</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cultural immersion</li>
                  <li>• Meals included</li>
                  <li>• Japanese practice</li>
                  <li>• Family experience</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Daily Life & Lifestyle */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-indigo-800 text-center mb-12">Daily Life & Lifestyle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Transportation */}
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-indigo-800 mb-3">Transportation</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• World's best public transport</li>
                  <li>• Student discounts available</li>
                  <li>• Punctual and reliable</li>
                  <li>• Bicycle-friendly cities</li>
                  <li>• IC cards for easy payment</li>
                </ul>
              </div>

              {/* Food Culture */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">Food Culture</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Diverse and healthy cuisine</li>
                  <li>• Affordable student meals</li>
                  <li>• Convenience store options</li>
                  <li>• University cafeterias</li>
                  <li>• Halal options available</li>
                </ul>
              </div>

              {/* Technology */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-purple-800 mb-3">Technology</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Ultra-fast internet</li>
                  <li>• Cashless payment systems</li>
                  <li>• Advanced mobile apps</li>
                  <li>• Free WiFi everywhere</li>
                  <li>• Tech-integrated daily life</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800">Part-Time Work Opportunities</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Work Regulations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Maximum 28 hours per week</li>
                  <li>• Work permit required</li>
                  <li>• ¥900-1,500 per hour average</li>
                  <li>• Flexible scheduling available</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Popular Job Types</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• English tutoring/conversation</li>
                  <li>• Restaurant/convenience store</li>
                  <li>• Translation services</li>
                  <li>• Research assistant</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="text-orange-800 font-medium">Monthly earnings potential: ¥80,000-120,000 with part-time work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life & Culture Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4 relative inline-block">
              Student Life & Japanese Culture
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Immerse yourself in Japan's unique culture while building lifelong friendships and unforgettable memories during your study abroad journey.
            </p>
          </div>

          {/* Cultural Experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Landmark className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Traditional Culture</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Tea ceremony experiences</li>
                <li>• Temple and shrine visits</li>
                <li>• Traditional festivals (matsuri)</li>
                <li>• Kimono wearing experiences</li>
                <li>• Calligraphy and origami classes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Student Community</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• International student clubs</li>
                <li>• Language exchange programs</li>
                <li>• University sports clubs</li>
                <li>• Cultural societies</li>
                <li>• Student volunteer activities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Travel & Exploration</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Mount Fuji hiking trips</li>
                <li>• Cherry blossom viewing</li>
                <li>• Hot spring (onsen) visits</li>
                <li>• Historical city tours</li>
                <li>• Seasonal festival participation</li>
              </ul>
            </motion.div>
          </div>

          {/* Safety & Support */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">Safety & Support System</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">#2</div>
                <div className="text-gray-700 font-medium">Safest Country</div>
                <div className="text-gray-500 text-sm">Global Peace Index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Student Support</div>
                <div className="text-gray-500 text-sm">University services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-700 font-medium">Crime-Free Areas</div>
                <div className="text-gray-500 text-sm">Around universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-700 font-medium">Support Services</div>
                <div className="text-gray-500 text-sm">For international students</div>
              </div>
            </div>
          </div>

          {/* Language Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <BookOpenText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800">Japanese Language Learning</h3>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Free Japanese classes at most universities
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Language exchange buddy programs
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Immersive learning environment
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  JLPT preparation support
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Why Students Love Japan</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>"Incredible blend of tradition and modernity"</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>"Safest place I've ever lived"</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>"Amazing food culture and experiences"</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>"Friendly and helpful people"</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>"Life-changing cultural immersion"</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Japan Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of successful students who chose Japan for their international education. Let us guide you through every step of your application process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-100"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold bg-transparent transition-all duration-300"
                >
                  Download Guide
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <PhoneCall className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="opacity-80">+880 1234-567890</p>
              </div>
              <div>
                <MailOpen className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="opacity-80">japan@visago.world</p>
              </div>
              <div>
                <MapPinned className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="opacity-80">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JapanPage;
