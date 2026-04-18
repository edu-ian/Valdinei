export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: 'Apartamento' | 'Casa' | 'Cobertura' | 'Mansão' | 'Studio' | 'Sobrado' | 'Terreno';
  category: 'Alugar' | 'Comprar';
  beds: number;
  baths: number;
  parking: number;
  area: number;
  image: string;
  isFeatured?: boolean;
}

export interface VisitRequest {
  id: string;
  propertyId: string;
  propertyName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
}

export interface EvaluationRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  propertyAddress: string;
  propertyType: string;
  description: string;
  date: string;
  status: 'Pendente' | 'Em Análise' | 'Concluído';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: 'Comprar' | 'Alugar' | 'Vender';
  propertyType: string;
  region: string;
  date: string;
  status: 'Novo' | 'Em Contato' | 'Fechado' | 'Perdido';
}

export interface DashboardStats {
  totalLeads: number;
  totalProperties: number;
  leadsByInterest: { name: string; value: number }[];
  leadsByRegion: { name: string; value: number }[];
  leadsByType: { name: string; value: number }[];
}
