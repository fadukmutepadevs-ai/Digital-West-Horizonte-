import { Article, DigitalTool, SecurityCheckItem } from '../types/portal';

// Helper generating ultra-lightweight, crisp responsive SVG illustrations in clean editorial style
export const createSvgImage = (title: string, category: string, primaryColor: string, secondaryColor: string): string => {
  let categoryIcon = '';

  if (category === 'Inteligência Artificial') {
    categoryIcon = `
      <g transform="translate(560, 95)">
        <line x1="50" y1="40" x2="130" y2="20" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="50" y1="40" x2="120" y2="85" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="50" y1="120" x2="120" y2="85" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="50" y1="120" x2="130" y2="150" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="130" y1="20" x2="180" y2="65" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="120" y1="85" x2="180" y2="65" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="130" y1="150" x2="180" y2="95" stroke="#93c5fd" stroke-width="1.5"/>
        <line x1="120" y1="85" x2="180" y2="95" stroke="#93c5fd" stroke-width="1.5"/>
        <circle cx="50" cy="40" r="10" fill="#2563eb"/>
        <circle cx="50" cy="120" r="10" fill="#2563eb"/>
        <circle cx="130" cy="20" r="12" fill="#3b82f6"/>
        <circle cx="120" cy="85" r="14" fill="#1d4ed8"/>
        <circle cx="130" cy="150" r="12" fill="#3b82f6"/>
        <circle cx="180" cy="65" r="10" fill="#2563eb"/>
        <circle cx="180" cy="95" r="10" fill="#2563eb"/>
      </g>
    `;
  } else if (category === 'Programação') {
    categoryIcon = `
      <g transform="translate(560, 95)">
        <rect width="180" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect width="180" height="24" rx="8" fill="#f1f5f9"/>
        <circle cx="16" cy="12" r="4" fill="#ef4444"/>
        <circle cx="28" cy="12" r="4" fill="#f59e0b"/>
        <circle cx="40" cy="12" r="4" fill="#10b981"/>
        <text x="18" y="55" fill="#2563eb" font-family="monospace" font-size="16" font-weight="bold">&lt;/&gt;</text>
        <text x="18" y="80" fill="#475569" font-family="monospace" font-size="12">php artisan serve</text>
        <text x="18" y="105" fill="#16a34a" font-family="monospace" font-size="11">Servidor ativo</text>
      </g>
    `;
  } else if (category === 'Segurança Digital') {
    categoryIcon = `
      <g transform="translate(580, 95)">
        <path d="M 80 10 L 140 35 L 140 90 C 140 130 80 160 80 160 C 80 160 20 130 20 90 L 20 35 Z" fill="#ffffff" stroke="#16a34a" stroke-width="2.5"/>
        <rect x="62" y="75" width="36" height="30" rx="4" fill="#16a34a"/>
        <path d="M 68 75 L 68 62 C 68 52 92 52 92 62 L 92 75" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
        <circle cx="80" cy="88" r="4" fill="#ffffff"/>
      </g>
    `;
  } else if (category === 'IT') {
    categoryIcon = `
      <g transform="translate(560, 100)">
        <rect x="20" y="10" width="160" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="36" cy="27" r="4" fill="#16a34a"/>
        <line x1="50" y1="27" x2="160" y2="27" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="20" y="54" width="160" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="36" cy="71" r="4" fill="#2563eb"/>
        <line x1="50" y1="71" x2="160" y2="71" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="20" y="98" width="160" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="36" cy="115" r="4" fill="#16a34a"/>
        <line x1="50" y1="115" x2="160" y2="115" stroke="#e2e8f0" stroke-width="2"/>
      </g>
    `;
  } else if (category === 'Ferramentas') {
    categoryIcon = `
      <g transform="translate(580, 95)">
        <circle cx="80" cy="70" r="38" fill="none" stroke="#2563eb" stroke-width="7" stroke-dasharray="14 10"/>
        <circle cx="80" cy="70" r="22" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
        <rect x="74" y="24" width="12" height="92" rx="4" transform="rotate(45 80 70)" fill="#1e40af"/>
      </g>
    `;
  } else {
    categoryIcon = `
      <g transform="translate(580, 100)">
        <rect x="30" y="20" width="100" height="90" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <circle cx="80" cy="65" r="20" fill="#f0f9ff"/>
        <text x="80" y="70" fill="#0369a1" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">CHIP</text>
        <line x1="10" y1="35" x2="30" y2="35" stroke="#0284c7" stroke-width="2"/>
        <line x1="10" y1="65" x2="30" y2="65" stroke="#0284c7" stroke-width="2"/>
        <line x1="10" y1="95" x2="30" y2="95" stroke="#0284c7" stroke-width="2"/>
        <line x1="130" y1="35" x2="150" y2="35" stroke="#0284c7" stroke-width="2"/>
        <line x1="130" y1="65" x2="150" y2="65" stroke="#0284c7" stroke-width="2"/>
        <line x1="130" y1="95" x2="150" y2="95" stroke="#0284c7" stroke-width="2"/>
      </g>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="800" height="420">
    <rect width="800" height="420" fill="#f8fafc" />
    <path d="M 0 0 L 800 0 L 800 420 L 0 420 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
    <circle cx="700" cy="70" r="160" fill="#e0f2fe" opacity="0.6" />
    <circle cx="100" cy="360" r="140" fill="#eff6ff" opacity="0.8" />
    
    ${categoryIcon}

    <g transform="translate(50, 130)">
      <rect x="0" y="0" width="170" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
      <text x="12" y="19" fill="#1d4ed8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" letter-spacing="1">${category.toUpperCase()}</text>
      <text x="0" y="68" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="25" font-weight="800" width="480">${title.slice(0, 36)}...</text>
      <text x="0" y="105" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13">Digital West Horizonte • Portal de Tecnologia e Inovação</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`;
};

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-001',
    slug: 'novas-tecnologias-ia-transformando-mundo-digital',
    titulo: 'As novas tecnologias de Inteligência Artificial que estão transformando o mundo digital',
    categoria: 'Inteligência Artificial',
    tipo: 'artigo',
    resumo: 'Da automação inteligente aos modelos generativos multimodais e agentes autônomos: veja como a IA redefine produtividade, empresas e o cotidiano de quem atua com tecnologia.',
    conteudoCompleto: `A evolução da inteligência artificial avançou rapidamente de assistentes de texto elementares para ecossistemas de agentes autônomos capazes de analisar dados, conectar-se a APIs externas e orquestrar fluxos operacionais completos.

### O Que Está Mudando na Prática?

Em primeiro lugar, surgem os agentes com fluxos de execução estruturados. Em vez de simplesmente produzir uma resposta textual imediata, esses sistemas decompõem uma meta em etapas lógicas, consultam repositórios, acionam bancos de dados e validam os resultados antes de entregá-los ao usuário.

Em segundo lugar, a expansão das janelas de contexto viabilizou a análise de grandes volumes de informação. Desenvolvedores e engenheiros conseguem agora submeter códigos completos de aplicações, manuais técnicos extensos e históricos de incidentes de rede com resposta precisa em poucos segundos.

Por fim, os modelos compactos e eficientes ganharam destaque. A possibilidade de executar modelos locais em servidores próprios garante privacidade, reduz custos com nuvem e elimina o risco de exposição de dados confidenciais de clientes.

[ILUSTRACAO: ia-agentes]

### Como Funciona a Tomada de Decisão de um Agente
Conforme apresentado no diagrama ilustrativo acima, o processo inicia com a entrada do problema pelo usuário. O sistema realiza um planejamento em etapas, interage com ferramentas externas e valida os dados de saída contra critérios objetivos pré-definidos.

### Impacto no Mercado de Trabalho
Profissionais que unem fundamentos sólidos de desenvolvimento de software e infraestrutura com ferramentas modernas de automação ganham produtividade expressiva. O objetivo central é acelerar tarefas repetitivas para que desenvolvedores e analistas foquem na arquitetura, na estabilidade e na entrega de valor real.`,
    imagem: createSvgImage('Novas Tecnologias de IA', 'Inteligência Artificial', '#1d4ed8', '#3b82f6'),
    data: '28 Setembro 2026',
    dataIso: '2026-09-28',
    tempoLeituraMin: 5,
    autor: 'Equipe Digital West Horizonte',
    destaque: true,
    status: 'publicado',
    tags: ['Inteligência Artificial', 'Agentes', 'Inovação', 'Produtividade']
  },
  {
    id: 'art-002',
    slug: 'ferramentas-ia-aumentar-produtividade',
    titulo: 'Ferramentas de Inteligência Artificial que podem aumentar sua produtividade',
    categoria: 'Inteligência Artificial',
    tipo: 'artigo',
    resumo: 'Conheça ferramentas práticas e acessíveis de IA para acelerar a redação de documentos, depuração de códigos, organização de tarefas e análise rápida de dados.',
    conteudoCompleto: `Aproveitar o potencial da inteligência artificial no dia a dia não requer formação matemática avançada. O segredo está em selecionar utilitários objetivos para os pontos mais lentos da sua rotina de trabalho.

### Principais Categorias de Produtividade:

No desenvolvimento de software, os assistentes de código auxiliam na criação rápida de testes unitários, sugerem autocompletes inteligentes e explicam mensagens de erro crípticas do compilador em questão de segundos.

Na gestão de conhecimento, ferramentas de sumarização condensam relatórios técnicos longos em pontos-chave diretos e aplicáveis, poupando horas de leitura prévia.

Na automação de rotinas, conectores inteligentes integram caixas de entrada, planilhas e formulários sem a necessidade de intervenções manuais repetitivas.

[ILUSTRACAO: ia-produtividade]

### O Ciclo Ideal de Co-Criação
Conforme indicado no diagrama de trabalho acima, a eficiência máxima surge quando o profissional humano atua como planejador e auditor. A ferramenta acelera a primeira versão da tarefa, enquanto o olhar técnico garante a consistência e a qualidade final do que é entregue.

### Boas Práticas Recomendadas:
Revise sempre os códigos e textos gerados antes de enviá-los para produção. Nunca insira senhas, chaves de API ou dados privados em ferramentas públicas sem políticas explícitas de privacidade.`,
    imagem: createSvgImage('Produtividade com IA', 'Inteligência Artificial', '#2563eb', '#60a5fa'),
    data: '27 Setembro 2026',
    dataIso: '2026-09-27',
    tempoLeituraMin: 4,
    autor: 'Marcos Silva',
    destaque: false,
    status: 'publicado',
    tags: ['IA', 'Produtividade', 'Ferramentas']
  },
  {
    id: 'art-003',
    slug: 'novas-tendencias-tecnologicas-mudando-mercado',
    titulo: 'Novas tendências tecnológicas que estão mudando o mercado',
    categoria: 'Tecnologia',
    tipo: 'artigo',
    resumo: 'Computação em nuvem distribuída, WebAssembly, arquiteturas orientadas a eventos e sustentabilidade em data centers definem a próxima década digital.',
    conteudoCompleto: `O mercado de tecnologia atravessa um ciclo em que a eficiência, a velocidade de resposta e a simplicidade operacional voltaram a ser as principais prioridades das equipes de engenharia.

### Quatro Pilares Emergentes:

Primeiro, o avanço de WebAssembly nos navegadores e servidores. A capacidade de compilar linguagens de alto desempenho como Rust e Go para rodar com latência reduzida no cliente traz uma nova classe de aplicações web instantâneas.

Segundo, a descentralização através de computação na borda. Servir dados e processar requisições próximo ao usuário final reduz a carga sobre backbones globais e melhora a experiência mesmo em conexões móveis limitadas.

Terceiro, o compromisso com a eficiência energética em data centers. A otimização de consultas em bancos de dados e o uso de código compilado de baixo overhead diminuem diretamente o consumo elétrico dos servidores.

Quarto, a consolidação do modelo Zero Trust na arquitetura de sistemas. Nenhuma requisição é confiada por padrão, exigindo verificação contínua de identidade e permissões em cada camada da rede.

[ILUSTRACAO: it-dns]

### O Retorno à Simplicidade
A era de páginas lentas e sobrecarregadas de scripts dispensáveis dá lugar a interfaces limpas, semânticas e projetadas para carregar em fração de segundo.`,
    imagem: createSvgImage('Tendências Tecnológicas', 'Tecnologia', '#0284c7', '#38bdf8'),
    data: '26 Setembro 2026',
    dataIso: '2026-09-26',
    tempoLeituraMin: 6,
    autor: 'Carla Nogueira',
    destaque: false,
    status: 'publicado',
    tags: ['Tendências', 'Cloud', 'Inovação']
  },
  {
    id: 'art-004',
    slug: 'ferramentas-gratuitas-profissional-digital-conhecer',
    titulo: 'Ferramentas gratuitas que todo profissional digital deveria conhecer',
    categoria: 'Ferramentas',
    tipo: 'ferramenta',
    resumo: 'Uma seleção de utilitários open source e gratuitos para edição de código, bancos de dados, design colaborativo, testes de API e inspeção de rede.',
    conteudoCompleto: `Montar um ambiente profissional moderno não exige altos investimentos em licenças proprietárias. O ecossistema de código aberto oferece alternativas consolidadas e amplamente testadas pela indústria.

### Utilitários Indispensáveis:

Para gerenciamento de dados, o DBeaver Community se destaca como cliente universal com suporte nativo a MySQL, PostgreSQL, SQLite e MariaDB em uma interface unificada.

Para testes de integração, ferramentas como Postman e Insomnia simplificam o envio de cabeçalhos HTTP, parâmetros REST e autenticação por tokens Bearer.

Na área de segurança, o Bitwarden oferece armazenamento seguro com criptografia auditada de ponta a ponta, permitindo guardar credenciais fortes sem risco de esquecimento.

Para prototipação visual, o Penpot proporciona uma experiência moderna de design colaborativo totalmente baseada em padrões abertos da web.

[ILUSTRACAO: laravel-mysql]

### Vantagens do Ecossistema Aberto
O uso de softwares abertos previne o aprisionamento tecnológico em plataformas fechadas, assegura total controle sobre os dados e permite que estudantes e empresas utilizem exatamente as mesmas ferramentas do mercado global.`,
    imagem: createSvgImage('Ferramentas Gratuitas', 'Ferramentas', '#2563eb', '#93c5fd'),
    data: '25 Setembro 2026',
    dataIso: '2026-09-25',
    tempoLeituraMin: 5,
    autor: 'Redação Digital West',
    destaque: false,
    status: 'publicado',
    tags: ['Open Source', 'Gratuito', 'Ferramentas']
  },
  {
    id: 'art-005',
    slug: 'conceitos-it-estudante-tecnologia-precisa-conhecer',
    titulo: 'Conceitos de IT que todo estudante de tecnologia precisa conhecer',
    categoria: 'IT',
    tipo: 'artigo',
    resumo: 'DNS, TCP/IP, modelos cliente-servidor, portas de rede, HTTP status codes e permissões de arquivos explicados de forma clara e objetiva.',
    conteudoCompleto: `Compreender as fundações de redes e de sistemas operacionais é indispensável para qualquer pessoa que deseja construir e publicar aplicações web com segurança e robustez.

### Conceitos Centrais:

O Sistema de Nomes de Domínio (DNS) funciona como a lista de endereços da internet, convertendo domínios legíveis como digitalwesthorizonte.com.br no respectivo endereço IP do servidor de destino.

As portas de rede padronizadas definem a rota dos pacotes: porta 80 para tráfego web não criptografado, porta 443 para conexões HTTPS com certificado digital, porta 22 para acesso seguro via SSH e porta 3306 para bancos MySQL.

No modelo cliente-servidor, o navegador envia cabeçalhos e recebe respostas com códigos de status precisos: 200 para sucesso, 301 para redirecionamentos permanentes, 404 para recursos não encontrados e 500 para falhas internas de execução.

Nas permissões de arquivos em ambientes Linux, entender comandos fundamentais como chmod e chown garante que a aplicação acesse diretórios necessários sem abrir brechas de escrita indevida.

[ILUSTRACAO: it-dns]

### O Ciclo Completo da Conexão
Conforme demonstrado no diagrama acima, cada requisição percorre um caminho lógico e transparente desde a consulta inicial de DNS até a entrega da página pelo servidor web Nginx em milissegundos.`,
    imagem: createSvgImage('Fundamentos de IT', 'IT', '#4338ca', '#818cf8'),
    data: '24 Setembro 2026',
    dataIso: '2026-09-24',
    tempoLeituraMin: 7,
    autor: 'Prof. Lucas Mendes',
    destaque: false,
    status: 'publicado',
    tags: ['IT', 'Redes', 'Iniciantes', 'Infraestrutura']
  },
  {
    id: 'art-006',
    slug: 'php-laravel-mysql-roteiro-completo',
    titulo: 'Do HTML e CSS a PHP, Laravel e MySQL: Roteiro completo de Full Stack',
    categoria: 'Programação',
    tipo: 'tutorial',
    resumo: 'Como estruturar uma aplicação web moderna conectando frontend semântico a APIs REST construídas com Laravel e persistência em banco MySQL relacional.',
    conteudoCompleto: `A combinação do ecossistema PHP moderno com o framework Laravel e o banco relacional MySQL continua sendo uma das opções mais produtivas, confiáveis e rápidas de colocar em produção no mercado global.

### Passo a Passo da Arquitetura:

Na primeira camada, a interface do usuário é construída com HTML5 semântico e estilos otimizados, garantindo que o primeiro conteúdo visual carregue sem atraso.

Na camada de serviços, o Laravel expõe rotas de API limpas e protegidas por validação de requisições:
\`\`\`php
Route::get('/api/conteudos', [ConteudoController::class, 'index']);
Route::post('/api/conteudos', [ConteudoController::class, 'store']);
\`\`\`

Na camada de armazenamento, o MySQL armazena as tabelas relacionais com índices definidos nas colunas de busca frequente, enquanto o Eloquent ORM previne vulnerabilidades de SQL Injection por meio de declarações preparadas.

Para garantir baixa latência sob tráfego elevado, cabeçalhos de controle de cache e instâncias em memória reduzem as viagens ao disco para menos de 10 milissegundos por consulta.

[ILUSTRACAO: laravel-mysql]

### Garantindo Desempenho Contínuo
Como ilustrado no diagrama arquitetural acima, cada componente possui limites e responsabilidades claras. Essa modularidade permite que a interface seja atualizada independentemente da API, mantendo o sistema simples e manutenível a longo prazo.`,
    imagem: createSvgImage('Laravel + MySQL Full Stack', 'Programação', '#dc2626', '#f87171'),
    data: '23 Setembro 2026',
    dataIso: '2026-09-23',
    tempoLeituraMin: 8,
    autor: 'André Vasconcelos',
    destaque: false,
    status: 'publicado',
    tags: ['PHP', 'Laravel', 'MySQL', 'Web Development']
  },
  {
    id: 'art-007',
    slug: 'seguranca-digital-senhas-phishing-2fa',
    titulo: 'Segurança Digital: Como blindar suas contas contra Phishing e Vazamentos',
    categoria: 'Segurança Digital',
    tipo: 'guia',
    resumo: 'Aprenda os métodos reais de proteção: gerenciadores de senhas, chaves de acesso Passkeys, 2FA seguro e identificação de engenharia social.',
    conteudoCompleto: `A maior parte dos incidentes de invasão e comprometimento de contas tem origem em senhas reutilizadas ou em mensagens fraudulentas que induzem o usuário ao clique acidental.

### As Cinco Linhas de Defesa:

A primeira medida é a autenticação em duas etapas por aplicativo. Prefira sempre geradores de códigos locais ou chaves de segurança físicas em vez de códigos enviados por SMS, que são vulneráveis a clonagem de chip.

A segunda é o fim da repetição de senhas. Cada serviço utilizado, especialmente e-mails principais, plataformas de hospedagem e ferramentas financeiras, deve ter sua própria credencial longa e aleatória guardada em um cofre encriptado.

A terceira é a checagem rigorosa de domínios. Antes de digitar dados em qualquer página de autenticação, confira atentamente o nome do domínio na barra de endereços para não cair em páginas clonadas de phishing.

A quarta é a navegação responsável em redes abertas. Evite inserir dados confidenciais ou realizar transações bancárias quando conectado a redes Wi-Fi públicas sem o auxílio de um canal criptografado ou DNS seguro.

A quinta é a manutenção preventiva de dispositivos. Manter navegadores e sistemas operacionais atualizados corrige vulnerabilidades conhecidas antes que possam ser exploradas.

[ILUSTRACAO: seguranca-camadas]

### Proteção em Múltiplas Camadas
Como demonstrado no diagrama acima, a segurança eficaz funciona em profundidade. Mesmo na hipótese de uma credencial ser vazada em um serviço secundário, a barreira do segundo fator de autenticação bloqueia o acesso não autorizado.`,
    imagem: createSvgImage('Segurança Digital Prática', 'Segurança Digital', '#16a34a', '#86efac'),
    data: '22 Setembro 2026',
    dataIso: '2026-09-22',
    tempoLeituraMin: 5,
    autor: 'Fernanda Rocha',
    destaque: false,
    status: 'publicado',
    tags: ['Cibersegurança', '2FA', 'Privacidade', 'Senhas']
  }
];

export const INITIAL_TOOLS: DigitalTool[] = [
  {
    id: 'tool-01',
    nome: 'VS Code & VSCodium',
    categoria: 'Desenvolvimento',
    descricao: 'Editor de código leve, extensível e com suporte nativo a dezenas de linguagens e depuração.',
    finalidade: 'Programação ágil, edição de scripts, automações e projetos web.',
    link: 'https://code.visualstudio.com',
    preco: 'Open Source',
    publicoAlvo: ['programadores', 'estudantes', 'it'],
    destaque: true
  },
  {
    id: 'tool-02',
    nome: 'Postman & Insomnia',
    categoria: 'APIs & Backend',
    descricao: 'Clientes HTTP para desenhar, testar, documentar e depurar requisições de APIs REST e GraphQL.',
    finalidade: 'Desenvolvimento e validação de rotas de integração entre frontend e backend.',
    link: 'https://www.postman.com',
    preco: 'Freemium',
    publicoAlvo: ['programadores', 'it'],
    destaque: true
  },
  {
    id: 'tool-03',
    nome: 'DBeaver Community',
    categoria: 'Bancos de Dados',
    descricao: 'Gerenciador universal de banco de dados SQL com suporte a MySQL, PostgreSQL, SQLite e Oracle.',
    finalidade: 'Consulta, criação de tabelas, exportação de esquemas e administração de dados.',
    link: 'https://dbeaver.io',
    preco: 'Gratuito',
    publicoAlvo: ['programadores', 'it', 'estudantes'],
    destaque: true
  },
  {
    id: 'tool-04',
    nome: 'Bitwarden',
    categoria: 'Segurança & Privacidade',
    descricao: 'Cofre de senhas com criptografia de ponta a ponta (AES-256) auditado e multiplataforma.',
    finalidade: 'Armazenar senhas seguras, notas confidenciais e chaves de acesso.',
    link: 'https://bitwarden.com',
    preco: 'Open Source',
    publicoAlvo: ['estudantes', 'empreendedores', 'it', 'programadores']
  },
  {
    id: 'tool-05',
    nome: 'Canva & Penpot',
    categoria: 'Design & Interfaces',
    descricao: 'Criação de protótipos de interfaces, criativos para redes sociais e apresentações visuais.',
    finalidade: 'Design rápido e colaborativo para materiais digitais e protótipos UI/UX.',
    link: 'https://penpot.app',
    preco: 'Freemium',
    publicoAlvo: ['designers', 'criadores', 'empreendedores']
  },
  {
    id: 'tool-06',
    nome: 'Obsidian',
    categoria: 'Produtividade & Notas',
    descricao: 'Base de conhecimento pessoal em arquivos Markdown locais com conexões em grafo.',
    finalidade: 'Organizar anotações de estudos, documentação técnica e planos de projetos.',
    link: 'https://obsidian.md',
    preco: 'Gratuito',
    publicoAlvo: ['estudantes', 'programadores', 'empreendedores']
  },
  {
    id: 'tool-07',
    nome: 'Docker Desktop / OrbStack',
    categoria: 'Infraestrutura & DevOps',
    descricao: 'Containerização de ambientes para rodar MySQL, PHP, Nginx e Node.js de forma isolada.',
    finalidade: 'Padronizar ambientes locais para evitar o clássico "na minha máquina funciona".',
    link: 'https://www.docker.com',
    preco: 'Freemium',
    publicoAlvo: ['programadores', 'it']
  },
  {
    id: 'tool-08',
    nome: 'Cloudflare WARP & 1.1.1.1',
    categoria: 'Redes & Segurança',
    descricao: 'DNS seguro e criptografado que melhora a velocidade de resolução e protege o tráfego móvel.',
    finalidade: 'Navegação mais rápida e proteção contra espionagem em redes Wi-Fi públicas.',
    link: 'https://one.one.one.one',
    preco: 'Gratuito',
    publicoAlvo: ['estudantes', 'empreendedores', 'it']
  }
];

export const INITIAL_SECURITY_CHECKS: SecurityCheckItem[] = [
  {
    id: 'sec-1',
    titulo: 'Ativar Autenticação em Duas Etapas (2FA)',
    descricao: 'Habilite 2FA no seu e-mail principal, GitHub, redes sociais e contas financeiras por meio de aplicativo autenticador como Bitwarden ou Google Authenticator.',
    categoria: 'senhas',
    impacto: 'Crítico'
  },
  {
    id: 'sec-2',
    titulo: 'Não Reutilizar a Mesma Senha em Múltiplos Serviços',
    descricao: 'Se um site sofrer vazamento, invasores testam suas credenciais de forma automatizada em dezenas de outros serviços da internet.',
    categoria: 'senhas',
    impacto: 'Crítico'
  },
  {
    id: 'sec-3',
    titulo: 'Evitar Digitar Credenciais em Redes Wi-Fi Abertas Sem Proteção',
    descricao: 'Conexões públicas desprotegidas em cafés ou aeroportos podem ter o tráfego interceptado por técnicas de interceptação de rede.',
    categoria: 'rede',
    impacto: 'Alto'
  },
  {
    id: 'sec-4',
    titulo: 'Configurar Bloqueio Automático de Tela nos Dispositivos',
    descricao: 'Ative o bloqueio automático em celulares e computadores após poucos minutos de inatividade para evitar acessos físicos indevidos.',
    categoria: 'dispositivos',
    impacto: 'Alto'
  },
  {
    id: 'sec-5',
    titulo: 'Verificar o Remetente e o Endereço Real em Mensagens Suspeitas',
    descricao: 'E-mails e avisos de cobrança urgente com links duvidosos são o principal canal utilizado em ataques de engenharia social.',
    categoria: 'privacidade',
    impacto: 'Crítico'
  }
];
