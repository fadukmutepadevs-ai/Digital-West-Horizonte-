import React, { useState } from 'react';
import { DigitalTool } from '../types/portal';
import { INITIAL_TOOLS } from '../data/portalData';
import { Wrench, ExternalLink, Filter, Check, Copy } from 'lucide-react';

export const ToolsDirectory: React.FC = () => {
  const [tools] = useState<DigitalTool[]>(INITIAL_TOOLS);
  const [selectedAudience, setSelectedAudience] = useState<string>('todos');
  const [selectedPricing, setSelectedPricing] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const audiences = [
    { id: 'todos', label: 'Todos os públicos' },
    { id: 'programadores', label: 'Programadores' },
    { id: 'estudantes', label: 'Estudantes' },
    { id: 'it', label: 'Profissionais IT' },
    { id: 'designers', label: 'Designers' },
    { id: 'empreendedores', label: 'Empreendedores' },
    { id: 'criadores', label: 'Criadores' },
  ];

  const pricings = ['todos', 'Gratuito', 'Open Source', 'Freemium', 'Pago'];

  const filteredTools = tools.filter((tool) => {
    const matchesAudience =
      selectedAudience === 'todos' ||
      tool.publicoAlvo.includes(selectedAudience as any);
    const matchesPricing =
      selectedPricing === 'todos' || tool.preco === selectedPricing;
    const matchesSearch =
      searchQuery === '' ||
      tool.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.finalidade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.categoria.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesAudience && matchesPricing && matchesSearch;
  });

  const handleCopyLink = (tool: DigitalTool) => {
    navigator.clipboard.writeText(tool.link);
    setCopiedId(tool.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ferramentas" aria-label="Diretório de Ferramentas Digitais" className="mb-14 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            Catálogo Curado
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Ferramentas Digitais Selecionadas
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-normal">
            Utilitários recomendados para estudantes, programadores, designers e equipes de infraestrutura
          </p>
        </div>

        {/* In-tool quick search */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar ferramentas..."
            className="w-full bg-white border border-slate-300 text-xs text-slate-900 rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-slate-100/70 p-3 rounded-xl border border-slate-200 text-xs">
        {/* Target Audience Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-slate-500 font-semibold whitespace-nowrap mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-blue-600" /> Público:
          </span>
          {audiences.map((aud) => (
            <button
              key={aud.id}
              onClick={() => setSelectedAudience(aud.id)}
              className={`whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                selectedAudience === aud.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {aud.label}
            </button>
          ))}
        </div>

        {/* Pricing Select */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-slate-500 font-medium">Licença:</span>
          <select
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
            className="bg-white border border-slate-300 text-slate-800 rounded-md px-2.5 py-1 text-xs focus:outline-none focus:border-blue-600"
          >
            {pricings.map((p) => (
              <option key={p} value={p}>
                {p === 'todos' ? 'Todas as Licenças' : p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length === 0 ? (
        <div className="bg-white border border-slate-200 p-8 rounded-xl text-center text-slate-500 text-sm shadow-xs">
          Nenhuma ferramenta corresponde aos critérios selecionados.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => {
            const isCopied = copiedId === tool.id;
            return (
              <div
                key={tool.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all shadow-2xs"
              >
                <div>
                  {/* Top line: Name & Pricing */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-blue-600 font-bold block tracking-wider">
                        {tool.categoria}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {tool.nome}
                      </h3>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase font-mono whitespace-nowrap ${
                        tool.preco === 'Gratuito'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : tool.preco === 'Open Source'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : tool.preco === 'Freemium'
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {tool.preco}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed font-normal">
                    {tool.descricao}
                  </p>

                  {/* Purpose */}
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">
                      Finalidade Principal:
                    </span>
                    <p className="text-xs text-slate-800 font-medium">
                      {tool.finalidade}
                    </p>
                  </div>

                  {/* Audience tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.publicoAlvo.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium capitalize"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom link action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleCopyLink(tool)}
                    className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                    title="Copiar URL da ferramenta"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 text-[11px] font-semibold">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copiar Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    <span>Acessar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
