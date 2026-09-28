import React, { useEffect } from 'react';
import { Article } from '../types/portal';
import { ARTICLE_DIAGRAMS } from '../data/illustrations';
import { X, Calendar, Clock, User, Bookmark, Share2, Printer, Check, Image as ImageIcon, Zap } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  relatedArticles: Article[];
  onSelectRelated: (article: Article) => void;
}

// Cleans raw asterisks and converts markdown bold into clean HTML elements
const formatArticleText = (text: string): React.ReactNode => {
  // If text contains **bold** or *italic*, parse them cleanly into React elements without raw asterisks
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const cleanWord = part.slice(2, -2).trim();
      return (
        <strong key={i} className="font-bold text-slate-900">
          {cleanWord}
        </strong>
      );
    }
    // Also clean any accidental stray asterisks
    const cleaned = part.replace(/(^|[^\w])\*([^\*]+)\*([^\w]|$)/g, '$1$2$3');
    return <span key={i}>{cleaned}</span>;
  });
};

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  relatedArticles,
  onSelectRelated,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    const url = `${window.location.origin}/#${article.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-slate-200 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal top bar */}
        <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200 font-mono text-[11px]">
              {article.categoria}
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="truncate hidden sm:inline font-medium text-slate-600">
              Digital West Horizonte
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked 
                  ? 'text-blue-700 bg-blue-50 border-blue-200' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border-slate-200'
              }`}
              title={isBookmarked ? 'Salvo nos favoritos' : 'Salvar artigo'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              title="Copiar link permanente do artigo"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors hidden sm:block"
              title="Imprimir artigo"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors ml-1"
              title="Fechar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-800">
          {/* Header Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <time dateTime={article.dataIso}>{article.data}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                {article.tempoLeituraMin} minutos de leitura
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-blue-600" />
                {article.autor}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
              {article.titulo}
            </h1>

            {/* Subheading / Lead */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed border-l-3 border-blue-600 pl-4 py-2 bg-slate-50 rounded-r-lg mb-5">
              {article.resumo}
            </p>

            {/* Main Article Cover Image */}
            <figure className="my-6 rounded-xl overflow-hidden border border-blue-200/90 bg-[#dcecfb] shadow-xs">
              <img
                src={article.imagem}
                alt={article.titulo}
                width={800}
                height={450}
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[360px] object-contain object-center"
              />
              <figcaption className="px-4 py-2.5 bg-white border-t border-blue-200/80 text-xs text-slate-600 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                  Ilustração temática: {article.categoria}
                </span>
                <span className="font-mono text-blue-800 flex items-center gap-1 text-[11px] font-semibold">
                  <Zap className="w-3 h-3 text-blue-600" /> Vetor Otimizado • 0ms
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Full content parsing without asterisks and with clean typography */}
          <div className="max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-slate-700">
            {article.conteudoCompleto.split('\n\n').map((paragraph, index) => {
              // Section Subtitles
              if (paragraph.startsWith('### ')) {
                const subTitle = paragraph.replace('### ', '').replace(/\*\*/g, '').trim();
                return (
                  <h3 key={index} className="text-lg sm:text-xl font-bold text-slate-900 pt-4 pb-1 border-b border-slate-200">
                    {subTitle}
                  </h3>
                );
              }

              // Code blocks
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*\n?/g, '');
                return (
                  <pre key={index} className="bg-slate-900 text-blue-200 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 my-4 shadow-xs">
                    <code>{codeContent}</code>
                  </pre>
                );
              }

              // Custom Inline Diagram marker: [ILUSTRACAO: diagram-id]
              const diagramMatch = paragraph.match(/^\[ILUSTRACAO:\s*([a-zA-Z0-9_-]+)\]$/);
              if (diagramMatch) {
                const diagramId = diagramMatch[1];
                const diagram = ARTICLE_DIAGRAMS[diagramId];
                if (diagram) {
                  return (
                    <figure key={index} className="my-6 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
                      <div className="p-2 sm:p-3 bg-white flex items-center justify-center">
                        <img
                          src={diagram.svgDataUri}
                          alt={diagram.caption}
                          width={760}
                          height={210}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto max-h-[260px] object-contain rounded-lg"
                        />
                      </div>
                      <figcaption className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="font-medium text-slate-800">
                          {diagram.caption}
                        </span>
                        <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded self-start sm:self-auto flex items-center gap-1 font-semibold">
                          <Zap className="w-2.5 h-2.5 text-blue-600" />
                          SVG Leve (&lt; 1 KB)
                        </span>
                      </figcaption>
                    </figure>
                  );
                }
              }

              // Standard Markdown image: ![alt](url)
              const mdImageMatch = paragraph.match(/^!\[(.*?)\]\((.*?)\)$/);
              if (mdImageMatch) {
                const altText = mdImageMatch[1];
                const imgSrc = mdImageMatch[2];
                return (
                  <figure key={index} className="my-5 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                    <img
                      src={imgSrc}
                      alt={altText}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto max-h-[300px] object-contain"
                    />
                    {altText && (
                      <figcaption className="px-3 py-1.5 text-xs text-slate-500 bg-white border-t border-slate-200">
                        {altText}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              // Standard clean text paragraph with clean bold parsing (no raw asterisks!)
              return (
                <p key={index} className="whitespace-pre-line text-slate-700 leading-relaxed font-normal">
                  {formatArticleText(paragraph)}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Tópicos:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Mais matérias relacionadas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-white cursor-pointer group transition-all flex items-center gap-3"
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img
                        src={rel.imagem}
                        alt={rel.titulo}
                        width={64}
                        height={48}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] text-blue-700 font-mono font-bold block mb-0.5">
                        {rel.categoria}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {rel.titulo}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
