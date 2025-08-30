import React, { useState, useEffect } from 'react';
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
  ShieldCheck,
  FileText,
  CheckCircle,
  Award,
  CalendarClock,
} from 'lucide-react';

const CanadaPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in Canada — Quality Education, Work Opportunities, Safe Living',
      subtitle:
        'Top-ranked universities, generous work rights, and excellent post-graduation pathways',
      stats: 'High Visa Success | 1,000+ Programs | Global Recognition',
    },
    {
      image:
        'https://images.pexels.com/photos/388998/pexels-photo-388998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Work While You Study',
      subtitle:
        'Off-campus work permitted during study and full-time during scheduled breaks',
      stats: 'Internships | Co-op Programs | Career Services',
    },
    {
      image:
        'https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Live in Diverse, Welcoming Cities',
      subtitle:
        'Experience multicultural communities and world-class quality of life',
      stats: 'Toronto | Vancouver | Montreal | Calgary | Ottawa',
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
                  className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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

      {/* Why Study in Canada */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4 relative inline-block">
              Why Study in Canada?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Canada offers globally recognized degrees, flexible work rights, and welcoming communities—making it one of the most sought-after destinations for international students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academic Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Top-ranked universities (UofT, UBC, McGill)</li>
                <li>Research-driven, industry-linked programs</li>
                <li>Supportive campus services for internationals</li>
              </ul>
            </motion.div>

            {/* Work & Career */}
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
                <li>Off-campus work permitted during study</li>
                <li>Full-time during scheduled breaks</li>
                <li>Co-op and internship options available</li>
                <li>Post-Graduation Work Permit (PGWP) up to 3 years</li>
              </ul>
            </motion.div>

            {/* Safe & Inclusive */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe & Inclusive</h3>
              <ul className="space-y-2 text-gray-700">
                <li>High safety and quality-of-life metrics</li>
                <li>Multicultural, diverse communities</li>
                <li>Student support and settlement services</li>
              </ul>
            </motion.div>

            {/* Scholarships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-rose-600 hover:border-rose-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarships & Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>University and provincial scholarships</li>
                <li>Merit and entrance awards</li>
                <li>IELTS/PTE prep and application coaching</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in Canada */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4 relative inline-block">
              Top Universities in Canada
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Explore world-class Canadian institutions known for academic excellence, research impact, and strong employability outcomes.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {/* University of Toronto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of Toronto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 20
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-red-900 mb-2">University of Toronto</h3>
                <p className="text-gray-600 mb-4">Toronto, Ontario</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-red-500" /> 20,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 300+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1827</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Computer Science</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Life Sciences</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Global research powerhouse</li>
                  <li>Top employability rankings</li>
                  <li>Vibrant industry connections in Toronto</li>
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

            {/* University of British Columbia */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/388998/pexels-photo-388998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="University of British Columbia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 40
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-800 mb-2">University of British Columbia (UBC)</h3>
                <p className="text-gray-600 mb-4">Vancouver, British Columbia</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-blue-500" /> 16,000+ Int. Students</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 250+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1908</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Engineering</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Forestry</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Data Science</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Beautiful oceanfront campus</li>
                  <li>Strong sustainability and research focus</li>
                  <li>Top outcomes in engineering and CS</li>
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

            {/* McGill University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="McGill University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  World Top 35
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-indigo-800 mb-2">McGill University</h3>
                <p className="text-gray-600 mb-4">Montreal, Quebec</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gray-700 text-sm"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> QS Top Tier</span>
                  <span className="flex items-center text-gray-700 text-sm"><Users className="h-4 w-4 mr-1 text-indigo-500" /> Global Community</span>
                  <span className="flex items-center text-gray-700 text-sm"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> 250+ Programs</span>
                  <span className="flex items-center text-gray-700 text-sm"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1821</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Medicine</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Chemistry</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Arts & Humanities</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Bilingual city experience (English/French)</li>
                  <li>Top research output and Nobel heritage</li>
                  <li>Strong alumni network</li>
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
              {
                name: 'University of Waterloo',
                city: 'Waterloo, Ontario',
                highlight: 'Co-op Leader',
                img: 'https://images.pexels.com/photos/159539/toronto-downtown-urban-city-159539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'University of Alberta',
                city: 'Edmonton, Alberta',
                highlight: 'Research Power',
                img: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'McMaster University',
                city: 'Hamilton, Ontario',
                highlight: 'Health Sciences',
                img: 'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
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
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-semibold transition-colors"
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
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Typical Annual Costs (CAD)</h2>
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
                  <tr className="bg-red-50/60 font-semibold text-red-800">
                    <td className="px-4 py-3">Tuition (Bachelor)</td>
                    <td className="px-4 py-3">C$15,000 – C$40,000</td>
                    <td className="px-4 py-3">Program and university dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tuition (Master)</td>
                    <td className="px-4 py-3">C$18,000 – C$55,000</td>
                    <td className="px-4 py-3">MBA/Medicine higher</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living (Housing, food, transport)</td>
                    <td className="px-4 py-3">C$12,000 – C$20,000</td>
                    <td className="px-4 py-3">City dependent (Toronto/Vancouver higher)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Health Insurance</td>
                    <td className="px-4 py-3">C$600 – C$900</td>
                    <td className="px-4 py-3">Provincial or university plan</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Study Permit + Biometrics</td>
                    <td className="px-4 py-3">~C$235</td>
                    <td className="px-4 py-3">Subject to IRCC changes</td>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Permit Essentials</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  Proof of funds and Genuine Intent
                </li>
                <li className="flex items-start">
                  <CalendarClock className="h-5 w-5 text-purple-600 mr-2 mt-1" />
                  Typical processing 4–12 weeks (varies by country/intake)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  SDS stream available in select countries
                </li>
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
                <li className="flex items-start">
                  <Briefcase className="h-5 w-5 text-purple-600 mr-2 mt-1" />
                  Off-campus work permitted during study; full-time during scheduled breaks
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  Co-op and internship programs integrated with many degrees
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                  PGWP up to 3 years depending on program and length
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  Pathways toward permanent residence available
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Talk to a Canada Expert
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Study in Canada?</h2>
            <p className="text-xl text-rose-100 mb-8">
              Get a tailored university shortlist, scholarship options, and expert visa guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
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

export default CanadaPage;