import React from 'react';
import { Search, MapPin, Bed, Bath, Car, Maximize, Heart, Calendar, Phone, Mail, TrendingUp, Users, DollarSign, Home as HomeIcon } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Property, Lead } from '../../types';
import Navbar from './Navbar';
import Footer from './Footer';

interface PublicHomeProps {
  properties: Property[];
  onAdminClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAddLead: (lead: Partial<Lead>) => void;
  onAddVisit: (visit: any) => void;
  activeCategory?: 'Alugar' | 'Comprar';
}

export default function PublicHome({ 
  properties, 
  onAdminClick, 
  onAboutClick, 
  onServicesClick,
  onContactClick,
  onRentClick,
  onBuyClick,
  onAddLead,
  onAddVisit,
  activeCategory
}: PublicHomeProps) {
  const [selectedProperty, setSelectedProperty] = React.useState<Property | null>(null);
  const [showVisitModal, setShowVisitModal] = React.useState(false);

  const filteredProperties = activeCategory 
    ? properties.filter(p => p.category === activeCategory)
    : properties;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      interest: formData.get('interest') as 'Comprar' | 'Alugar' | 'Vender',
      region: 'Centro', // Default for demo
      propertyType: 'Apartamento', // Default for demo
    };
    onAddLead(leadData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.currentTarget.reset();
  };

  const [searchTab, setSearchTab] = React.useState<'Alugar' | 'Comprar'>(activeCategory || 'Alugar');
  const [mainTab, setMainTab] = React.useState<'buscar' | 'anunciar'>('buscar');

  React.useEffect(() => {
    if (activeCategory) {
      setSearchTab(activeCategory);
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar 
        onHomeClick={() => {}} // Already on home
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onContactClick={onContactClick}
        onRentClick={onRentClick}
        onBuyClick={onBuyClick}
        onAdminClick={onAdminClick}
        activeView={activeCategory === 'Alugar' ? 'rent' : activeCategory === 'Comprar' ? 'buy' : 'public'}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
            alt="Interior de Apartamento Moderno" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-secondary/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/60 to-transparent z-20" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          {/* Search Card or Category Header */}
          {!activeCategory ? (
            <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in">
              <div className="p-8 lg:p-12 space-y-10">
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                  {searchTab === 'Alugar' ? 'Alugue o lar ideal' : 'Compre o lar ideal'} <br />
                  para sua família
                </h1>

                {/* Alugar/Comprar Tabs */}
                <div className="flex gap-10 border-b border-slate-100">
                  <button 
                    onClick={() => setSearchTab('Alugar')}
                    className={`pb-4 text-base font-bold transition-all border-b-2 ${searchTab === 'Alugar' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                  >
                    Alugar
                  </button>
                  <button 
                    onClick={() => setSearchTab('Comprar')}
                    className={`pb-4 text-base font-bold transition-all border-b-2 ${searchTab === 'Comprar' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                  >
                    Comprar
                  </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  <div className="p-5 lg:p-6 border border-slate-200 rounded-2xl hover:border-brand-primary transition-colors cursor-text group">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={20} className="text-brand-primary" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Cidade</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Busque por cidade" 
                      className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-xl"
                    />
                  </div>

                  <div className="p-5 lg:p-6 border border-slate-200 rounded-2xl hover:border-brand-primary transition-colors cursor-text group">
                    <div className="flex items-center gap-3 mb-2">
                      <HomeIcon size={20} className="text-brand-primary" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Bairro</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Busque por bairro" 
                      className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-xl"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 lg:p-6 border border-slate-200 rounded-2xl hover:border-brand-primary transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign size={20} className="text-brand-primary" />
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Valor total até</span>
                      </div>
                      <select className="w-full bg-transparent outline-none text-slate-700 appearance-none cursor-pointer text-xl">
                        <option>Escolha o valor</option>
                        <option>Até R$ 1.500</option>
                        <option>Até R$ 3.000</option>
                        <option>Até R$ 5.000</option>
                        <option>Qualquer valor</option>
                      </select>
                    </div>

                    <div className="p-5 lg:p-6 border border-slate-200 rounded-2xl hover:border-brand-primary transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3 mb-2">
                        <Bed size={20} className="text-brand-primary" />
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Quartos</span>
                      </div>
                      <select className="w-full bg-transparent outline-none text-slate-700 appearance-none cursor-pointer text-xl">
                        <option>Nº de quartos</option>
                        <option>1+ quartos</option>
                        <option>2+ quartos</option>
                        <option>3+ quartos</option>
                        <option>4+ quartos</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="w-full py-6 bg-brand-primary text-brand-secondary rounded-2xl font-bold text-2xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20">
                  Buscar imóveis
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl text-white animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Página de {activeCategory}</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
                Imóveis para <br />
                <span className="text-brand-primary">{activeCategory}</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-xl leading-relaxed mb-10 font-light">
                Explore nossa seleção exclusiva de imóveis para {activeCategory.toLowerCase()} em Curitiba e região. Qualidade e confiança em cada metro quadrado.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('properties-list')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-brand-primary text-brand-secondary font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/30 text-lg"
                >
                  Ver Listagem
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-lg">
                  Entre em Contato
                </button>
              </div>
            </div>
          )}

          {!activeCategory && (
            <div className="hidden lg:block flex-1 text-white space-y-6">
              <h2 className="text-5xl font-display font-bold leading-tight">
                O lar perfeito para <br />
                sua família viver os <br />
                melhores momentos.
              </h2>
              <p className="text-xl text-slate-200 font-light max-w-md">
                Encontre o imóvel dos seus sonhos com a segurança e transparência que você merece.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Only show on Home */}
      {!activeCategory && (
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">15 mil+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Imóveis Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">8 mil+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Famílias Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">120+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Bairros Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">24h</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">Suporte Especializado</div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Properties */}
      <section id="properties-list" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              {activeCategory ? `Imóveis para ${activeCategory}` : 'Imóveis em Destaque'}
            </h2>
            <p className="text-slate-500 text-lg">As melhores oportunidades selecionadas para você hoje.</p>
          </div>
          {!activeCategory && (
            <button className="text-brand-primary font-bold flex items-center gap-2 hover:underline">
              Ver todos os imóveis
              <Search size={16} />
            </button>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col">
                <div className="relative h-64 overflow-hidden">
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
                  <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md text-slate-400 rounded-full hover:text-red-500 transition-all">
                    <Heart size={18} />
                  </button>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin size={14} />
                    <span className="text-xs font-medium uppercase tracking-wider">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{property.title}</h3>
                  <p className="text-2xl font-bold text-brand-primary">
                    {property.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Bed size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-600">{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-600">{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-600">{property.area}m²</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedProperty(property);
                      setShowVisitModal(true);
                    }}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-secondary transition-colors mt-auto flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    Agendar Visita
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Search size={40} className="text-slate-300" />
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Nenhum imóvel encontrado</h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto mb-10">
              Não encontramos imóveis para {activeCategory ? activeCategory.toLowerCase() : 'esta categoria'} no momento. Tente novamente mais tarde ou entre em contato.
            </p>
            <button 
              onClick={() => window.location.href = '/'} 
              className="px-8 py-4 bg-brand-primary text-brand-secondary font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20"
            >
              Voltar ao Início
            </button>
          </div>
        )}
      </section>

      {/* Visit Modal */}
      {showVisitModal && selectedProperty && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900">Agendar Visita</h2>
                <p className="text-slate-500 text-sm">{selectedProperty.title}</p>
              </div>
              <button onClick={() => setShowVisitModal(false)} className="text-slate-400 hover:text-slate-600">
                <Phone size={24} />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              onAddVisit({
                clientName: formData.get('name'),
                clientEmail: formData.get('email'),
                clientPhone: formData.get('phone'),
                date: formData.get('date'),
                time: formData.get('time'),
                propertyId: selectedProperty.id,
                propertyTitle: selectedProperty.title
              });
              setShowVisitModal(false);
              alert('Solicitação de visita enviada com sucesso!');
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
                <input name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                  <input name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Data Desejada</label>
                  <input name="date" type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Horário</label>
                  <input name="time" type="time" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowVisitModal(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Cancelar</button>
                <button type="submit" className="flex-1 py-3 bg-brand-primary text-brand-secondary rounded-xl font-bold hover:bg-brand-primary/90 transition-colors">Confirmar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-display font-bold text-slate-900">Fale Conosco</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Queremos ajudar você a encontrar o lugar que você chamará de lar. Nossa equipe é treinada para oferecer o melhor atendimento, independente do seu orçamento.
            </p>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Atendimento via WhatsApp</p>
                <p className="text-xl font-bold text-slate-900">(41) 99999-9999</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Mail className="text-brand-primary" />
              Envie sua dúvida
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nome Completo</label>
                  <input name="name" type="text" required placeholder="Seu nome" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">E-mail</label>
                  <input name="email" type="email" required placeholder="seu@email.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Qual o seu objetivo?</label>
                <select name="interest" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all">
                  <option value="Comprar">Comprar um imóvel</option>
                  <option value="Alugar">Alugar um imóvel</option>
                  <option value="Vender">Vender meu imóvel</option>
                </select>
              </div>
              <button className="w-full py-5 bg-brand-primary text-brand-secondary rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
