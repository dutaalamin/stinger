import React from 'react';

function WebHosting() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark font-sans">
      {/* Web Hosting Hero Section */}
      <section className="relative pt-[180px] pb-24 overflow-hidden bg-[linear-gradient(to_bottom,rgba(18,18,18,0.95)_0%,rgba(18,18,18,1)_100%)]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,249,202,0.15)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Content */}
            <div className="flex-1 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-stinger-green text-[13px] font-bold mb-8 tracking-wide shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-stinger-green animate-pulse"></span>
                <span>FAST & SECURE HOSTING</span>
              </div>
              
              <h1 className="text-[48px] md:text-[64px] lg:text-[72px] text-white font-bold leading-[1.1] tracking-tight mb-6">
                Hosting that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a3a3a3]">works for you</span>
              </h1>
              
              <p className="text-[20px] text-white/70 font-medium leading-relaxed max-w-[600px] mx-auto lg:mx-0 mb-10">
                Lightning-fast performance, unparalleled security, and 24/7 expert support. Everything you need to succeed online.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 rounded-full bg-[#FFF9CA] text-bg-dark font-bold text-[16px] transition-all hover:bg-white hover:scale-105 shadow-[0_4px_20px_rgba(255,249,202,0.2)] hover:shadow-[0_4px_30px_rgba(255,249,202,0.4)] cursor-pointer border-none flex items-center gap-2">
                  View Pricing Plans
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <div className="flex items-center gap-3 text-white/80 font-medium px-4 py-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Visual / Graphic */}
            <div className="flex-1 w-full relative h-[500px] flex items-center justify-center hidden lg:flex">
               <div className="relative w-full h-full">
                  {/* Floating Elements Mockup */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-full shadow-[0_0_80px_rgba(255,249,202,0.05)] border border-white/5 animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                  
                  {/* Main Server Graphic */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[340px] bg-[#1a1a1a] rounded-[32px] border border-white/10 shadow-2xl p-6 flex flex-col justify-between backdrop-blur-xl z-20 overflow-hidden group hover:border-[#FFF9CA]/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9CA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div>
                      <div className="flex justify-between items-center mb-8 relative z-10">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-stinger-green"></div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                           <span className="w-1.5 h-1.5 rounded-full bg-stinger-green animate-pulse"></span>
                           <span className="text-[10px] text-white/70 font-mono font-medium tracking-wider">ONLINE</span>
                        </div>
                      </div>
                      <div className="space-y-4 relative z-10">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-12 w-full bg-black/50 rounded-xl border border-white/5 flex items-center px-4 overflow-hidden relative">
                             <div className="w-1 h-full bg-[#FFF9CA] absolute left-0 top-0"></div>
                             <div className="flex w-full justify-between items-center">
                               <div className="w-2/3 h-2 bg-white/10 rounded-full overflow-hidden">
                                 <div className={`h-full bg-[#FFF9CA] rounded-full`} style={{ width: `${60 + i * 15}%`, animation: `pulse ${2+i}s infinite` }}></div>
                               </div>
                               <span className="text-[11px] font-mono text-[#FFF9CA]/70">{60 + i * 15}%</span>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center">
                       <div>
                         <div className="text-[10px] text-white/50 mb-0.5">LATENCY</div>
                         <div className="text-[14px] text-stinger-green font-bold font-mono">12ms</div>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-[#FFF9CA]/10 flex items-center justify-center text-[#FFF9CA]">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                       </div>
                    </div>
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-[20%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-30 animate-bounce" style={{animationDuration: '4s'}}>
                    <div className="w-10 h-10 bg-stinger-green rounded-xl flex items-center justify-center text-bg-dark">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <div className="text-[12px] text-white/70 font-medium">Security</div>
                      <div className="text-[14px] text-white font-bold">Advanced DDoS</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[20%] left-[5%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-30 animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <div className="text-[12px] text-white/70 font-medium">Uptime</div>
                      <div className="text-[14px] text-white font-bold">99.99% Guar.</div>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Rest of page placeholder */}
      <section className="py-24 bg-bg-dark text-white text-center">
        <h2>Features Coming Soon</h2>
      </section>

    </div>
  );
}

export default WebHosting;
