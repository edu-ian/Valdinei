import React from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, Calendar } from 'lucide-react';
import { Lead } from '../../types';

interface LeadsManagerProps {
  leads: Lead[];
}

export default function LeadsManager({ leads }: LeadsManagerProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display text-slate-900">Gestão de Leads</h1>
          <p className="text-slate-500">Acompanhe e gerencie seus potenciais clientes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar leads..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all w-full md:w-64"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </header>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-secondary/5 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Interesse</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Imóvel/Região</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{lead.name}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail size={12} /> {lead.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lead.interest === 'Comprar' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {lead.interest}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900">{lead.propertyType}</p>
                    <p className="text-xs text-slate-500">{lead.region}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={14} />
                      {lead.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'Novo' ? 'bg-emerald-50 text-emerald-600' : 
                      lead.status === 'Em Contato' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-brand-primary transition-colors">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <p className="text-sm text-slate-500">Mostrando {leads.length} leads</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-sm disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-sm">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
