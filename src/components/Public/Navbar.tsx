import React, { useState } from 'react';
import { Heart, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAdminClick: () => void;
  onFavoritesClick: () => void;
  activeView:  string;
}

export default function Navbar({ 
  onHomeClick, 
  onAboutClick, 
  onServicesClick, 
  onContactClick, 
  onRentClick,
  onBuyClick,
  onAdminClick,
  onFavoritesClick,
  activeView
}: NavbarProps) {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para fechar o menu mobile automaticamente ao clicar em um link
  const handleNavClick = (callback: () => void) => {
    callback();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark border-b border-white/5 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO - Intacta */}
        <button onClick={() => handleNavClick(onHomeClick)} className="flex items-center gap-3 group text-left">
          <div className="h-16 flex items-center justify-center overflow-hidden transition-colors">
            <img 
              src="https://iili.io/qwYujzx.png" 
              alt="Logo Valdinei Souza" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* NAVEGAÇÃO DESKTOP - Intacta (escondida no mobile com hidden lg:flex) */}
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

        {/* BOTÕES DE AÇÃO E HAMBÚRGUER */}
        <div className="flex items-center gap-4">
          {/* Coração - Intacto */}
          <button 
  onClick={onFavoritesClick}
  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
>
  <Heart size={20} />
</button>
          
          {/* Botão Entrar - Intacto */}
          <button 
            onClick={onAdminClick}
            className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-brand-secondary rounded-xl text-sm font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
          >
            <User size={18} />
            <span className="hidden sm:inline">Entrar</span>
          </button>

          {/* Botão Hambúrguer - Visível apenas no Mobile (lg:hidden) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-brand-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE RETRÁTIL */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-b border-white/5 px-6 py-4 shadow-xl flex flex-col gap-4">
          <button 
            onClick={() => handleNavClick(onHomeClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'public' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick(onRentClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'rent' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Alugar
          </button>
          <button 
            onClick={() => handleNavClick(onBuyClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'buy' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Comprar
          </button>
          <button 
            onClick={() => handleNavClick(onAboutClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'about' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => handleNavClick(onServicesClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'services' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavClick(onContactClick)} 
            className={`text-left text-sm font-semibold ${activeView === 'contact' ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'} transition-colors`}
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  );
}