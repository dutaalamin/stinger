import React from 'react';

function WebHosting() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark font-sans text-text-light">
      
      {/* 1. Hero Section (SiteGround Style: Two-column banner) */}
      <section className="relative pt-[140px] pb-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 0%, #1a2a22 0%, #0d1110 60%, #0d1110 100%)' }}>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[radial-gradient(circle_at_top_right,rgba(0,210,133,0.15)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,rgba(0,210,133,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left flex flex-col items-start">
              {/* Green Discount Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-[2px] bg-[#00d285] text-[#121212] text-[12px] font-black mb-6 uppercase tracking-widest">
                SAVE UP TO 83%
              </div>
              
              <h1 className="text-[40px] md:text-[52px] lg:text-[62px] text-white font-bold leading-[1.1] tracking-tight mb-8 font-sans" style={{ letterSpacing: '-0.03em' }}>
                Web hosting built <br />
                for your success
              </h1>
              
              {/* Bullet Features with Custom Icons */}
              <ul className="flex flex-col gap-5 mb-8">
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span>Ultrafast and reliable website performance</span>
                </li>
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                  </div>
                  <span>Bullet-proof security for your peace of mind</span>
                </li>
                <li className="flex items-center gap-3.5 text-white/95 text-[16px] md:text-[17px] font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <span>24/7 expert human support</span>
                </li>
              </ul>
              
              {/* Pricing Callout */}
              <div className="flex items-baseline gap-2 mb-8 select-none">
                <span className="text-[18px] text-white/60 font-medium">From</span>
                <span className="text-[36px] md:text-[40px] text-[#00d285] font-black font-sans leading-none">$2.99<span className="text-[16px] font-semibold">/mo</span></span>
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
                <span className="text-[13px] text-[#00d285] font-semibold tracking-wide">
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
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 15px 25px rgba(0, 210, 133, 0.4))' }}>
                   <path d="M50 0L57.5 10H70L75 20L87.5 25L87.5 37.5L100 45L95 55L100 65L87.5 72.5L87.5 85L75 90L70 100H57.5L50 90L42.5 100H30L25 90L12.5 85L12.5 72.5L0 65L5 55L0 45L12.5 37.5L12.5 25L25 20L30 10H42.5L50 0Z" fill="#00d285" stroke="#121212" strokeWidth="3" strokeLinejoin="round"/>
                   <text x="50" y="52" fill="#121212" fontSize="48" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" dominantBaseline="middle">%</text>
                 </svg>
              </div>
            </div>

          </div>

          {/* Bottom Trustpilot Section */}
          <div className="mt-16 flex flex-col gap-3 items-center text-center border-t border-white/10 pt-10">
            <div className="flex items-center gap-2.5 text-[15px] font-bold text-white/90">
              <span>Excellent</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="w-[20px] h-[20px] bg-[#00d285] inline-flex items-center justify-center text-[#121212] text-[12px] font-black rounded-[2px] shadow-sm select-none">★</span>
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
      <section id="pricing-plans" className="py-24 bg-[linear-gradient(to_bottom,rgba(18,18,18,1)_0%,rgba(26,26,26,1)_100%)] border-b border-white/5">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] text-white font-bold mb-4 font-sans tracking-tight">Choose Your Hosting Plan</h2>
            <p className="text-[18px] text-white/60 max-w-[600px] mx-auto font-medium">Get the speed, security, and hosting resources you need for your website.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1: Starter */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col backdrop-blur-xl">
              <h3 className="text-[24px] font-bold text-white mb-2">Starter</h3>
              <p className="text-[14px] text-white/60 mb-6">Perfect for small websites or blogs.</p>
              <div className="mb-6 border-b border-white/10 pb-6">
                <span className="text-[14px] text-white/50 line-through mr-2">$14.99/mo</span>
                <div className="flex items-start">
                  <span className="text-[24px] text-white font-bold mt-1">$</span>
                  <span className="text-[56px] text-white font-black leading-none tracking-tight">2.99</span>
                  <span className="text-[16px] text-white/70 font-medium self-end mb-2 ml-1">/mo</span>
                </div>
                <div className="mt-2 text-[13px] text-stinger-green font-bold bg-stinger-green/10 inline-block px-3 py-1 rounded-full">Save 80%</div>
              </div>
              <ul className="flex flex-col gap-4 flex-1 mb-8">
                {['1 Website', '10 GB Web Space', '~ 10,000 Visits Monthly', 'Unmetered Traffic', 'Free SSL', 'Daily Backup', 'Free CDN', 'Free Email', 'Managed WordPress'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-white/80 font-medium">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-[16px] border-2 border-[#FFF9CA] text-[#FFF9CA] bg-transparent transition-all hover:bg-[#FFF9CA] hover:text-[#121212] cursor-pointer">
                Get Plan
              </button>
            </div>

            {/* Plan 2: Pro (Highlighted) */}
            <div className="bg-[#FFF9CA] border border-[#FFF9CA] rounded-2xl shadow-[0_20px_50px_rgba(255,249,202,0.15)] p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col relative scale-[1.03] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] text-[#FFF9CA] text-[12px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#FFF9CA]/20">
                Best Seller
              </div>
              <h3 className="text-[24px] font-bold text-[#121212] mb-2">Pro</h3>
              <p className="text-[14px] text-[#121212]/70 mb-6">Great for growing sites and businesses.</p>
              <div className="mb-6 border-b border-[#121212]/10 pb-6">
                <span className="text-[14px] text-[#121212]/50 line-through mr-2">$24.99/mo</span>
                <div className="flex items-start">
                  <span className="text-[24px] text-[#121212] font-bold mt-1">$</span>
                  <span className="text-[56px] text-[#121212] font-black leading-none tracking-tight">4.99</span>
                  <span className="text-[16px] text-[#121212]/70 font-medium self-end mb-2 ml-1">/mo</span>
                </div>
                <div className="mt-2 text-[13px] text-white font-bold bg-[#121212] inline-block px-3 py-1 rounded-full">Save 80%</div>
              </div>
              <ul className="flex flex-col gap-4 flex-1 mb-8">
                {['Unlimited Websites', '20 GB Web Space', '~ 100,000 Visits Monthly', 'Unmetered Traffic', 'Free SSL', 'Daily Backup', 'Free CDN', 'Free Email', 'Managed WordPress', 'On-demand Backup Copies', '30% Faster PHP'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#121212]/90 font-bold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-[16px] bg-[#121212] text-[#FFF9CA] transition-all hover:bg-black hover:scale-[1.02] cursor-pointer border-none shadow-lg">
                Get Plan
              </button>
            </div>

            {/* Plan 3: Elite */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col backdrop-blur-xl">
              <h3 className="text-[24px] font-bold text-white mb-2">Elite</h3>
              <p className="text-[14px] text-white/60 mb-6">Optimized for high-traffic sites.</p>
              <div className="mb-6 border-b border-white/10 pb-6">
                <span className="text-[14px] text-white/50 line-through mr-2">$39.99/mo</span>
                <div className="flex items-start">
                  <span className="text-[24px] text-white font-bold mt-1">$</span>
                  <span className="text-[56px] text-white font-black leading-none tracking-tight">7.99</span>
                  <span className="text-[16px] text-white/70 font-medium self-end mb-2 ml-1">/mo</span>
                </div>
                <div className="mt-2 text-[13px] text-stinger-green font-bold bg-stinger-green/10 inline-block px-3 py-1 rounded-full">Save 80%</div>
              </div>
              <ul className="flex flex-col gap-4 flex-1 mb-8">
                {['Unlimited Websites', '40 GB Web Space', '~ 400,000 Visits Monthly', 'Unmetered Traffic', 'Free SSL', 'Daily Backup', 'Free CDN', 'Free Email', 'Managed WordPress', 'On-demand Backup Copies', '30% Faster PHP', 'Staging + Git', 'Highest Tier of Resources'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-white/80 font-medium">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-[16px] border-2 border-[#FFF9CA] text-[#FFF9CA] bg-transparent transition-all hover:bg-[#FFF9CA] hover:text-[#121212] cursor-pointer">
                Get Plan
              </button>
            </div>
            
          </div>
          
          <div className="mt-8 text-center text-white/50 text-[14px] font-medium">
            All plans include a 30-day money-back guarantee. Prices exclude VAT.
          </div>
        </div>
      </section>

      {/* 3. Host Here, Succeed Everywhere Section (SiteGround Style) */}
      <section className="py-24 bg-[#121212] relative border-b border-white/5">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Visual & Headline */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-[36px] md:text-[44px] lg:text-[48px] text-white font-extrabold leading-tight font-sans tracking-tight">
                Host here, succeed everywhere
              </h2>
              <p className="text-[18px] text-white/70 max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-medium">
                We take care of the technical stuff. You take care of your customers.
              </p>
              {/* Visual Mockup */}
              <div className="mt-6 relative w-full aspect-video max-w-[500px] mx-auto lg:mx-0 bg-black/40 border border-white/10 rounded-[24px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Host Here, Succeed Everywhere" 
                  className="w-full h-full object-cover opacity-80 filter brightness-95" 
                />
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col gap-8">
              
              {/* Feature 1 */}
              <div className="flex gap-5 items-start pb-8 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-white m-0">Start a new site with a click</h4>
                  <p className="text-[15px] text-white/60 leading-relaxed m-0 font-medium">
                    Create your perfect website effortlessly with our automated site wizard and free installation of WordPress or other CMS.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 items-start pb-8 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-white m-0">Move your existing site</h4>
                  <p className="text-[15px] text-white/60 leading-relaxed m-0 font-medium">
                    Already have a website? Let our experts transfer it for you or use our automatic migrator for WordPress sites. Avoid downtime, stress, and extra costs. Your site stays live the entire time.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5 items-start pb-8 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-white m-0">Get professional business email</h4>
                  <p className="text-[15px] text-white/60 leading-relaxed m-0 font-medium">
                    Build credibility with unlimited email accounts at your own domain, including free spam protection and webmail.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00d285] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-white m-0">Start selling online anytime</h4>
                  <p className="text-[15px] text-white/60 leading-relaxed m-0 font-medium">
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

      {/* 5. WordPress Focus Section */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-[#FFF9CA]/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full bg-black/40 border border-white/10 rounded-[32px] p-8 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                 {/* WordPress Logo Mockup SVG */}
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="#FFF9CA" className="opacity-90">
                    <path d="M12.158,12.786l-2.698,7.84c.806.236,1.657.365,2.54.365,1.047,0,2.05-.18,2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.572ZM12,2c5.523,0,10,4.477,10,10,0,5.522-4.477,10-10,10S2,17.522,2,12C2,6.477,6.477,2,12,2Zm5.748,8.21c0-1.046-.437-1.847-.791-2.483C16.488,6.869,16.039,6,16.039,5.016c0-1.154.912-2.213,2.23-2.213.064,0,.127.004.189.011-2.316-1.572-5.185-2.29-8.156-2.029C8.368.966,6.602,1.688,5.161,2.894l6.096,16.326,3.626-9.845c.44-.925.865-1.156,1.442-1.166ZM3.811,12c0-.765.105-1.503.298-2.214l3.149,8.55C5.076,16.634,3.811,14.453,3.811,12Zm11.835,6.591.246-.723L18.423,10.6c.205.819.317,1.674.317,2.553,0,2.231-.762,4.288-2.094,5.938Z"/>
                 </svg>
              </div>
              {/* Decorative tags */}
              <div className="absolute top-[10%] right-[0%] bg-[#121212] border border-white/20 text-[#FFF9CA] font-bold px-4 py-2 rounded-lg shadow-xl text-[14px]">Managed WP</div>
              <div className="absolute bottom-[20%] left-[-5%] bg-stinger-green border border-white/20 text-bg-dark font-bold px-4 py-2 rounded-lg shadow-xl text-[14px]">Auto Updates</div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[32px] md:text-[40px] text-white font-bold mb-6 font-sans tracking-tight">Managed WordPress Hosting</h2>
            <p className="text-[18px] text-white/60 mb-8 font-medium leading-relaxed">
              Experience hassle-free WordPress with our managed service. We handle the technical stuff so you can focus on building your brand.
            </p>
            <ul className="flex flex-col gap-4 text-left mx-auto max-w-[500px] lg:mx-0">
              <li className="flex items-center gap-3 text-[16px] text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#FFF9CA]/20 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Automated WordPress installation
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#FFF9CA]/20 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Free WordPress Migrator tool
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#FFF9CA]/20 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Managed auto-updates for core and plugins
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#FFF9CA]/20 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Expert WordPress support 24/7
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-[url('/stinger_hero_bg.png')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#FFF9CA]/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90"></div>
        <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[36px] md:text-[48px] text-white font-bold mb-6 font-sans tracking-tight">Ready to launch your website?</h2>
          <p className="text-[20px] text-white/80 mb-10 font-medium">Join over 2.8 million domain owners who trust us with their websites.</p>
          <button className="px-10 py-5 rounded-full bg-white text-[#121212] font-black text-[18px] uppercase tracking-wider transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-none cursor-pointer">
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  );
}

export default WebHosting;
