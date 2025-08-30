import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, DollarSign, Briefcase, Landmark, Trophy, Users, BookOpen, CalendarDays, ArrowRight, Wallet, Home, Utensils, Bus, ShieldCheck, FileText, CheckCircle, Award, CalendarClock } from 'lucide-react';

const MaltaPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/532387/pexels-photo-532387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Study in Malta — EU Education in English',
      subtitle: 'Safe, sunny, and student-friendly Mediterranean lifestyle',
      stats: 'Schengen Access | Work Rights | Affordable EU Option',
    },
    {
      image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Globally Recognized, Industry-Linked Programs',
      subtitle: 'Practical learning with growing tech and finance sectors',
      stats: 'University of Malta | MCAST | Global Colleges',
    },
    {
      image: 'https://images.pexels.com/photos/169434/pexels-photo-169434.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      headline: 'Live, Learn, Explore',
      subtitle: 'Warm climate, rich culture, excellent quality of life',
      stats: 'English Spoken Widely | Friendly Community',
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

      {/* Why Study in Malta */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
              Why Study in Malta?
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-red-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              English-taught programs, affordable EU education, and a safe, friendly island nation with great work and travel opportunities.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">English-Taught Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Wide range of programs in English</li>
                <li>International faculty and peers</li>
                <li>Practical, industry-aligned curricula</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable EU Option</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Competitive tuition vs Western EU</li>
                <li>Manageable living costs</li>
                <li>Part-time work permitted</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Growing tech, finance, iGaming sectors</li>
                <li>Internships and industry exposure</li>
                <li>EU networking and mobility</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-cyan-600 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mediterranean Lifestyle</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Warm climate and coastal living</li>
                <li>Rich history and culture</li>
                <li>Easy Schengen travel</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Universities in Malta */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block">
              Top Universities in Malta
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Reputable institutions focused on practical learning and strong industry partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/590848/pexels-photo-590848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="University of Malta"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">University of Malta</h3>
                <p className="text-gray-600 mb-4">Msida (near Valletta)</p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-700">
                  <span className="flex items-center"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Research Impact</span>
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-blue-500" /> Diverse Int. Community</span>
                  <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> English Programs</span>
                  <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1 text-purple-500" /> Est. 1592</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>EU research collaborations</li>
                  <li>Industry partnerships and internships</li>
                  <li>Modern campus and coastal lifestyle</li>
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MCAST"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-cyan-800 mb-2">MCAST — Malta College of Arts, Science & Technology</h3>
                <p className="text-gray-600 mb-4">Paola (Main Campus)</p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-700">
                  <span className="flex items-center"><Trophy className="h-4 w-4 mr-1 text-yellow-500" /> Vocational Strength</span>
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-cyan-500" /> Industry Links</span>
                  <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1 text-green-500" /> Practical Programs</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Hands-on, career-focused pathways</li>
                  <li>Employer partnerships and labs</li>
                  <li>Strong track into Maltese job market</li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="flex items-center text-cyan-600 hover:text-cyan-800 font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Study Costs & Living in Malta
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Typical tuition and monthly living expenses for international students in Malta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tuition</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Bachelor: €6,000–€12,000/year</li>
                <li>Master: €8,000–€15,000/year</li>
              </ul>
            </motion.div>

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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accommodation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>€350–€700/month (shared or student housing)</li>
                <li>Apply early for best options</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Food</h3>
              <ul className="space-y-2 text-gray-700">
                <li>€150–€250/month groceries</li>
                <li>Save with home cooking</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Bus className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport</h3>
              <ul className="space-y-2 text-gray-700">
                <li>€26–€40/month (student passes)</li>
                <li>Walkable cities, good buses</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements and Application */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Entry Requirements</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Academic transcripts (SSC/HSC/Bachelor as applicable)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">English proficiency (IELTS 5.5–6.5 or equivalent; program-specific)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Financial proof for tuition and living costs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Passport, SOP, CV, and references</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <ShieldCheck className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Application Process</h2>
              </div>
              <ol className="space-y-4 list-decimal list-inside text-gray-700">
                <li>Choose your program and institution (UM, MCAST, private colleges).</li>
                <li>Prepare documents and apply for admission.</li>
                <li>Receive offer letter and pay initial fees.</li>
                <li>Apply for Malta study visa with financial and accommodation proof.</li>
                <li>Book flights and arrival arrangements.</li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarships & Funding */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4 relative inline-block">
              Scholarships & Funding
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-amber-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-amber-900/80 max-w-3xl mx-auto">
              Reduce your total cost through institutional discounts, merit grants, and part-time work flexibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-amber-500"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">University Scholarships</h3>
              <p className="text-gray-700">Merit-based fee reductions and special grants for international students.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-green-500"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Tuition Discounts</h3>
              <p className="text-gray-700">Early-bird, alumni-linked and partner college bursaries reduce tuition.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-500"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Financial Guidance</h3>
              <p className="text-gray-700">Get help structuring finances and documents for visa and enrollment.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-500"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Assistantships & Part-time</h3>
              <p className="text-gray-700">Gain experience and offset living costs with student-friendly jobs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Programs in Malta */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Popular Programs in Malta
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Industry-linked courses designed for global careers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="h-7 w-7 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">ICT & Software</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Software Engineering, Data Science</li>
                <li>Cybersecurity, Cloud & DevOps</li>
                <li>AI & Emerging Tech</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-7 w-7 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Business & Finance</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Accounting & Finance, FinTech</li>
                <li>International Business, Marketing</li>
                <li>Management & Entrepreneurship</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-4">
                <Landmark className="h-7 w-7 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Hospitality & Tourism</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Hotel & Tourism Management</li>
                <li>Event & Destination Management</li>
                <li>Culinary & Service Operations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Living Costs */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 relative inline-block">
              Detailed Living Costs (Monthly)
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-blue-900/80">Estimates vary by lifestyle and city area.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Item</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Estimated Cost</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-4 py-3">Accommodation</td>
                  <td className="px-4 py-3">€350–€700</td>
                  <td className="px-4 py-3">Shared/Student housing</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3">Food & Groceries</td>
                  <td className="px-4 py-3">€150–€250</td>
                  <td className="px-4 py-3">Cook at home to save</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Transport</td>
                  <td className="px-4 py-3">€26–€40</td>
                  <td className="px-4 py-3">Student bus passes</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3">Utilities</td>
                  <td className="px-4 py-3">€50–€90</td>
                  <td className="px-4 py-3">Electricity, water, gas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Internet & Mobile</td>
                  <td className="px-4 py-3">€20–€35</td>
                  <td className="px-4 py-3">Bundles available</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3">Miscellaneous</td>
                  <td className="px-4 py-3">€50–€100</td>
                  <td className="px-4 py-3">Leisure, stationery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              Tip: Sharing accommodation significantly reduces monthly expenses.
            </div>
          </div>
        </div>
      </section>

      {/* Student Life in Malta */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Student Life in Malta
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Enjoy a safe, sunny and student-friendly lifestyle with excellent campus facilities, practical learning environments, and strong international communities.
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
                <li>Student residences and shared apartments</li>
                <li>Private rentals near campus areas</li>
                <li>Apply early in Msida, Sliema, St. Julian’s</li>
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
                <li>Opportunities in hospitality, ICT, finance</li>
                <li>Flexible student-friendly roles</li>
                <li>University career services and job fairs</li>
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
                <li>Student bus passes and discounted fares</li>
                <li>Compact island with easy connectivity</li>
                <li>Quick Schengen travel to EU destinations</li>
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
                <li>Safe, welcoming environment for students</li>
                <li>Health insurance and clinic access guidance</li>
                <li>On-campus wellbeing and support</li>
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
                <li>Affordable groceries and student cafeterias</li>
                <li>Halal/vegetarian options widely available</li>
                <li>Student discounts at major stores</li>
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
                <li>Student unions, clubs, and societies</li>
                <li>Coastal lifestyle and outdoor activities</li>
                <li>International, English-speaking community</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work & Post-Study Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Work & Post-Study Opportunities
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-emerald-500 rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-7 w-7 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Work While Studying</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Part-time: typically up to 20 hours/week during term</li>
                <li>Wages vary by role and experience</li>
                <li>Good opportunities in hospitality, retail, ICT support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 shadow"
            >
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-7 w-7 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">After Graduation</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Pathways into Maltese job market (ICT, finance, iGaming)</li>
                <li>EU networking and mobility advantage</li>
                <li>Institution career centers assist with internships/jobs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Timeline & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Visa Timeline & Documents
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-28 bg-gray-800 rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { step: 'Counseling', desc: 'Shortlist programs & institute' },
              { step: 'Offer', desc: 'Apply & receive conditional offer' },
              { step: 'Prepare', desc: 'Arrange funds & accommodation' },
              { step: 'Visa', desc: 'Submit study visa application' },
              { step: 'Fly', desc: 'Get decision & travel to Malta' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow border"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 mx-auto mb-3 flex items-center justify-center">
                  <CalendarClock className="h-6 w-6" />
                </div>
                <div className="font-bold text-gray-900">{s.step}</div>
                <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Documents Checklist</h3>
              <div className="space-y-3">
                {[
                  'Valid passport & photos',
                  'Offer/Acceptance letter',
                  'Proof of funds & bank statements',
                  'Tuition payment evidence (if applicable)',
                  'Accommodation arrangement',
                  'Travel & health insurance',
                  'Academic transcripts & certificates',
                  'SOP/CV & references (as needed)'
                ].map((doc) => (
                  <div key={doc} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Program & university selection</li>
                <li>Application & documentation review</li>
                <li>Visa file guidance and checklists</li>
                <li>Accommodation & pre-departure briefing</li>
              </ul>
              <Link to="/contact" className="inline-block mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors"
                >
                  Talk to an Expert
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why 95% Choose Visago.World for Malta */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Why 95% Choose Visago.World for Malta
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mt-8">
              End‑to‑end support for Malta—course selection, scholarships, visa file review, and arrival assistance.
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
                <li>Partner network across Malta</li>
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
                <li>Visa file review and interview prep</li>
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
                <li>On‑ground alumni/community connections</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Malta Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Our expert consultants will guide you through every step.</p>
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

export default MaltaPage;