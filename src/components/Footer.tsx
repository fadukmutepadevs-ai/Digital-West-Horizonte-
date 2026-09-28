import React from 'react';
import { Zap } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAdmin }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-xs">
      {/* Performance Guarantee Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-blue-400">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-white">Métrica de Performance:</span>
            <span className="text-slate-300">Tempo de renderização imediato • Zero rastreadores • Fontes nativas</span>
          </div>
          <div className="text-slate-400">
            Arquitetura: SPA veloz pronta para integração com API Laravel e MySQL
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                DW
              </div>
              <span className="font-extrabold text-lg text-white">
                Digital West <span className="font-semibold text-blue-400">Horizonte</span>
              </span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed max-w-sm font-medium">
              "Tecnologia, IA e inovação para o futuro digital."
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              Portal dedicado a estudantes, programadores, profissionais de IT e pessoas interessadas em tecnologia e segurança digital.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Categorias
            </h4>
            <ul className="space-y-2">
              {['Inteligência Artificial', 'Tecnologia', 'Ferramentas', 'IT', 'Programação', 'Segurança Digital'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 text-left transition-colors text-slate-400 hover:underline"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologias Abordadas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Tecnologias &amp; IT
            </h4>
            <ul className="space-y-1.5 font-mono text-[11px] text-slate-400">
              <li>PHP 8.3 &amp; Laravel</li>
              <li>MySQL &amp; Índices B-Tree</li>
              <li>Docker &amp; Linux</li>
              <li>Nginx &amp; DNS Seguro</li>
              <li>APIs RESTful</li>
              <li>Agentes e Modelos de IA</li>
            </ul>
          </div>

          {/* Gestão & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Administração
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Painel de Conteúdo
                </button>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="hover:text-white transition-colors text-slate-400">
                  robots.txt
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-white transition-colors text-slate-400">
                  sitemap.xml
                </a>
              </li>
              <li>
                <span className="text-slate-500">Privacidade e Termos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {currentYear} Digital West Horizonte. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco absoluto em velocidade, acessibilidade e simplicidade visual.</p>
        </div>
      </div>
    </footer>
  );
};
