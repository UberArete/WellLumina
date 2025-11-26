import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, LogIn } from 'lucide-react';
import { Button } from './Button';

export const SafeExit = () => (
  <a 
    href="https://google.com" 
    className="fixed bottom-6 right-6 z-50 bg-red-50 text-red-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 border border-red-200 flex items-center gap-2 group backdrop-blur-sm"
  >
    <span>Quick Exit</span>
    <Shield className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
            <span className="font-display font-bold text-xl tracking-wide text-white">
              Well<span className="font-light opacity-90">Lumina</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="text-white hover:text-cyan-400 transition-colors">Find a Therapist</a>
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <a href="#guide" className="hover:text-white transition-colors">Guide</a>
            <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-white text-sm flex items-center gap-2">
              <LogIn className="w-4 h-4" /> Log In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full p-4 flex flex-col gap-4 text-slate-300">
             <a href="#" className="block py-2">Find a Therapist</a>
             <a href="#benefits" className="block py-2">Benefits</a>
             <a href="#guide" className="block py-2">Guide</a>
             <Button variant="outline" className="w-full text-white border-white/20">Log In</Button>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400"></div>
            <span className="font-display font-bold text-xl text-white tracking-wide">Well<span className="font-light opacity-90">Lumina</span></span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Your trusted source for finding licensed EMDR therapists and trauma recovery specialists. Dedicated to illuminating the path to mental clarity and healing.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-lg mb-6">EMDR Therapy by City</h3>
          <ul className="space-y-4 text-sm">
            {['NYC', 'Chicago', 'Los Angeles', 'Houston', 'San Diego'].map(city => (
              <li key={city}><a href="#" className="hover:text-violet-400 transition-colors">EMDR Therapy {city}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-lg mb-6">Conditions</h3>
          <ul className="space-y-4 text-sm">
            {['PTSD', 'OCD', 'Anxiety', 'Depression', 'Trauma'].map(condition => (
              <li key={condition}><a href="#" className="hover:text-violet-400 transition-colors">EMDR for {condition}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-lg mb-6">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-violet-400 transition-colors">What is EMDR?</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Cost Guide</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Success Rates</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Virtual EMDR</a></li>
          </ul>
        </div>
      </div>

      {/* State Links */}
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <h4 className="text-white font-semibold mb-4 text-center">Browse by State</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
             {['Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Florida', 'New York', 'Texas', 'Washington'].map(state => (
                 <a key={state} href="#" className="hover:text-cyan-400 transition-colors">EMDR {state}</a>
             ))}
             <span className="text-slate-600">+ 41 more</span>
          </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; 2024 WellLumina Directory. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-violet-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-violet-400 transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
