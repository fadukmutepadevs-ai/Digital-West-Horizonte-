import React, { useState, useEffect } from 'react';
import { Article } from '../types/portal';
import { INITIAL_SECURITY_CHECKS } from '../data/portalData';
import { getStoredSecurityChecks, saveStoredSecurityChecks } from '../utils/storage';
import { ShieldCheck, Lock, AlertTriangle, CheckSquare, Square, ArrowRight } from 'lucide-react';

interface SecuritySectionProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ articles, onReadArticle }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const secArticles = articles.filter(a => a.categoria === 'Segurança Digital');

  useEffect(() => {
    setCheckedIds(getStoredSecurityChecks());
  }, []);

  const handleToggleCheck = (id: string) => {
    const next = checkedIds.includes(id)
      ? checkedIds.filter(item => item !== id)
      : [...checkedIds, id];
    setCheckedIds(next);
    saveStoredSecurityChecks(next);
  };

  const totalChecks = INITIAL_SECURITY_CHECKS.length;
  const scorePercent = Math.round((checkedIds.length / totalChecks) * 100);

  return (
    <section id="seguranca" aria-label="Segurança Digital" className="mb-14 scroll-mt-20">
      {/* Title */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-blue-300/80">
        <div>
          <div className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Cibersegurança &amp; Privacidade
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Segurança Digital &amp; Proteção de Dados
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-normal">
            Orientações preventivas contra fraudes eletrônicas, vazamentos de senhas e ataques virtuais
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Security Checklist */}
        <div className="lg:col-span-7 bg-white border border-blue-200/90 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                  Checklist de Higiene Cibernética
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Marque as rotinas de proteção que você já aplica no seu dia a dia
                </p>
              </div>

              {/* Score Badge */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Nível:</span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    scorePercent >= 80
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                      : scorePercent >= 40
                      ? 'bg-amber-50 text-amber-700 border border-amber-300'
                      : 'bg-rose-50 text-rose-700 border border-rose-300'
                  }`}
                >
                  {scorePercent}% Protegido
                </span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {INITIAL_SECURITY_CHECKS.map((item) => {
                const isChecked = checkedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleCheck(item.id)}
                    className={`p-3.5 rounded-lg border cursor-pointer select-none transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/40 border-emerald-200'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={isChecked ? "Item marcado" : "Marcar item"}
                      className="mt-0.5 text-blue-600 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`text-xs font-bold ${isChecked ? 'text-emerald-900 line-through' : 'text-slate-900'}`}>
                          {item.titulo}
                        </h4>
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 bg-slate-200/80 text-slate-700 rounded">
                          {item.impacto}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-normal">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Seu progresso fica salvo com segurança neste navegador.</span>
            <button
              onClick={() => {
                setCheckedIds([]);
                saveStoredSecurityChecks([]);
              }}
              className="text-slate-500 hover:text-rose-600 text-[11px] underline"
            >
              Reiniciar checklist
            </button>
          </div>
        </div>

        {/* Right Column: Alert & Articles */}
        <div className="lg:col-span-5 space-y-4">
          {/* Warning Card */}
          <div className="bg-amber-50/60 border border-amber-200/90 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Alerta de Phishing e Golpes
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5">
              Cuidado com Links Enviados por Mensagens Curtas
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Nunca digite senhas ou autorize transações clicando em links recebidos por SMS ou redes sociais. Digite sempre manualmente o endereço oficial do banco ou da plataforma diretamente na barra de navegação.
            </p>
          </div>

          {/* Security Articles */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              Artigos de Segurança Recomendados
            </h4>

            <div className="space-y-3">
              {secArticles.map(art => (
                <div
                  key={art.id}
                  onClick={() => onReadArticle(art)}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-1">
                    <span>{art.data}</span>
                    <span>{art.tempoLeituraMin} min</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {art.titulo}
                  </h5>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-1 font-normal">
                    {art.resumo}
                  </p>
                  <span className="text-[11px] text-blue-600 font-semibold flex items-center gap-1 mt-2">
                    Ler artigo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
