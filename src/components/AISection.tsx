import React, { useState } from 'react';
import { Article } from '../types/portal';
import { Bot, Cpu, Sparkles, Workflow, Terminal, Zap, BookOpen, CheckCircle } from 'lucide-react';

interface AISectionProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

const AI_TOPICS = [
  {
    id: 'agentes',
    title: 'Agentes Autônomos',
    icon: Workflow,
    summary: 'Sistemas que executam fluxos completos com raciocínio planejado, uso de APIs e conferência de dados.'
  },
  {
    id: 'codigo',
    title: 'Desenvolvimento e IA',
    icon: Terminal,
    summary: 'Suporte na geração de testes unitários, automação de documentação e análise rápida de bibliotecas.'
  },
  {
    id: 'generativa',
    title: 'Modelos de Linguagem',
    icon: Bot,
    summary: 'Casos reais de aplicação em empresas para busca semântica, suporte e síntese de relatórios extensos.'
  },
  {
    id: 'produtividade',
    title: 'Rotinas Otimizadas',
    icon: Zap,
    summary: 'Redução do tempo gasto em planilhas manuais, transcrições e organização de pautas semanais.'
  }
];

const PROMPT_PATTERNS = [
  {
    role: 'Para Desenvolvedores',
    tip: 'Especifique versão da linguagem, requisitos de performance e solicite exemplos de testes junto com o código.'
  },
  {
    role: 'Para Gestores e Empresas',
    tip: 'Solicite tabelas comparativas com foco em custo, prazo de implementação e riscos de segurança.'
  },
  {
    role: 'Para Estudantes e IT',
    tip: 'Peça explicações conceituais claras com analogias simples seguidas de comandos práticos no terminal.'
  }
];

export const AISection: React.FC<AISectionProps> = ({ articles, onReadArticle }) => {
  const [selectedTopic, setSelectedTopic] = useState('agentes');

  const aiArticles = articles.filter(a => a.categoria === 'Inteligência Artificial');

  return (
    <section id="ia" aria-label="Seção Inteligência Artificial" className="mb-14 scroll-mt-20">
      {/* Header */}
      <div className="bg-white border border-blue-200/90 rounded-2xl p-6 sm:p-8 mb-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2">
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              Caderno de Inteligência Artificial
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Inteligência Artificial &amp; Automação Digital
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-1.5 leading-relaxed font-normal">
              Análises objetivas sobre modelos generativos, agentes de software e boas práticas para transformar tarefas complexas em rotinas ágeis e seguras.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-blue-50/80 text-blue-900 border border-blue-200 px-3 py-1.5 rounded-lg shadow-2xs font-semibold">
              Artigos &amp; Guias Técnicos
            </span>
          </div>
        </div>

        {/* 4 Interactive Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {AI_TOPICS.map((topic) => {
            const Icon = topic.icon;
            const isCurrent = selectedTopic === topic.id;
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  isCurrent
                    ? 'bg-blue-50/80 border-blue-600 ring-1 ring-blue-600 shadow-xs'
                    : 'bg-slate-50/80 border-blue-100 text-slate-700 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-lg ${isCurrent ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{topic.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practical Guide & Direct AI Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: AI Articles */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Matérias em Destaque sobre IA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiArticles.slice(0, 4).map((art) => (
              <div
                key={art.id}
                onClick={() => onReadArticle(art)}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-xs cursor-pointer flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-2">
                    <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">{art.categoria}</span>
                    <span>{art.tempoLeituraMin} min leitura</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {art.titulo}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 font-normal leading-relaxed">
                    {art.resumo}
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 pt-2.5 border-t border-slate-100">
                  <BookOpen className="w-3.5 h-3.5" />
                  Acessar conteúdo
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Prompts & Instructions Guide */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              Guia Prático: Formulação de Instruções
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1.5">
              Diretrizes para Obter Respostas Precisas
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Técnicas objetivas para estruturar solicitações sem ambiguidades e com alto valor prático.
            </p>

            <div className="space-y-3">
              {PROMPT_PATTERNS.map((p, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5 mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    {p.role}
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {p.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Princípio editorial: clareza de requisitos sempre produz melhores resultados que comandos genéricos.
          </div>
        </div>
      </div>
    </section>
  );
};
