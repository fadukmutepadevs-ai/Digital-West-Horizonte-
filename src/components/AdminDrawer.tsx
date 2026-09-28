import React, { useState } from 'react';
import { Article, CategoryType, ContentType } from '../types/portal';
import { generateLaravelSqlExport } from '../utils/storage';
import { createSvgImage } from '../data/portalData';
import { 
  X, Plus, Edit3, Trash2, Database, Download, Check, RefreshCw, 
  Layers 
} from 'lucide-react';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSaveArticle: (article: Article) => void;
  onDeleteArticle: (id: string) => void;
  onResetDefault: () => void;
}

const CATEGORIES: CategoryType[] = [
  'Inteligência Artificial',
  'Tecnologia',
  'Ferramentas',
  'IT',
  'Programação',
  'Segurança Digital'
];

const CONTENT_TYPES: ContentType[] = ['artigo', 'tutorial', 'ferramenta', 'noticia', 'guia'];

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  articles,
  onSaveArticle,
  onDeleteArticle,
  onResetDefault
}) => {
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [sqlCopied, setSqlCopied] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleStartCreate = () => {
    setEditingArticle({
      id: `art-${Date.now().toString().slice(-4)}`,
      slug: '',
      titulo: '',
      categoria: 'Inteligência Artificial',
      tipo: 'artigo',
      resumo: '',
      conteudoCompleto: '',
      autor: 'Redação Digital West',
      status: 'publicado',
      data: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
      dataIso: new Date().toISOString().split('T')[0],
      tempoLeituraMin: 5,
      destaque: false,
      tags: ['Tecnologia', 'Inovação']
    });
  };

  const handleStartEdit = (art: Article) => {
    setEditingArticle({ ...art });
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle || !editingArticle.titulo || !editingArticle.resumo) return;

    const slug = editingArticle.slug?.trim() || 
      editingArticle.titulo
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-');

    const image = editingArticle.imagem || createSvgImage(
      editingArticle.titulo,
      editingArticle.categoria || 'Tecnologia',
      '#1d4ed8',
      '#3b82f6'
    );

    // Clean any accidental raw asterisks entered by user
    const cleanedResumo = editingArticle.resumo.replace(/\*\*/g, '');
    const cleanedConteudo = (editingArticle.conteudoCompleto || editingArticle.resumo).replace(/\*\*/g, '');

    const completeArticle: Article = {
      id: editingArticle.id || `art-${Date.now()}`,
      slug,
      titulo: editingArticle.titulo.replace(/\*\*/g, ''),
      categoria: (editingArticle.categoria as CategoryType) || 'Tecnologia',
      tipo: (editingArticle.tipo as ContentType) || 'artigo',
      resumo: cleanedResumo,
      conteudoCompleto: cleanedConteudo,
      imagem: image,
      data: editingArticle.data || 'Hoje',
      dataIso: editingArticle.dataIso || new Date().toISOString().split('T')[0],
      tempoLeituraMin: Number(editingArticle.tempoLeituraMin) || 4,
      autor: editingArticle.autor || 'Redação Digital West',
      status: editingArticle.status || 'publicado',
      destaque: Boolean(editingArticle.destaque),
      tags: editingArticle.tags && editingArticle.tags.length > 0 ? editingArticle.tags : ['Tecnologia']
    };

    onSaveArticle(completeArticle);
    setEditingArticle(null);
    setFeedbackMsg('Artigo salvo com sucesso! Atualizado instantaneamente no portal.');
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  const handleCopySql = () => {
    const sql = generateLaravelSqlExport(articles);
    navigator.clipboard.writeText(sql);
    setSqlCopied(true);
    setTimeout(() => setSqlCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl text-slate-800">
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">
                Painel Editorial &amp; Gestão de Conteúdo
              </h2>
              <p className="text-[11px] text-slate-500">
                Gerencie matérias e exporte dados para Laravel e MySQL
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback message */}
        {feedbackMsg && (
          <div className="bg-emerald-50 border-b border-emerald-200 text-emerald-800 text-xs px-6 py-2.5 flex items-center gap-2 font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={handleStartCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Novo Artigo</span>
              </button>

              <button
                onClick={() => setShowSqlModal(true)}
                className="bg-white hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-300 font-medium"
                title="Visualizar esquema MySQL e seeder Laravel"
              >
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>Exportar SQL (Laravel/MySQL)</span>
              </button>
            </div>

            <button
              onClick={onResetDefault}
              className="text-slate-500 hover:text-rose-600 flex items-center gap-1 text-[11px] transition-colors"
              title="Restaurar artigos padrão do portal"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Restaurar Padrão</span>
            </button>
          </div>

          {/* Create or Edit Form */}
          {editingArticle ? (
            <form onSubmit={handleSaveForm} className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-blue-600" />
                  {editingArticle.id?.startsWith('art-') && articles.some(a => a.id === editingArticle.id)
                    ? 'Editar Artigo'
                    : 'Criar Novo Artigo'}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingArticle(null)}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Cancelar
                </button>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Título do Artigo *
                </label>
                <input
                  type="text"
                  required
                  value={editingArticle.titulo || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, titulo: e.target.value })}
                  placeholder="Ex: Como otimizar consultas SQL no Laravel"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Category & Content Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Categoria *
                  </label>
                  <select
                    value={editingArticle.categoria || 'Inteligência Artificial'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, categoria: e.target.value as CategoryType })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tipo de Conteúdo *
                  </label>
                  <select
                    value={editingArticle.tipo || 'artigo'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, tipo: e.target.value as ContentType })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    {CONTENT_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status & Publication Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Status de Publicação
                  </label>
                  <select
                    value={editingArticle.status || 'publicado'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value as any })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="publicado">Publicado Imediatamente</option>
                    <option value="agendado">Agendado para o futuro</option>
                    <option value="rascunho">Rascunho Editorial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Data de Publicação
                  </label>
                  <input
                    type="date"
                    value={editingArticle.dataIso || ''}
                    onChange={(e) => setEditingArticle({ 
                      ...editingArticle, 
                      dataIso: e.target.value,
                      data: e.target.value
                    })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Resumo (Apresentação curta nos cards) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={editingArticle.resumo || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, resumo: e.target.value })}
                  placeholder="Síntese editorial limpa sem asteriscos..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Full Content */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    Conteúdo Completo (Texto limpo e estruturado)
                  </label>
                  <span className="text-[10px] text-blue-700 font-mono font-medium">Imagens Vetoriais Leves</span>
                </div>

                {/* Quick Insert Illustration Helper Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-1.5 text-[11px]">
                  <span className="text-slate-500 text-[10px] font-medium">Inserir Ilustração:</span>
                  {[
                    { label: '+ IA Agentes', tag: '\n\n[ILUSTRACAO: ia-agentes]\n\n' },
                    { label: '+ IA Produtividade', tag: '\n\n[ILUSTRACAO: ia-produtividade]\n\n' },
                    { label: '+ Laravel + MySQL', tag: '\n\n[ILUSTRACAO: laravel-mysql]\n\n' },
                    { label: '+ Rede & DNS', tag: '\n\n[ILUSTRACAO: it-dns]\n\n' },
                    { label: '+ Segurança 5 Camadas', tag: '\n\n[ILUSTRACAO: seguranca-camadas]\n\n' },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      type="button"
                      onClick={() => {
                        const current = editingArticle.conteudoCompleto || '';
                        setEditingArticle({
                          ...editingArticle,
                          conteudoCompleto: current + btn.tag
                        });
                      }}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-700 text-slate-700 whitespace-nowrap text-[10px] shadow-2xs font-medium"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                <textarea
                  rows={6}
                  value={editingArticle.conteudoCompleto || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, conteudoCompleto: e.target.value })}
                  placeholder="Escreva o texto completo de forma limpa, sem asteriscos artificiais..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-sans leading-relaxed"
                />
              </div>

              {/* Author & Reading Time & Featured Checkbox */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Autor
                  </label>
                  <input
                    type="text"
                    value={editingArticle.autor || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, autor: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tempo Leitura (min)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={editingArticle.tempoLeituraMin || 5}
                    onChange={(e) => setEditingArticle({ ...editingArticle, tempoLeituraMin: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900"
                  />
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="destaqueCheck"
                    checked={Boolean(editingArticle.destaque)}
                    onChange={(e) => setEditingArticle({ ...editingArticle, destaque: e.target.checked })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-0"
                  />
                  <label htmlFor="destaqueCheck" className="text-xs text-slate-700 font-semibold select-none">
                    Destaque no Hero
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingArticle(null)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shadow-2xs"
                >
                  Salvar e Publicar
                </button>
              </div>
            </form>
          ) : null}

          {/* List of Existing Articles */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Artigos Atuais ({articles.length})
            </h3>

            <div className="space-y-2">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {art.categoria}
                      </span>
                      {art.destaque && (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          HERO
                        </span>
                      )}
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        art.status === 'publicado' ? 'text-emerald-700' : 'text-amber-700'
                      }`}>
                        ● {art.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 truncate">{art.titulo}</h4>
                    <p className="text-slate-500 text-[11px] truncate">{art.data} • por {art.autor}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleStartEdit(art)}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-white rounded-md transition-colors"
                      title="Editar artigo"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onDeleteArticle(art.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-white rounded-md transition-colors"
                      title="Excluir artigo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SQL Migration Modal */}
      {showSqlModal && (
        <div 
          className="fixed inset-0 z-60 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowSqlModal(false)}
        >
          <div 
            className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl p-6 flex flex-col max-h-[85vh] shadow-2xl text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Esquema MySQL &amp; Seeder Laravel
                </h3>
              </div>
              <button
                onClick={() => setShowSqlModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-3">
              Copie o código SQL pronto para rodar no seu MySQL de produção ou criar migrações no framework Laravel:
            </p>

            <pre className="flex-1 bg-slate-900 p-4 rounded-xl text-xs font-mono text-blue-200 overflow-y-auto border border-slate-800 leading-relaxed shadow-inner">
              <code>{generateLaravelSqlExport(articles)}</code>
            </pre>

            <div className="pt-4 mt-3 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={handleCopySql}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                {sqlCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>SQL Copiado!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Copiar Código SQL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
