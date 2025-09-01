import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      className="flex justify-start mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-2">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">
          <Bot size={14} />
        </div>

        {/* Typing Bubble */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Typing Animation */}
          <div className="flex space-x-1 items-center">
            <span className="text-sm text-gray-600">Thinking</span>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Message Tail */}
          <div className="absolute top-3 left-0 transform -translate-x-1">
            <div className="w-0 h-0 border-r-8 border-r-gray-200 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;