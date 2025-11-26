import React, { useState, useMemo } from 'react';
import { Navbar, Footer, SafeExit } from './components/Layout';
import { ProviderCard } from './components/ProviderCard';
import { BenefitsSection, GuideSection } from './components/InfoSections';
import { PROVIDERS } from './data';
import { TAGS } from './types';
import { Search, MapPin, SlidersHorizontal, ArrowRight, Check } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [isVirtual, setIsVirtual] = useState(false);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filteredProviders = useMemo(() => {
    return PROVIDERS.filter(provider => {
      const matchesSearch = 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        provider.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        provider.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = activeTags.length === 0 || activeTags.every(tag => provider.tags.includes(tag));
      
      // Simulating "virtual" check randomly as it's not in data yet
      const matchesVirtual = !isVirtual || (provider.id % 2 === 0); 

      return matchesSearch && matchesTags && matchesVirtual;
    });
  }, [searchQuery, activeTags, isVirtual]);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SafeExit />
      <Navbar />

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a] text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1e1b4b] to-slate-900 animate-aurora opacity-90"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide text-cyan-100 uppercase">Trauma & PTSD Recovery Directory</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-white">EMDR Therapy</span>
            <br />
            Near Me
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Find certified specialists for trauma, anxiety, and CPTSD. <br className="hidden md:block" />
            A safe space to reprocess, heal, and move forward.
          </p>

          {/* Search Module */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-3xl shadow-2xl border border-white/20 transform transition hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-violet-300 transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border-none outline-none text-slate-900 placeholder-slate-500 bg-white/80 focus:bg-white transition-all" 
                  placeholder="City, Zip, or Issue..." 
                />
              </div>
              <div className="flex-1 relative group border-t md:border-t-0 md:border-l border-white/10">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Check className="h-5 w-5 text-slate-400 group-focus-within:text-violet-300 transition-colors" />
                </div>
                <input type="text" className="w-full pl-11 pr-4 py-4 rounded-2xl border-none outline-none text-slate-900 placeholder-slate-500 bg-white/80 focus:bg-white transition-all" placeholder="Insurance (Optional)" />
              </div>
              <button className="bg-slate-900 text-white font-medium px-8 py-4 rounded-2xl hover:bg-violet-600 transition-all duration-300 shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2 whitespace-nowrap">
                <span>Find EMDR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                    <span className="text-green-400 flex items-center justify-center w-5 h-5 bg-green-400/10 rounded-full text-xs">✓</span>
                    <span>2,847 Verified Therapists</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-slate-700"></div>
                <div className="flex items-center gap-2">
                    <span className="text-green-400 flex items-center justify-center w-5 h-5 bg-green-400/10 rounded-full text-xs">✓</span>
                    <span>HIPAA Compliant</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-slate-700"></div>
                <div className="flex items-center gap-2">
                    <span className="text-green-400 flex items-center justify-center w-5 h-5 bg-green-400/10 rounded-full text-xs">✓</span>
                    <span>Evidence-Based</span>
                </div>
            </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4 space-y-8">
                <div>
                    <h3 className="font-display font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-violet-500" />
                        Refine Search
                    </h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={isVirtual}
                              onChange={() => setIsVirtual(!isVirtual)}
                              className="form-checkbox h-5 w-5 text-violet-600 rounded border-gray-300 focus:ring-violet-500 transition" 
                            />
                            <span className="text-slate-600 group-hover:text-slate-900 transition select-none">Virtual EMDR</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-violet-600 rounded border-gray-300 focus:ring-violet-500 transition" />
                            <span className="text-slate-600 group-hover:text-slate-900 transition select-none">In-Person Only</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-violet-600 rounded border-gray-300 focus:ring-violet-500 transition" />
                            <span className="text-slate-600 group-hover:text-slate-900 transition select-none">EMDRIA Certified</span>
                        </label>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Focus Area</h4>
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map(tag => (
                            <button 
                              key={tag}
                              onClick={() => toggleTag(tag)} 
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                                activeTags.includes(tag) 
                                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30 border-transparent' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:text-violet-600'
                              }`}
                            >
                              {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Directory Grid */}
            <div className="lg:w-3/4">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="font-display text-2xl font-bold text-slate-900">Recommended Specialists</h2>
                        <p className="text-slate-500 text-sm mt-1">
                          {filteredProviders.length} Providers available based on your criteria
                        </p>
                    </div>
                    <div className="hidden sm:flex gap-2 text-sm text-slate-600">
                        <span className="text-slate-400">Sort by:</span>
                        <select className="bg-transparent font-semibold text-violet-600 focus:outline-none cursor-pointer">
                            <option>Relevance</option>
                            <option>Availability</option>
                            <option>Distance</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProviders.map(provider => (
                      <ProviderCard key={provider.id} provider={provider} />
                    ))}
                    {filteredProviders.length === 0 && (
                      <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-slate-100 border-dashed">
                        <p className="text-slate-400">No providers found matching those specific filters.</p>
                        <button 
                          onClick={() => {setActiveTags([]); setSearchQuery(''); setIsVirtual(false);}}
                          className="mt-4 text-violet-600 font-medium hover:underline"
                        >
                          Clear all filters
                        </button>
                      </div>
                    )}
                </div>
            </div>
        </div>

        <BenefitsSection />
        <GuideSection />
        
        {/* Tips Section */}
        <section className="bg-[#eef2ff] rounded-3xl p-8 md:p-12 border border-violet-100 my-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Tips for Choosing the Right Therapist</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        EMDR is a specialized modality. It is important to find someone who isn't just "trained" but experienced in applying it to your specific situation.
                    </p>
                    <ul className="space-y-4">
                        {[
                          "Ask about Level 1 vs. 2: Ideally, look for someone who has completed both levels of basic training.",
                          "The Vibe Check: You need to feel safe. If you don't feel a connection in the consult, it's okay to keep looking.",
                          "Virtual vs. In-Person: Virtual EMDR is effective, but ensure they use a secure platform with visual tools."
                        ].map((tip, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 min-w-5 h-5 rounded-full bg-violet-200 text-violet-700 flex items-center justify-center text-xs font-bold">✓</div>
                            <span className="text-slate-700">{tip}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg shadow-violet-500/10 border border-slate-100 w-full">
                    <h3 className="font-bold text-lg text-slate-900 mb-4">Questions to Ask During a Consult</h3>
                    <div className="space-y-3">
                      {[
                        "Are you EMDRIA Certified, or currently working towards certification?",
                        "Have you used EMDR to treat cases similar to mine?",
                        "How do you handle it if I get overwhelmed during a session?"
                      ].map((q, i) => (
                         <div key={i} className="p-4 bg-slate-50 rounded-xl text-slate-700 text-sm italic border border-slate-100">"{q}"</div>
                      ))}
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-violet-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Find Certified EMDR Therapists Near You
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Start healing today! Browse our comprehensive directory of licensed professionals specializing in trauma, anxiety, and PTSD recovery.
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="inline-flex items-center gap-2 bg-white text-violet-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
                Start Browsing
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
