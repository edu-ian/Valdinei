import React from 'react';
import { Award, Shield, Target, Users, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AboutProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAdminClick: () => void;
}

export default function About({ 
  onHomeClick, 
  onAboutClick, 
  onServicesClick, 
  onContactClick, 
  onRentClick,
  onBuyClick,
  onAdminClick 
}: AboutProps) {
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
        activeView="about"
      />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-brand-secondary transform rotate-12 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Seu Parceiro em <span className="text-brand-primary">Negócios Imobiliários</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
              Com anos de experiência no mercado de Curitiba, Valdinei Souza consolidou sua marca através de um atendimento próximo, transparente e focado em resultados para todos os perfis.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-brand-primary text-brand-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Segurança Jurídica</h3>
            <p className="text-slate-500 leading-relaxed">
              Garantimos que cada transação seja realizada com a máxima transparência e conformidade legal, protegendo o patrimônio de nossos clientes.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-brand-primary text-brand-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Seleção para Todos</h3>
            <p className="text-slate-500 leading-relaxed">
              Nossa seleção de imóveis abrange desde o primeiro apartamento até grandes investimentos, garantindo as melhores oportunidades para cada bolso.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-brand-primary text-brand-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Atendimento Humano</h3>
            <p className="text-slate-500 leading-relaxed">
              Entendemos que cada cliente é único. Oferecemos uma consultoria próxima que entende suas necessidades reais e simplifica sua jornada.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nossa Equipe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/20 rounded-[40px] -z-10 hidden md:block"></div>
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold uppercase tracking-widest">
              <Award size={16} />
              Nossa História
            </div>
            <h2 className="text-5xl font-display font-bold text-brand-dark leading-tight">
              Compromisso com o seu <span className="text-brand-primary">novo começo</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Fundada por Valdinei Souza, nossa imobiliária nasceu com o propósito de democratizar o acesso a imóveis de qualidade em Curitiba e região. Com o CRECI 9720-J, operamos com total seriedade e profissionalismo.
              </p>
              <p>
                Atuamos em diversos bairros, do Centro ao Batel, entendendo que não estamos apenas vendendo metros quadrados, mas sim realizando sonhos e facilitando novos começos para todas as famílias.
              </p>
              <p>
                Nossa missão é ser a ponte entre você e o seu novo lar, proporcionando uma experiência de compra ou aluguel sem complicações, pautada na confiança e na acessibilidade.
              </p>
            </div>
            <button 
              onClick={onHomeClick}
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-brand-secondary rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 group"
            >
              Ver Imóveis Disponíveis
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
