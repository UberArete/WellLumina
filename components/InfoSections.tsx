import React from 'react';
import { Brain, Zap, Heart, Search, CheckCircle, Phone, FileText } from 'lucide-react';

export const BenefitsSection = () => (
  <section id="benefits" className="py-20 rounded-3xl bg-slate-900 text-white relative overflow-hidden my-12 mx-4 sm:mx-0">
    {/* Abstract Glows */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Why EMDR Works</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center group">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-500/20 transition-colors">
            <Zap className="w-8 h-8 text-cyan-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Rapid Processing</h3>
          <p className="text-slate-400 leading-relaxed">Unlike talk therapy, EMDR accesses the brain's natural healing processes to resolve trauma faster, often in fewer sessions.</p>
        </div>
        <div className="text-center group">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-violet-500/20 transition-colors">
            <Brain className="w-8 h-8 text-violet-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Relief from Triggers</h3>
          <p className="text-slate-400 leading-relaxed">Desensitizes the emotional charge of painful memories, so past events no longer trigger present-day anxiety.</p>
        </div>
        <div className="text-center group">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-pink-500/20 transition-colors">
            <Heart className="w-8 h-8 text-pink-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Lasting Change</h3>
          <p className="text-slate-400 leading-relaxed">It doesn't just manage symptoms; it rewires how the brain stores memories, leading to permanent cognitive shifts.</p>
        </div>
      </div>
    </div>
  </section>
);

export const GuideSection = () => (
  <section id="guide" className="py-20">
    <h2 className="font-display text-3xl font-bold text-slate-900 mb-12 text-center">Your Path to Finding an EMDR Therapist</h2>
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
      
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { num: 1, title: 'Search', desc: 'Use our directory to filter by your specific needs (e.g., CPTSD, Panic) and location.', color: 'bg-slate-900', icon: Search },
          { num: 2, title: 'Verify', desc: 'Look for "EMDRIA Certified" badges. This ensures they have completed rigorous training.', color: 'bg-violet-600', icon: CheckCircle },
          { num: 3, title: 'Consult', desc: 'Book a 15-min intro call. Ask about their experience with your specific type of trauma.', color: 'bg-cyan-500', icon: Phone },
          { num: 4, title: 'Prepare', desc: 'The first few sessions will be "Resourcing," building safety before diving into memories.', color: 'bg-emerald-500', icon: FileText }
        ].map((step) => (
          <div key={step.num} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
            <div className={`w-10 h-10 ${step.color} text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg`}>
              {step.num}
            </div>
            <h3 className="font-bold text-lg mb-2 text-center md:text-left">{step.title}</h3>
            <p className="text-sm text-slate-500 text-center md:text-left leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
