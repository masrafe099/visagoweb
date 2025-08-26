import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Settings, CheckCircle } from 'lucide-react';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Free consultation to assess your profile and visa options',
      details: 'Our expert consultants will evaluate your background, goals, and eligibility for various visa categories. We provide personalized recommendations based on your unique situation.'
    },
    {
      icon: FileText,
      title: 'Document Collection',
      description: 'Comprehensive checklist and assistance with document preparation',
      details: 'We provide a detailed checklist of required documents and guide you through the preparation process. Our team reviews each document to ensure accuracy and completeness.'
    },
    {
      icon: Settings,
      title: 'Application Processing',
      description: 'Expert review and submission to respective authorities',
      details: 'Our experienced team carefully reviews your application, ensures all requirements are met, and submits it to the appropriate authorities with proper tracking.'
    },
    {
      icon: CheckCircle,
      title: 'Visa Approval',
      description: 'Receive your visa and pre-departure guidance',
      details: 'Once approved, we help you understand your visa conditions and provide comprehensive pre-departure guidance to ensure a smooth transition to your destination.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the visa application process to make it as smooth and efficient as possible for our clients.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: '0%' }}
              whileInView={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onViewportEnter={() => setActiveStep(index)}
                  className="relative"
                >
                  {/* Step circle */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-400 border-2 border-gray-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                  </div>

                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    {/* Expandable details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <p className="text-sm text-gray-700">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Start Your Application Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;