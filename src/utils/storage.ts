import { Article } from '../types/portal';
import { INITIAL_ARTICLES } from '../data/portalData';

const STORAGE_KEY_ARTICLES = 'dwh_articles_v4';
const STORAGE_KEY_BOOKMARKS = 'dwh_bookmarks_v1';
const STORAGE_KEY_SECURITY_CHECKS = 'dwh_security_checks_v1';

export const getStoredArticles = (): Article[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ARTICLES);
    if (!raw) return INITIAL_ARTICLES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_ARTICLES;
  } catch {
    return INITIAL_ARTICLES;
  }
};

export const saveStoredArticles = (articles: Article[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(articles));
  } catch (e) {
    console.error('Falha ao salvar no armazenamento local:', e);
  }
};

export const getBookmarks = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (articleId: string): string[] => {
  const current = getBookmarks();
  const exists = current.includes(articleId);
  const updated = exists ? current.filter(id => id !== articleId) : [...current, articleId];
  try {
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
  } catch (e) {
    console.error('Falha ao atualizar favoritos:', e);
  }
  return updated;
};

export const getStoredSecurityChecks = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SECURITY_CHECKS);
    return raw ? JSON.parse(raw) : ['sec-1', 'sec-4'];
  } catch {
    return ['sec-1', 'sec-4'];
  }
};

export const saveStoredSecurityChecks = (checkedIds: string[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY_SECURITY_CHECKS, JSON.stringify(checkedIds));
  } catch (e) {
    console.error('Falha ao salvar checklist de segurança:', e);
  }
};

// Generates ready-to-use MySQL table schema & Laravel Seeder code
export const generateLaravelSqlExport = (articles: Article[]): string => {
  const sqlLines: string[] = [
    `-- Digital West Horizonte - Esquema MySQL para Produção`,
    `-- Compatível com Laravel 10 / 11 Eloquent ORM`,
    ``,
    `CREATE TABLE IF NOT EXISTS \`artigos\` (`,
    `  \`id\` VARCHAR(64) PRIMARY KEY,`,
    `  \`slug\` VARCHAR(255) NOT NULL UNIQUE,`,
    `  \`titulo\` VARCHAR(255) NOT NULL,`,
    `  \`categoria\` ENUM('Inteligência Artificial','Tecnologia','Ferramentas','IT','Programação','Segurança Digital') NOT NULL,`,
    `  \`tipo\` ENUM('artigo','tutorial','ferramenta','noticia','guia') NOT NULL DEFAULT 'artigo',`,
    `  \`resumo\` TEXT NOT NULL,`,
    `  \`conteudo_completo\` LONGTEXT NOT NULL,`,
    `  \`imagem_url\` VARCHAR(500) DEFAULT NULL,`,
    `  \`tempo_leitura_min\` INT UNSIGNED NOT NULL DEFAULT 5,`,
    `  \`autor\` VARCHAR(120) NOT NULL,`,
    `  \`destaque\` TINYINT(1) NOT NULL DEFAULT 0,`,
    `  \`status\` ENUM('publicado','agendado','rascunho') NOT NULL DEFAULT 'publicado',`,
    `  \`data_publicacao\` DATE NOT NULL,`,
    `  \`created_at\` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,`,
    `  \`updated_at\` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`,
    `  INDEX \`idx_artigos_categoria\` (\`categoria\`),`,
    `  INDEX \`idx_artigos_status_data\` (\`status\`, \`data_publicacao\`)`,
    `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
    ``,
    `-- Inserção de dados iniciais:`
  ];

  articles.forEach(art => {
    const esc = (str: string) => str.replace(/'/g, "''").replace(/\\/g, '\\\\');
    sqlLines.push(
      `INSERT INTO \`artigos\` (\`id\`, \`slug\`, \`titulo\`, \`categoria\`, \`tipo\`, \`resumo\`, \`conteudo_completo\`, \`tempo_leitura_min\`, \`autor\`, \`destaque\`, \`status\`, \`data_publicacao\`) VALUES ('${art.id}', '${art.slug}', '${esc(art.titulo)}', '${art.categoria}', '${art.tipo}', '${esc(art.resumo)}', '${esc(art.conteudoCompleto)}', ${art.tempoLeituraMin}, '${esc(art.autor)}', ${art.destaque ? 1 : 0}, '${art.status}', '${art.dataIso}') ON DUPLICATE KEY UPDATE \`titulo\`=VALUES(\`titulo\`), \`resumo\`=VALUES(\`resumo\`);`
    );
  });

  return sqlLines.join('\n');
};
