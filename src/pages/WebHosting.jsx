import React from 'react';

function WebHosting() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark font-sans text-text-light">
      
      {/* 1. Hero Section (SiteGround Style: Two-column banner) */}
      <section className="relative pt-[180px] pb-16 overflow-hidden bg-[#121212]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[radial-gradient(circle_at_top_right,rgba(0,210,133,0.08)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,rgba(255,249,202,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
        
        {/* Large transparent % in background */}
        <div className="absolute right-[10%] bottom-[10%] text-[400px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0 hidden lg:block">%</div>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left flex flex-col items-start">
              {/* Green Discount Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-[4px] bg-[#00d285]/20 text-[#00d285] text-[12px] font-extrabold mb-6 tracking-wider">
                SAVE UP TO 83%
              </div>
              
              <h1 className="text-[40px] md:text-[52px] lg:text-[62px] text-white font-extrabold leading-[1.15] tracking-tight mb-8 font-sans">
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

              {/* Generated Entrepreneur Image */}
              <div className="absolute right-0 bottom-0 w-[78%] h-full z-10 flex items-end">
                <img 
                  src="/stinger_hero_person.png" 
                  alt="Business Owner" 
                  className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-95" 
                />
              </div>

              {/* Mint stamp badge with % */}
              <div className="absolute left-[38%] top-[32%] w-20 h-20 bg-[#00d285] rounded-full flex items-center justify-center text-black font-black text-[36px] shadow-[0_10px_30px_rgba(0,210,133,0.4)] border-4 border-[#121212] z-20 animate-pulse select-none" style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', transform: 'rotate(-15deg)' }}>
                %
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

      {/* 3. Features Section (Speed & Security Focus) */}
      <section className="py-24 bg-[#121212] relative border-b border-white/5">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] text-white font-bold mb-4 font-sans tracking-tight">Crafted for Easy Website Management</h2>
            <p className="text-[18px] text-white/60 max-w-[700px] mx-auto font-medium">
              We provide tools and features that make launching and managing your website a breeze.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Free Domain Name</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                Get your website off the ground with a free domain for the first year on our Pro and Elite plans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Free SSL Certificates</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                Protect your visitors and boost your SEO with Let&apos;s Encrypt SSL certificates automatically installed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Daily Backups</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                We keep daily backups of your data. Restore your website with a single click in case of accidents.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Ultrafast Performance</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                Built on premium Google Cloud infrastructure with custom PHP setup for unmatched speed.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Top-Notch Security</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                Smart WAF, AI anti-bot system, and advanced DDoS protection keep your site safe from threats.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFF9CA] group-hover:bg-[#FFF9CA] group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
              </div>
              <h4 className="text-[20px] font-bold text-white m-0">Free Email</h4>
              <p className="text-[15px] text-white/60 leading-relaxed m-0">
                Create professional email addresses with your domain name at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WordPress Focus Section */}
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
