import React from 'react';
import { Article } from '../types/portal';
import { Calendar, Clock, Bookmark, ArrowRight } from 'lucide-react';

interface RecentArticlesProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export const RecentArticles: React.FC<RecentArticlesProps> = ({
  articles,
  onReadArticle,
  bookmarks,
  onToggleBookmark,
}) => {
  return (
    <section id="ultimos-conteudos" aria-label="Últimos Conteúdos" className="mb-14">
      <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Últimos Conteúdos
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-normal">
            Publicações editoriais sobre tecnologia, inteligência artificial, programação e infraestrutura
          </p>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="bg-white border border-slate-200 p-8 rounded-xl text-center text-slate-500 text-sm shadow-xs">
          Nenhum artigo encontrado para o filtro selecionado. Tente outro termo de pesquisa.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const isSaved = bookmarks.includes(article.id);
            return (
              <article
                key={article.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-slate-300 transition-all duration-150 shadow-xs hover:shadow-sm group"
              >
                {/* Visual container */}
                <div 
                  onClick={() => onReadArticle(article)}
                  className="relative aspect-video w-full bg-slate-100 cursor-pointer overflow-hidden border-b border-slate-100"
                >
                  <img
                    src={article.imagem}
                    alt={article.titulo}
                    width={400}
                    height={225}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-blue-700 border border-blue-200/90 text-[11px] px-2 py-0.5 rounded font-mono font-bold shadow-2xs">
                    {article.categoria}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <time dateTime={article.dataIso}>{article.data}</time>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {article.tempoLeituraMin} min
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onReadArticle(article)}
                      className="text-base font-bold text-slate-900 leading-snug mb-2 cursor-pointer hover:text-blue-600 transition-colors line-clamp-2"
                    >
                      {article.titulo}
                    </h3>

                    {/* Short Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {article.resumo}
                    </p>
                  </div>

                  {/* Footer actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onReadArticle(article)}
                      className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Ler matéria</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onToggleBookmark(article.id)}
                      aria-label="Salvar artigo"
                      className={`p-1.5 rounded-md transition-colors ${
                        isSaved ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                      title={isSaved ? 'Salvo' : 'Salvar para ler depois'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-blue-600' : ''}`} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
