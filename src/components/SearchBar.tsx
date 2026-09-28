import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { CategoryType } from '../types/portal';

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  selectedType: string;
  onTypeSelect: (type: string) => void;
  resultsCount: number;
}

const CATEGORIES: ('Todos' | CategoryType)[] = [
  'Todos',
  'Inteligência Artificial',
  'Tecnologia',
  'Ferramentas',
  'IT',
  'Programação',
  'Segurança Digital'
];

const CONTENT_TYPES: { label: string; value: string }[] = [
  { label: 'Todos os tipos', value: 'all' },
  { label: 'Artigos', value: 'artigo' },
  { label: 'Tutoriais', value: 'tutorial' },
  { label: 'Guias Práticos', value: 'guia' },
  { label: 'Ferramentas', value: 'ferramenta' }
];

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  selectedCategory,
  onCategorySelect,
  selectedType,
  onTypeSelect,
  resultsCount,
}) => {
  return (
    <div id="pesquisa-secao" className="bg-white border border-blue-200/90 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
      {/* Search Input Box */}
      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-blue-600" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Pesquisar artigos, tutoriais ou tecnologias (ex: Laravel, MySQL, Redes, 2FA)..."
          className="w-full pl-10 pr-10 py-2.5 bg-[#f3f7fd] border border-blue-200/90 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-sans transition-colors"
        />
        {query && (
          <button
            onClick={() => onQueryChange('')}
            aria-label="Limpar pesquisa"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category Pills & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Categories horizontal scroll on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategorySelect(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-[#f0f4fa] text-slate-700 hover:bg-blue-50 hover:text-blue-800 border border-blue-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Type Filter & Result Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-blue-500" />
            <select
              value={selectedType}
              onChange={(e) => onTypeSelect(e.target.value)}
              className="bg-[#f0f4fa] border border-blue-200 text-slate-800 text-xs rounded-md px-2.5 py-1 focus:outline-none focus:border-blue-600"
            >
              {CONTENT_TYPES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <span className="font-mono text-blue-800 font-bold bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded text-[11px]">
            {resultsCount} {resultsCount === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>
      </div>
    </div>
  );
};
