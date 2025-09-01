import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'How long does visa processing take?',
      answer: 'Processing times vary by country and visa type. Study visas typically take 4-8 weeks, work visas 6-12 weeks, and tourist visas 2-4 weeks. We provide regular updates throughout the process and work to expedite whenever possible.'
    },
    {
      question: 'What documents are required for visa applications?',
      answer: 'Required documents vary by visa type and destination country. Common documents include passport, educational certificates, financial statements, medical certificates, and language proficiency scores. We provide a comprehensive checklist specific to your application.'
    },
    {
      question: 'Do I need IELTS for study visas?',
      answer: 'Most English-speaking countries require IELTS or equivalent English proficiency tests for study visas. However, some universities offer conditional admission or alternative English tests. We can guide you on the best options for your situation.'
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain a 95% success rate across all visa categories. Our high success rate is due to thorough document preparation, expert guidance, and strong relationships with embassies and consulates worldwide.'
    },
    {
      question: 'Can I apply for multiple countries simultaneously?',
      answer: 'Yes, you can apply to multiple countries to increase your chances of success. We help you strategize the best approach, timing, and documentation for multiple applications while ensuring compliance with each country\'s requirements.'
    },
    {
      question: 'What if my visa gets rejected?',
      answer: 'If your visa is rejected, we analyze the reasons and help you reapply with a stronger application. We also offer a money-back guarantee in certain cases. Our team works closely with you to address any issues and improve your chances of approval.'
    },
    {
      question: 'Do you provide post-visa services?',
      answer: 'Yes, we offer comprehensive post-visa services including pre-departure orientation, accommodation assistance, airport pickup arrangements, and ongoing support during your initial settlement period in the destination country.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our service fees vary based on the visa type, destination country, and level of service required. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our visa processing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  ) }
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? Our expert consultants are here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-colors"
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;