import React from 'react';

function WebHosting() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark font-sans text-text-light">
      
      {/* 1. Hero Section (SiteGround Style: Short hero, clean typography) */}
      <section className="relative pt-[160px] pb-[180px] overflow-hidden bg-[linear-gradient(to_bottom,rgba(18,18,18,0.98)_0%,rgba(30,30,30,1)_100%)]">
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,249,202,0.1)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FFF9CA] text-[13px] font-bold mb-6 tracking-wide backdrop-blur-sm">
            <span>TRUSTED BY 2,800,000+ DOMAINS</span>
          </div>
          
          <h1 className="text-[44px] md:text-[56px] lg:text-[64px] text-white font-bold leading-[1.1] tracking-tight mb-6 max-w-[900px] mx-auto font-sans">
            Premium Web Hosting <br className="hidden md:block" />
            <span className="text-[#FFF9CA]">for a Successful Website</span>
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-white/70 font-medium leading-relaxed max-w-[750px] mx-auto mb-10">
            Ultrafast, highly secure, and incredibly easy to use. Expert 24/7 support and powerful AI tools included.
          </p>
        </div>
      </section>

      {/* 2. Pricing Plans (Overlapping Hero) */}
      <section className="relative z-20 mt-[-140px] mb-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
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
