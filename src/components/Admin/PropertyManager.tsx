import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  Edit2, 
  Trash2, 
  Eye,
  Camera,
  X
} from 'lucide-react';
import { Property } from '../../types';

interface PropertyManagerProps {
  properties: Property[];
  onAddProperty: (property: Partial<Property>) => void;
  onDeleteProperty: (id: string) => void;
}

export default function PropertyManager({ properties, onAddProperty, onDeleteProperty }: PropertyManagerProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newProperty, setNewProperty] = useState<Partial<Property>>({
    title: '',
    location: '',
    price: 0,
    type: 'Apartamento',
    beds: 0,
    baths: 0,
    parking: 0,
    area: 0,
    image: 'https://picsum.photos/seed/home/800/600'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProperty(newProperty);
    setIsAdding(false);
    setNewProperty({
      title: '',
      location: '',
      price: 0,
      type: 'Apartamento',
      beds: 0,
      baths: 0,
      parking: 0,
      area: 0,
      image: 'https://picsum.photos/seed/home/800/600'
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display text-slate-900">Gestão de Imóveis</h1>
          <p className="text-slate-500">Adicione, edite ou remova propriedades do seu portfólio.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar imóveis..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all w-full md:w-64"
            />
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-secondary rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20"
          >
            <Plus size={20} />
            Novo Imóvel
          </button>
        </div>
      </header>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded">
                  {property.type}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-brand-primary hover:text-brand-secondary transition-colors">
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => onDeleteProperty(property.id)}
                  className="p-2 bg-white rounded-full text-slate-900 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <Trash2 size={18} />
                </button>
                <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors">
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1 text-brand-primary mb-2">
                <MapPin size={14} />
                <span className="text-xs font-medium">{property.location}</span>
              </div>
              <h3 className="text-lg font-display text-slate-900 mb-1">{property.title}</h3>
              <p className="text-xl font-bold text-brand-primary mb-4">
                {property.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100">
                <div className="flex flex-col items-center gap-1">
                  <Bed size={16} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-600">{property.beds}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Bath size={16} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-600">{property.baths}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Car size={16} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-600">{property.parking}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Maximize size={16} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-600">{property.area}m²</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-2xl font-display text-slate-900">Novo Imóvel</h2>
              <button 
                onClick={() => setIsAdding(false)}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Título do Imóvel</label>
                  <input 
                    required
                    type="text" 
                    value={newProperty.title}
                    onChange={(e) => setNewProperty({...newProperty, title: e.target.value})}
                    placeholder="Ex: Apartamento no Centro" 
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Localização</label>
                  <input 
                    required
                    type="text" 
                    value={newProperty.location}
                    onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                    placeholder="Ex: Centro, Curitiba" 
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Preço (R$)</label>
                  <input 
                    required
                    type="number" 
                    value={newProperty.price}
                    onChange={(e) => setNewProperty({...newProperty, price: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Tipo</label>
                  <select 
                    value={newProperty.type}
                    onChange={(e) => setNewProperty({...newProperty, type: e.target.value as any})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  >
                    <option>Apartamento</option>
                    <option>Casa</option>
                    <option>Sobrado</option>
                    <option>Terreno</option>
                    <option>Studio</option>
                    <option>Cobertura</option>
                    <option>Mansão</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Quartos</label>
                  <input 
                    type="number" 
                    value={newProperty.beds}
                    onChange={(e) => setNewProperty({...newProperty, beds: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Banheiros</label>
                  <input 
                    type="number" 
                    value={newProperty.baths}
                    onChange={(e) => setNewProperty({...newProperty, baths: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Vagas</label>
                  <input 
                    type="number" 
                    value={newProperty.parking}
                    onChange={(e) => setNewProperty({...newProperty, parking: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Área (m²)</label>
                  <input 
                    type="number" 
                    value={newProperty.area}
                    onChange={(e) => setNewProperty({...newProperty, area: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-700">Fotos do Imóvel</label>
                <div className="w-full h-40 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer bg-slate-50">
                  <Camera size={32} />
                  <span className="text-sm font-medium">Clique para fazer upload</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="flex-1 px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-brand-primary text-brand-secondary rounded-xl font-medium hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20"
                >
                  Salvar Imóvel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
