import { Article, DigitalTool, SecurityCheckItem } from '../types/portal';

// Helper generating ultra-lightweight, crisp responsive SVG illustrations in clean editorial style
export const createSvgImage = (title: string, category: string, primaryColor: string, secondaryColor: string): string => {
  let centerArt = '';

  if (category === 'Inteligência Artificial') {
    centerArt = `
      <!-- Concentric Neural Pulse Rings -->
      <circle cx="400" cy="225" r="170" fill="none" stroke="#bfdbfe" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.6"/>
      <circle cx="400" cy="225" r="120" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.8"/>
      <circle cx="400" cy="225" r="70" fill="none" stroke="#60a5fa" stroke-width="2" opacity="0.9"/>
      
      <!-- Synaptic Connection Web -->
      <g stroke="#3b82f6" stroke-width="2" opacity="0.85">
        <line x1="400" y1="225" x2="310" y2="150" />
        <line x1="400" y1="225" x2="490" y2="150" />
        <line x1="400" y1="225" x2="520" y2="240" />
        <line x1="400" y1="225" x2="470" y2="310" />
        <line x1="400" y1="225" x2="330" y2="310" />
        <line x1="400" y1="225" x2="280" y2="230" />
        <line x1="310" y1="150" x2="400" y2="110" />
        <line x1="490" y1="150" x2="400" y2="110" />
        <line x1="310" y1="150" x2="240" y2="170" />
        <line x1="490" y1="150" x2="560" y2="170" />
        <line x1="520" y1="240" x2="580" y2="280" />
        <line x1="470" y1="310" x2="490" y2="355" />
        <line x1="330" y1="310" x2="310" y2="355" />
        <line x1="280" y1="230" x2="220" y2="280" />
        <line x1="330" y1="310" x2="280" y2="230" />
        <line x1="470" y1="310" x2="520" y2="240" />
      </g>

      <!-- Neural Core -->
      <circle cx="400" cy="225" r="32" fill="#1d4ed8" />
      <circle cx="400" cy="225" r="24" fill="#2563eb" />
      <circle cx="400" cy="225" r="14" fill="#ffffff" />
      <circle cx="400" cy="225" r="7" fill="#60a5fa" />

      <!-- Synapse Nodes with Accents -->
      <circle cx="400" cy="110" r="11" fill="#2563eb" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="310" cy="150" r="13" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="490" cy="150" r="13" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="560" cy="170" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
      <circle cx="240" cy="170" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
      <circle cx="280" cy="230" r="12" fill="#2563eb" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="520" cy="240" r="12" fill="#2563eb" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="580" cy="280" r="8" fill="#60a5fa" stroke="#ffffff" stroke-width="2"/>
      <circle cx="220" cy="280" r="8" fill="#60a5fa" stroke="#ffffff" stroke-width="2"/>
      <circle cx="330" cy="310" r="12" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="470" cy="310" r="12" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="310" cy="355" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
      <circle cx="490" cy="355" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>

      <!-- Digital West Tech Tag -->
      <g transform="translate(300, 395)">
        <rect width="200" height="26" rx="6" fill="#ffffff" stroke="#bfdbfe" stroke-width="1.5" />
        <text x="100" y="17" fill="#1e40af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">NÚCLEO DE INTELIGÊNCIA ARTIFICIAL</text>
      </g>
    `;
  } else if (category === 'Programação') {
    centerArt = `
      <!-- Code IDE Terminal Card -->
      <g transform="translate(180, 75)">
        <!-- Window Outer Container -->
        <rect width="440" height="295" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="3"/>
        
        <!-- Header Bar -->
        <rect width="440" height="38" rx="14" fill="#1e293b"/>
        <rect y="24" width="440" height="14" fill="#1e293b"/>
        <circle cx="22" cy="19" r="6" fill="#ef4444"/>
        <circle cx="40" cy="19" r="6" fill="#f59e0b"/>
        <circle cx="58" cy="19" r="6" fill="#10b981"/>
        <rect x="95" y="8" width="160" height="22" rx="5" fill="#0f172a" />
        <text x="175" y="23" fill="#94a3b8" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">app/Services/Engine.php</text>

        <!-- Syntax Code Lines -->
        <g font-family="monospace" font-size="13" font-weight="500">
          <text x="25" y="70" fill="#f43f5e">namespace <tspan fill="#f8fafc">DigitalWest\\Core;</tspan></text>
          
          <text x="25" y="105" fill="#38bdf8">final class <tspan fill="#fbbf24">HighSpeedPortal</tspan> {</text>
          
          <text x="45" y="140" fill="#94a3b8">// Carregamento com latência instantânea (0ms)</text>
          <text x="45" y="170" fill="#a855f7">public function <tspan fill="#60a5fa">render</tspan><tspan fill="#f8fafc">(): Response {</tspan></text>
          
          <text x="70" y="200" fill="#38bdf8">return <tspan fill="#4ade80">Cache::remember</tspan><tspan fill="#f8fafc">('portal', 3600);</tspan></text>
          <text x="45" y="230" fill="#f8fafc">}</text>
          <text x="25" y="260" fill="#f8fafc">}</text>
        </g>

        <!-- Floating Badge -->
        <g transform="translate(300, 245)">
          <rect width="125" height="32" rx="8" fill="#2563eb" stroke="#3b82f6" stroke-width="1.5" />
          <text x="62" y="21" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">&lt;FULL-STACK&gt;</text>
        </g>
      </g>
    `;
  } else if (category === 'Segurança Digital') {
    centerArt = `
      <!-- Hexagonal Shield and Verification Matrix -->
      <circle cx="400" cy="225" r="160" fill="none" stroke="#bbf7d0" stroke-width="2" stroke-dasharray="8 8" opacity="0.7"/>
      <circle cx="400" cy="225" r="115" fill="none" stroke="#86efac" stroke-width="1.5" opacity="0.8"/>

      <!-- Large Cyber Shield -->
      <g transform="translate(305, 100)">
        <path d="M 95 0 L 190 40 L 190 145 C 190 205 95 250 95 250 C 95 250 0 205 0 145 L 0 40 Z" fill="#ffffff" stroke="#16a34a" stroke-width="4"/>
        <path d="M 95 16 L 174 48 L 174 138 C 174 190 95 230 95 230 C 95 230 16 190 16 138 L 16 48 Z" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>

        <!-- Padlock & Checkmark Core -->
        <rect x="65" y="115" width="60" height="52" rx="8" fill="#16a34a"/>
        <path d="M 75 115 L 75 95 C 75 80 115 80 115 95 L 115 115" fill="none" stroke="#16a34a" stroke-width="7" stroke-linecap="round"/>
        <circle cx="95" cy="136" r="6" fill="#ffffff"/>
        <path d="M 95 142 L 95 154" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>

        <!-- Trust Checkmark Pill -->
        <g transform="translate(30, 205)">
          <rect width="130" height="26" rx="6" fill="#15803d" />
          <text x="65" y="17" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">PROTEÇÃO 256-BIT</text>
        </g>
      </g>
    `;
  } else if (category === 'IT') {
    centerArt = `
      <!-- Server Rack and Cloud Connectivity -->
      <g transform="translate(250, 90)">
        <!-- Cloud Node at Top -->
        <path d="M 120 40 C 120 20, 150 15, 165 30 C 180 15, 210 20, 215 40 C 230 40, 240 55, 235 70 C 240 85, 220 95, 205 95 L 125 95 C 105 95, 95 85, 100 70 C 95 55, 105 40, 120 40 Z" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
        <text x="165" y="70" fill="#1d4ed8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">CLOUD DATA</text>

        <!-- Connectivity Bus -->
        <line x1="165" y1="95" x2="165" y2="135" stroke="#3b82f6" stroke-width="4" stroke-dasharray="4 4"/>

        <!-- Rack Chassis -->
        <rect x="40" y="135" width="250" height="180" rx="10" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        
        <!-- Unit 1 -->
        <rect x="52" y="150" width="226" height="42" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <circle cx="70" cy="171" r="5" fill="#22c55e"/>
        <circle cx="85" cy="171" r="5" fill="#3b82f6"/>
        <circle cx="100" cy="171" r="5" fill="#22c55e"/>
        <line x1="120" y1="171" x2="260" y2="171" stroke="#334155" stroke-width="3"/>

        <!-- Unit 2 -->
        <rect x="52" y="202" width="226" height="42" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <circle cx="70" cy="223" r="5" fill="#22c55e"/>
        <circle cx="85" cy="223" r="5" fill="#eab308"/>
        <circle cx="100" cy="223" r="5" fill="#22c55e"/>
        <line x1="120" y1="223" x2="260" y2="223" stroke="#334155" stroke-width="3"/>

        <!-- Unit 3 -->
        <rect x="52" y="254" width="226" height="42" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <circle cx="70" cy="275" r="5" fill="#22c55e"/>
        <circle cx="85" cy="275" r="5" fill="#3b82f6"/>
        <circle cx="100" cy="275" r="5" fill="#3b82f6"/>
        <line x1="120" y1="275" x2="260" y2="275" stroke="#334155" stroke-width="3"/>
      </g>
    `;
  } else if (category === 'Ferramentas') {
    centerArt = `
      <!-- Precision Tech Tools & Gears -->
      <g transform="translate(260, 95)">
        <!-- Large Primary Gear -->
        <g transform="translate(100, 100)">
          <circle cx="0" cy="0" r="65" fill="#ffffff" stroke="#2563eb" stroke-width="5"/>
          <circle cx="0" cy="0" r="45" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="0" cy="0" r="20" fill="#1d4ed8"/>
          <!-- Gear Teeth -->
          <rect x="-8" y="-76" width="16" height="22" rx="3" fill="#2563eb"/>
          <rect x="-8" y="54" width="16" height="22" rx="3" fill="#2563eb"/>
          <rect x="-76" y="-8" width="22" height="16" rx="3" fill="#2563eb"/>
          <rect x="54" y="-8" width="22" height="16" rx="3" fill="#2563eb"/>
          <rect x="-56" y="-56" width="16" height="16" rx="3" fill="#2563eb" transform="rotate(45)"/>
          <rect x="40" y="-56" width="16" height="16" rx="3" fill="#2563eb" transform="rotate(45)"/>
        </g>

        <!-- Secondary Interlocking Gear -->
        <g transform="translate(210, 160)">
          <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#0284c7" stroke-width="4"/>
          <circle cx="0" cy="0" r="26" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="12" fill="#0369a1"/>
          <rect x="-6" y="-50" width="12" height="16" rx="2" fill="#0284c7"/>
          <rect x="-6" y="34" width="12" height="16" rx="2" fill="#0284c7"/>
          <rect x="-50" y="-6" width="16" height="12" rx="2" fill="#0284c7"/>
          <rect x="34" y="-6" width="16" height="12" rx="2" fill="#0284c7"/>
        </g>

        <!-- Compass & Ruler Instrument -->
        <line x1="20" y1="210" x2="260" y2="210" stroke="#1e40af" stroke-width="3" stroke-linecap="round"/>
        <line x1="40" y1="210" x2="40" y2="200" stroke="#1e40af" stroke-width="2"/>
        <line x1="80" y1="210" x2="80" y2="195" stroke="#1e40af" stroke-width="2"/>
        <line x1="120" y1="210" x2="120" y2="200" stroke="#1e40af" stroke-width="2"/>
        <line x1="160" y1="210" x2="160" y2="195" stroke="#1e40af" stroke-width="2"/>
        <line x1="200" y1="210" x2="200" y2="200" stroke="#1e40af" stroke-width="2"/>
        <line x1="240" y1="210" x2="240" y2="195" stroke="#1e40af" stroke-width="2"/>
      </g>
    `;
  } else {
    centerArt = `
      <!-- Next-Gen Microprocessor Architecture -->
      <g transform="translate(250, 85)">
        <!-- Motherboard Trace Bus Lines -->
        <g stroke="#3b82f6" stroke-width="2.5" opacity="0.8">
          <line x1="150" y1="20" x2="150" y2="60"/>
          <line x1="90" y1="20" x2="90" y2="60"/>
          <line x1="210" y1="20" x2="210" y2="60"/>
          <line x1="150" y1="220" x2="150" y2="260"/>
          <line x1="90" y1="220" x2="90" y2="260"/>
          <line x1="210" y1="220" x2="210" y2="260"/>
          <line x1="20" y1="140" x2="60" y2="140"/>
          <line x1="20" y1="90" x2="60" y2="90"/>
          <line x1="20" y1="190" x2="60" y2="190"/>
          <line x1="240" y1="140" x2="280" y2="140"/>
          <line x1="240" y1="90" x2="280" y2="90"/>
          <line x1="240" y1="190" x2="280" y2="190"/>
        </g>

        <!-- Chip Carrier Outer Package -->
        <rect x="60" y="60" width="180" height="160" rx="14" fill="#0f172a" stroke="#1e3a8a" stroke-width="4"/>
        
        <!-- Silicon Die Core -->
        <rect x="85" y="85" width="130" height="110" rx="8" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
        <rect x="105" y="105" width="90" height="70" rx="6" fill="#2563eb"/>
        
        <text x="150" y="142" fill="#ffffff" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="1">DWH-CHIP</text>
        <text x="150" y="160" fill="#93c5fd" font-family="monospace" font-size="10" font-weight="600" text-anchor="middle">ULTRA-FAST</text>
      </g>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="bgGrad_${category.replace(/[^a-zA-Z0-9]/g, '_')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e8f3fc"/>
        <stop offset="50%" stop-color="#dcecfb"/>
        <stop offset="100%" stop-color="#cfe4f8"/>
      </linearGradient>
      <pattern id="grid_${category.replace(/[^a-zA-Z0-9]/g, '_')}" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.2" fill="#93c5fd" opacity="0.5"/>
      </pattern>
    </defs>
    
    <!-- Background Canvas -->
    <rect width="800" height="450" fill="url(#bgGrad_${category.replace(/[^a-zA-Z0-9]/g, '_')})" />
    <rect width="800" height="450" fill="url(#grid_${category.replace(/[^a-zA-Z0-9]/g, '_')})" />
    <rect width="800" height="450" fill="none" stroke="#bfdbfe" stroke-width="2" />
    
    <!-- Subtle Ambient Glow Orbs -->
    <circle cx="120" cy="80" r="140" fill="#93c5fd" opacity="0.2" filter="blur(20px)"/>
    <circle cx="680" cy="370" r="150" fill="#60a5fa" opacity="0.15" filter="blur(25px)"/>

    <!-- Centered Vector Artwork -->
    ${centerArt}
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
