import React from 'react';
import { MapPin, Bed, Bath, Maximize, Heart, Calendar, ArrowRight } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  onScheduleVisit: () => void;
  onViewDetails: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export default function PropertyCard({ property, onScheduleVisit, onViewDetails, isFavorite, onToggleFavorite }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col">
      <div className="relative h-64 overflow-hidden cursor-pointer" onClick={onViewDetails}>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-lg">
            {property.type}
          </span>
          <span className="px-3 py-1 bg-brand-primary text-brand-secondary text-[10px] font-bold uppercase tracking-widest rounded-lg">
            {property.category}
          </span>
        </div>
        
        <button 
          onClick={onToggleFavorite}
          className={`absolute top-4 right-4 p-2 backdrop-blur-md rounded-full transition-all shadow-md ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white'}`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-slate-400">
          <MapPin size={14} />
          <span className="text-xs font-medium uppercase tracking-wider">{property.location}</span>
        </div>
        
        <h3 
          className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors cursor-pointer line-clamp-2"
          onClick={onViewDetails}
        >
          {property.title}
        </h3>
        
        <p className="text-2xl font-bold text-brand-primary">
          {typeof property.price === 'number' 
            ? property.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
            : property.price}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Bed size={16} className="text-slate-400" />
              <span className="text-sm font-semibold text-slate-600">{property.beds}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath size={16} className="text-slate-400" />
              <span className="text-sm font-semibold text-slate-600">{property.baths}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize size={16} className="text-slate-400" />
              <span className="text-sm font-semibold text-slate-600">{property.area}m²</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <button 
            onClick={onViewDetails}
            className="flex-1 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-brand-primary hover:text-brand-primary transition-colors flex items-center justify-center gap-2 text-sm"
          >
            Detalhes
            <ArrowRight size={16} />
          </button>
          <button 
            onClick={onScheduleVisit}
            className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-secondary transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-slate-900/20"
          >
            <Calendar size={16} />
            Visitar
          </button>
        </div>
      </div>
    </div>
  );
}