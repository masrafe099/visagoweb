import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Sparkles, Globe } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { KnowledgeBase } from '../../knowledge/types';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface VisaBotProps {
  knowledge: KnowledgeBase;
}

const VisaBot: React.FC<VisaBotProps> = ({ knowledge }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyCen0kjK4CNEWg0D9ybs810m8cdeoblMv8');
  const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL || 'gemini-1.5-flash' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasInteracted) {
      // Welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `👋 Hi there! I'm your friendly visa consultant assistant. I'm here to help you with all your visa questions - whether it's about studying abroad, work visas, tourist visas, or anything else related to international travel! 

✨ How can I assist you today?`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      setHasInteracted(true);
    }
  }, [isOpen, hasInteracted]);

  const handleBubbleEnter = () => {
    if (bubbleRef.current) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          const bubble = bubbleRef.current;
          if (bubble) {
            sparkle.style.left = Math.random() * 70 + 'px';
            sparkle.style.top = Math.random() * 70 + 'px';
            bubble.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
          }
        }, i * 200);
      }
    }
  };

  const generateSystemPrompt = () => {
    const { systemPrompts } = knowledge;
    const countries = knowledge.countries.map(c => c.name).join(', ');
    
    return `${systemPrompts.personality}\n\n${systemPrompts.responseStyle}\n\nIMPORTANT CONTEXT:\n- You work for ${knowledge.generalInfo.companyName}, a visa consultancy service\n- Our services include: ${knowledge.generalInfo.services.join(', ')}\n- We specialize in visas for: ${countries}\n- Contact info: ${knowledge.generalInfo.contactInfo.phone}, ${knowledge.generalInfo.contactInfo.email}\n\nKNOWLEDGE BASE SUMMARY:\nCountries we cover: ${countries}\nVisa types: Student Visas, Work Visas, Tourist Visas, Business Visas\n\nGUIDELINES:\n${systemPrompts.guidelines.map(g => `- ${g}`).join('\n')}\n\nAlways be helpful, encouraging, and provide specific information from the knowledge base when relevant. Use emojis occasionally to make responses warm and friendly.`;
  };

  const findRelevantKnowledge = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    let relevantInfo = '';

    // Check for country mentions
    knowledge.countries.forEach(country => {
      if (lowerMessage.includes(country.name.toLowerCase())) {
        relevantInfo += `\n\n${country.name} Information:\n- Visa types: ${country.visaTypes.join(', ')}\n- Processing time: ${country.processingTime}\n- Fees: ${country.fees}\n- Requirements: ${country.requirements.join(', ')}`;
      }
    });

    // Check for FAQ matches
    knowledge.faqs.forEach(faq => {
      const questionWords = faq.question.toLowerCase().split(' ');
      const messageWords = lowerMessage.split(' ');
      const commonWords = questionWords.filter(word => messageWords.includes(word));
      
      if (commonWords.length >= 2) {
        relevantInfo += `\n\nFAQ: ${faq.question}\nAnswer: ${faq.answer}`;
      }
    });

    return relevantInfo;
  };

  const sendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const systemPrompt = generateSystemPrompt();
      const relevantKnowledge = findRelevantKnowledge(text);
      
      const prompt = `${systemPrompt}\n\n${relevantKnowledge ? `RELEVANT KNOWLEDGE:${relevantKnowledge}` : ''}\n\nUser Question: ${text}\n\nPlease provide a helpful, accurate response based on the knowledge base and your role as a visa consultant. Be conversational, supportive, and include specific information when available.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botResponse = response.text();

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          isUser: false,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      console.error('Error generating response:', error);
      
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to contact our team directly at info@visago.com for immediate assistance! 📞",
          isUser: false,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const quickReplies = [
    "Tell me about study visas",
    "What documents do I need?",
    "Processing times for different countries",
    "Financial requirements",
    "Can I work while studying?",
    "Contact information"
  ];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="chat-bubble-container">
          <div className="pulse-ring"></div>
          <div
            ref={bubbleRef}
            className="chat-bubble"
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            onMouseEnter={handleBubbleEnter}
          >
            {showNotification && <div className="notification-dot"></div>}
            <svg className="chat-icon" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <div className="chat-preview">
              <p className="preview-text">Hi! How can I help you today?</p>
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 max-w-none sm:max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] sm:h-[42rem] max-h-[calc(100vh-2rem)] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <motion.div
              className="bg-blue-600 p-4 text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Bot size={20} />
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-base">Visa Assistant</h3>
                    <p className="text-xs text-white/80 flex items-center">
                      <Globe size={12} className="mr-1" />
                      Online • Ready to help
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white scrollbar-thin" style={{ height: 'calc(100% - 140px)' }}>
              <AnimatePresence>
                {messages.map((message, index) => (
                  <ChatMessage key={message.id} message={message} index={index} />
                ))}
              </AnimatePresence>
              
              {isTyping && <TypingIndicator />}
              
              {/* Quick Replies */}
              {messages.length <= 1 && !isTyping && (
                <QuickReplies replies={quickReplies} onReplyClick={sendMessage} />
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <motion.div
              className="p-3 sm:p-4 border-t bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything about visas..."
                    className="w-full px-4 py-2 sm:py-3 pr-12 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isTyping}
                  />
                  <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisaBot;