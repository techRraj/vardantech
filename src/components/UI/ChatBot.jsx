import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMessageCircle, FiX, FiSend, FiStar, FiZap,
  FiShield, FiCode, FiSmartphone, FiTrendingUp, FiCpu,
  FiCheck, FiDownload
} from 'react-icons/fi';
import styles from './ChatBot.module.css';

// ═══════════════════════════════════════
// 🔗 PASTE YOUR GOOGLE APPS SCRIPT URL HERE
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1J-2q_aIAqwFjmUQy0cpjScCHbThLrWTEo8PuOP8J5LJQJm0cWqzOcUlIg3r101Xs/exec';
// ═══════════════════════════════════════

const knowledgeBase = {
  greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'namaste'],
  services: ['service', 'offer', 'provide', 'do you', 'what can you'],
  aiAgent: ['ai agent', 'artificial intelligence', 'automation', 'machine learning'],
  chatbot: ['chatbot', 'bot', 'conversational', 'chat'],
  webDev: ['website', 'web development', 'web app', 'frontend', 'backend'],
  mobileApp: ['mobile', 'app', 'android', 'ios', 'flutter'],
  pricing: ['price', 'cost', 'budget', 'quote', 'estimate', 'rate'],
  demo: ['demo', 'consultation', 'trial', 'meeting', 'call'],
  contact: ['contact', 'email', 'phone', 'whatsapp', 'reach'],
  portfolio: ['portfolio', 'work', 'project', 'case study'],
};

const botResponses = {
  greeting: [
    "👋 Hello! Welcome to <strong>Vardana Infotech</strong>!\n\nI'm your AI assistant. We specialize in:\n\n🚀 AI Agent Development\n💬 Custom Chatbots\n🌐 Web Development\n📱 Mobile Apps\n\nHow can I help you today?",
    "Hi there! 👋 Welcome to Vardana Infotech!\n\nWe build intelligent AI solutions for modern businesses. What brings you here?"
  ],
  aiAgent: [
    "🤖 <strong>AI Agents</strong> are our specialty!\n\n✅ Automate 70%+ of tasks\n✅ Integrate with your tools\n✅ Learn & improve over time\n✅ Reduce costs by 40%\n\nWant a free demo? Just ask!"
  ],
  chatbot: [
    "💬 <strong>Custom Chatbots</strong> — intelligent like me, but for YOUR business!\n\n🧠 RAG-powered\n🌍 Multi-language\n📊 Analytics dashboard\n🔗 CRM integration\n\nInterested? Let's discuss your requirements!"
  ],
  webDev: [
    "🌐 <strong>Web Development</strong> — stunning, high-performance apps!\n\n⚡ React • Next.js • Node.js\n🎨 Pixel-perfect designs\n🔒 Enterprise security\n📱 Fully responsive\n\nTell me about your project!"
  ],
  mobileApp: [
    "📱 <strong>Mobile Apps</strong> — iOS & Android\n\n✨ Native performance\n🚀 Fast development\n💰 Cost-effective\n\nWhat's your app idea?"
  ],
  pricing: [
    "💰 We offer flexible pricing!\n\nEvery project is unique. Share your requirements and I'll connect you with our team for a <strong>free estimate</strong>!"
  ],
  demo: [
    "🎉 <strong>Free Demo!</strong>\n\n📅 30-minute consultation\n👨‍💻 Meet our experts\n📊 Personalized solution\n\n📱 WhatsApp: +91 88897 10105\n📧 vardaantechhub.info@gmail.com"
  ],
  contact: [
    "📞 <strong>Let's Connect!</strong>\n\n📱 WhatsApp: +91 88897 10105\n📧 vardaantechhub.info@gmail.com\n\nWe respond within 15 minutes!"
  ],
  portfolio: [
    "🏆 <strong>200+ Projects Delivered!</strong>\n\nCheck our portfolio at <strong>/portfolio</strong> for detailed case studies across AI, Web, and Mobile."
  ],
  default: [
    "I'd love to help! Could you share more details?\n\nOr reach us directly:\n📱 +91 88897 10105\n📧 vardaantechhub.info@gmail.com"
  ]
};

const quickOptions = [
  { icon: <FiCpu />, label: 'AI Agents', query: 'Tell me about AI Agents' },
  { icon: <FiMessageCircle />, label: 'Chatbots', query: 'Custom Chatbot development' },
  { icon: <FiCode />, label: 'Web Dev', query: 'Web development services' },
  { icon: <FiSmartphone />, label: 'Mobile Apps', query: 'Mobile app development' },
  { icon: <FiStar />, label: 'Free Demo', query: 'I want a free demo' },
  { icon: <FiTrendingUp />, label: 'Pricing', query: 'What are your prices' },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const firstMsg = {
          type: 'bot',
          text: botResponses.greeting[0],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([firstMsg]);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // ═══════════════════════════════════════
  // 📤 SAVE TO GOOGLE SHEETS
// ═══════════════════════════════════════
// 📤 SAVE TO GOOGLE SHEETS
const saveToGoogleSheets = async (userMsg, botMsg, intent, visitor) => {
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      visitorName: visitor.name || 'Anonymous',
      phone: visitor.phone || '',
      email: visitor.email || '',
      message: userMsg || '',
      intent: intent || 'General',
      botResponse: botMsg || ''
    };

    // ✅ Use fetch without no-cors, with proper headers
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain;charset=utf-8'  // Changed to text/plain to avoid CORS preflight
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('✅ Saved to Google Sheets:', result);
  } catch (error) {
    console.log('⚠️ Save attempt:', error.message);
    // Still try with no-cors as fallback
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          visitorName: visitor.name || 'Anonymous',
          phone: visitor.phone || '',
          email: visitor.email || '',
          message: userMsg || '',
          intent: intent || 'General',
          botResponse: botMsg || ''
        })
      });
      console.log('✅ Fallback save attempted');
    } catch (fallbackError) {
      console.log('❌ Save failed:', fallbackError.message);
    }
  }
};
  // ═══════════════════════════════════════

  const findIntent = (text) => {
    const lower = text.toLowerCase();
    for (const [intent, keywords] of Object.entries(knowledgeBase)) {
      if (keywords.some(keyword => lower.includes(keyword))) {
        return intent;
      }
    }
    return 'default';
  };

  const getResponse = (intent) => {
    const responses = botResponses[intent] || botResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const userText = input;
    setInput('');
    setIsTyping(true);

    const intent = findIntent(userText);
    const botText = getResponse(intent);

    // 📤 Save user message + bot response to Google Sheets
    saveToGoogleSheets(userText, botText, intent, leadData);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg = {
        type: 'bot',
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);

      // Show lead form after 3 messages
      if (messages.length >= 3 && !leadSubmitted && !showLeadForm) {
        setTimeout(() => setShowLeadForm(true), 1000);
      }
    }, 1500 + Math.random() * 1000);
  };

  const handleQuickOption = (option) => {
    setInput(option.query);
    setTimeout(() => handleSend(), 100);
  };

  const handleLeadSubmit = () => {
    if (!leadData.name || !leadData.phone) return;
    
    setLeadSubmitted(true);
    setShowLeadForm(false);
    
    const thankMsg = `✅ Amazing, ${leadData.name}! Your details are saved.\n\nOur team will reach out to you within 24 hours at <strong>${leadData.phone}</strong>.\n\nFeel free to continue chatting or explore our portfolio!`;
    
    const botMsg = {
      type: 'bot',
      text: thankMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, botMsg]);

    // 📤 Save lead info to Google Sheets
    saveToGoogleSheets(
      `LEAD CAPTURED: ${leadData.name} | ${leadData.phone} | ${leadData.email}`,
      thankMsg,
      'Lead Capture',
      leadData
    );
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className={styles.floatingBtn}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          className={styles.pulseRing}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <div className={styles.btnContent}>
          <FiMessageCircle size={26} />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.botAvatar}>🤖</div>
                <div>
                  <h3>Vardana AI Assistant</h3>
                  <p>🟢 Online • Replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className={styles.chatBody}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  className={`${styles.message} ${msg.type === 'user' ? styles.userMsg : styles.botMsg}`}
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className={styles.msgBubble}>
                    <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                    <span className={styles.msgTime}>{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className={styles.typing}>
                  <div className={styles.typingDots}><span /><span /><span /></div>
                </div>
              )}

              {/* Lead Form */}
              {showLeadForm && !leadSubmitted && (
                <motion.div className={styles.leadForm} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className={styles.leadFormHeader}>
                    <FiStar className={styles.leadIcon} />
                    <div>
                      <h4>Get Priority Support!</h4>
                      <p>Leave your details and we'll reach out personally</p>
                    </div>
                  </div>
                  <input placeholder="Your Name *" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} />
                  <input placeholder="Phone Number *" type="tel" value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} />
                  <input placeholder="Email (optional)" type="email" value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} />
                  <button onClick={handleLeadSubmit} disabled={!leadData.name || !leadData.phone}>
                    Get Personalized Help →
                  </button>
                  <button className={styles.skipBtn} onClick={() => setShowLeadForm(false)}>Maybe later</button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            <div className={styles.quickOptions}>
              {quickOptions.map((option, idx) => (
                <motion.button key={idx} className={styles.quickBtn} onClick={() => handleQuickOption(option)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <span className={styles.quickIcon}>{option.icon}</span>
                  {option.label}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div className={styles.inputArea}>
              <input ref={inputRef} type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
              <motion.button className={styles.sendBtn} onClick={handleSend} disabled={!input.trim()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiSend size={18} />
              </motion.button>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <FiShield size={12} />
              <span>Secure • We reply within 24h</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;