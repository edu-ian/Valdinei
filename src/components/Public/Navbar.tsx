import React from 'react';
import { Heart, User } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAdminClick: () => void;
  activeView: string;
}

export default function Navbar({ 
  onHomeClick, 
  onAboutClick, 
  onServicesClick, 
  onContactClick, 
  onRentClick,
  onBuyClick,
  onAdminClick,
  activeView
}: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark border-b border-white/5 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={onHomeClick} className="flex items-center gap-3 group text-left">
          <div className="h-16 flex items-center justify-center overflow-hidden transition-colors">
            <img 
              src="https://iili.io/qwYujzx.png" 
              alt="Logo Valdinei Souza" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <button 
            onClick={onHomeClick} 
            className={`${activeView === 'public' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Início
          </button>
          <button 
            onClick={onRentClick} 
            className={`${activeView === 'rent' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Alugar
          </button>
          <button 
            onClick={onBuyClick} 
            className={`${activeView === 'buy' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Comprar
          </button>
          <button 
            onClick={onAboutClick} 
            className={`${activeView === 'about' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Sobre Nós
          </button>
          <button 
            onClick={onServicesClick} 
            className={`${activeView === 'services' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Serviços
          </button>
          <button 
            onClick={onContactClick} 
            className={`${activeView === 'contact' ? 'text-brand-primary' : 'hover:text-brand-primary'} transition-colors`}
          >
            Contato
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
          <button 
            onClick={onAdminClick}
            className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-brand-secondary rounded-xl text-sm font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
          >
            <User size={18} />
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
}
