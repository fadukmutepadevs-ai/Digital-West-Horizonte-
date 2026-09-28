export type CategoryType = 
  | 'Inteligência Artificial'
  | 'Tecnologia'
  | 'Ferramentas'
  | 'IT'
  | 'Programação'
  | 'Segurança Digital';

export type ContentType = 'artigo' | 'tutorial' | 'ferramenta' | 'noticia' | 'guia';

export type ToolPricing = 'Gratuito' | 'Freemium' | 'Open Source' | 'Pago';

export interface Article {
  id: string;
  slug: string;
  titulo: string;
  categoria: CategoryType;
  tipo: ContentType;
  resumo: string;
  conteudoCompleto: string;
  imagem: string;
  data: string;
  dataIso: string;
  tempoLeituraMin: number;
  autor: string;
  destaque?: boolean;
  status: 'publicado' | 'agendado' | 'rascunho';
  tags: string[];
}

export interface DigitalTool {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  finalidade: string;
  link: string;
  preco: ToolPricing;
  publicoAlvo: ('estudantes' | 'programadores' | 'designers' | 'empreendedores' | 'criadores' | 'it')[];
  destaque?: boolean;
}

export interface SecurityCheckItem {
  id: string;
  titulo: string;
  descricao: string;
  categoria: 'senhas' | 'dispositivos' | 'rede' | 'privacidade';
  impacto: 'Crítico' | 'Alto' | 'Recomendado';
}
