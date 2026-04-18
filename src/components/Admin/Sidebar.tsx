import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Home, 
  Users, 
  PlusCircle, 
  Settings, 
  LogOut, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'properties', label: 'Imóveis', icon: Home },
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'visits', label: 'Visitas', icon: ChevronRight },
    { id: 'evaluations', label: 'Avaliações', icon: ChevronRight },
    { id: 'add-property', label: 'Novo Imóvel', icon: PlusCircle },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={cn(
        "fixed left-0 top-0 h-screen bg-slate-900 text-slate-300 transition-all duration-300 z-40 border-r border-slate-800",
        isOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <img 
              src="https://iili.io/qwYujzx.png" 
              alt="Logo Valdinei Souza" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          {isOpen && <span className="font-display text-lg text-white tracking-wide">ADMIN</span>}
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors group",
                activeTab === item.id 
                  ? "bg-brand-primary/10 text-brand-primary" 
                  : "hover:bg-slate-800 hover:text-white"
              )}
            >
              <item.icon size={20} />
              {isOpen && <span className="font-medium">{item.label}</span>}
              {isOpen && activeTab === item.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 space-y-2">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Settings size={20} />
            {isOpen && <span>Configurações</span>}
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors"
          >
            <LogOut size={20} />
            {isOpen && <span>Sair</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
