import React from 'react';
import { Shield, TrendingUp, Scale, Key, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ServicesProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  onRentClick: () => void;
  onBuyClick: () => void;
  onAdminClick: () => void;
  onAddVisit: (visit: any) => void;
  onAddEvaluation: (evaluation: any) => void;
}

const services = [
  {
    id: 'consultancy',
    title: 'Consultoria Imobiliária',
    description: 'Atendimento próximo e personalizado para encontrar o imóvel que melhor se adapta ao seu momento de vida.',
    icon: Shield,
    actionLabel: 'Agendar Visita',
  },
  {
    id: 'evaluation',
    title: 'Avaliação de Mercado',
    description: 'Análise técnica e mercadológica precisa para determinar o valor justo de imóveis em Curitiba e região.',
    icon: TrendingUp,
    actionLabel: 'Solicitar Avaliação',
  },
  {
    id: 'advisory',
    title: 'Assessoria Completa',
    description: 'Suporte em todas as etapas burocráticas, garantindo que você compre ou alugue com total segurança.',
    icon: Scale,
  },
  {
    id: 'management',
    title: 'Gestão de Patrimônio',
    description: 'Cuidamos do seu imóvel como se fosse nosso, garantindo rentabilidade e tranquilidade para proprietários.',
    icon: Key,
  },
];

export default function Services({ 
  onHomeClick, 
  onAboutClick, 
  onServicesClick, 
  onContactClick, 
  onRentClick,
  onBuyClick,
  onAdminClick,
  onAddVisit,
  onAddEvaluation
}: ServicesProps) {
  const [showVisitModal, setShowVisitModal] = React.useState(false);
  const [showEvalModal, setShowEvalModal] = React.useState(false);

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
        activeView="services"
      />

      {/* Header */}
      <header className="bg-brand-dark pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Nossos <span className="text-brand-primary">Serviços</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Soluções completas para quem quer comprar, vender ou alugar com segurança e agilidade em Curitiba.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group p-10 bg-slate-50 rounded-[40px] hover:bg-brand-primary transition-all duration-500 border border-slate-100 hover:border-brand-primary shadow-sm hover:shadow-2xl hover:shadow-brand-primary/20 flex flex-col">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-lg group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-secondary transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed group-hover:text-brand-secondary/80 transition-colors mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto">
                {service.actionLabel && (
                  <button 
                    onClick={() => service.id === 'consultancy' ? setShowVisitModal(true) : setShowEvalModal(true)}
                    className="px-6 py-3 bg-brand-secondary text-white rounded-xl font-bold hover:bg-brand-dark transition-colors mb-6"
                  >
                    {service.actionLabel}
                  </button>
                )}

                <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <li className="flex items-center gap-2 text-brand-secondary group-hover:text-brand-secondary">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-medium">Atendimento Personalizado</span>
                  </li>
                  <li className="flex items-center gap-2 text-brand-secondary group-hover:text-brand-secondary">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-medium">Segurança Garantida</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Modal */}
      {showVisitModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Agendar Visita</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              onAddVisit({
                clientName: formData.get('name'),
                clientEmail: formData.get('email'),
                clientPhone: formData.get('phone'),
                date: formData.get('date'),
                time: formData.get('time'),
                propertyId: 'Geral',
                propertyTitle: 'Consultoria Geral'
              });
              setShowVisitModal(false);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-1">Data</label>
                  <input name="date" type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Horário</label>
                  <input name="time" type="time" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowVisitModal(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Cancelar</button>
                <button type="submit" className="flex-1 py-3 bg-brand-primary text-brand-secondary rounded-xl font-bold hover:bg-brand-primary/90 transition-colors">Agendar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Evaluation Modal */}
      {showEvalModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Avaliar meu Imóvel</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              onAddEvaluation({
                clientName: formData.get('name'),
                clientEmail: formData.get('email'),
                clientPhone: formData.get('phone'),
                propertyAddress: formData.get('address'),
                propertyType: formData.get('type'),
                description: formData.get('description')
              });
              setShowEvalModal(false);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
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
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Endereço do Imóvel</label>
                <input name="address" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Imóvel</label>
                <select name="type" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none">
                  <option>Apartamento</option>
                  <option>Casa</option>
                  <option>Terreno</option>
                  <option>Comercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Adicional</label>
                <textarea name="description" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none resize-none" />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowEvalModal(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Cancelar</button>
                <button type="submit" className="flex-1 py-3 bg-brand-primary text-brand-secondary rounded-xl font-bold hover:bg-brand-primary/90 transition-colors">Solicitar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-8">Pronto para encontrar seu <span className="text-brand-primary">novo lar</span>?</h2>
          <p className="text-slate-300 text-lg mb-12">
            Nossa equipe está preparada para ajudar você em cada passo da sua jornada imobiliária.
          </p>
          <button 
            onClick={onContactClick}
            className="px-12 py-5 bg-brand-primary text-brand-secondary rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20"
          >
            Falar com um Especialista
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
