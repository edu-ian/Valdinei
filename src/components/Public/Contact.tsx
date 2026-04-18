import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ContactProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAdminClick: () => void;
}

export default function Contact({ 
  onHomeClick, 
  onAboutClick, 
  onServicesClick, 
  onContactClick, 
  onRentClick,
  onBuyClick,
  onAdminClick 
}: ContactProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar 
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onContactClick={onContactClick}
        onRentClick={onRentClick}
        onBuyClick={onBuyClick}
        onAdminClick={onAdminClick}
        activeView="contact"
      />

      {/* Header */}
      <header className="bg-brand-dark pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Fale <span className="text-brand-primary">Conosco</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Estamos prontos para entender e atender suas necessidades. Entre em contato conosco hoje mesmo.
          </p>
        </div>
      </header>

      {/* Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-slate-900">Informações de <span className="text-brand-primary">Contato</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Nossa equipe está à disposição para encontrar o imóvel perfeito para você ou gerenciar seu patrimônio imobiliário com total transparência.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-primary transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-md group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Telefone</p>
                <p className="text-2xl font-bold text-slate-900">(41) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-primary transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-md group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">E-mail</p>
                <p className="text-2xl font-bold text-slate-900">contato@valdineisouza.com.br</p>
              </div>
            </div>
          </div>

          <button className="w-full py-6 bg-brand-primary text-brand-secondary rounded-3xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20">
            <MessageCircle size={24} />
            Falar pelo WhatsApp
          </button>
        </div>

        <div className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-200/50 border border-slate-100">
          <h3 className="text-3xl font-display font-bold text-slate-900 mb-10">Envie uma <span className="text-brand-primary">Mensagem</span></h3>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Nome Completo</label>
              <input type="text" required placeholder="Seu nome" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">E-mail</label>
                <input type="email" required placeholder="seu@email.com" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Telefone</label>
                <input type="tel" required placeholder="(00) 00000-0000" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Assunto</label>
              <input type="text" required placeholder="Ex: Dúvida sobre imóvel" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Mensagem</label>
              <textarea rows={4} required placeholder="Como podemos ajudar?" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-6 bg-brand-primary text-brand-secondary rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/20 group">
              <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
