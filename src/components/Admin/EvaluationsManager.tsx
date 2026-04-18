import React from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, Calendar, MapPin, Home } from 'lucide-react';
import { EvaluationRequest } from '../../types';

interface EvaluationsManagerProps {
  evaluations: EvaluationRequest[];
}

export default function EvaluationsManager({ evaluations }: EvaluationsManagerProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display text-slate-900">Solicitações de Avaliação</h1>
          <p className="text-slate-500">Gerencie as solicitações de avaliação de imóveis dos seus clientes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar avaliações..." 
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
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Imóvel</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-brand-secondary/60 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {evaluations.map((evaluation) => (
                <tr key={evaluation.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold">
                        {evaluation.clientName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{evaluation.clientName}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail size={12} /> {evaluation.clientEmail}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Phone size={12} /> {evaluation.clientPhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-sm text-slate-900">
                      <div className="flex items-center gap-2">
                        <Home size={14} className="text-brand-primary" />
                        {evaluation.propertyType}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin size={12} />
                        {evaluation.propertyAddress}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={14} />
                      {evaluation.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      evaluation.status === 'Pendente' ? 'bg-amber-50 text-amber-600' : 
                      evaluation.status === 'Em Análise' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {evaluation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-brand-primary transition-colors" title="Iniciar Avaliação">
                        <Home size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {evaluations.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Nenhuma solicitação de avaliação encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <p className="text-sm text-slate-500">Mostrando {evaluations.length} solicitações</p>
        </div>
      </div>
    </div>
  );
}
