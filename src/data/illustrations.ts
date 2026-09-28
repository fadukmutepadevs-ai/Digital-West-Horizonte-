// Ultra-lightweight, zero-network SVG diagram illustrations for articles
// Vector graphics with clean, elegant editorial styling (~800 bytes - 1.5 KB each)

export interface ArticleIllustration {
  id: string;
  caption: string;
  svgDataUri: string;
}

const encodeSvg = (svgString: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    svgString.replace(/\s+/g, ' ').trim()
  )}`;
};

// 1. Diagram: AI Agent Workflow (Clean light editorial theme)
export const diagramAiAgentWorkflow = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="760" height="210">
  <rect width="760" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  
  <text x="24" y="28" fill="#1e40af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" letter-spacing="1">ARQUITETURA DE EXECUÇÃO: FLUXO DE AGENTES AUTÔNOMOS</text>
  
  <!-- Step 1: User Request -->
  <g transform="translate(24, 48)">
    <rect width="150" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <circle cx="28" cy="30" r="12" fill="#2563eb" />
    <text x="28" y="34" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">1</text>
    <text x="48" y="34" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Meta Inicial</text>
    <text x="14" y="66" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Instrução clara</text>
    <text x="14" y="84" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">e contexto fornecido</text>
    <text x="14" y="104" fill="#2563eb" font-family="monospace" font-size="10">Entrada do Usuário</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 182 108 L 206 108" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
  <polygon points="206,104 214,108 206,112" fill="#2563eb" />

  <!-- Step 2: Planning -->
  <g transform="translate(220, 48)">
    <rect width="150" height="120" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5" />
    <circle cx="28" cy="30" r="12" fill="#1d4ed8" />
    <text x="28" y="34" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">2</text>
    <text x="48" y="34" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Planejamento</text>
    <text x="14" y="66" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Decomposição em</text>
    <text x="14" y="84" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">etapas executáveis</text>
    <text x="14" y="104" fill="#1d4ed8" font-family="monospace" font-size="10">Raciocínio Lógico</text>
  </g>

  <!-- Arrow 2 -->
  <path d="M 378 108 L 402 108" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
  <polygon points="402,104 410,108 402,112" fill="#2563eb" />

  <!-- Step 3: Tool Execution -->
  <g transform="translate(416, 48)">
    <rect width="150" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <circle cx="28" cy="30" r="12" fill="#2563eb" />
    <text x="28" y="34" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">3</text>
    <text x="48" y="34" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Ferramentas</text>
    <text x="14" y="66" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Chamadas de APIs,</text>
    <text x="14" y="84" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">banco de dados e web</text>
    <text x="14" y="104" fill="#2563eb" font-family="monospace" font-size="10">Uso de APIs</text>
  </g>

  <!-- Arrow 3 -->
  <path d="M 574 108 L 598 108" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
  <polygon points="598,104 606,108 598,112" fill="#2563eb" />

  <!-- Step 4: Final Output -->
  <g transform="translate(612, 48)">
    <rect width="124" height="120" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
    <circle cx="24" cy="30" r="12" fill="#16a34a" />
    <text x="24" y="34" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">4</text>
    <text x="44" y="34" fill="#065f46" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Entrega</text>
    <text x="12" y="66" fill="#15803d" font-family="-apple-system, sans-serif" font-size="11">Validação e</text>
    <text x="12" y="84" fill="#15803d" font-family="-apple-system, sans-serif" font-size="11">resultado final</text>
    <text x="12" y="104" fill="#166534" font-family="monospace" font-size="10">Concluído</text>
  </g>

  <text x="24" y="195" fill="#64748b" font-family="-apple-system, sans-serif" font-size="10">Digital West Horizonte • Guia Técnico de Inteligência Artificial</text>
</svg>
`);

// 2. Diagram: Full Stack Laravel + MySQL
export const diagramLaravelMysql = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="760" height="210">
  <rect width="760" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  
  <text x="24" y="28" fill="#1e40af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" letter-spacing="1">ARQUITETURA COMPLETA: FRONTEND SEMÂNTICO, API LARAVEL E BANCO MYSQL</text>
  
  <!-- Frontend Block -->
  <g transform="translate(24, 48)">
    <rect width="160" height="120" rx="6" fill="#f8fafc" stroke="#93c5fd" stroke-width="1" />
    <text x="16" y="28" fill="#1d4ed8" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold">1. CAMADA FRONTEND</text>
    <text x="16" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">HTML5 e JavaScript</text>
    <text x="16" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Carregamento imediato</text>
    <text x="16" y="92" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Cache local inteligente</text>
    <text x="16" y="110" fill="#2563eb" font-family="monospace" font-size="10">Requisições assíncronas</text>
  </g>

  <!-- Arrow 1 -->
  <g transform="translate(192, 95)">
    <text x="14" y="-8" fill="#64748b" font-family="monospace" font-size="10" text-anchor="middle">JSON REST</text>
    <path d="M 0 10 L 28 10" stroke="#2563eb" stroke-width="2" />
    <polygon points="26,6 34,10 26,14" fill="#2563eb" />
    <polygon points="8,6 0,10 8,14" fill="#2563eb" />
  </g>

  <!-- Laravel Backend Block -->
  <g transform="translate(236, 48)">
    <rect width="180" height="120" rx="6" fill="#f8fafc" stroke="#fca5a5" stroke-width="1" />
    <text x="16" y="28" fill="#dc2626" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold">2. CAMADA BACKEND</text>
    <text x="16" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">PHP 8.3 e Laravel 11</text>
    <text x="16" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Validação de rotas</text>
    <text x="16" y="92" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Mapeamento com Eloquent</text>
    <text x="16" y="110" fill="#dc2626" font-family="monospace" font-size="10">Segurança CSRF e Auth</text>
  </g>

  <!-- Arrow 2 -->
  <g transform="translate(424, 95)">
    <text x="14" y="-8" fill="#64748b" font-family="monospace" font-size="10" text-anchor="middle">SQL Seguro</text>
    <path d="M 0 10 L 28 10" stroke="#2563eb" stroke-width="2" />
    <polygon points="26,6 34,10 26,14" fill="#2563eb" />
    <polygon points="8,6 0,10 8,14" fill="#2563eb" />
  </g>

  <!-- MySQL Database Block -->
  <g transform="translate(468, 48)">
    <rect width="170" height="120" rx="6" fill="#f8fafc" stroke="#67e8f9" stroke-width="1" />
    <text x="16" y="28" fill="#0891b2" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold">3. BANCO DE DADOS</text>
    <text x="16" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">MySQL Relacional</text>
    <text x="16" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Índices em colunas-chave</text>
    <text x="16" y="92" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Integridade referencial</text>
    <text x="16" y="110" fill="#0891b2" font-family="monospace" font-size="10">Consultas otimizadas</text>
  </g>

  <!-- Latency badge -->
  <g transform="translate(650, 75)">
    <rect width="86" height="66" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
    <text x="43" y="26" fill="#1e40af" font-family="-apple-system, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">TEMPO</text>
    <text x="43" y="46" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" text-anchor="middle">&lt; 15 ms</text>
  </g>

  <text x="24" y="195" fill="#64748b" font-family="-apple-system, sans-serif" font-size="10">Digital West Horizonte • Engenharia de Software Moderna</text>
</svg>
`);

// 3. Diagram: IT & Network
export const diagramItDnsNetwork = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="760" height="210">
  <rect width="760" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  
  <text x="24" y="28" fill="#4338ca" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" letter-spacing="1">COMUNICAÇÃO DE REDES: CLIENTE, DNS, SERVIDOR WEB E APLICAÇÃO</text>
  
  <!-- Step 1: Client -->
  <g transform="translate(24, 48)">
    <rect width="140" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <text x="14" y="28" fill="#4338ca" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold">DISPOSITIVO</text>
    <text x="14" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Navegador Web</text>
    <text x="14" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Solicita o endereço</text>
    <text x="14" y="92" fill="#2563eb" font-family="monospace" font-size="10">Porta 443 HTTPS</text>
    <text x="14" y="110" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Conexão segura</text>
  </g>

  <path d="M 172 108 L 202 108" stroke="#4338ca" stroke-width="2" />
  <polygon points="202,104 210,108 202,112" fill="#4338ca" />

  <!-- Step 2: DNS -->
  <g transform="translate(218, 48)">
    <rect width="146" height="120" rx="6" fill="#f8fafc" stroke="#c7d2fe" stroke-width="1" />
    <text x="14" y="28" fill="#4338ca" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold">RESOLUÇÃO</text>
    <text x="14" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Servidor DNS</text>
    <text x="14" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Traduz nome para IP</text>
    <text x="14" y="92" fill="#2563eb" font-family="monospace" font-size="10">Endereço numérico</text>
    <text x="14" y="110" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Resposta imediata</text>
  </g>

  <path d="M 372 108 L 402 108" stroke="#4338ca" stroke-width="2" />
  <polygon points="402,104 410,108 402,112" fill="#4338ca" />

  <!-- Step 3: Nginx Gateway -->
  <g transform="translate(418, 48)">
    <rect width="146" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <text x="14" y="28" fill="#4338ca" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold">SERVIDOR WEB</text>
    <text x="14" y="50" fill="#0f172a" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Nginx Gateway</text>
    <text x="14" y="74" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Validação de TLS</text>
    <text x="14" y="92" fill="#475569" font-family="-apple-system, sans-serif" font-size="11">Compressão gzip</text>
    <text x="14" y="110" fill="#16a34a" font-family="monospace" font-size="10">Código HTTP 200</text>
  </g>

  <path d="M 572 108 L 602 108" stroke="#4338ca" stroke-width="2" />
  <polygon points="602,104 610,108 602,112" fill="#4338ca" />

  <!-- Step 4: Rendered App -->
  <g transform="translate(618, 48)">
    <rect width="118" height="120" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
    <text x="12" y="28" fill="#16a34a" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold">EXIBIÇÃO</text>
    <text x="12" y="50" fill="#065f46" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold">Conteúdo</text>
    <text x="12" y="74" fill="#15803d" font-family="-apple-system, sans-serif" font-size="11">Renderização</text>
    <text x="12" y="92" fill="#15803d" font-family="-apple-system, sans-serif" font-size="11">limpa da página</text>
    <text x="12" y="110" fill="#166534" font-family="monospace" font-size="10">Sucesso</text>
  </g>

  <text x="24" y="195" fill="#64748b" font-family="-apple-system, sans-serif" font-size="10">Digital West Horizonte • Fundamentos de Redes e Infraestrutura</text>
</svg>
`);

// 4. Diagram: Security Layers
export const diagramSecurityDefense = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="760" height="210">
  <rect width="760" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  
  <text x="24" y="28" fill="#15803d" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" letter-spacing="1">CINCO CAMADAS DE DEFESA: BLINDAGEM DE CONTAS E DISPOSITIVOS</text>
  
  <g transform="translate(24, 48)">
    <rect width="130" height="120" rx="6" fill="#f8fafc" stroke="#bbf7d0" stroke-width="1" />
    <circle cx="24" cy="24" r="10" fill="#16a34a" />
    <text x="24" y="28" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">1</text>
    <text x="40" y="28" fill="#166534" font-family="sans-serif" font-size="12" font-weight="bold">Dois Fatores</text>
    <text x="12" y="60" fill="#0f172a" font-family="sans-serif" font-size="11">Aplicativo 2FA</text>
    <text x="12" y="80" fill="#475569" font-family="sans-serif" font-size="10">Chaves de acesso</text>
    <text x="12" y="100" fill="#16a34a" font-family="sans-serif" font-size="10">Protege login</text>
  </g>

  <g transform="translate(170, 48)">
    <rect width="130" height="120" rx="6" fill="#f8fafc" stroke="#bbf7d0" stroke-width="1" />
    <circle cx="24" cy="24" r="10" fill="#16a34a" />
    <text x="24" y="28" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">2</text>
    <text x="40" y="28" fill="#166534" font-family="sans-serif" font-size="12" font-weight="bold">Senhas Únicas</text>
    <text x="12" y="60" fill="#0f172a" font-family="sans-serif" font-size="11">Gerenciador</text>
    <text x="12" y="80" fill="#475569" font-family="sans-serif" font-size="10">Cofre encriptado</text>
    <text x="12" y="100" fill="#16a34a" font-family="sans-serif" font-size="10">Zero repetição</text>
  </g>

  <g transform="translate(316, 48)">
    <rect width="130" height="120" rx="6" fill="#f8fafc" stroke="#bbf7d0" stroke-width="1" />
    <circle cx="24" cy="24" r="10" fill="#16a34a" />
    <text x="24" y="28" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">3</text>
    <text x="40" y="28" fill="#166534" font-family="sans-serif" font-size="12" font-weight="bold">Anti-Phishing</text>
    <text x="12" y="60" fill="#0f172a" font-family="sans-serif" font-size="11">Atenção a links</text>
    <text x="12" y="80" fill="#475569" font-family="sans-serif" font-size="10">Checagem de URL</text>
    <text x="12" y="100" fill="#16a34a" font-family="sans-serif" font-size="10">Evita fraudes</text>
  </g>

  <g transform="translate(462, 48)">
    <rect width="130" height="120" rx="6" fill="#f8fafc" stroke="#bbf7d0" stroke-width="1" />
    <circle cx="24" cy="24" r="10" fill="#16a34a" />
    <text x="24" y="28" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">4</text>
    <text x="40" y="28" fill="#166534" font-family="sans-serif" font-size="12" font-weight="bold">Rede Segura</text>
    <text x="12" y="60" fill="#0f172a" font-family="sans-serif" font-size="11">DNS criptografado</text>
    <text x="12" y="80" fill="#475569" font-family="sans-serif" font-size="10">Cuidado em Wi-Fi</text>
    <text x="12" y="100" fill="#16a34a" font-family="sans-serif" font-size="10">Tráfego privado</text>
  </g>

  <g transform="translate(608, 48)">
    <rect width="128" height="120" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
    <circle cx="24" cy="24" r="10" fill="#16a34a" />
    <text x="24" y="28" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">5</text>
    <text x="40" y="28" fill="#166534" font-family="sans-serif" font-size="12" font-weight="bold">Atualizações</text>
    <text x="12" y="60" fill="#0f172a" font-family="sans-serif" font-size="11">Sistemas em dia</text>
    <text x="12" y="80" fill="#475569" font-family="sans-serif" font-size="10">Cópias de backup</text>
    <text x="12" y="100" fill="#16a34a" font-family="sans-serif" font-size="10">Blindagem total</text>
  </g>

  <text x="24" y="195" fill="#64748b" font-family="-apple-system, sans-serif" font-size="10">Digital West Horizonte • Guia Prático de Segurança Cibernética</text>
</svg>
`);

// 5. Diagram: AI Productivity Cycle
export const diagramAiProductivity = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 210" width="760" height="210">
  <rect width="760" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="24" y="28" fill="#1d4ed8" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="1">PROCESSO DE TRABALHO: PLANEJAMENTO HUMANO E ACELERAÇÃO DIGITAL</text>
  
  <g transform="translate(40, 55)">
    <rect width="180" height="100" rx="6" fill="#f8fafc" stroke="#bfdbfe" stroke-width="1" />
    <text x="16" y="28" fill="#1d4ed8" font-family="sans-serif" font-size="12" font-weight="bold">FASE 1: ESCOPO</text>
    <text x="16" y="52" fill="#0f172a" font-family="sans-serif" font-size="13" font-weight="bold">Definição do Projeto</text>
    <text x="16" y="74" fill="#475569" font-family="sans-serif" font-size="11">Objetivos claros pelo profissional</text>
  </g>

  <path d="M 230 105 L 280 105" stroke="#2563eb" stroke-width="2" />
  <polygon points="278,101 286,105 278,109" fill="#2563eb" />

  <g transform="translate(290, 55)">
    <rect width="180" height="100" rx="6" fill="#f8fafc" stroke="#93c5fd" stroke-width="1.5" />
    <text x="16" y="28" fill="#1d4ed8" font-family="sans-serif" font-size="12" font-weight="bold">FASE 2: ACELERAÇÃO</text>
    <text x="16" y="52" fill="#0f172a" font-family="sans-serif" font-size="13" font-weight="bold">Geração de Rascunho</text>
    <text x="16" y="74" fill="#475569" font-family="sans-serif" font-size="11">Auxílio na rotina repetitiva</text>
  </g>

  <path d="M 480 105 L 530 105" stroke="#2563eb" stroke-width="2" />
  <polygon points="528,101 536,105 528,109" fill="#2563eb" />

  <g transform="translate(540, 55)">
    <rect width="180" height="100" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
    <text x="16" y="28" fill="#15803d" font-family="sans-serif" font-size="12" font-weight="bold">FASE 3: ENTREGA</text>
    <text x="16" y="52" fill="#065f46" font-family="sans-serif" font-size="13" font-weight="bold">Revisão e Aprovação</text>
    <text x="16" y="74" fill="#15803d" font-family="sans-serif" font-size="11">Garantia de qualidade humana</text>
  </g>

  <text x="24" y="190" fill="#64748b" font-family="-apple-system, sans-serif" font-size="10">Digital West Horizonte • Produtividade e Metodologias Ágeis</text>
</svg>
`);

export const ARTICLE_DIAGRAMS: Record<string, ArticleIllustration> = {
  'ia-agentes': {
    id: 'ia-agentes',
    caption: 'Figura 1: Fluxo de quatro etapas de um agente autônomo com uso de ferramentas e validação de resultados.',
    svgDataUri: diagramAiAgentWorkflow
  },
  'laravel-mysql': {
    id: 'laravel-mysql',
    caption: 'Figura 1: Integração entre a interface web leve, a API REST em Laravel e o banco relacional MySQL com índices.',
    svgDataUri: diagramLaravelMysql
  },
  'it-dns': {
    id: 'it-dns',
    caption: 'Figura 1: Ciclo de consulta DNS até a resposta do servidor web Nginx com entrega de conteúdo.',
    svgDataUri: diagramItDnsNetwork
  },
  'seguranca-camadas': {
    id: 'seguranca-camadas',
    caption: 'Figura 1: As cinco defesas prioritárias para proteger contas, credenciais e conexões na internet.',
    svgDataUri: diagramSecurityDefense
  },
  'ia-produtividade': {
    id: 'ia-produtividade',
    caption: 'Figura 1: Ciclo profissional integrando planejamento humano, suporte digital e revisão técnica.',
    svgDataUri: diagramAiProductivity
  }
};
