/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Property, Lead, DashboardStats, VisitRequest, EvaluationRequest } from './types';
import PublicHome from './components/Public/Home';
import About from './components/Public/About';
import Services from './components/Public/Services';
import Contact from './components/Public/Contact';
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './components/Admin/Dashboard';
import PropertyManager from './components/Admin/PropertyManager';
import LeadsManager from './components/Admin/LeadsManager';

const INITIAL_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Apartamento Aconchegante no Portão',
    location: 'Portão, Curitiba',
    price: 320000,
    type: 'Apartamento',
    category: 'Comprar',
    beds: 2,
    baths: 1,
    parking: 1,
    area: 58,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Casa Charmosa no Boqueirão',
    location: 'Boqueirão, Curitiba',
    price: 450000,
    type: 'Casa',
    category: 'Comprar',
    beds: 3,
    baths: 2,
    parking: 2,
    area: 95,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Studio Moderno no Bigorrilho',
    location: 'Bigorrilho, Curitiba',
    price: 240000,
    type: 'Studio',
    category: 'Alugar',
    beds: 1,
    baths: 1,
    parking: 0,
    area: 28,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '4',
    title: 'Apartamento Familiar no Pinheirinho',
    location: 'Pinheirinho, Curitiba',
    price: 285000,
    type: 'Apartamento',
    category: 'Alugar',
    beds: 2,
    baths: 1,
    parking: 1,
    area: 62,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  }
];

const INITIAL_LEADS: Lead[] = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    email: 'ricardo@email.com',
    phone: '(41) 98888-7777',
    interest: 'Comprar',
    propertyType: 'Apartamento',
    region: 'Portão',
    date: '18/03/2026',
    status: 'Novo'
  },
  {
    id: '2',
    name: 'Mariana Silva',
    email: 'mariana@email.com',
    phone: '(41) 97777-6666',
    interest: 'Alugar',
    propertyType: 'Apartamento',
    region: 'Bigorrilho',
    date: '17/03/2026',
    status: 'Em Contato'
  },
  {
    id: '3',
    name: 'Carlos Eduardo',
    email: 'carlos@email.com',
    phone: '(41) 96666-5555',
    interest: 'Vender',
    propertyType: 'Casa',
    region: 'Boqueirão',
    date: '16/03/2026',
    status: 'Novo'
  },
  {
    id: '4',
    name: 'Fernanda Costa',
    email: 'fernanda@email.com',
    phone: '(41) 95555-4444',
    interest: 'Comprar',
    propertyType: 'Cobertura',
    region: 'Pinheirinho',
    date: '15/03/2026',
    status: 'Fechado'
  },
  {
    id: '5',
    name: 'João Pedro Santos',
    email: 'joao.pedro@email.com',
    phone: '(41) 94444-3333',
    interest: 'Comprar',
    propertyType: 'Studio',
    region: 'Centro',
    date: '14/03/2026',
    status: 'Novo'
  },
  {
    id: '6',
    name: 'Beatriz Oliveira',
    email: 'beatriz.o@email.com',
    phone: '(41) 93333-2222',
    interest: 'Alugar',
    propertyType: 'Casa',
    region: 'Santa Felicidade',
    date: '13/03/2026',
    status: 'Em Contato'
  },
  {
    id: '7',
    name: 'Paulo Roberto',
    email: 'paulo.r@email.com',
    phone: '(41) 92222-1111',
    interest: 'Vender',
    propertyType: 'Terreno',
    region: 'Batel',
    date: '12/03/2026',
    status: 'Novo'
  },
  {
    id: '8',
    name: 'Luciana Mendes',
    email: 'luciana.m@email.com',
    phone: '(41) 91111-0000',
    interest: 'Alugar',
    propertyType: 'Studio',
    region: 'Rebouças',
    date: '11/03/2026',
    status: 'Perdido'
  },
  {
    id: '9',
    name: 'Gustavo Henrique',
    email: 'gustavo@email.com',
    phone: '(41) 90000-1111',
    interest: 'Comprar',
    propertyType: 'Sobrado',
    region: 'Água Verde',
    date: '10/03/2026',
    status: 'Novo'
  },
  {
    id: '10',
    name: 'Sonia Maria',
    email: 'sonia@email.com',
    phone: '(41) 98888-2222',
    interest: 'Alugar',
    propertyType: 'Apartamento',
    region: 'Cabral',
    date: '09/03/2026',
    status: 'Em Contato'
  }
];

import VisitsManager from './components/Admin/VisitsManager';
import EvaluationsManager from './components/Admin/EvaluationsManager';

const INITIAL_VISIT_REQUESTS: VisitRequest[] = [
  {
    id: '1',
    propertyId: '1',
    propertyName: 'Apartamento Batel Moderno',
    clientName: 'Carlos Oliveira',
    clientEmail: 'carlos@email.com',
    clientPhone: '(41) 98888-7777',
    date: '2026-03-25',
    time: '14:30',
    status: 'Pendente'
  },
  {
    id: '2',
    propertyId: '2',
    propertyName: 'Casa Jardim Social',
    clientName: 'Ana Paula',
    clientEmail: 'ana.paula@email.com',
    clientPhone: '(41) 97777-6666',
    date: '2026-03-26',
    time: '10:00',
    status: 'Confirmado'
  }
];

const INITIAL_EVALUATION_REQUESTS: EvaluationRequest[] = [
  {
    id: '1',
    clientName: 'Roberto Silva',
    clientEmail: 'roberto@email.com',
    clientPhone: '(41) 96666-5555',
    propertyType: 'Apartamento',
    propertyAddress: 'Rua XV de Novembro, 500 - Centro',
    description: 'Apartamento de 3 quartos no centro.',
    date: '2026-03-18',
    status: 'Em Análise'
  }
];

export default function App() {
  const [view, setView] = useState<'public' | 'admin' | 'about' | 'services' | 'contact' | 'rent' | 'buy'>('public');
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [visitRequests, setVisitRequests] = useState<VisitRequest[]>(INITIAL_VISIT_REQUESTS);
  const [evaluationRequests, setEvaluationRequests] = useState<EvaluationRequest[]>(INITIAL_EVALUATION_REQUESTS);

  const stats: DashboardStats = {
    totalLeads: leads.length,
    totalProperties: properties.length,
    leadsByInterest: [
      { name: 'Comprar', value: leads.filter(l => l.interest === 'Comprar').length },
      { name: 'Alugar', value: leads.filter(l => l.interest === 'Alugar').length },
      { name: 'Vender', value: leads.filter(l => l.interest === 'Vender').length },
    ],
    leadsByRegion: Array.from(new Set(leads.map(l => l.region))).map(region => ({
      name: region as string,
      value: leads.filter(l => l.region === region).length
    })),
    leadsByType: Array.from(new Set(leads.map(l => l.propertyType))).map(type => ({
      name: type as string,
      value: leads.filter(l => l.propertyType === type).length
    }))
  };

  const handleAddProperty = (propertyData: Partial<Property>) => {
    const newProp: Property = {
      id: Math.random().toString(36).substr(2, 9),
      title: propertyData.title || 'Novo Imóvel',
      location: propertyData.location || 'Localização',
      price: propertyData.price || 0,
      type: propertyData.type || 'Apartamento',
      category: propertyData.category || 'Comprar',
      beds: propertyData.beds || 0,
      baths: propertyData.baths || 0,
      parking: propertyData.parking || 0,
      area: propertyData.area || 0,
      image: propertyData.image || 'https://picsum.photos/seed/luxury/800/600',
      isFeatured: true
    };
    setProperties([newProp, ...properties]);
    setActiveAdminTab('properties');
  };

  const handleDeleteProperty = (id: string) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const handleAddLead = (leadData: Partial<Lead>) => {
    const newLead: Lead = {
      id: Math.random().toString(36).substr(2, 9),
      name: leadData.name || 'Anônimo',
      email: leadData.email || '',
      phone: leadData.phone || '(00) 00000-0000',
      interest: (leadData.interest as 'Comprar' | 'Alugar' | 'Vender') || 'Comprar',
      region: leadData.region || 'Batel',
      propertyType: leadData.propertyType || 'Apartamento',
      date: new Date().toISOString().split('T')[0],
      status: 'Novo'
    };
    setLeads([newLead, ...leads]);
  };

  const handleAddVisitRequest = (visitData: Partial<VisitRequest>) => {
    const newVisit: VisitRequest = {
      id: Math.random().toString(36).substr(2, 9),
      propertyId: visitData.propertyId || '',
      propertyName: visitData.propertyName || '',
      clientName: visitData.clientName || '',
      clientEmail: visitData.clientEmail || '',
      clientPhone: visitData.clientPhone || '',
      date: visitData.date || '',
      time: visitData.time || '',
      status: 'Pendente'
    };
    setVisitRequests([newVisit, ...visitRequests]);
    alert('Pedido de visita agendado com sucesso!');
  };

  const handleAddEvaluationRequest = (evalData: Partial<EvaluationRequest>) => {
    const newEval: EvaluationRequest = {
      id: Math.random().toString(36).substr(2, 9),
      clientName: evalData.clientName || '',
      clientEmail: evalData.clientEmail || '',
      clientPhone: evalData.clientPhone || '',
      propertyAddress: evalData.propertyAddress || '',
      propertyType: evalData.propertyType || '',
      description: evalData.description || '',
      date: new Date().toISOString().split('T')[0],
      status: 'Pendente'
    };
    setEvaluationRequests([newEval, ...evaluationRequests]);
    alert('Pedido de avaliação enviado com sucesso!');
  };

  if (view === 'public') {
    return (
      <PublicHome 
        properties={properties.filter(p => p.isFeatured)} 
        onAdminClick={() => setView('admin')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAddLead={handleAddLead}
        onAddVisit={handleAddVisitRequest}
      />
    );
  }

  if (view === 'rent') {
    return (
      <PublicHome 
        properties={properties.filter(p => p.category === 'Alugar')} 
        onAdminClick={() => setView('admin')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAddLead={handleAddLead}
        onAddVisit={handleAddVisitRequest}
        activeCategory="Alugar"
      />
    );
  }

  if (view === 'buy') {
    return (
      <PublicHome 
        properties={properties.filter(p => p.category === 'Comprar')} 
        onAdminClick={() => setView('admin')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAddLead={handleAddLead}
        onAddVisit={handleAddVisitRequest}
        activeCategory="Comprar"
      />
    );
  }

  if (view === 'about') {
    return (
      <About 
        onHomeClick={() => setView('public')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAdminClick={() => setView('admin')} 
      />
    );
  }

  if (view === 'services') {
    return (
      <Services 
        onHomeClick={() => setView('public')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAdminClick={() => setView('admin')} 
        onAddVisit={handleAddVisitRequest}
        onAddEvaluation={handleAddEvaluationRequest}
      />
    );
  }

  if (view === 'contact') {
    return (
      <Contact 
        onHomeClick={() => setView('public')} 
        onAboutClick={() => setView('about')}
        onServicesClick={() => setView('services')}
        onContactClick={() => setView('contact')}
        onRentClick={() => setView('rent')}
        onBuyClick={() => setView('buy')}
        onAdminClick={() => setView('admin')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        activeTab={activeAdminTab} 
        setActiveTab={setActiveAdminTab} 
        onLogout={() => setView('public')}
      />
      
      <main className="flex-1 ml-0 lg:ml-64 p-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {activeAdminTab === 'dashboard' && <Dashboard stats={stats} />}
          {activeAdminTab === 'properties' && (
            <PropertyManager 
              properties={properties} 
              onAddProperty={handleAddProperty}
              onDeleteProperty={handleDeleteProperty}
            />
          )}
          {activeAdminTab === 'leads' && <LeadsManager leads={leads} />}
          {activeAdminTab === 'visits' && <VisitsManager visits={visitRequests} />}
          {activeAdminTab === 'evaluations' && <EvaluationsManager evaluations={evaluationRequests} />}
          {activeAdminTab === 'add-property' && (
            <PropertyManager 
              properties={properties} 
              onAddProperty={handleAddProperty}
              onDeleteProperty={handleDeleteProperty}
            />
          )}
        </div>
      </main>
    </div>
  );
}
