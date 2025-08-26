import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, CheckCircle, Star } from 'lucide-react';

const TrustSignals = () => {
  const certifications = [
    {
      name: 'ICCRC Certified',
      description: 'Immigration Consultants of Canada Regulatory Council',
      icon: Shield
    },
    {
      name: 'MARA Registered',
      description: 'Migration Agents Registration Authority - Australia',
      icon: Award
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certified',
      icon: CheckCircle
    },
    {
      name: 'NAFSA Member',
      description: 'Association of International Educators',
      icon: Globe
    }
  ];

  const partnerships = [
    {
      name: 'Embassy Partnerships',
      count: '25+',
      description: 'Direct partnerships with embassies worldwide'
    },
    {
      name: 'University Collaborations',
      count: '500+',
      description: 'Partner universities across the globe'
    },
    {
      name: 'Employer Network',
      count: '200+',
      description: 'Trusted employers for job placements'
    },
    {
      name: 'Success Stories',
      count: '2000+',
      description: 'Successful visa applications processed'
    }
  ];

  const securityFeatures = [
    'SSL Encrypted Data Transfer',
    'GDPR Compliant',
    'Secure Document Storage',
    'Privacy Protected',
    'Regular Security Audits',
    'Confidentiality Guaranteed'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications, partnerships, and security measures ensure you receive the highest quality service with complete peace of mind.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Global Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {partnership.count}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {partnership.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {partnership.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Security & Privacy</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Your personal information and documents are protected with bank-level security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Reviews Summary */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-3">4.9/5</span>
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Based on 2,000+ client reviews
          </p>
          <p className="text-sm text-gray-500">
            "Excellent service, professional team, highly recommended!" - Most common feedback
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;