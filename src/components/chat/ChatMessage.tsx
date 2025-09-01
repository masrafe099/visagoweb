import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  index: number;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, index }) => {
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Check if this is the greeting message (first bot message)
  const isGreetingMessage = !message.isUser && index === 0;

  const formatMessageText = (text: string) => {
    // Convert markdown-style formatting to JSX
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Handle bullet points
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-blue-500 mt-1">•</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      }
      
      // Handle numbered lists
      const numberedMatch = line.match(/^(\d+)\.\s(.+)/);
      if (numberedMatch) {
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-blue-500 font-semibold">{numberedMatch[1]}.</span>
            <span>{numberedMatch[2]}</span>
          </div>
        );
      }
      
      return <div key={index}>{line}</div>;
    });
  };

  return (
    <motion.div
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <motion.div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            message.isUser
              ? 'bg-blue-600 text-white'
              : 'bg-gray-600 text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {message.isUser ? <User size={14} /> : <Bot size={14} />}
        </motion.div>

        {/* Message Bubble */}
        <motion.div
          className={`relative px-4 py-2 rounded-2xl max-w-full btn-transition shimmer-hover ${
            message.isUser
              ? 'bg-blue-600 text-white rounded-br-md'
              : isGreetingMessage
              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 text-gray-800 rounded-bl-md shadow-lg'
              : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
          }`}
          whileHover={{ scale: 1.03, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 } }}
          transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
          style={isGreetingMessage ? {
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
          } : {}}
        >
          {/* Message Content */}
          <div className="text-sm leading-relaxed">
            {formatMessageText(message.text)}
          </div>

          {/* Timestamp */}
          <div className={`flex items-center mt-2 text-xs opacity-70 ${
            message.isUser ? 'justify-end text-white/80' : 'justify-start text-gray-500'
          }`}>
            <Clock size={10} className="mr-1" />
            {formatTime(message.timestamp)}
          </div>

          {/* Message Tail */}
          <div
            className={`absolute top-3 ${
              message.isUser
                ? 'right-0 transform translate-x-1'
                : 'left-0 transform -translate-x-1'
            }`}
          >
            <div
              className={`w-0 h-0 ${
                message.isUser
                  ? 'border-l-8 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent'
                  : 'border-r-8 border-r-gray-200 border-t-4 border-t-transparent border-b-4 border-b-transparent'
              }`}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;