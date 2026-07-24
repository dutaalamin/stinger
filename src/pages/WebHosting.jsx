import React, { useState } from 'react';

function WebHosting() {
  const [activeSecurityTab, setActiveSecurityTab] = useState(0);

  const securityFeatures = [
    {
      title: "Advanced anti-bot & DDoS protection",
      content: "Malicious bots and DDoS attacks can overwhelm websites and drive away visitors. Our smart AI recognizes and blocks fake traffic, so only real customers get through. We stop over 1 million attacks per day, automatically."
    },
    {
      title: "Free SSL certificate included",
      content: "Secure your website and build trust with your visitors. Every hosting plan includes a free SSL certificate that is automatically installed and renewed."
    },
    {
      title: "Automatic Daily Backups",
      content: "Never lose your hard work. We automatically back up your website every day and keep copies for up to 30 days, so you can easily restore your site with a single click."
    },
    {
      title: "Proactive monitoring & instant fixes",
      content: "Our system monitors your website 24/7. If an issue is detected, our automated systems and expert team jump in to fix it instantly, often before you even notice."
    },
    {
      title: "Extra WordPress protection",
      content: "We protect your WordPress site at the server level, automatically updating core files and patching vulnerabilities to keep hackers out."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark font-sans text-text-light">
      
      {/* 1. Hero Section (SiteGround Style: Two-column banner) */}
      <section className="relative pt-[140px] min-h-[100vh] flex items-center pb-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 0%, #1a2a22 0%, #0d1110 60%, #0d1110 100%)' }}>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[radial-gradient(circle_at_top_right,rgba(255,249,202,0.15)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,rgba(255,249,202,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left flex flex-col items-start">
              {/* Green Discount Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-[2px] bg-[#FFF9CA] text-[#121212] text-[12px] font-black mb-6 uppercase tracking-widest">
                SAVE UP TO 83%
              </div>
              
              <h1 className="text-[40px] md:text-[52px] lg:text-[62px] text-white font-bold leading-[1.1] tracking-tight mb-8 font-sans" style={{ letterSpacing: '-0.03em' }}>
                Web hosting built <br />
                for your success
              </h1>
              
              {/* Bullet Features with Custom Icons */}
              <ul className="flex flex-col gap-5 mb-8">
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span>Ultrafast and reliable website performance</span>
                </li>
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                  </div>
                  <span>Bullet-proof security for your peace of mind</span>
                </li>
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <span>24/7 expert human support</span>
                </li>
              </ul>
              
              {/* Pricing Callout */}
              <div className="flex items-baseline gap-2 mb-8 select-none">
                <span className="text-[18px] text-white/60 font-medium">From</span>
                <span className="text-[36px] md:text-[40px] text-[#FFF9CA] font-black font-sans leading-none">$2.99<span className="text-[16px] font-semibold">/mo</span></span>
                <span className="text-[16px] text-white/40 line-through font-medium ml-1">$17.99</span>
              </div>
              
              {/* CTA and money back */}
              <div className="flex flex-col items-start gap-4">
                <button 
                  onClick={() => document.getElementById('pricing-plans').scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4.5 rounded-full bg-white text-black font-extrabold text-[16px] uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-slate-100 shadow-[0_8px_25px_rgba(255,255,255,0.1)] border-none cursor-pointer"
                >
                  CLAIM DEAL
                </button>
                <span className="text-[13px] text-[#FFF9CA] font-semibold tracking-wide">
                  Risk-Free: 30 days money back guarantee
                </span>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="relative w-full h-[520px] items-center justify-center hidden lg:flex">
              {/* Browser mockup behind the woman */}
              <div className="absolute left-[5%] top-[10%] w-[80%] max-w-[480px] bg-[#1a1a1a] rounded-[24px] border border-white/10 shadow-2xl p-4 aspect-[4/3] flex flex-col z-0 transition-transform duration-500 hover:scale-105">
                <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
                  {/* Domain Bar */}
                  <div className="flex items-center gap-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/5 text-[11px] font-mono text-white/50 w-[70%]">
                    <span>urbantable.net</span>
                  </div>
                  {/* Mail, Globe, Search icons */}
                  <div className="flex gap-2 text-white/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                </div>
                {/* Visual preview content inside browser mock */}
                <div className="flex-1 bg-black/20 rounded-xl overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cafe Preview" className="w-full h-full object-cover opacity-80 filter contrast-125 saturate-50" />
                </div>
              </div>

              {/* Generated Entrepreneur Image with Mask */}
              <div className="absolute right-[-5%] bottom-[-5%] w-[85%] h-[110%] z-10 flex items-end">
                <img 
                  src="/stinger_hero_person.png" 
                  alt="Business Owner" 
                  className="w-full h-full object-contain filter brightness-95" 
                  style={{ 
                    WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 30%, transparent 70%)',
                    maskImage: 'radial-gradient(circle at 60% 50%, black 30%, transparent 70%)'
                  }}
                />
              </div>

              {/* Mint stamp badge with % */}
              <div className="absolute left-[38%] top-[32%] z-20 animate-pulse select-none" style={{ transform: 'rotate(-10deg)' }}>
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 15px 25px rgba(255, 249, 202, 0.4))' }}>
                   <path d="M50 0L57.5 10H70L75 20L87.5 25L87.5 37.5L100 45L95 55L100 65L87.5 72.5L87.5 85L75 90L70 100H57.5L50 90L42.5 100H30L25 90L12.5 85L12.5 72.5L0 65L5 55L0 45L12.5 37.5L12.5 25L25 20L30 10H42.5L50 0Z" fill="#FFF9CA" stroke="#121212" strokeWidth="3" strokeLinejoin="round"/>
                   <text x="50" y="52" fill="#121212" fontSize="48" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" dominantBaseline="middle">%</text>
                 </svg>
              </div>
            </div>

          </div>

          {/* Bottom Trustpilot Section */}
          <div className="mt-24 flex flex-col gap-3 items-center text-center">
            <div className="flex items-center gap-2.5 text-[15px] font-bold text-white/90">
              <span>Excellent</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="w-[20px] h-[20px] bg-[#FFF9CA] inline-flex items-center justify-center text-[#121212] text-[12px] font-black rounded-[2px] shadow-sm select-none">★</span>
                ))}
              </div>
              <span className="font-sans">Trustpilot</span>
            </div>
            <p className="text-[14px] text-white/60 m-0">
              Top industry rating - <strong className="text-white">4.9 out of 5 stars</strong>. Trusted by the owners of 3 Million domains.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Pricing Plans Section */}
      <section id="pricing-plans" className="py-24 bg-[#f8f9fa] border-b border-black/5">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] text-[#121212] font-bold mb-4 font-sans tracking-tight">Choose the right hosting plan</h2>
            <div className="flex items-center justify-center gap-x-8 gap-y-3 text-[14px] font-medium text-[#121212]/80 mt-6 flex-wrap">
              <span className="text-[#121212]">All Plans include:</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Free domain name</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg> Free website transfer</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Free daily Backups</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 24/7 Expert Support</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 w-full">
            {/* Plan 1: StartUp */}
            <div className="bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col p-10 pt-12">
              <h3 className="text-[28px] font-medium text-[#121212] mb-2 font-sans">StartUp</h3>
              <p className="text-[14px] text-[#121212]/70 mb-8 font-medium">For personal projects & small sites</p>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[13px] text-[#121212]/60 line-through font-semibold">$17.99</span>
                <div className="text-[11px] text-[#121212] font-extrabold bg-[#FFF9CA] px-2 py-0.5 rounded-[4px] tracking-wide">SAVE 83%</div>
              </div>
              <div className="flex items-end mb-6">
                <span className="text-[24px] text-[#121212] font-bold mb-1 mr-0.5">$</span>
                <span className="text-[52px] text-[#121212] font-bold leading-none tracking-tight">2.99</span>
                <span className="text-[14px] text-[#121212]/60 font-semibold mb-2 ml-1">/mo.</span>
              </div>
              
              <button className="w-full py-3.5 rounded-full font-bold text-[14px] bg-[#222] text-white hover:bg-black transition-colors cursor-pointer mb-4">
                SELECT PLAN
              </button>
              
              <div className="text-[11px] text-[#121212]/50 font-medium text-center mb-8">
                Renews at $17.99/mo. Prepaid for 12 months. Ex. VAT
              </div>
              
              <div className="h-px w-full bg-black/5 mb-6"></div>
              
              <ul className="flex flex-col gap-3 mb-6">
                {['Host 1 website with unlimited traffic', '10 GB Premium Google storage'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Core Features</div>
              <ul className="flex flex-col gap-3 mb-6">
                {['Free domain', 'Free SSL, CDN, Backups', 'Free email'].map((feature, i) => (
                  <li key={`core-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  Free AI tokens <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                </li>
                {['Multilevel caching', 'Enhanced security', 'Collaborators'].map((feature, i) => (
                  <li key={`core2-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Stinger Website Builder</div>
              <ul className="flex flex-col gap-3 mb-6">
                {['Easy site building', 'AI image generation', 'AI text generation', 'Professional templates', 'Free image gallery', 'Built-in SEO'].map((feature, i) => (
                  <li key={`builder-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">WordPress Service</div>
              <ul className="flex flex-col gap-3 flex-1">
                {['Free site migrations', 'Managed autoupdates', 'WP-CLI and SSH'].map((feature, i) => (
                  <li key={`wp-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  AI Agent for WordPress <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                </li>
              </ul>
            </div>

            {/* Plan 2: GrowBig (Highlighted) */}
            <div className="bg-white border-[3px] border-[#FFF9CA] rounded-2xl shadow-[0_8px_30px_rgba(255,249,202,0.4)] flex flex-col relative overflow-hidden transform md:-translate-y-4">
              <div className="w-full bg-[#FFF9CA] text-[#121212] text-center py-2.5 text-[12px] font-black uppercase tracking-widest">
                Best Value
              </div>
              <div className="p-10 pt-10 flex flex-col flex-1">
                <h3 className="text-[28px] font-medium text-[#121212] mb-2 font-sans">GrowBig</h3>
                <p className="text-[14px] text-[#121212]/70 mb-8 font-medium">Perfect for your growing business</p>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[13px] text-[#121212]/60 line-through font-semibold">$29.99</span>
                  <div className="text-[11px] text-[#121212] font-extrabold bg-[#FFF9CA] px-2 py-0.5 rounded-[4px] tracking-wide">SAVE 83%</div>
                </div>
                <div className="flex items-end mb-6">
                  <span className="text-[24px] text-[#121212] font-bold mb-1 mr-0.5">$</span>
                  <span className="text-[52px] text-[#121212] font-bold leading-none tracking-tight">4.99</span>
                  <span className="text-[14px] text-[#121212]/60 font-semibold mb-2 ml-1">/mo.</span>
                </div>
                
                <button className="w-full py-3.5 rounded-full font-bold text-[14px] bg-[#222] text-white hover:bg-black transition-colors cursor-pointer mb-4">
                  SELECT PLAN
                </button>
                
                <div className="text-[11px] text-[#121212]/50 font-medium text-center mb-8">
                  Renews at $29.99/mo. Prepaid for 12 months. Ex. VAT
                </div>
                
                <div className="h-px w-full bg-black/5 mb-6"></div>
                
                <ul className="flex flex-col gap-3 mb-6">
                  {['Unlimited websites, unlimited traffic', '50 GB Premium Google storage'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Core Features</div>
                <ul className="flex flex-col gap-3 mb-6">
                  {['Free domain', 'Free SSL, CDN, Backups', 'Free email'].map((feature, i) => (
                    <li key={`core-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    Free AI tokens <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                  </li>
                  {['Multilevel caching', 'Enhanced security', 'Collaborators'].map((feature, i) => (
                    <li key={`core2-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Stinger Website Builder</div>
                <ul className="flex flex-col gap-3 mb-6">
                  {['Easy site building', 'AI image generation', 'AI text generation', 'Professional templates', 'Free image gallery', 'Built-in SEO'].map((feature, i) => (
                    <li key={`builder-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">WordPress Service</div>
                <ul className="flex flex-col gap-3 mb-6">
                  {['Free site migrations', 'Managed autoupdates', 'WP-CLI and SSH'].map((feature, i) => (
                    <li key={`wp-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    AI Agent for WordPress <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                  </li>
                </ul>

                <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Exclusive Features</div>
                <ul className="flex flex-col gap-3 flex-1">
                  {['On-demand backups', '30% faster PHP', 'Staging'].map((feature, i) => (
                    <li key={`excl-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                      <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plan 3: GoGeek */}
            <div className="bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col p-10 pt-12">
              <h3 className="text-[28px] font-medium text-[#121212] mb-2 font-sans">GoGeek</h3>
              <p className="text-[14px] text-[#121212]/70 mb-8 font-medium">More power & features for big sites</p>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[13px] text-[#121212]/60 line-through font-semibold">$44.99</span>
                <div className="text-[11px] text-[#121212] font-extrabold bg-[#FFF9CA] px-2 py-0.5 rounded-[4px] tracking-wide">SAVE 82%</div>
              </div>
              <div className="flex items-end mb-6">
                <span className="text-[24px] text-[#121212] font-bold mb-1 mr-0.5">$</span>
                <span className="text-[52px] text-[#121212] font-bold leading-none tracking-tight">7.99</span>
                <span className="text-[14px] text-[#121212]/60 font-semibold mb-2 ml-1">/mo.</span>
              </div>
              
              <button className="w-full py-3.5 rounded-full font-bold text-[14px] bg-[#222] text-white hover:bg-black transition-colors cursor-pointer mb-4">
                SELECT PLAN
              </button>
              
              <div className="text-[11px] text-[#121212]/50 font-medium text-center mb-8">
                Renews at $44.99/mo. Prepaid for 12 months. Ex. VAT
              </div>
              
              <div className="h-px w-full bg-black/5 mb-6"></div>
              
              <ul className="flex flex-col gap-3 mb-6">
                {['Unlimited websites, unlimited traffic', '100 GB Premium Google storage'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Core Features</div>
              <ul className="flex flex-col gap-3 mb-6">
                {['Free domain', 'Free SSL, CDN, Backups', 'Free email'].map((feature, i) => (
                  <li key={`core-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  Free AI tokens <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                </li>
                {['Multilevel caching', 'Enhanced security', 'Collaborators'].map((feature, i) => (
                  <li key={`core2-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Stinger Website Builder</div>
              <ul className="flex flex-col gap-3 mb-6">
                {['Easy site building', 'AI image generation', 'AI text generation', 'Professional templates', 'Free image gallery', 'Built-in SEO'].map((feature, i) => (
                  <li key={`builder-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">WordPress Service</div>
              <ul className="flex flex-col gap-3 mb-6">
                {['Free site migrations', 'Managed autoupdates', 'WP-CLI and SSH'].map((feature, i) => (
                  <li key={`wp-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[13px] text-[#121212]/80 font-medium">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  AI Agent for WordPress <span className="text-[10px] text-[#121212] font-extrabold bg-[#FFF9CA] px-1.5 py-0.5 rounded-[3px] ml-1">NEW</span>
                </li>
              </ul>

              <div className="text-[13px] font-bold text-[#121212] mb-4 mt-2">Exclusive Features</div>
              <ul className="flex flex-col gap-3 flex-1">
                {['On-demand backups', '30% faster PHP', 'Staging + Git', 'Private DNS', 'White-label access', 'Priority support'].map((feature, i) => (
                  <li key={`excl-${i}`} className="flex items-start gap-3 text-[13px] text-[#121212]/80 font-medium">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#FFF9CA] flex items-center justify-center shrink-0 mt-0.5"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center text-[#121212]/60 text-[14px] font-medium">
            All plans include a 30-day money-back guarantee. Prices exclude VAT.
          </div>
        </div>
      </section>

      {/* 3. Host Here, Succeed Everywhere Section (SiteGround Style) */}
      <section className="py-24 bg-white relative border-b border-black/5">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Visual & Headline */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-[36px] md:text-[44px] lg:text-[48px] text-[#121212] font-extrabold leading-tight font-sans tracking-tight">
                Host here, succeed everywhere
              </h2>
              <p className="text-[18px] text-[#121212]/70 max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-medium">
                We take care of the technical stuff. You take care of your customers.
              </p>
              {/* Visual Mockup */}
              <div className="mt-6 relative w-full aspect-video max-w-[500px] mx-auto lg:mx-0 bg-slate-100 border border-black/10 rounded-[24px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Host Here, Succeed Everywhere" 
                  className="w-full h-full object-cover opacity-90" 
                />
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col gap-8">
              
              {/* Feature 1 */}
              <div className="flex gap-5 items-start pb-8 border-b border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#121212]/5 border border-black/5 flex items-center justify-center text-[#121212] shrink-0 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#121212] m-0">Start a new site with a click</h4>
                  <p className="text-[15px] text-[#121212]/70 leading-relaxed m-0 font-medium">
                    Create your perfect website effortlessly with our automated site wizard and free installation of WordPress or other CMS.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 items-start pb-8 border-b border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#121212]/5 border border-black/5 flex items-center justify-center text-[#121212] shrink-0 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#121212] m-0">Move your existing site</h4>
                  <p className="text-[15px] text-[#121212]/70 leading-relaxed m-0 font-medium">
                    Already have a website? Let our experts transfer it for you or use our automatic migrator for WordPress sites. Avoid downtime, stress, and extra costs. Your site stays live the entire time.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5 items-start pb-8 border-b border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#121212]/5 border border-black/5 flex items-center justify-center text-[#121212] shrink-0 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#121212] m-0">Get professional business email</h4>
                  <p className="text-[15px] text-[#121212]/70 leading-relaxed m-0 font-medium">
                    Build credibility with unlimited email accounts at your own domain, including free spam protection and webmail.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#121212]/5 border border-black/5 flex items-center justify-center text-[#121212] shrink-0 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#121212] m-0">Start selling online anytime</h4>
                  <p className="text-[15px] text-[#121212]/70 leading-relaxed m-0 font-medium">
                    Start your online shop with a free installation of the shopping cart of your choice and enjoy free features such as SSL, daily backups and more.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Website Builder Section (SiteGround Style: Light Sage Background) */}
      <section className="py-24 bg-[#dcf5e1] text-[#121212] relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-start mb-20">
            <div>
              <h2 className="text-[36px] md:text-[46px] lg:text-[50px] font-extrabold leading-[1.15] tracking-tight font-sans text-black">
                Build your perfect site with <br />
                Stinger Website Builder
              </h2>
            </div>
            <div>
              <p className="text-[16px] md:text-[18px] text-black/80 leading-relaxed font-medium mt-2">
                Enjoy the easiest way to create and manage a website. Packed with AI assistant, built-in marketing, ecommerce features and more, our Website Builder gives you all the essentials to build a successful online presence.
              </p>
            </div>
          </div>

          {/* Overlapping Mockup Cards Grid */}
          <div className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden pt-8">
            <div className="absolute flex items-end justify-center w-full max-w-[950px] h-full bottom-[40px]">
              
              {/* Backmost Left Card */}
              <div className="w-[18%] aspect-[4/3] bg-white rounded-t-2xl shadow-lg border border-black/5 opacity-40 transform -rotate-12 translate-x-[40px] translate-y-[30px] z-0 overflow-hidden hidden sm:block">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80" alt="Template" className="w-full h-full object-cover" />
              </div>

              {/* Back Left Card */}
              <div className="w-[22%] aspect-[4/3] bg-white rounded-t-2xl shadow-xl border border-black/5 opacity-60 transform -rotate-6 translate-x-[20px] translate-y-[15px] z-10 overflow-hidden hidden sm:block">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80" alt="Template" className="w-full h-full object-cover" />
              </div>

              {/* Main Center Card (FocusPoint) */}
              <div className="w-[85%] sm:w-[50%] aspect-[4/3] bg-white rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/10 z-30 p-4 md:p-6 flex flex-col transform translate-y-0 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-center border-b border-black/5 pb-3 mb-4">
                  <span className="font-extrabold text-[15px] md:text-[17px] text-black">FocusPoint</span>
                  <span className="text-[11px] md:text-[12px] font-bold text-black/60 uppercase tracking-wider">GET IN TOUCH</span>
                </div>
                {/* Mockup grids */}
                <div className="grid grid-cols-[1fr_1.2fr] gap-3 md:gap-4 flex-1 overflow-hidden">
                  <div className="bg-slate-100 rounded-xl overflow-hidden border border-black/5">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80" alt="Mountain Road" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-rows-[1.2fr_1fr] gap-3 md:gap-4">
                    <div className="bg-slate-100 rounded-xl overflow-hidden border border-black/5">
                      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" alt="Yosemite" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-slate-100 rounded-xl overflow-hidden border border-black/5">
                      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80" alt="Forest" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Right Card */}
              <div className="w-[22%] aspect-[4/3] bg-white rounded-t-2xl shadow-xl border border-black/5 opacity-60 transform rotate-6 -translate-x-[20px] translate-y-[15px] z-10 overflow-hidden hidden sm:block">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80" alt="Template" className="w-full h-full object-cover" />
              </div>

              {/* Backmost Right Card */}
              <div className="w-[18%] aspect-[4/3] bg-white rounded-t-2xl shadow-lg border border-black/5 opacity-40 transform rotate-12 -translate-x-[40px] translate-y-[30px] z-0 overflow-hidden hidden sm:block">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80" alt="Template" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* 4.5. Simple Website Management Section */}
      <section className="py-24 bg-white text-[#121212] relative border-b border-black/5">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-tight tracking-tight font-sans text-[#121212] mb-4">
              Simple website management
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#121212]/70 font-medium">
              Designed for business owners and tech experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Features List */}
            <div className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-3">
                <h3 className="text-[24px] font-bold text-[#121212]">Everything in one place</h3>
                <p className="text-[15px] md:text-[16px] text-[#121212]/70 leading-relaxed font-medium">
                  Your domain, email, website, backups - all managed from one simple dashboard. Find what you need in seconds.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[24px] font-bold text-[#121212]">One-click actions</h3>
                <p className="text-[15px] md:text-[16px] text-[#121212]/70 leading-relaxed font-medium">
                  Want to add an online store? One click. Install WordPress? One click. Set up email? One click. No technical knowledge required - just point and click.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-[24px] font-bold text-[#121212]">AI business automation</h3>
                  <span className="bg-[#e0f7ea] text-[#00a86b] text-[11px] font-extrabold px-2 py-0.5 rounded-[4px] tracking-wide">NEW</span>
                </div>
                <p className="text-[15px] md:text-[16px] text-[#121212]/70 leading-relaxed font-medium">
                  Manage your online presence with the power of AI. Explore our AI Studio for AI-powered business automation.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[24px] font-bold text-[#121212]">Site Tools by Stinger</h3>
                <p className="text-[15px] md:text-[16px] text-[#121212]/70 leading-relaxed font-medium mb-2">
                  Every site gets its own Site Tools — so you can manage, share access, and switch between sites independently, without any overlap.
                </p>
                <a href="#" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#121212] tracking-wider uppercase hover:text-blue-600 transition-colors">
                  TRY SITE TOOLS
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Composition */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-slate-100 shadow-2xl flex items-center justify-center p-8 border border-black/5">
              {/* Blurred Abstract Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Abstract Background" 
                  className="w-full h-full object-cover filter blur-[20px] scale-110 opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#694331]/40 to-[#c19875]/40 mix-blend-overlay"></div>
              </div>

              {/* Floating Widgets & Laptop */}
              <div className="relative z-10 w-full h-full">
                
                {/* Floating Profile Widget */}
                <div className="absolute top-[20%] left-[0%] bg-white/50 backdrop-blur-md border border-white/40 p-3 rounded-2xl shadow-lg flex items-center gap-4 w-[55%] animate-float">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="w-3/4 h-2 bg-slate-800/20 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-slate-800/10 rounded-full"></div>
                  </div>
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  </div>
                </div>

                {/* Floating Chat bubbles */}
                <div className="absolute top-[45%] left-[-5%] bg-white/50 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-lg flex flex-col gap-3 w-[45%] animate-float-delayed">
                  <div className="w-full h-1.5 bg-slate-800/20 rounded-full"></div>
                  <div className="w-5/6 h-1.5 bg-slate-800/20 rounded-full"></div>
                </div>

                {/* Floating Graph Widget */}
                <div className="absolute top-[10%] right-[0%] bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-2xl shadow-xl w-[45%] border border-white/10 animate-float-delayed">
                  <div className="text-white text-[18px] font-bold mb-3">+65.2%</div>
                  <div className="w-full h-16 flex items-end gap-1 opacity-90 relative overflow-hidden rounded-md">
                     <svg viewBox="0 0 100 40" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                       <path d="M0 40 L0 30 Q10 20 20 30 T40 25 T60 35 T80 20 T100 25 L100 40 Z" fill="rgba(167, 139, 250, 0.4)" />
                       <path d="M0 40 L0 25 Q10 15 20 25 T40 20 T60 30 T80 15 T100 20 L100 40 Z" fill="rgba(52, 211, 153, 0.6)" />
                       <path d="M0 25 Q10 15 20 25 T40 20 T60 30 T80 15 T100 20" fill="none" stroke="#34d399" strokeWidth="2" />
                     </svg>
                  </div>
                </div>

                {/* Action Buttons Right Side */}
                <div className="absolute top-[50%] right-[0%] flex flex-col gap-3 translate-y-[-50%] z-20">
                  <div className="w-12 h-12 bg-[#332b26]/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/5 text-white/90 hover:scale-110 transition-transform cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="w-12 h-12 bg-[#332b26]/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/5 text-white/90 hover:scale-110 transition-transform cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                  </div>
                  <div className="w-12 h-12 bg-[#332b26]/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/5 text-white/90 hover:scale-110 transition-transform cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </div>
                </div>

                {/* Laptop Mockup */}
                <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[95%] z-20">
                  <div className="bg-[#e5e5e5] p-2 rounded-t-[16px] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative border-t border-white/50">
                    <div className="bg-[#121212] w-full aspect-[16/10] rounded-[8px] overflow-hidden flex flex-col border-[4px] border-black relative">
                       {/* Laptop Screen Content - Dashboard */}
                       <div className="h-6 bg-[#1a1a1a] w-full flex items-center px-3 gap-2 border-b border-white/5 shrink-0">
                         <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                         </div>
                       </div>
                       <div className="flex-1 bg-white flex flex-col">
                         {/* Sidebar & Header layout */}
                         <div className="flex h-full">
                           <div className="w-[25%] bg-[#121212] h-full flex flex-col p-3 gap-4 border-r border-white/10">
                              <div className="w-16 h-3 bg-white/20 rounded"></div>
                              <div className="flex flex-col gap-2 mt-4">
                                <div className="w-full h-2 bg-[#FFF9CA]/80 rounded"></div>
                                <div className="w-5/6 h-2 bg-white/10 rounded"></div>
                                <div className="w-full h-2 bg-white/10 rounded"></div>
                                <div className="w-4/5 h-2 bg-white/10 rounded"></div>
                                <div className="w-full h-2 bg-white/10 rounded"></div>
                              </div>
                           </div>
                           <div className="flex-1 bg-[#f9fafb] p-4 flex flex-col gap-4">
                             <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
                               {[...Array(9)].map((_, i) => (
                                 <div key={i} className="bg-white border border-slate-200 rounded-lg shadow-sm p-2 flex flex-col items-center justify-center gap-2">
                                   <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                   </div>
                                   <div className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
                                 </div>
                               ))}
                             </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-[110%] -ml-[5%] h-5 bg-[#d4d4d4] rounded-b-[8px] shadow-[0_20px_30px_rgba(0,0,0,0.4)] relative border-b border-black/20 flex flex-col items-center justify-start">
                    <div className="w-[20%] h-1 bg-[#a3a3a3] rounded-b-md mt-0"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Security Section */}
      <section className="py-24 bg-white text-[#121212] relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-tight tracking-tight font-sans text-[#121212]">
              Keep your website, data, and business safe, automatically
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Accordion */}
            <div className="flex flex-col border-t border-black/10">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="border-b border-black/10">
                  <button 
                    onClick={() => setActiveSecurityTab(activeSecurityTab === index ? -1 : index)}
                    className="w-full py-6 flex items-center justify-between text-left cursor-pointer hover:text-green-700 transition-colors bg-transparent border-none outline-none"
                  >
                    <span className="text-[20px] md:text-[22px] font-bold text-[#121212]">{feature.title}</span>
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className={`text-[#121212] transition-transform duration-300 ${activeSecurityTab === index ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSecurityTab === index ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[15px] text-[#121212]/70 leading-relaxed m-0 pr-8">
                      {feature.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Visual Composition */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-[#78b398] flex items-center justify-center p-8 shadow-2xl shadow-green-900/20">
              
              {/* Radar Rings Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,0,0,0)_0deg,rgba(0,168,107,0.3)_180deg,rgba(0,0,0,0)_360deg)] animate-[spin_8s_linear_infinite] origin-center rounded-full mix-blend-overlay"></div>
                 <div className="w-full aspect-square border-[2px] border-black/5 rounded-full absolute mix-blend-overlay shadow-[inset_0_0_50px_rgba(0,100,50,0.4)]"></div>
                 <div className="w-[70%] aspect-square border-[2px] border-black/5 rounded-full absolute mix-blend-overlay shadow-[inset_0_0_50px_rgba(0,100,50,0.5)]"></div>
                 <div className="w-[40%] aspect-square border-[2px] border-black/5 rounded-full absolute mix-blend-overlay shadow-[inset_0_0_50px_rgba(0,100,50,0.6)]"></div>
                 <div className="w-[10%] aspect-square bg-[#0b2217] rounded-full absolute shadow-[0_0_20px_#0b2217]"></div>
              </div>

              {/* Floating Security Badges */}
              <div className="relative z-10 w-full h-full">
                 
                 {/* Badge 1 */}
                 <div className="absolute top-[25%] left-[5%] bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg flex items-center gap-3 animate-float">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><rect x="9" y="11" width="6" height="4" rx="1"></rect><line x1="12" y1="9" x2="12" y2="11"></line></svg>
                    </div>
                    <span className="text-white font-medium pr-2">Scanning...</span>
                    {/* Targeting reticle effect */}
                    <div className="absolute inset-0 border border-white/20 rounded-xl scale-110">
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/50"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/50"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/50"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/50"></div>
                    </div>
                 </div>

                 {/* Badge 2 */}
                 <div className="absolute top-[40%] right-[5%] bg-[#0b2217]/60 backdrop-blur-md border border-[#0b2217]/50 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-float-delayed z-20">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><rect x="9" y="11" width="6" height="4" rx="1"></rect><line x1="12" y1="9" x2="12" y2="11"></line></svg>
                    </div>
                    <span className="text-white font-medium pr-2">Scanning...</span>
                    {/* Targeting reticle effect */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl scale-110">
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/30"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/30"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/30"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/30"></div>
                    </div>
                 </div>

                 {/* Badge 3 */}
                 <div className="absolute bottom-[20%] left-[20%] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-float z-30">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><rect x="9" y="11" width="6" height="4" rx="1"></rect><line x1="12" y1="9" x2="12" y2="11"></line></svg>
                    </div>
                    <span className="text-white font-medium pr-2">Scanning...</span>
                    {/* Targeting reticle effect */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl scale-110">
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/30"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/30"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/30"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/30"></div>
                    </div>
                 </div>

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WebHosting;
