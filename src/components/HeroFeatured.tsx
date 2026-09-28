import React, { useState } from 'react';
import { Article } from '../types/portal';
import { Clock, Calendar, ArrowRight, Bookmark, Sparkles, RotateCw } from 'lucide-react';

interface HeroFeaturedProps {
  article: Article;
  onReadMore: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onReadMore,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [isReloading, setIsReloading] = useState(false);

  const handleInstantReload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsReloading(true);
    // Instant full page reload
    window.location.reload();
  };

  return (
    <section aria-label="Destaque Principal" className="w-full mb-10">
      <article className="bg-white border border-blue-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Container: Clean, Framed & Interactive Reload Button */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleInstantReload}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleInstantReload(e as any);
              }
            }}
            title="Clique para recarregar todo o portal instantaneamente"
            aria-label="Clique nesta imagem para recarregar toda a página de forma ultra-rápida"
            className="lg:col-span-7 relative bg-gradient-to-br from-[#e4f0fb] via-[#edf6fd] to-[#d8ebfa] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] border-b lg:border-b-0 lg:border-r border-blue-200/90 cursor-pointer group select-none active:scale-[0.99] transition-all"
          >
            {/* Centered, Uncropped Technological Artwork */}
            <div className="w-full h-full p-4 sm:p-6 pb-14 sm:pb-16 flex items-center justify-center">
              <img
                src={article.imagem}
                alt={article.titulo}
                width={800}
                height={450}
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Top Indicator Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/95 text-blue-900 border border-blue-200/90 text-[11px] sm:text-xs px-3 py-1 rounded-md font-bold uppercase tracking-wider shadow-2xs flex items-center gap-1.5 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Destaque Editorial
              </span>
            </div>

            {/* Sleek Bottom Interactive Reload Bar */}
            <div className="absolute bottom-3 inset-x-3 sm:inset-x-5 z-10 flex items-center justify-between bg-white/95 backdrop-blur-xs border border-blue-200/90 group-hover:border-blue-400 group-hover:bg-blue-50/95 rounded-lg px-3.5 py-2 text-xs shadow-xs transition-all">
              <span className="text-blue-950 font-bold flex items-center gap-2">
                <RotateCw className={`w-3.5 h-3.5 text-blue-600 ${isReloading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span className="truncate">
                  {isReloading ? 'Recarregando todo o portal...' : 'Clique na imagem para recarregar o site'}
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded font-bold whitespace-nowrap ml-2">
                0ms • Ultra-Rápido
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Category & Date metadata */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 font-mono">
                <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                  {article.categoria}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime={article.dataIso}>{article.data}</time>
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.tempoLeituraMin} min de leitura
                </span>
              </div>

              {/* Title */}
              <h1 
                onClick={() => onReadMore(article)}
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3 cursor-pointer hover:text-blue-600 transition-colors"
              >
                {article.titulo}
              </h1>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {article.resumo}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => onReadMore(article)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-colors active:scale-98 shadow-xs"
              >
                <span>Ler matéria completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(article.id)}
                aria-label={isBookmarked ? "Remover dos salvos" : "Salvar para ler depois"}
                className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isBookmarked
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
                title={isBookmarked ? "Salvo" : "Salvar artigo"}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'Salvo' : 'Salvar'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
