import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Clock, DollarSign, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const [counters, setCounters] = useState({
    approval: 0,
    experience: 0,
    countries: 0,
    clients: 0
  });

  const targetValues = {
    approval: 95,
    experience: 10,
    countries: 50,
    clients: 2000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Expert Visa Consultants',
      description: 'Our certified consultants have years of experience in visa processing'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'Complete transparency in our process with regular updates'
    },
    {
      icon: Award,
      title: 'Document Verification',
      description: 'Thorough document review to ensure 100% accuracy'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your visa-related queries'
    },
    {
      icon: DollarSign,
      title: 'Money-back Guarantee',
      description: 'Full refund if we fail to deliver on our promises'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick turnaround times without compromising on quality'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Visago.world?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With our proven track record and commitment to excellence, we make your visa journey smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Statistics */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {counters.approval}%
              </div>
              <div className="text-gray-600 font-medium">Visa Approval Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">
                {counters.experience}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {counters.countries}+
              </div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-600 mb-2">
                {counters.clients}+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;