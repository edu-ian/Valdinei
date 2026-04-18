import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-24 flex items-center justify-center overflow-hidden">
              <img 
                src="https://iili.io/qwYujzx.png" 
                alt="Logo Valdinei Souza" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Sua imobiliária de confiança em Curitiba. Encontrando o lar ideal para todos os perfis e orçamentos com transparência e agilidade.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-display font-bold text-lg">Links Rápidos</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-brand-primary transition-colors">Imóveis em Destaque</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Sobre a Empresa</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Nossos Serviços</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Fale Conosco</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-display font-bold text-lg">Localização</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Rua XV de Novembro, 456 - Centro<br />
            Curitiba - PR, 80020-310
          </p>
          <p className="text-slate-400 text-sm">
            (41) 99999-9999<br />
            contato@valdineisouza.com.br
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
        <p>© 2026 Valdinei Souza Imóveis para Todos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
