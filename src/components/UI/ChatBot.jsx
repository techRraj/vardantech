import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMessageCircle, FiX, FiSend, FiUser, FiMail, FiPhone,
  FiChevronDown, FiCheck, FiClock, FiStar, FiZap,
  FiShield, FiCode, FiSmartphone, FiTrendingUp, FiCpu,
  FiArrowRight, FiThumbsUp, FiCoffee
} from 'react-icons/fi';
import styles from './ChatBot.module.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1J-2q_aIAqwFjmUQy0cpjScCHbThLrWTEo8PuOP8J5LJQJm0cWqzOcUlIg3r101Xs/exec';

const knowledgeBase = {
  greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'hola', 'yo'],
  services: ['service', 'offer', 'provide', 'do you', 'what can you', 'help', 'capabilities'],
  aiAgent: ['ai agent', 'artificial intelligence', 'automation', 'machine learning', 'automate', 'intelligent'],
  chatbot: ['chatbot', 'bot', 'conversational', 'chat', 'messaging', 'reply'],
  webDev: ['website', 'web development', 'web app', 'frontend', 'backend', 'full stack', 'site'],
  mobileApp: ['mobile', 'app', 'android', 'ios', 'iphone', 'flutter', 'react native'],
  pricing: ['price', 'cost', 'budget', 'quote', 'estimate', 'charge', 'rate', 'package'],
  demo: ['demo', 'consultation', 'trial', 'meeting', 'call', 'discuss', 'schedule'],
  contact: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'talk', 'connect'],
  portfolio: ['portfolio', 'work', 'project', 'case study', 'previous', 'experience', 'built'],
  company: ['company', 'about', 'team', 'who are you', 'location', 'office', 'history'],
  timeline: ['timeline', 'duration', 'how long', 'delivery', 'deadline', 'weeks', 'months'],
  support: ['support', 'maintenance', 'after', 'help', 'issue', 'problem', 'bug'],
};

const botResponses = {
  greeting: [
    "👋 <strong>Welcome to Vardaan Tech Hub!</strong>\n\nI'm your personal AI assistant, here to help you discover how we can transform your business with cutting-edge technology.\n\n<strong>What would you like to explore?</strong>\n\n🚀 AI Agent Development\n💬 Custom Chatbots\n🌐 Web Development\n📱 Mobile Apps\n💰 Pricing & Packages\n📞 Free Consultation",
  ],
  aiAgent: [
    "🤖 <strong>AI Agents – Our Flagship Service</strong>\n\nImagine having a digital workforce that works 24/7, never makes mistakes, and scales instantly. That's what our AI agents deliver.\n\n<strong>What we build:</strong>\n✅ Autonomous workflow automation\n✅ Intelligent data processing\n✅ Predictive analytics engines\n✅ Custom decision-making systems\n\n<strong>Results our clients see:</strong>\n📈 70% reduction in manual work\n💰 40% cost savings\n⏱️ 90% faster processing\n\nWant to see a live demo? Just ask!"
  ],
  chatbot: [
    "💬 <strong>Custom Chatbots – Like Me, But Yours!</strong>\n\nWe build intelligent conversational AI that understands your business inside out.\n\n<strong>Features:</strong>\n🧠 RAG-powered intelligence (GPT-4, Claude)\n🌍 50+ language support\n📊 Real-time analytics dashboard\n🔗 CRM/ERP/WhatsApp integration\n🎯 95%+ intent recognition accuracy\n\n<strong>Use cases:</strong>\n• Customer support automation\n• Lead qualification\n• Appointment booking\n• E-commerce assistant\n\nReady to build yours? Let's talk!"
  ],
  webDev: [
    "🌐 <strong>Web Development – Beautiful & Powerful</strong>\n\nWe craft stunning, high-performance web applications that users love.\n\n<strong>Our stack:</strong>\n⚛️ React / Next.js\n🟢 Node.js / Express\n🍃 MongoDB / PostgreSQL\n🎨 Tailwind CSS / Framer Motion\n\n<strong>What makes us different:</strong>\n✨ Pixel-perfect, Figma-grade designs\n⚡ 90+ Lighthouse performance scores\n🔒 Enterprise-grade security\n📱 Fully responsive on all devices\n\nTell me about your project idea!"
  ],
  mobileApp: [
    "📱 <strong>Mobile Apps – iOS & Android</strong>\n\nCross-platform apps that feel completely native.\n\n<strong>Tech:</strong> Flutter • React Native • Firebase\n\n<strong>We've built apps with:</strong>\n📲 500K+ downloads\n⭐ 4.8+ star ratings\n🔄 Real-time sync\n💳 In-app payments\n\nWhat's your app idea? I'd love to hear it!"
  ],
  pricing: [
    "💰 <strong>Flexible Pricing for Every Budget</strong>\n\nWe believe in transparent, value-based pricing.\n\n<strong>Typical project ranges:</strong>\n• Chatbot MVP: Starting at ₹50,000\n• Full Web App: Starting at ₹1,00,000\n• AI Agent: Custom quote\n\n<strong>What's included:</strong>\n✅ Free consultation & scoping\n✅ Design & development\n✅ Testing & deployment\n✅ 30 days free support\n\nWant an exact quote? Share your requirements!"
  ],
  demo: [
    "🎉 <strong>Let's Schedule Your Free Demo!</strong>\n\nYou're one step away from seeing our AI in action.\n\n<strong>What you'll get:</strong>\n📅 30-minute live demo\n👨‍💻 Meet our technical team\n📊 Personalized solution proposal\n💰 No-obligation quote\n\n<strong>Contact us now:</strong>\n📱 WhatsApp: +91 88897 10105\n📧 Email: vardaantechhub.info@gmail.com\n\nOr share your number – we'll call you!"
  ],
  contact: [
    "📞 <strong>We're Easy to Reach!</strong>\n\n<strong>Multiple ways to connect:</strong>\n\n📱 <strong>WhatsApp:</strong> +91 88897 10105\n📧 <strong>Email:</strong> vardaantechhub.info@gmail.com\n📍 <strong>Location:</strong> Indore, India\n🕐 <strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM IST\n\n<strong>Response time:</strong> Under 15 minutes during business hours!\n\nHow would you prefer to connect?"
  ],
  portfolio: [
    "🏆 <strong>Our Work Speaks Volumes</strong>\n\n<strong>By the numbers:</strong>\n✅ 200+ Projects Delivered\n⭐ 4.9/5 Client Rating\n🌍 Clients in 10+ Countries\n🏅 15+ Industry Awards\n\n<strong>Featured projects:</strong>\n• AI Chatbot handling 100K+ conversations/month\n• E-commerce platform with 200% conversion increase\n• Fitness app with 500K+ downloads\n\nCheck our full portfolio at <strong>/portfolio</strong>!"
  ],
  company: [
    "🏢 <strong>About Vardaan Tech Hub</strong>\n\nFounded with a mission to make AI accessible to businesses of all sizes.\n\n<strong>Who we are:</strong>\n👥 50+ talented team members\n🎯 Specialized in AI & Web Solutions\n🏆 Award-winning agency\n💡 Innovation-driven culture\n\n<strong>Our values:</strong>\n• Excellence in every line of code\n• Customer success is our success\n• Continuous learning & innovation\n\nBased in Indore, serving clients worldwide!"
  ],
  timeline: [
    "⏱️ <strong>Project Timelines</strong>\n\nEvery project is unique, but here are typical durations:\n\n• Chatbot MVP: 2-3 weeks\n• Full Chatbot System: 4-8 weeks\n• Website (5 pages): 2-4 weeks\n• Web Application: 8-16 weeks\n• AI Agent: 6-12 weeks\n\nWe always deliver on time – guaranteed!"
  ],
  support: [
    "🛟 <strong>We've Got Your Back!</strong>\n\nAll projects include:\n✅ 30 days free post-launch support\n✅ Bug fixes at no extra cost\n✅ Performance monitoring\n✅ Regular updates\n\n<strong>Ongoing maintenance plans available:</strong>\n• Basic: ₹5,000/month\n• Standard: ₹15,000/month\n• Premium: Custom\n\nNeed help with an existing project? Tell me more!"
  ],
  default: [
    "I'd love to help you with that! 😊\n\nTo give you the best answer, could you share a bit more detail?\n\n<strong>In the meantime, you can:</strong>\n📱 WhatsApp: +91 88897 10105\n📧 Email: vardaantechhub.info@gmail.com\n\nOr choose a topic below 👇",
  ],
};

const categories = [
  { icon: <FiCpu />, label: 'AI Agents', query: 'Tell me about AI Agents' },
  { icon: <FiMessageCircle />, label: 'Chatbots', query: 'Custom Chatbot development' },
  { icon: <FiCode />, label: 'Web Dev', query: 'Web development services' },
  { icon: <FiSmartphone />, label: 'Mobile Apps', query: 'Mobile app development' },
  { icon: <FiStar />, label: 'Free Demo', query: 'I want a free demo' },
  { icon: <FiTrendingUp />, label: 'Pricing', query: 'What are your prices' },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          type: 'bot',
          text: botResponses.greeting[0],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }]);
      }, 600);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  const saveToGoogleSheets = async (userMsg, botMsg, intent, visitor) => {
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
          botResponse: botMsg || '',
        }),
      });
    } catch (error) {
      console.log('Save attempt:', error.message);
    }
  };

  const findIntent = (text) => {
    const lower = text.toLowerCase();
    for (const [intent, keywords] of Object.entries(knowledgeBase)) {
      if (keywords.some(keyword => lower.includes(keyword))) return intent;
    }
    return 'default';
  };

  const getResponse = (intent) => {
    const responses = botResponses[intent] || botResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    const userMsg = {
      type: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setMessageCount(prev => prev + 1);

    const intent = findIntent(userText);
    const botText = getResponse(intent);
    saveToGoogleSheets(userText, botText, intent, leadData);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }]);

      if (messageCount >= 2 && !leadSubmitted && !showLeadForm) {
        setTimeout(() => setShowLeadForm(true), 1500);
      }
    }, 1200 + Math.random() * 800);
  };

  const handleQuickOption = (option) => {
    setInput(option.query);
    setTimeout(() => {
      const userText = option.query;
      const userMsg = {
        type: 'user',
        text: userText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);
      setMessageCount(prev => prev + 1);

      const intent = findIntent(userText);
      const botText = getResponse(intent);
      saveToGoogleSheets(userText, botText, intent, leadData);

      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          type: 'bot',
          text: botText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }]);
      }, 1200 + Math.random() * 800);
    }, 100);
  };

  const handleLeadSubmit = () => {
    if (!leadData.name || !leadData.phone) return;
    setLeadSubmitted(true);
    setShowLeadForm(false);
    const thankMsg = `✅ <strong>Amazing, ${leadData.name}!</strong>\n\nYour details are safely stored. Our team will reach out to you within 24 hours at <strong>${leadData.phone}</strong>.\n\n<strong>While you wait:</strong>\n• Explore our portfolio\n• Read our blog for AI insights\n• Continue chatting with me!\n\nIs there anything else I can help with?`;
    setMessages(prev => [...prev, {
      type: 'bot',
      text: thankMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    saveToGoogleSheets(`LEAD: ${leadData.name} | ${leadData.phone} | ${leadData.email}`, thankMsg, 'Lead Capture', leadData);
  };

  return (
    <>
      {/* Floating Button */}
     <motion.button
  className={styles.floatingBtn}
  onClick={() => {
    if (isOpen) {
      setIsOpen(false);     // Close if already open
    } else {
      setIsOpen(true);      // Open if closed
      setIsMinimized(false); // Ensure it's not minimized
    }
  }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.92 }}
  aria-label={isOpen ? "Close chat" : "Open chat"}
>
        <motion.div className={styles.pulseRing} animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 2.5 }} />
  <motion.div className={styles.pulseRing2} animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }} />
        {isOpen ? (
    <FiX size={24} className={styles.btnIcon} />
  ) : (
    <FiMessageCircle size={24} className={styles.btnIcon} />
  )}
        <span className={styles.btnBadge}>1</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${styles.chatWindow} ${isMinimized ? styles.minimized : ''}`}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar}>🤖</div>
                  <div className={styles.onlineDot} />
                </div>
                <div className={styles.headerInfo}>
                  <h3>Vardaan AI Assistant</h3>
                  <p>🟢 Online • Instant replies</p>
                </div>
              </div>
              <div className={styles.headerActions}>
                <button onClick={() => setIsMinimized(!isMinimized)} className={styles.headerBtn} aria-label="Minimize">
                  <FiChevronDown size={18} style={{ transform: isMinimized ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                </button>
                <button onClick={() => setIsOpen(false)} className={styles.headerBtn} aria-label="Close">
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Body */}
                <div className={styles.chatBody}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      className={`${styles.message} ${msg.type === 'user' ? styles.userMsg : styles.botMsg}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                    >
                      {msg.type === 'bot' && <div className={styles.msgAvatar}>🤖</div>}
                      <div className={styles.msgBubble}>
                        <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                        <span className={styles.msgTime}>{msg.time}</span>
                      </div>
                      {msg.type === 'user' && <div className={styles.msgAvatar}>👤</div>}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div className={styles.typing} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className={styles.msgAvatar}>🤖</div>
                      <div className={styles.typingBubble}>
                        <span /><span /><span />
                      </div>
                    </motion.div>
                  )}

                  {showLeadForm && !leadSubmitted && (
                    <motion.div className={styles.leadForm} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <div className={styles.leadFormHeader}>
                        <FiStar className={styles.leadIcon} />
                        <div>
                          <h4>Get Priority Support ⚡</h4>
                          <p>We'll reach out personally within 24h</p>
                        </div>
                      </div>
                      <div className={styles.leadInputs}>
                        <div className={styles.inputWithIcon}>
                          <FiUser size={14} />
                          <input placeholder="Your Name *" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} />
                        </div>
                        <div className={styles.inputWithIcon}>
                          <FiPhone size={14} />
                          <input placeholder="Phone Number *" type="tel" value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} />
                        </div>
                        <div className={styles.inputWithIcon}>
                          <FiMail size={14} />
                          <input placeholder="Email (optional)" type="email" value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} />
                        </div>
                      </div>
                      <button className={styles.leadSubmitBtn} onClick={handleLeadSubmit} disabled={!leadData.name || !leadData.phone}>
                        <FiCheck size={16} /> Get Personalized Help
                      </button>
                      <button className={styles.leadSkipBtn} onClick={() => setShowLeadForm(false)}>Maybe later</button>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Categories */}
                <div className={styles.categories}>
                  {categories.map((cat, idx) => (
                    <motion.button
                      key={idx}
                      className={styles.categoryBtn}
                      onClick={() => handleQuickOption(cat)}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={styles.catIcon}>{cat.icon}</span>
                      <span className={styles.catLabel}>{cat.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Input */}
                <div className={styles.inputArea}>
                  <div className={styles.inputWrapper}>
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <motion.button
                      className={styles.sendBtn}
                      onClick={handleSend}
                      disabled={!input.trim()}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiSend size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                  <span>🔒 Secure • ⚡ Instant • 💬 24/7 Available</span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;