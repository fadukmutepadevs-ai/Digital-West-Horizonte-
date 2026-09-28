/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Article } from './types/portal';
import { INITIAL_ARTICLES } from './data/portalData';
import { 
  getStoredArticles, 
  saveStoredArticles, 
  getBookmarks, 
  toggleBookmark 
} from './utils/storage';

import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { SearchBar } from './components/SearchBar';
import { RecentArticles } from './components/RecentArticles';
import { AISection } from './components/AISection';
import { ToolsDirectory } from './components/ToolsDirectory';
import { ITDevSection } from './components/ITDevSection';
import { SecuritySection } from './components/SecuritySection';
import { ArticleModal } from './components/ArticleModal';
import { AdminDrawer } from './components/AdminDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [viewBookmarksOnly, setViewBookmarksOnly] = useState(false);

  // Initialize data on mount
  useEffect(() => {
    const loaded = getStoredArticles();
    setArticles(loaded);
    setBookmarks(getBookmarks());

    // Deep linking via URL hash: e.g. #novas-tecnologias-ia-transformando-mundo-digital
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== 'topo' && hash !== 'ia' && hash !== 'ferramentas' && hash !== 'it' && hash !== 'seguranca') {
      const match = loaded.find(a => a.slug === hash || a.id === hash);
      if (match) {
        setActiveArticle(match);
      }
    }
  }, []);

  // Filtered articles based on search, category and type
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      // Bookmark filter
      if (viewBookmarksOnly && !bookmarks.includes(art.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'Todos' && art.categoria !== selectedCategory) {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && art.tipo !== selectedType) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = art.titulo.toLowerCase().includes(q);
        const inSummary = art.resumo.toLowerCase().includes(q);
        const inCategory = art.categoria.toLowerCase().includes(q);
        const inTags = art.tags.some(t => t.toLowerCase().includes(q));
        const inAuthor = art.autor.toLowerCase().includes(q);
        return inTitle || inSummary || inCategory || inTags || inAuthor;
      }

      return true;
    });
  }, [articles, selectedCategory, selectedType, searchQuery, viewBookmarksOnly, bookmarks]);

  // Determine hero article: highest priority featured article
  const heroArticle = useMemo(() => {
    if (viewBookmarksOnly || searchQuery.trim() || selectedCategory !== 'Todos' || selectedType !== 'all') {
      return null;
    }
    return articles.find(a => a.destaque) || articles[0] || null;
  }, [articles, viewBookmarksOnly, searchQuery, selectedCategory, selectedType]);

  // Feed articles: filtered articles excluding the hero article (when displayed)
  const feedArticles = useMemo(() => {
    if (heroArticle) {
      return filteredArticles.filter(a => a.id !== heroArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, heroArticle]);

  // Related articles for the modal reader
  const relatedArticles = useMemo(() => {
    if (!activeArticle) return [];
    return articles
      .filter(a => a.id !== activeArticle.id && a.categoria === activeArticle.categoria)
      .slice(0, 2);
  }, [articles, activeArticle]);

  // Bookmark toggle handler
  const handleToggleBookmark = (id: string) => {
    const updated = toggleBookmark(id);
    setBookmarks(updated);
  };

  // Admin handlers
  const handleSaveArticle = (updatedArticle: Article) => {
    const exists = articles.some(a => a.id === updatedArticle.id);
    let next: Article[];
    if (exists) {
      next = articles.map(a => a.id === updatedArticle.id ? updatedArticle : a);
    } else {
      next = [updatedArticle, ...articles];
    }
    setArticles(next);
    saveStoredArticles(next);
  };

  const handleDeleteArticle = (id: string) => {
    const next = articles.filter(a => a.id !== id);
    setArticles(next);
    saveStoredArticles(next);
    if (activeArticle?.id === id) {
      setActiveArticle(null);
    }
  };

  const handleResetDefault = () => {
    if (window.confirm('Deseja restaurar a base de artigos original do portal Digital West Horizonte?')) {
      setArticles(INITIAL_ARTICLES);
      saveStoredArticles(INITIAL_ARTICLES);
    }
  };

  const scrollToSearch = () => {
    const el = document.getElementById('pesquisa-secao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Header */}
      <Header
        onSearchClick={scrollToSearch}
        onOpenAdmin={() => setAdminOpen(true)}
        bookmarksCount={bookmarks.length}
        onViewBookmarks={() => setViewBookmarksOnly(!viewBookmarksOnly)}
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setViewBookmarksOnly(false);
        }}
      />

      {/* Main Content Area */}
      <main id="topo" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Bookmarks Filter Alert Banner if active */}
        {viewBookmarksOnly && (
          <div className="mb-6 bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center justify-between text-xs shadow-2xs">
            <span className="text-blue-900 font-medium">
              Mostrando apenas <strong>{filteredArticles.length}</strong> artigos salvos nos seus favoritos.
            </span>
            <button
              onClick={() => setViewBookmarksOnly(false)}
              className="text-blue-700 hover:text-blue-900 underline font-bold"
            >
              Ver todos os conteúdos
            </button>
          </div>
        )}

        {/* Hero Featured Article (displayed only on primary home view) */}
        {heroArticle && (
          <HeroFeatured
            article={heroArticle}
            onReadMore={(art) => setActiveArticle(art)}
            isBookmarked={bookmarks.includes(heroArticle.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* Instant Search & Category Filter Bar */}
        <SearchBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={(cat) => {
            setSelectedCategory(cat);
            setViewBookmarksOnly(false);
          }}
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
          resultsCount={filteredArticles.length}
        />

        {/* Últimos Conteúdos (Recent Articles Grid) */}
        <RecentArticles
          articles={feedArticles}
          onReadArticle={(art) => setActiveArticle(art)}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Seção Específica: Inteligência Artificial */}
        <AISection
          articles={articles}
          onReadArticle={(art) => setActiveArticle(art)}
        />

        {/* Seção Específica: Ferramentas Digitais */}
        <ToolsDirectory />

        {/* Seção Específica: IT & Desenvolvimento (PHP, Laravel, MySQL, Redes, Cloud) */}
        <ITDevSection
          articles={articles}
          onReadArticle={(art) => setActiveArticle(art)}
        />

        {/* Seção Específica: Segurança Digital & Checklist */}
        <SecuritySection
          articles={articles}
          onReadArticle={(art) => setActiveArticle(art)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setViewBookmarksOnly(false);
        }}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Full Article Instant Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        isBookmarked={activeArticle ? bookmarks.includes(activeArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
        relatedArticles={relatedArticles}
        onSelectRelated={(art) => setActiveArticle(art)}
      />

      {/* Admin Drawer (Content Management & MySQL/Laravel Schema Export) */}
      <AdminDrawer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        articles={articles}
        onSaveArticle={handleSaveArticle}
        onDeleteArticle={handleDeleteArticle}
        onResetDefault={handleResetDefault}
      />
    </div>
  );
}
