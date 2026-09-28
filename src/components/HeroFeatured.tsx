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
      <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Container */}
          <div className="lg:col-span-7 relative bg-slate-100 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[320px] border-b lg:border-b-0 lg:border-r border-slate-100">
            <img
              src={article.imagem}
              alt={article.titulo}
              width={800}
              height={420}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center max-h-[380px]"
            />

            {/* Interactive Enlarged Button: Reloads entire page quickly */}
            <button
              type="button"
              onClick={handleInstantReload}
              title="Clique para recarregar toda a página instantaneamente"
              aria-label="Recarregar toda a página instantaneamente"
              className={`absolute top-4 left-4 bg-white/95 text-blue-700 hover:text-blue-800 border border-blue-300 hover:border-blue-500 hover:bg-blue-50/50 text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-extrabold tracking-wide flex items-center gap-2 shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer backdrop-blur-xs select-none z-10 group ${
                isReloading ? 'opacity-75 scale-95' : ''
              }`}
            >
              <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform ${isReloading ? 'animate-spin' : 'group-hover:scale-110'}`} />
              <span className="font-extrabold">DESTAQUE DA SEMANA</span>
              <RotateCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity ${isReloading ? 'animate-spin' : ''}`} />
            </button>
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
