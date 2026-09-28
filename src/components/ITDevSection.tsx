import React, { useState } from 'react';
import { Article } from '../types/portal';
import { Code2, Server, Database, Copy, Check, Terminal } from 'lucide-react';

interface ITDevSectionProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

const TECH_TRACKS = [
  {
    id: 'backend',
    label: 'PHP, Laravel & APIs',
    icon: Code2,
    desc: 'Arquitetura moderna de backend com rotas limpas, validação de requisições e microsserviços rápidos.',
    snippet: `// Laravel 11 - Rota API otimizada com Cache inteligente
use App\\Models\\Conteudo;
use Illuminate\\Support\\Facades\\Cache;

Route::get('/api/v1/conteudos', function () {
    return Cache::remember('portal_artigos_recentes', 300, function () {
        return Conteudo::where('status', 'publicado')
            ->select(['id', 'slug', 'titulo', 'categoria', 'data_publicacao'])
            ->orderByDesc('data_publicacao')
            ->limit(20)
            ->get();
    });
});`,
    techs: ['PHP 8.3', 'Laravel 11', 'REST API', 'Eloquent ORM', 'Redis']
  },
  {
    id: 'database',
    label: 'MySQL & Otimização',
    icon: Database,
    desc: 'Modelagem relacional com índices compostos, transações seguras e prevenção de gargalos em disco.',
    snippet: `-- MySQL: Otimização de consulta com índice composto
ALTER TABLE \`artigos\` 
ADD INDEX \`idx_categoria_data\` (\`categoria\`, \`data_publicacao\` DESC);

-- Busca rápida com plano EXPLAIN garantindo latência reduzida:
EXPLAIN SELECT id, titulo, resumo 
FROM artigos 
WHERE categoria = 'Inteligência Artificial' 
ORDER BY data_publicacao DESC 
LIMIT 10;`,
    techs: ['MySQL 8.4', 'Índices B-Tree', 'EXPLAIN ANALYZE', 'Transações ACID']
  },
  {
    id: 'infra',
    label: 'Servidores, Redes & Cloud',
    icon: Server,
    desc: 'Fundamentos de redes (TCP/IP, DNS, SSL), proxies reversos Nginx e containers Docker padronizados.',
    snippet: `# Nginx - Configuração otimizada com compressão e cache estático
server {
    listen 80;
    server_name digitalwesthorizonte.com.br;
    
    # Cabeçalhos de Proteção
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;

    # Cache para SVGs e arquivos estáticos
    location ~* \\.(?:webp|avif|svg|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}`,
    techs: ['Linux Ubuntu', 'Docker', 'Nginx', 'Cloudflare DNS', 'TLS 1.3']
  },
  {
    id: 'frontend',
    label: 'HTML, CSS & JS Vanilla',
    icon: Terminal,
    desc: 'O poder da web padrão: zero sobrecarga, carregamento instantâneo e acessibilidade universal.',
    snippet: `// Requisição leve com AbortController e tratamento de erros
async function fetchConteudosComTimeout(url, timeoutMs = 3000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) throw new Error('Status HTTP: ' + res.status);
    return await res.json();
  } catch (err) {
    console.error('Falha de rede rápida:', err);
    return null;
  }
}`,
    techs: ['HTML5 Semântico', 'CSS3 Moderno', 'Fetch API', 'DOM Nativo']
  }
];

export const ITDevSection: React.FC<ITDevSectionProps> = ({ articles, onReadArticle }) => {
  const [activeTrack, setActiveTrack] = useState(TECH_TRACKS[0].id);
  const [copied, setCopied] = useState(false);

  const currentTrack = TECH_TRACKS.find(t => t.id === activeTrack) || TECH_TRACKS[0];
  const devArticles = articles.filter(a => a.categoria === 'IT' || a.categoria === 'Programação');

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(currentTrack.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="it" aria-label="IT e Programação" className="mb-14 scroll-mt-20">
      {/* Title */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            Engenharia de Software &amp; IT
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            IT, Infraestrutura e Desenvolvimento Web
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-normal">
            Guias técnicos sobre HTML, CSS, JavaScript, PHP, Laravel, MySQL, servidores e redes
          </p>
        </div>
      </div>

      {/* Main interactive panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Track selector tabs */}
        <div className="lg:col-span-4 space-y-2.5">
          {TECH_TRACKS.map((track) => {
            const Icon = track.icon;
            const isSelected = activeTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-xs'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={`p-2.5 rounded-lg mt-0.5 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{track.label}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {track.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Code viewer & snippet */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between shadow-xs text-white">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
                  {currentTrack.label} • Código Fonte
                </span>
              </div>

              <button
                onClick={handleCopySnippet}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md transition-colors"
                title="Copiar código"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Código</span>
                  </>
                )}
              </button>
            </div>

            {/* Snippet box */}
            <pre className="bg-slate-950 p-4 rounded-lg text-xs font-mono text-blue-300 overflow-x-auto leading-relaxed border border-slate-800/80">
              <code>{currentTrack.snippet}</code>
            </pre>
          </div>

          {/* Tags */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap gap-1.5">
              {currentTrack.techs.map(tech => (
                <span key={tech} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-slate-400 text-[11px]">
              Compatível com arquiteturas modernas
            </span>
          </div>
        </div>
      </div>

      {/* Recommended IT & Programming Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {devArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => onReadArticle(art)}
            className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-xs cursor-pointer flex justify-between items-center gap-4 transition-all group"
          >
            <div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-1">
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">{art.categoria}</span>
                <span>•</span>
                <span>{art.tempoLeituraMin} min leitura</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {art.titulo}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-normal">
                {art.resumo}
              </p>
            </div>
            <span className="text-blue-600 font-bold text-xs whitespace-nowrap hidden sm:inline">
              Ler guia →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
