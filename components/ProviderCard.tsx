import React from 'react';
import { Provider } from '../types';
import { CheckCircle2, Calendar, MapPin } from 'lucide-react';

interface ProviderCardProps {
  provider: Provider;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      {/* Hover Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img 
            src={provider.image} 
            className="w-16 h-16 rounded-2xl object-cover shadow-md" 
            alt={provider.name} 
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <h3 className="font-display font-bold text-lg text-slate-900 truncate">{provider.name}</h3>
            {provider.verified && <CheckCircle2 className="w-4 h-4 text-cyan-500 fill-cyan-50" />}
          </div>
          <p className="text-sm text-slate-500 font-medium truncate">{provider.title}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
             <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Next: <span className="text-slate-700 font-medium">{provider.availability}</span>
             </span>
             <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {provider.location}
             </span>
          </div>
        </div>
      </div>

      {/* Vibe Meter */}
      <div className="mt-6 mb-4">
        <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
          <span>Gentle Guide</span>
          <span>Direct Challenger</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-0 h-full w-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-500" 
            style={{ left: `${provider.vibe}%`, transform: 'translateX(-50%)' }}
          ></div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {provider.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-50 text-violet-700 text-xs font-semibold rounded-lg border border-violet-100/50">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-violet-600 transition-colors shadow-lg shadow-slate-200">
          Book Consult
        </button>
        <button className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:border-violet-300 hover:text-violet-600 transition-colors">
          Profile
        </button>
      </div>
    </div>
  );
};
