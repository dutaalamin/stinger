import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WebHosting from './pages/WebHosting';

// Custom SVG Icons
const LogoSIcon = ({ className, strokeColor = "#FFF9CA" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4" />
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

const ShieldCheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

const LockIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const DomainSupportIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
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

const MenuIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MegamenuContent = ({ activeMenu, navOffset = 0 }) => {
  if (!activeMenu || !['Web Hosting', 'WordPress', 'AI', 'Website Building', 'About'].includes(activeMenu)) return null;

  return (
    <div className="w-full bg-white text-bg-dark animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg border-t border-slate-50">
      <div 
        className="w-full py-10 flex"
        style={{ paddingLeft: `${navOffset + 12}px`, paddingRight: '2rem' }}
      >
        <div className="flex gap-12 w-full max-w-[1000px]">
          {/* Dynamic Content based on Menu */}
      {activeMenu === 'Web Hosting' && (
        <>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pr-12 border-r border-slate-100">
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Web Hosting</h4>
                <p className="text-slate-500 text-[14px]">Grow your website with fast and secure web hosting</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Agency Program</h4>
                <p className="text-slate-500 text-[14px]">Scale your agency with premium hosting</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Hosting for WordPress</h4>
                <p className="text-slate-500 text-[14px]">Start, migrate, and manage WordPress sites easily</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Reseller Hosting</h4>
                <p className="text-slate-500 text-[14px]">Resell hosting and manage multiple clients</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Cloud Hosting</h4>
                <p className="text-slate-500 text-[14px]">High-performance cloud plans for growing sites</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Affiliate Program</h4>
                <p className="text-slate-500 text-[14px]">High earnings, fast payouts, and expert support</p>
              </div>
            </a>
          </div>
        </>
      )}

      {activeMenu === 'WordPress' && (
        <>
          <div className="w-1/2 flex flex-col gap-8 pr-12 border-r border-slate-100">
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <span className="font-bold text-[20px] font-serif text-slate-700 group-hover:text-[#e6c800]">W</span>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Hosting for WordPress</h4>
                <p className="text-slate-500 text-[14px]">Start, migrate, and manage WordPress sites easily</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Hosting for WooCommerce</h4>
                <p className="text-slate-500 text-[14px]">Sell easily with reliable hosting for your store</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-[#e6c800] transition-colors">Agency Program</h4>
                <p className="text-slate-500 text-[14px]">Scale your agency with premium hosting</p>
              </div>
            </a>
          </div>
          <div className="w-1/2 pl-4">
            <div className="flex items-center gap-3 mb-4">
              <h4 className="text-[18px] font-display font-bold">AI agent for WordPress</h4>
              <span className="bg-[#E2F2E7] text-[#006044] text-[11px] font-bold px-2 py-0.5 rounded uppercase">New</span>
            </div>
            <div className="rounded-xl overflow-hidden mb-4 shadow-sm relative group cursor-pointer">
              <img src="https://static-cdn.siteground.com/img/home/hover-videos/covers/wordpress_hosting_en.webp" alt="AI agent for WordPress" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Manage WordPress and WooCommerce sites easily by chatting with AI. Included FREE in all hosting plans for WordPress.
            </p>
          </div>
        </>
      )}

      {activeMenu === 'AI' && (
        <>
          <div className="w-1/2 flex flex-col pr-12 border-r border-slate-100 group cursor-pointer">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-[#e6c800]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4-2.4 7.6-2.4-7.6-7.6-2.4 7.6-2.4z M19 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
                </svg>
              </div>
              <h4 className="text-[20px] font-display font-bold group-hover:text-[#e6c800] transition-colors">AI Studio</h4>
            </div>
            <p className="text-slate-500 text-[14px] mb-6">Your AI workspace to boost growth.</p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://static-cdn.siteground.com/img/blocks/menu/ai_studio.webp" alt="AI Studio" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col pl-4 group cursor-pointer">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-[20px] font-display font-bold group-hover:text-[#e6c800] transition-colors">Coderick AI</h4>
            </div>
            <p className="text-slate-500 text-[14px] mb-6">Build web apps by simply chatting with AI</p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://static-cdn.siteground.com/img/home/hover-videos/covers/coderick_ai_en.webp" alt="Coderick AI" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </>
      )}

      {activeMenu === 'Website Building' && (
        <>
          <div className="w-1/2 flex flex-col pr-12 border-r border-slate-100 group cursor-pointer">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-[20px] font-display font-bold group-hover:text-[#e6c800] transition-colors">Website Builder</h4>
            </div>
            <p className="text-slate-500 text-[14px] mb-6">The simplest way to create a site</p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://static-cdn.siteground.com/img/home/hover-videos/covers/website_builder.webp" alt="Website Builder" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col pl-4 group cursor-pointer">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#FFFBEB] group-hover:border-[#FFF9CA] transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-[#e6c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-[20px] font-display font-bold group-hover:text-[#e6c800] transition-colors">Coderick AI</h4>
            </div>
            <p className="text-slate-500 text-[14px] mb-6">Build web apps by simply chatting with AI</p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://static-cdn.siteground.com/img/home/hover-videos/covers/coderick_ai_en.webp" alt="Coderick AI" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </>
      )}

      {activeMenu === 'About' && (
        <>
          <div className="w-1/3 flex flex-col gap-8 pr-12 border-r border-slate-100">
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-blue-600 transition-colors">About Stinger</h4>
                <p className="text-slate-500 text-[13px]">Who we are and what we do best.</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-blue-600 transition-colors">Our Blog</h4>
                <p className="text-slate-500 text-[13px]">The latest news and company updates.</p>
              </div>
            </a>
            <a href="#" className="flex gap-4 group no-underline text-[#1a1a1a]">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <svg className="w-5 h-5 text-slate-700 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h4 className="text-[18px] font-display font-bold mb-1 group-hover:text-blue-600 transition-colors">Knowledge base</h4>
                <p className="text-slate-500 text-[13px]">Get answers to all FAQs.</p>
              </div>
            </a>
          </div>
          <div className="w-2/3 pl-4 flex flex-col justify-center">
            <h4 className="text-[20px] font-display font-bold mb-6">Customer success stories</h4>
            <div className="rounded-xl overflow-hidden mb-6 shadow-sm group cursor-pointer max-w-[450px]">
              <img src="/review_1.png" alt="Customer Success" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-4 max-w-[450px] italic">
              "When it comes to website hosting, I always recommend Stinger, as it's such a positive contrast to my previous experiences."
            </p>
            <a href="#" className="font-bold text-[13px] uppercase flex items-center gap-2 hover:text-blue-600 transition-colors">
              READ STORY <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </>
      )}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
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

  const navRef = useRef(null);
  const [navOffset, setNavOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (navRef.current) {
        setNavOffset(navRef.current.getBoundingClientRect().left);
      }
    };
    
    updateOffset();
    setTimeout(updateOffset, 100);

    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  // Review Carousel State
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      text: "Stinger is obviously designed to get websites working really fast. It's got lots and lots of features we were able to tap into to make our site's performance 88.6% faster.",
      author: "japanskiexperience.com",
      role: "Ski travel agent",
      bg: "#F1F3F5",
      color: "#1E293B",
      image: "/review_1.png",
      shape: "circle",
      badge: "chart"
    },
    {
      text: "Not only do we spend 75% less on our monthly bill, but our website speed increased, when we moved to Stinger! I couldn't be happier!",
      author: "builtlean.com",
      role: "Wellness Coach",
      bg: "#2A5B7E",
      color: "white",
      image: "/review_2.png",
      shape: "rounded",
      badge: "chart"
    },
    {
      text: "I was trying to talk with my bank just now and it wasn't instantaneous. I was disappointed because I'm used to Stinger's standards.",
      author: "pixweb.fr",
      role: "Web design agency",
      bg: "#E9F3FC",
      color: "#1E293B",
      image: "/review_3.png",
      shape: "square",
      badge: "rocket"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.querySelector('.services-section');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // Hide navbar when services section is close to top (e.g. 100px)
        if (rect.top <= 100) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
      }

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
    }, 3500);
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
    <Router>
      <div className="min-h-screen bg-bg-dark font-sans text-text-light flex flex-col relative w-full m-0 p-0 overflow-x-hidden selection:bg-stinger-mint selection:text-stinger-dark">
      {/* Navbar / Header */}
      <header 
        className={`absolute top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${scrolled ? 'fixed bg-[#121212]/95 backdrop-blur-md shadow-md' : 'bg-transparent'} ${hideNavbar && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${hoveredMenu || isMobileMenuOpen ? '!bg-white shadow-md' : ''}`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="w-full px-6 lg:px-12 flex justify-between items-center h-[90px]">
          {/* Left: Logo */}
          <Link to="/" className={`flex items-center gap-1.5 no-underline font-sans font-extrabold text-[28px] transition-all duration-300 hover:-translate-y-[1px] group shrink-0 ${hoveredMenu ? 'text-[#1a1a1a]' : 'text-[#FFF9CA]'}`}>
            <LogoSIcon className="w-9 h-9" strokeColor={hoveredMenu ? '#1a1a1a' : '#FFF9CA'} />
            <span>Stinger</span>
          </Link>
          
          {/* Center: Main Navigation Menu (Desktop) */}
          <ul ref={navRef} className="hidden lg:flex list-none items-center h-full gap-2 xl:gap-4 m-0 p-0">
            {['Web Hosting', 'WordPress', 'AI', 'Website Building', 'Ecommerce', 'Email Marketing', 'Domains'].map(item => {
              const showChevron = ['Web Hosting', 'WordPress', 'AI', 'Website Building'].includes(item);
              const isHovered = hoveredMenu === item;
              
              let textColorClass = "text-white/90";
              if (hoveredMenu || isMobileMenuOpen) {
                textColorClass = isHovered ? "text-[#e6c800]" : "text-[#4a4a4a]";
              }
              
              const toPath = item === 'Web Hosting' ? '/web-hosting' : '/';
              return (
                <li key={item} className="h-full flex items-center" onMouseEnter={() => setHoveredMenu(item)}>
                  <Link to={toPath} className={`no-underline font-bold text-[14px] xl:text-[15px] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap h-full px-3 relative ${textColorClass} hover:text-[#e6c800]`}>
                    <span>{item}</span>
                    {showChevron && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Actions (About dropdown & Login button) & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 h-full">
            <div className="h-full items-center hidden lg:flex" onMouseEnter={() => setHoveredMenu('About')}>
              <a href="#" className={`no-underline font-bold text-[14px] xl:text-[15px] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap h-full px-3 relative ${hoveredMenu === 'About' ? 'text-[#e6c800]' : (hoveredMenu || isMobileMenuOpen ? 'text-[#4a4a4a]' : 'text-white/90')} hover:text-[#e6c800]`}>
                <span>About</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredMenu === 'About' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </a>
            </div>
            <a href="#" className={`font-bold text-[14px] xl:text-[15px] px-6 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap inline-block text-center no-underline border ${hoveredMenu || isMobileMenuOpen ? 'bg-transparent text-[#1a1a1a] border-slate-300 hover:bg-slate-50' : 'text-bg-dark bg-[#FFF9CA] border-transparent hover:bg-[#FFFBEB]'}`}>
              Login
            </a>
            <button 
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${hoveredMenu || isMobileMenuOpen ? 'text-[#1a1a1a] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Megamenu Container (Desktop) */}
        {hoveredMenu && !isMobileMenuOpen && <MegamenuContent activeMenu={hoveredMenu} navOffset={navOffset} />}

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-6 gap-4">
            {['Web Hosting', 'WordPress', 'AI', 'Website Building', 'Ecommerce', 'Email Marketing', 'Domains', 'About'].map((item) => {
              const hasSubmenu = ['Web Hosting', 'WordPress', 'AI', 'Website Building', 'About'].includes(item);
              const isActive = activeMobileAccordion === item;
              
              return (
                <div key={item} className="flex flex-col border-b border-slate-100 last:border-0 pb-4">
                  <div 
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => hasSubmenu ? setActiveMobileAccordion(isActive ? null : item) : null}
                  >
                    <span className={`font-bold text-[18px] transition-colors ${isActive ? 'text-[#e6c800]' : 'text-[#1a1a1a]'}`}>{item}</span>
                    {hasSubmenu && (
                      <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    )}
                  </div>
                  
                  {/* Mobile Submenu Accordion Content */}
                  {hasSubmenu && isActive && (
                    <div className="mt-4 flex flex-col gap-4 pl-2 animate-in slide-in-from-top-2 fade-in duration-200">
                      {item === 'Web Hosting' && (
                        <>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Web Hosting</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Agency Program</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Hosting for WordPress</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Reseller Hosting</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Cloud Hosting</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Affiliate Program</a>
                        </>
                      )}
                      {item === 'WordPress' && (
                        <>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Hosting for WordPress</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Hosting for WooCommerce</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Agency Program</a>
                        </>
                      )}
                      {item === 'AI' && (
                        <>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">AI Studio</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Coderick AI</a>
                        </>
                      )}
                      {item === 'Website Building' && (
                        <>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Website Builder</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Coderick AI</a>
                        </>
                      )}
                      {item === 'About' && (
                        <>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">About Stinger</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Our Blog</a>
                          <a href="#" className="text-[#4a4a4a] hover:text-[#e6c800] text-[15px] font-medium py-1">Knowledge base</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-hosting" element={<WebHosting />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10 text-[15px] text-slate-600">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-[repeat(4,1fr)_1.2fr] gap-10 mb-14">
            <div>
              <h4 className="font-display font-bold text-[18px] text-bg-dark mb-6">Hosting Services</h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Web Hosting</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Hosting for WordPress</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Hosting for WooCommerce</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Cloud Hosting</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Reseller Hosting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-[18px] text-bg-dark mb-6">Products</h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Website Builder</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Ecommerce</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Stinger AI</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">AI Studio</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Domain Names</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-[18px] text-bg-dark mb-6">About Us</h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Company</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Hosting Technology</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Careers</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Contact Us</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Legal Notice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-[18px] text-bg-dark mb-6">Resources</h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Blog</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Success Stories</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Knowledge Base</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Tutorials</a></li>
                <li><a href="#" className="no-underline text-slate-600 font-medium transition-colors duration-300 hover:text-stinger-dark">Academy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-display font-bold text-[18px] text-bg-dark mb-6">Recent From Blog</h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li>
                  <a href="#" className="no-underline text-slate-700 font-bold transition-colors duration-300 hover:text-stinger-dark">Stinger AI integrates with Stripe</a>
                  <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>July 14, 2026</p>
                </li>
                <li>
                  <a href="#" className="no-underline text-slate-700 font-bold transition-colors duration-300 hover:text-stinger-dark">Rebuild your site with Stinger Coder</a>
                  <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>July 10, 2026</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col gap-6">
            {/* Upper row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span>Region:</span>
                <button className="bg-transparent border-none text-slate-600 flex items-center gap-1.5 cursor-pointer hover:text-slate-900 font-medium">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
                  </div>
                  <span>World</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
              </div>

              {/* AI Summary Logos */}
              <div className="flex items-center gap-4">
                <span className="text-slate-700">Stinger AI Summary:</span>
                <div className="flex items-center gap-2.5">
                  {/* ChatGPT-like swirl */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 3a9 9 0 000 18v-9l7.7-4.5"/><path d="M19.7 7.5L12 12l-7.7-4.5"/><path d="M4.3 16.5L12 12v9"/></svg>
                  {/* Anthropic-like spark */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97757" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1l14.2-14.2"/></svg>
                  {/* Gemini-like 4-point star */}
                  <svg width="22" height="22" viewBox="0 0 24 24"><defs><linearGradient id="ai-grad" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#4285F4"/><stop offset="33%" stopColor="#9B72CB"/><stop offset="66%" stopColor="#D96570"/><stop offset="100%" stopColor="#F39200"/></linearGradient></defs><path d="M12 1.5C12 7.3 16.7 12 22.5 12C16.7 12 12 16.7 12 22.5C12 16.7 7.3 12 1.5 12C7.3 12 12 7.3 12 1.5Z" fill="url(#ai-grad)"/></svg>
                  {/* Midjourney-like crescent */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/><path d="M3 12c4.97 0 9-4.03 9-9 0 4.97 4.03 9 9 9-4.97 0-9 4.03-9 9 0-4.97-4.03-9-9-9z"/></svg>
                  {/* Blue Snowflake */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#48C3D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M8 6l8 12M16 6l-8 12"/></svg>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <a href="#" className="text-black hover:opacity-70 transition-opacity"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.33 3.27-6.33 3.27z"/></svg></a>
              </div>
            </div>

            {/* Lower row */}
            <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center text-[13px] text-slate-600 relative font-medium">
              <div className="flex gap-4 md:absolute md:left-0">
                <a href="#" className="no-underline text-slate-600 hover:text-slate-900 transition-colors">Legal</a>
                <a href="#" className="no-underline text-slate-600 hover:text-slate-900 transition-colors">Privacy</a>
                <a href="#" className="no-underline text-slate-600 hover:text-slate-900 transition-colors">Cookies</a>
                <a href="#" className="no-underline text-slate-600 hover:text-slate-900 transition-colors">AI Info</a>
              </div>
              <p className="mx-auto mt-4 md:mt-0 font-medium">
                © 2026 Duta. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
        {chatOpen ? (
          <div className="w-[360px] h-[480px] bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden mb-4 origin-bottom-right transition-all duration-500 border border-slate-200">
            {/* Header */}
            <div className="bg-[#FFF9CA] text-black px-5 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-[20px] shadow-sm">✨</div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800' }}>Stinger AI Chat</h4>
                  <div className="text-[12px] text-black/70 flex items-center gap-1.5 font-medium mt-0.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>
              <button className="bg-transparent border-none text-black cursor-pointer text-[24px] opacity-60 transition-all hover:opacity-100 hover:rotate-90 hover:scale-110" onClick={() => setChatOpen(false)}>×</button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-slate-50/50">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed break-words shadow-sm ${msg.sender === 'bot' ? 'bg-white text-black self-start rounded-tl-sm border border-slate-200' : 'bg-[#121212] text-white self-end rounded-tr-sm'}`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-1.5 items-center px-5 py-4 bg-white rounded-2xl rounded-tl-sm self-start shadow-sm border border-slate-200">
                  <span className="w-2 h-2 bg-[#121212] rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-[#121212] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                  <span className="w-2 h-2 bg-[#121212] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form className="px-4 py-3.5 border-t border-slate-200 flex gap-2.5 bg-white items-center" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask Stinger AI..."
                className="flex-1 border border-slate-200 bg-slate-50 rounded-full px-5 py-2.5 text-[14px] outline-none font-sans transition-all focus:border-[#FFF9CA] focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,249,202,0.8)]"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button type="submit" className="bg-[#121212] text-[#FFF9CA] border-none w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black hover:scale-105 hover:shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="w-[64px] h-[64px] rounded-full bg-[#FFF9CA] text-[#121212] shadow-[0_8px_30px_rgba(255,249,202,0.6)] flex items-center justify-center cursor-pointer transition-all duration-300 relative hover:scale-110 hover:shadow-[0_12px_40px_rgba(255,249,202,0.9)] hover:bg-[#FFFBEB] after:content-[''] after:absolute after:inset-[-4px] after:rounded-full after:border-2 after:border-[#FFF9CA]/80 after:animate-[ripple_2s_infinite_ease-out]" onClick={() => setChatOpen(true)}>
            {/* AI Sparkle Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.5 2L13.2 8.3L19.5 10L13.2 11.7L11.5 18L9.8 11.7L3.5 10L9.8 8.3L11.5 2Z" />
              <path d="M19 16L19.5 18.5L22 19L19.5 19.5L19 22L18.5 19.5L16 19L18.5 18.5L19 16Z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-[#121212] text-[#FFF9CA] rounded-full text-[11px] font-black flex items-center justify-center border-2 border-white shadow-sm">1</span>
          </div>
        )}
      </div>
    </div>
    </Router>
  );
}

export default App;
