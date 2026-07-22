import React, { useState, useEffect, useRef } from 'react';

// Custom SVG Icons
const BoltIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11 21h-1a1 1 0 01-1-1v-7H5a1 1 0 01-.83-1.56l7-10A1 1 0 0111 2h1a1 1 0 011 1v7h4a1 1 0 01.83 1.56l-7 10A1 1 0 0111 21z" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SupportIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHeroOption, setActiveHeroOption] = useState('launch');
  const [domainInput, setDomainInput] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [searchResult, setSearchResult] = useState(null);
  const [searching, setSearching] = useState(false);
  const [activeModel, setActiveModel] = useState('Gemini');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hi, I'm Stinger AI. How can I help you today? Ask me about hosting, domains, or migrations!" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Review Carousel State
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      text: "The reliability, the performance, the support - everything at Stinger just works. When you're running a small team and working on tight deadlines, that peace of mind is invaluable.",
      author: "inklingdesign.ca",
      role: "Web Agency",
      bg: "var(--card-green)",
      color: "var(--stinger-dark)"
    },
    {
      text: "Not only do we spend 75% less on our monthly bill, but our website speed increased, when we moved to Stinger! I couldn't be happier!",
      author: "builtlean.com",
      role: "Wellness Coach",
      bg: "#103E5E",
      color: "white"
    },
    {
      text: "Stinger AI builder made launching our online shop a breeze. Easy setup, outstanding integration, and loading times are faster than ever.",
      author: "sagebotanicals.com",
      role: "E-commerce Studio",
      bg: "var(--card-purple)",
      color: "#3B0764"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const optionsList = ['email', 'code', 'launch', 'wordpress', 'sell'];
    const interval = setInterval(() => {
      setActiveHeroOption((prev) => {
        const idx = optionsList.indexOf(prev);
        return optionsList[(idx + 1) % optionsList.length];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDomainSearch = (e) => {
    if (e) e.preventDefault();
    if (!domainInput.trim()) return;

    setSearching(true);
    setSearchResult(null);

    setTimeout(() => {
      const cleanInput = domainInput.replace(/\.[a-zA-Z]+$/, '');
      const domainName = `${cleanInput}${selectedTld}`;
      
      let price = '$12.99';
      let available = true;

      if (cleanInput.toLowerCase() === 'google' || cleanInput.toLowerCase() === 'stinger' || cleanInput.length < 3) {
        available = false;
      }

      if (selectedTld === '.shop') price = '$9.99';
      if (selectedTld === '.net') price = '$11.99';
      if (selectedTld === '.info') price = '$7.99';

      setSearchResult({
        name: domainName,
        available: available,
        price: price
      });
      setSearching(false);
    }, 800);
  };

  const handleQuickFilter = (tld) => {
    setSelectedTld(tld);
    if (domainInput.trim()) {
      // Re-trigger search with new TLD
      setSearching(true);
      setSearchResult(null);
      setTimeout(() => {
        const cleanInput = domainInput.replace(/\.[a-zA-Z]+$/, '');
        const domainName = `${cleanInput}${tld}`;
        let price = '$12.99';
        let available = true;

        if (cleanInput.toLowerCase() === 'google' || cleanInput.toLowerCase() === 'stinger' || cleanInput.length < 3) {
          available = false;
        }

        if (tld === '.shop') price = '$9.99';
        if (tld === '.net') price = '$11.99';
        if (tld === '.info') price = '$7.99';

        setSearchResult({
          name: domainName,
          available: available,
          price: price
        });
        setSearching(false);
      }, 600);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMsg = { sender: 'user', text: userInput };
    setChatMessages((prev) => [...prev, newMsg]);
    const query = userInput.toLowerCase();
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      if (query.includes('pricing') || query.includes('plans') || query.includes('hosting') || query.includes('harga')) {
        botResponse = 'Stinger web hosting starts at just $2.99/mo! Our WordPress Hosting includes free SSL, daily backups, and migrations. Cloud Hosting starts at $19.99/mo.';
      } else if (query.includes('domain') || query.includes('beli domain')) {
        botResponse = 'You can register a domain starting at $7.99/yr. Popular extensions like .COM are only $12.99/yr and include free domain privacy protection!';
      } else if (query.includes('migration') || query.includes('pindah')) {
        botResponse = 'Yes, we offer FREE site migrations! Our expert migration support team will handle everything and guarantee zero downtime for your site.';
      } else if (query.includes('speed') || query.includes('cepat') || query.includes('lambat')) {
        botResponse = 'Stinger is built for high speed! We utilize LiteSpeed Enterprise servers, advanced built-in caching, and a global CDN to make websites up to 5x faster.';
      } else {
        botResponse = "Thanks for asking! That is a great question. You can learn more details on our plans page, or I can connect you directly to our live human support team (available 24/7).";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div>
      {/* Navbar / Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-link">
            <BoltIcon className="logo-icon" />
            <span>Stinger</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#" className="nav-link">Hosting</a></li>
            <li><a href="#" className="nav-link">WordPress</a></li>
            <li><a href="#" className="nav-link">Domain Names</a></li>
            <li><a href="#" className="nav-link">AI Web Builder</a></li>
            <li><a href="#" className="nav-link">Stinger AI</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-sm btn-text">Log in</a>
            <a href="#" className="btn btn-sm btn-primary">Sign Up Free</a>
          </div>
        </div>
      </header>

      {/* Redesigned Dark Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Content */}
            <div>
              <span className="hero-badge">Web Hosting & Beyond</span>
              <h1 className="hero-title">
                Build, host, grow<br />
                your online presence
              </h1>
              <p className="hero-subtitle">
                Your all-in-one platform for online success.
              </p>
              <button className="btn hero-btn">EXPLORE SERVICES</button>

              {/* Trustpilot stars & rating */}
              <div className="hero-rating-footer">
                <div className="rating-stars-row">
                  <span>Excellent</span>
                  <div className="trustpilot-badge">
                    <div className="trustpilot-stars">
                      <span className="trustpilot-star-dot"></span>
                      <span className="trustpilot-star-dot"></span>
                      <span className="trustpilot-star-dot"></span>
                      <span className="trustpilot-star-dot"></span>
                      <span className="trustpilot-star-dot"></span>
                    </div>
                    <span>Trustpilot</span>
                  </div>
                </div>
                <p className="rating-subtext">
                  Top industry rating - <strong>4.9 out of 5 stars</strong>. Trusted by the owners of 3 Million domains.
                </p>
              </div>
            </div>

            {/* Right Visual Floating Options */}
            <div className="hero-visual-col">
              <div className="floating-options-stack">
                {[
                  { id: 'email', label: 'Send email campaigns', icon: '✉' },
                  { id: 'code', label: 'Code with AI', icon: '✦' },
                  { id: 'launch', label: 'Launch a website', icon: '💻' },
                  { id: 'wordpress', label: 'Transfer WordPress sites', icon: 'Ⓦ' },
                  { id: 'sell', label: 'Sell online', icon: '🛒' }
                ].map((opt) => (
                  <div
                    key={opt.id}
                    className={`floating-option-card ${activeHeroOption === opt.id ? 'active' : ''}`}
                    onClick={() => setActiveHeroOption(opt.id)}
                  >
                    <div className="option-left-content">
                      <span className="option-icon">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </div>
                    {activeHeroOption === opt.id && (
                      <div className="checkmark-badge">✓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section" style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '38px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Fast, secure, smarter AI-powered website services
          </h2>
          <p className="text-center text-muted" style={{ maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '16px' }}>
            Choose the perfect hosting and AI tools to build, launch, and grow your online presence.
          </p>
          <div className="services-grid">
            
            {/* 1. Hosting for WordPress */}
            <div className="service-card card-large card-large-3" style={{ backgroundColor: 'var(--card-blue)' }}>
              <div className="service-card-info">
                <h3 className="card-title">Hosting for WordPress</h3>
                <p className="card-desc">Start or migrate WordPress on our ultrafast hosting.</p>
                <button className="btn btn-dark-cta btn-sm mb-4">GET STARTED</button>
              </div>
              <div className="card-visual">
                <div className="wp-dashboard-mock">
                  <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }}></span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, gap: '8px' }}>
                    <div style={{ width: '30%', backgroundColor: '#F8FAFC', borderRight: '1px solid #E2E8F0', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ height: '6px', width: '80%', backgroundColor: '#CBD5E1', borderRadius: '2px' }}></div>
                      <div style={{ height: '6px', width: '60%', backgroundColor: '#E2E8F0', borderRadius: '2px' }}></div>
                      <div style={{ height: '6px', width: '70%', backgroundColor: '#E2E8F0', borderRadius: '2px' }}></div>
                    </div>
                    <div style={{ flex: 1, padding: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ height: '14px', width: '90%', backgroundColor: '#E0F2FE', borderRadius: '4px', padding: '2px 4px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '7px', fontWeight: 'bold', color: '#0369A1' }}>Welcome to WordPress!</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <div style={{ flex: 1, height: '30px', backgroundColor: '#F1F5F9', borderRadius: '4px', border: '1px dashed #CBD5E1' }}></div>
                        <div style={{ flex: 1, height: '30px', backgroundColor: '#F1F5F9', borderRadius: '4px', border: '1px dashed #CBD5E1' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Website Builder */}
            <div className="service-card card-large card-large-3" style={{ backgroundColor: 'var(--card-silver)' }}>
              <div className="service-card-info">
                <h3 className="card-title">Website Builder</h3>
                <p className="card-desc">Create a website and get online easily and quickly.</p>
                <button className="btn btn-dark-cta btn-sm mb-4">START FREE</button>
              </div>
              <div className="card-visual">
                <div className="builder-mock">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                    <span style={{ fontSize: '8px', fontWeight: 'bold', color: '#1E293B' }}>Sage. Botanical Studio</span>
                    <span style={{ fontSize: '6px', padding: '2px 4px', background: '#E2E8F0', borderRadius: '2px' }}>Publish</span>
                  </div>
                  <div style={{ padding: '8px', display: 'flex', gap: '8px', height: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ height: '40px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                        <div style={{ position: 'absolute', bottom: '4px', left: '4px', width: '20px', height: '20px', background: '#10B981', borderRadius: '50%' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '25px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', fontWeight: 'bold' }}>Aa</div>
                      <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', fontWeight: 'bold' }}>🖼</div>
                      <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', fontWeight: 'bold' }}>⚙</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Stinger AI Coder */}
            <div className="service-card card-large card-large-4" style={{ backgroundColor: 'var(--card-purple)' }}>
              <div className="service-card-info">
                <h3 className="card-title">Stinger AI</h3>
                <p className="card-desc">Build apps and websites by chatting with AI. Launch faster and host them on our all-inclusive hosting platform.</p>
                <button className="btn btn-dark-cta btn-sm mb-4">START BUILDING</button>
              </div>
              <div className="card-visual" style={{ width: '50%', height: '70%' }}>
                <div className="ai-coder-mock">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
                    <span style={{ fontSize: '7px', fontWeight: '700', color: '#6B21A8' }}>✦ AI Assistant</span>
                    <span style={{ fontSize: '6px', color: '#94A3B8' }}>Active</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                    <div style={{ background: '#FAF5FF', padding: '4px 6px', borderRadius: '4px', alignSelf: 'flex-start', maxWidth: '90%' }}>
                      <span style={{ fontSize: '7px', color: '#581C87' }}>Build a portfolio site...</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', marginTop: 'auto' }}>
                      <div style={{ flex: 1, height: '12px', background: '#F1F5F9', borderRadius: '99px', border: '1px solid #E2E8F0' }}></div>
                      <div style={{ width: '12px', height: '12px', background: '#6B21A8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '6px' }}>➔</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Web Hosting */}
            <div className="service-card card-large card-large-2" style={{ backgroundColor: 'var(--card-green)' }}>
              <div className="service-card-info">
                <h3 className="card-title" style={{ fontSize: '24px' }}>Web Hosting</h3>
                <p className="card-desc" style={{ fontSize: '13px', marginBottom: '16px' }}>Build and grow your site with our fast & reliable hosting.</p>
                <a href="#" style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--stinger-dark)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  VIEW PLANS <ArrowRightIcon className="w-4 h-4" style={{ width: '14px', height: '14px' }} />
                </a>
              </div>
              <div className="card-visual" style={{ width: '85%', height: '40%' }}>
                <div className="hosting-status-mock">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '7px', color: '#64748B' }}>Server Health</span>
                    <span style={{ fontSize: '7px', fontWeight: 'bold', color: '#10B981' }}>99.99%</span>
                  </div>
                  <div style={{ height: '4px', background: '#F1F5F9', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '90%', height: '100%', background: '#10B981' }}></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: '6px' }}>
                    <div style={{ background: '#F8FAFC', padding: '2px', borderRadius: '2px', textAlign: 'center' }}>
                      <p style={{ fontSize: '5px', color: '#94A3B8' }}>CPU</p>
                      <p style={{ fontSize: '7px', fontWeight: 'bold', color: '#1E293B' }}>12.4%</p>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '2px', borderRadius: '2px', textAlign: 'center' }}>
                      <p style={{ fontSize: '5px', color: '#94A3B8' }}>RAM</p>
                      <p style={{ fontSize: '7px', fontWeight: 'bold', color: '#1E293B' }}>38.2%</p>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '2px', borderRadius: '2px', textAlign: 'center' }}>
                      <p style={{ fontSize: '5px', color: '#94A3B8' }}>SSD</p>
                      <p style={{ fontSize: '7px', fontWeight: 'bold', color: '#1E293B' }}>44.1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Online Store */}
            <div className="service-card card-large card-large-3" style={{ backgroundColor: 'var(--card-yellow)' }}>
              <div className="service-card-info">
                <h3 className="card-title">Online store</h3>
                <p className="card-desc">Build your online store easily and start selling within hours.</p>
                <a href="#" style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--stinger-dark)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '24px' }}>
                  TRY FREE <ArrowRightIcon className="w-4 h-4" style={{ width: '14px', height: '14px' }} />
                </a>
              </div>
              <div className="card-visual" style={{ width: '80%', height: '48%' }}>
                <div className="store-mock">
                  <div style={{ display: 'flex', gap: '6px', height: '100%', alignItems: 'center' }}>
                    <div style={{ width: '35px', height: '35px', background: '#FEF3C7', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '14px' }}>🏺</span>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '8px', fontWeight: 'bold' }}>Clay Vase</span>
                      <span style={{ fontSize: '7px', color: '#059669' }}>$49.00</span>
                    </div>
                    <div style={{ width: '18px', height: '18px', background: '#059669', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Email Marketing */}
            <div className="service-card card-large card-large-3" style={{ backgroundColor: 'var(--card-rose)' }}>
              <div className="service-card-info">
                <h3 className="card-title">Email Marketing</h3>
                <p className="card-desc">Grow your business with easy and effective email marketing.</p>
                <button className="btn btn-dark-cta btn-sm mb-4">LEARN MORE</button>
              </div>
              <div className="card-visual" style={{ width: '70%', height: '48%' }}>
                <div className="email-campaign-mock">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '3px' }}>
                      <span style={{ fontSize: '6px', color: '#94A3B8' }}>To: Subscribers</span>
                      <span style={{ fontSize: '6px', color: '#10B981', fontWeight: '700' }}>✓ Draft</span>
                    </div>
                    <div style={{ background: '#FFF1F2', padding: '4px', borderRadius: '4px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                      <span style={{ fontSize: '10px' }}>🥤</span>
                      <span style={{ fontSize: '6px', color: '#BE123C', fontWeight: 'bold' }}>Summer Launch!</span>
                    </div>
                    <div style={{ width: '40px', height: '10px', background: '#E2E8F0', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5px', alignSelf: 'flex-end', marginTop: 'auto' }}>
                      Send Campaign
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Domain Search Section */}
      <section className="domain-section">
        <div className="container">
          <h2 className="domain-title">Secure your domain from just $17.99/yr</h2>
          <div className="domain-benefits">
            <div className="domain-benefit-item">
              <ShieldIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
              <span>1-year Free Domain Privacy</span>
            </div>
            <div className="domain-benefit-item">
              <ShieldIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
              <span>2-factor Authentication</span>
            </div>
            <div className="domain-benefit-item">
              <ShieldIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
              <span>24/7 Expert Support</span>
            </div>
          </div>

          <div className="domain-search-wrapper">
            <form className="domain-search-bar" onSubmit={handleDomainSearch}>
              <div className="domain-input-group">
                <SearchIcon style={{ width: '18px', height: '18px', color: '#94A3B8', marginRight: '8px' }} />
                <input
                  type="text"
                  placeholder="Start with your idea or business name"
                  className="domain-search-input"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                />
              </div>
              <select
                className="domain-select-tld"
                value={selectedTld}
                onChange={(e) => setSelectedTld(e.target.value)}
              >
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".shop">.shop</option>
                <option value=".info">.info</option>
              </select>
              <button type="submit" className="domain-search-btn">
                {searching ? 'SEARCHING...' : 'SEARCH'}
              </button>
            </form>

            {/* Simulated Domain Result */}
            {searchResult && (
              <div className="domain-result-card">
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
                    {searchResult.name}
                  </h4>
                  <p style={{ fontSize: '14px', color: searchResult.available ? 'var(--stinger-mint)' : '#EF4444' }}>
                    {searchResult.available 
                      ? `Available! Register now for just ${searchResult.price}/yr.` 
                      : 'Taken. Search for another name or extension.'
                    }
                  </p>
                </div>
                {searchResult.available && (
                  <button className="btn btn-secondary btn-sm" style={{ fontWeight: 'bold' }}>
                    Add to Cart
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Quick filter pills */}
          <div className="domain-filters">
            {['.com', '.org', '.net', '.biz', '.info', '.shop'].map((tld) => (
              <button
                key={tld}
                className={`domain-filter-btn ${selectedTld === tld ? 'active' : ''}`}
                onClick={() => handleQuickFilter(tld)}
              >
                {tld.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Studio Section */}
      <section className="ai-studio-section">
        <div className="container">
          <div className="ai-studio-grid">
            <div className="ai-studio-content">
              <h2 style={{ fontSize: '38px', color: 'var(--text-dark)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
                Powerful AI Studio to optimize and scale work
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
                Manage tasks seamlessly and work smarter with Stinger AI Studio - your one place to chat with multiple AI models and access smart AI agents.
              </p>
              <button className="btn btn-primary">START FREE</button>
            </div>
            <div className="ai-studio-visual">
              <div className="ai-studio-visual-container">
                {/* AI Models selector sidebar */}
                <div className="ai-models-sidebar">
                  {['Imogen', 'ChatGPT', 'Nano Banana', 'Claude', 'Gemini'].map((model) => (
                    <button
                      key={model}
                      className={`ai-model-pill ${activeModel === model ? 'active' : ''}`}
                      onClick={() => setActiveModel(model)}
                    >
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: model === 'Gemini' ? '#3B82F6' : model === 'ChatGPT' ? '#10B981' : '#F59E0B'
                      }}></span>
                      {model}
                    </button>
                  ))}
                </div>

                {/* Main AI window mock */}
                <div className="ai-studio-window">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                    <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold' }}>✦ Stinger AI Studio</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Model: {activeModel}</span>
                  </div>
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '85%' }}>
                        <p style={{ color: 'white', fontSize: '12px', lineHeight: '1.5' }}>
                          Create a new blog post and generate a header image for my hosting company.
                        </p>
                      </div>
                      <div style={{ background: 'rgba(0, 245, 155, 0.08)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(0, 245, 155, 0.15)', maxWidth: '85%', alignSelf: 'flex-end' }}>
                        <p style={{ color: 'var(--stinger-mint)', fontSize: '12px', lineHeight: '1.5' }}>
                          Generating blog layout and rendering image mock with {activeModel}...
                        </p>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '999px', padding: '6px 12px', display: 'flex', gap: '8px', alignItems: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ flex: 1, height: '14px', background: 'transparent' }}></div>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--stinger-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--stinger-dark)', fontSize: '10px', fontWeight: 'bold' }}>➔</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">📞</div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'white', marginBottom: '8px' }}>Real support, real humans 24/7</h3>
                <p style={{ fontSize: '15px', color: '#94A3B8' }}>
                  Chat with our experts or call us anytime. Stinger support agents are always online to resolve any issue in minutes.
                </p>
              </div>
            </div>
            <div className="support-card">
              <div className="support-icon">🏆</div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'white', marginBottom: '8px' }}>20+ years experience</h3>
                <p style={{ fontSize: '15px', color: '#94A3B8' }}>
                  Helping businesses succeed online with top-tier technology, industry certifications, and award-winning services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <div>
              <h2 style={{ fontSize: '38px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Customer success stories
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
                See how businesses and professionals grow with Stinger.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="carousel-nav-btn" onClick={prevReview}>←</button>
              <button className="carousel-nav-btn" onClick={nextReview}>→</button>
            </div>
          </div>

          <div className="reviews-carousel-wrapper">
            <div className="reviews-track" style={{ transform: `translateX(-${reviewIndex * 50}%)` }}>
              {reviews.map((rev, idx) => (
                <div 
                  key={idx} 
                  className="review-slide" 
                  style={{ backgroundColor: rev.bg, color: rev.color }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '2px', color: idx === 1 ? 'var(--stinger-mint)' : '#EAB308', marginBottom: '24px' }}>
                      <StarIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
                      <StarIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
                      <StarIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
                      <StarIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
                      <StarIcon className="w-5 h-5" style={{ width: '18px', height: '18px' }} />
                    </div>
                    <blockquote className="review-quote" style={{ color: rev.color }}>
                      "{rev.text}"
                    </blockquote>
                  </div>
                  <div className="review-author">
                    <div className="review-avatar" style={{ background: idx === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}></div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 'bold' }}>{rev.author}</h4>
                      <p style={{ fontSize: '13px', opacity: 0.8 }}>{rev.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4 className="footer-column-title">Hosting Services</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Web Hosting</a></li>
                <li><a href="#" className="footer-link">Hosting for WordPress</a></li>
                <li><a href="#" className="footer-link">Hosting for WooCommerce</a></li>
                <li><a href="#" className="footer-link">Cloud Hosting</a></li>
                <li><a href="#" className="footer-link">Reseller Hosting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-column-title">Products</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Website Builder</a></li>
                <li><a href="#" className="footer-link">Ecommerce</a></li>
                <li><a href="#" className="footer-link">Stinger AI</a></li>
                <li><a href="#" className="footer-link">AI Studio</a></li>
                <li><a href="#" className="footer-link">Domain Names</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-column-title">About Us</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Company</a></li>
                <li><a href="#" className="footer-link">Hosting Technology</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Legal Notice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Success Stories</a></li>
                <li><a href="#" className="footer-link">Knowledge Base</a></li>
                <li><a href="#" className="footer-link">Tutorials</a></li>
                <li><a href="#" className="footer-link">Academy</a></li>
              </ul>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <h4 className="footer-column-title">Recent From Blog</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link" style={{ fontWeight: 'bold' }}>Stinger AI integrates with Stripe</a>
                  <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>July 14, 2026</p>
                </li>
                <li>
                  <a href="#" className="footer-link" style={{ fontWeight: 'bold' }}>Rebuild your site with Stinger Coder</a>
                  <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>July 10, 2026</p>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '30px' }}>
            <div className="region-dropdown">
              <button className="region-btn">
                <GlobeIcon style={{ width: '14px', height: '14px' }} />
                <span>World / English</span>
              </button>
            </div>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>
              © {new Date().getFullYear()} Stinger Online Services Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Assistant Widget */}
      <div className="ai-chat-widget">
        {chatOpen ? (
          <div className="ai-chat-window">
            <div className="ai-chat-header">
              <div className="ai-chat-title">
                <div className="ai-chat-avatar">🐝</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>Stinger AI Chat</h4>
                  <div className="ai-chat-status">
                    <span className="ai-chat-status-dot"></span>
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>
              <button className="ai-chat-close" onClick={() => setChatOpen(false)}>×</button>
            </div>

            <div className="ai-chat-messages">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`chat-message ${msg.sender === 'bot' ? 'chat-message-bot' : 'chat-message-user'}`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
            </div>

            <form className="ai-chat-input-area" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask Stinger AI..."
                className="ai-chat-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button type="submit" className="ai-chat-send">➔</button>
            </form>
          </div>
        ) : (
          <div className="ai-chat-bubble animate-float" onClick={() => setChatOpen(true)}>
            <SupportIcon style={{ width: '26px', height: '26px' }} />
            <span className="ai-chat-badge">1</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
