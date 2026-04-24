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
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'properties', label: 'Imóveis', icon: Home },
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'visits', label: 'Visitas', icon: ChevronRight },
    { id: 'evaluations', label: 'Avaliações', icon: ChevronRight },
  ];
  return (
    <>
      {/* Overlay escuro para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Botão Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#14143c] text-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Principal */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen bg-[#14143c] text-slate-300 transition-transform duration-300 z-40 border-r border-white/10 w-64",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 flex items-center gap-3 border-b border-white/10 mt-12 lg:mt-0">
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <img 
              src="https://iili.io/qwYujzx.png" 
              alt="Logo Valdinei Souza" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display text-lg text-white tracking-wide">ADMIN</span>
        </div>

        <nav className="p-4 space-y-2 h-[calc(100vh-180px)] overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false); 
              }}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors group",
                activeTab === item.id 
                  ? "bg-white/20 text-white" 
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {activeTab === item.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10 space-y-2 bg-[#14143c]">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <Settings size={20} />
            <span>Configurações</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
}