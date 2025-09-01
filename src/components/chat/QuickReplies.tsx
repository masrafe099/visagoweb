import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface QuickRepliesProps {
  replies: string[];
  onReplyClick: (reply: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ replies, onReplyClick }) => {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center space-x-2 text-sm text-gray-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Zap size={16} className="text-yellow-500" />
        <span className="font-medium">Quick questions to get you started:</span>
      </motion.div>

      {/* Quick Reply Buttons - 2 Row Layout with Horizontal Scroll */}
      <div className="space-y-1.5">
        {/* First Row */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          <div className="flex gap-1.5 min-w-max">
            {replies.slice(0, Math.ceil(replies.length / 2)).map((reply, index) => (
              <motion.button
                key={index}
                onClick={() => onReplyClick(reply)}
                className="inline-flex items-center px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-full text-xs text-gray-600 hover:text-gray-800 transition-all duration-200 hover:shadow-md group whitespace-nowrap flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.8 + index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                whileHover={{
                  scale: 1.03,
                  y: -1
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-center leading-tight">{reply}</span>
                <motion.div
                  className="ml-1 w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  whileHover={{ rotate: 180 }}
                >
                  <svg
                    className="w-2 h-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          <div className="flex gap-1.5 min-w-max">
            {replies.slice(Math.ceil(replies.length / 2)).map((reply, index) => (
              <motion.button
                key={index + Math.ceil(replies.length / 2)}
                onClick={() => onReplyClick(reply)}
                className="inline-flex items-center px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-full text-xs text-gray-600 hover:text-gray-800 transition-all duration-200 hover:shadow-md group whitespace-nowrap flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.0 + index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                whileHover={{
                  scale: 1.03,
                  y: -1
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-center leading-tight">{reply}</span>
                <motion.div
                  className="ml-1 w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  whileHover={{ rotate: 180 }}
                >
                  <svg
                    className="w-2 h-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className="flex items-center space-x-2 my-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <span className="text-xs text-gray-400 bg-white px-2">or type your own question</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default QuickReplies;