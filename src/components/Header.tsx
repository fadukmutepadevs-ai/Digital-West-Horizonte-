import React, { useState } from 'react';
import { Menu, X, Search, Bookmark, Zap, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
  onOpenAdmin: () => void;
  bookmarksCount: number;
  onViewBookmarks: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  onOpenAdmin,
  bookmarksCount,
  onViewBookmarks,
  activeCategory,
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', target: 'topo', category: 'Todos' },
    { label: 'Tecnologia', target: 'tecnologia', category: 'Tecnologia' },
    { label: 'Inteligência Artificial', target: 'ia', category: 'Inteligência Artificial' },
    { label: 'Ferramentas', target: 'ferramentas', category: 'Ferramentas' },
    { label: 'IT', target: 'it', category: 'IT' },
    { label: 'Programação', target: 'programacao', category: 'Programação' },
    { label: 'Segurança Digital', target: 'seguranca', category: 'Segurança Digital' },
  ];

  const handleNavClick = (target: string, category: string) => {
    onSelectCategory(category);
    setMobileMenuOpen(false);
    if (target === 'topo') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-200 shadow-2xs backdrop-blur-md">
      {/* Top micro bar for high-speed announcement / Slogan */}
      <div className="bg-slate-100/80 px-4 py-1.5 border-b border-slate-200/80 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-[11px] bg-blue-100/70 px-1.5 py-0.5 rounded">
              <Zap className="w-3 h-3 text-blue-600" /> Alta Velocidade
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="truncate hidden sm:inline font-medium text-slate-700">
              Tecnologia, IA e inovação para o futuro digital.
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1.5 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Edição 2026
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-700 hover:text-blue-700 hover:bg-slate-200/70 flex items-center gap-1 transition-colors py-0.5 px-2 rounded bg-white border border-slate-200 shadow-2xs text-[11px]"
              title="Painel de Gerenciamento & Exportação MySQL/Laravel"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Painel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main compact navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div 
          onClick={() => handleNavClick('topo', 'Todos')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-base shadow-xs">
            DW
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Digital West
              </span>
              <span className="font-semibold text-blue-600 text-sm sm:text-base tracking-wide">
                Horizonte
              </span>
            </div>
            <p className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold leading-none hidden sm:block">
              Portal de Tecnologia &amp; Inovação
            </p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = activeCategory === item.category;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target, item.category)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action icons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onSearchClick}
            aria-label="Pesquisar conteúdos"
            className="px-2.5 py-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-md flex items-center gap-1.5 text-xs font-medium bg-slate-50 transition-colors"
            title="Pesquisar artigos e ferramentas"
          >
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Pesquisar</span>
          </button>

          <button
            onClick={onViewBookmarks}
            aria-label="Salvos para ler"
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-md relative bg-slate-50 transition-colors"
            title="Artigos salvos"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Lightweight Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <div className="text-xs font-bold text-slate-500 px-3 py-1 uppercase tracking-wider">
            Navegar por Seção
          </div>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.target, item.category)}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-md ${
                activeCategory === item.category
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex justify-between items-center px-3">
            <span className="text-xs text-slate-500">
              "Tecnologia, IA e inovação para o futuro digital."
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
