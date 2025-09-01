import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Australia',
      type: 'Study Visa',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Visago.world made my dream of studying in Australia come true. Their team guided me through every step, from university selection to visa approval. I received a scholarship worth $15,000!',
      achievement: 'Received $15,000 scholarship at University of Melbourne'
    },
    {
      name: 'Michael Chen',
      country: 'Germany',
      type: 'Work Visa',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'The work visa process seemed overwhelming until I found Visago.world. They not only helped with my visa but also connected me with potential employers. Now I\'m working as a software engineer in Berlin!',
      achievement: 'Secured software engineer position in Berlin'
    },
    {
      name: 'Priya Patel',
      country: 'Canada',
      type: 'Study Visa',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Exceptional service from start to finish. The team at Visago.world was always available to answer my questions and provided excellent guidance for my MBA application in Toronto.',
      achievement: 'Admitted to MBA program at University of Toronto'
    },
    {
      name: 'David Rodriguez',
      country: 'Slovenia',
      type: 'Work Visa',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'I never thought working in Europe would be possible until Visago.world showed me the opportunities in Slovenia. The process was smooth and I now have a great job with excellent work-life balance.',
      achievement: 'Marketing Manager position in Ljubljana'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from thousands of satisfied clients who achieved their dreams with our help.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client photo */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20"
                  />
                </div>

                {/* Testimonial content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-blue-300 mb-4 mx-auto md:mx-0" />
                  
                  <p className="text-lg md:text-xl text-blue-50 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-blue-200">
                      {testimonials[currentTestimonial].type} • {testimonials[currentTestimonial].country}
                    </p>
                  </div>

                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="text-sm text-blue-100 font-medium">
                      🎉 {testimonials[currentTestimonial].achievement}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${ index === currentTestimonial ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">2000+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200">Countries</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-200">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;