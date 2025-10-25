# Estrutura da Landing Page NutriPet

## Visão Geral

Este documento descreve a estrutura técnica e organizacional da landing page da NutriPet.

## Arquitetura

### Arquivos Principais

```
nutripet-landing/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e layout
├── script.js           # Interatividade
├── README.md           # Documentação principal
├── docs/
│   └── ESTRUTURA.md    # Este arquivo
└── images/
    └── logo.png        # Logo da empresa
```

## Detalhamento dos Arquivos

### 1. index.html

**Responsabilidade**: Estrutura semântica da página

**Seções principais**:
- `<header>`: Navegação e logo
- `<section class="hero">`: Seção principal com destaque
- `<section id="diferenciais">`: Pontos fortes da empresa
- `<section id="servicos">`: Categorias de produtos/serviços
- `<section id="contato">`: Informações de contato
- `<footer>`: Rodapé com links e informações

**Convenções**:
- IDs usados para navegação (ex: `id="servicos"`)
- Classes descritivas (ex: `class="card"`, `class="btn-primary"`)
- Semântica HTML5 (header, nav, section, footer)

### 2. styles.css

**Responsabilidade**: Estilização visual e responsividade

**Estrutura**:

```css
/* Seção 1: Reset e Variáveis */
- Reset CSS
- Variáveis CSS (cores, espaçamento, etc)

/* Seção 2: Tipografia */
- Fontes
- Tamanhos
- Pesos

/* Seção 3: Componentes */
- Header
- Botões
- Cards
- Seções

/* Seção 4: Responsividade */
- Media queries
- Breakpoints
```

**Variáveis CSS Principais**:
```css
--primary-color: #FF4500      /* Laranja principal */
--primary-dark: #E63900       /* Laranja escuro */
--white: #FFFFFF              /* Branco */
--dark: #1F1F1F               /* Cinza escuro */
--gray-light: #F5F5F5         /* Cinza claro */
```

**Breakpoints Responsivos**:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: até 767px

### 3. script.js

**Responsabilidade**: Interatividade e comportamentos dinâmicos

**Funcionalidades principais**:

1. **Smooth Scroll**: Navegação suave entre seções
2. **Animações**: Entrada dos elementos ao rolar
3. **Efeitos de Hover**: Interação com cards e botões
4. **Integração WhatsApp**: Links de contato direto
5. **Detecção de Dispositivo**: Ajustes para mobile

**Funções principais**:
- `scrollToSection()`: Rola para uma seção específica
- `isMobile()`: Detecta se é dispositivo móvel
- Observers: Animam elementos ao entrar na viewport

## Fluxo de Dados

```
Usuário acessa index.html
    ↓
HTML carrega (estrutura)
    ↓
CSS carrega (estilos)
    ↓
JavaScript carrega (interatividade)
    ↓
Página pronta para interação
```

## Componentes Reutilizáveis

### Botões

**Variações**:
- `.btn-primary`: Laranja (ação principal)
- `.btn-white`: Branco (ação secundária)
- `.btn-outline`: Outline (ação terciária)
- `.btn-large`: Tamanho grande

**Uso**:
```html
<button class="btn btn-primary">Compre Agora</button>
```

### Cards

**Tipos**:
- `.card`: Card padrão com ícone
- `.servico-card`: Card de serviço com gradiente
- `.contato-card`: Card de contato com ícone

**Uso**:
```html
<div class="card">
    <div class="card-icon">...</div>
    <h3 class="card-title">Título</h3>
    <p class="card-text">Descrição</p>
</div>
```

### Seções

**Padrão de seção**:
```html
<section id="nome-secao" class="nome-secao">
    <div class="container">
        <h2 class="section-title">Título</h2>
        <!-- Conteúdo -->
    </div>
</section>
```

## Convenções de Nomenclatura

### Classes CSS

- **Componentes**: `.card`, `.btn`, `.header`
- **Modificadores**: `.btn-primary`, `.card-icon`
- **Estados**: `.hover`, `.active`
- **Utilitários**: `.container`, `.section-title`

### IDs HTML

- **Seções**: `id="servicos"`, `id="contato"`
- **Elementos únicos**: `id="header"`, `id="footer"`

### Variáveis JavaScript

- **Constantes**: `UPPERCASE_WITH_UNDERSCORES`
- **Variáveis**: `camelCase`
- **Funções**: `camelCase()`

## Responsividade

### Estratégia Mobile-First

A página é desenvolvida pensando em mobile primeiro, depois aprimorada para telas maiores.

### Breakpoints

```css
/* Mobile (padrão) */
/* Até 480px: Ajustes extras */

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }
```

## Performance

### Otimizações

1. **CSS**: Minificado e organizado
2. **JavaScript**: Sem dependências externas
3. **Imagens**: Comprimidas e otimizadas
4. **Lazy Loading**: Imagens carregam sob demanda

### Métricas

- Tamanho total: ~50KB (sem imagens)
- Tempo de carregamento: < 2s
- Lighthouse Score: 90+

## Acessibilidade

### Implementações

- Contraste de cores adequado
- Navegação por teclado
- Atributos ARIA quando necessário
- Semântica HTML5

### Testes

- Testar com leitores de tela
- Testar navegação por teclado
- Validar contraste de cores

## SEO

### Elementos Implementados

- Meta tags (title, description)
- Heading hierarchy (h1, h2, h3)
- URLs amigáveis
- Estrutura semântica

### Recomendações

1. Adicionar `sitemap.xml`
2. Adicionar `robots.txt`
3. Implementar Schema.org
4. Otimizar imagens com alt text

## Manutenção

### Checklist de Atualização

- [ ] Testar em múltiplos navegadores
- [ ] Testar responsividade
- [ ] Validar HTML/CSS
- [ ] Testar links e formulários
- [ ] Verificar performance
- [ ] Testar acessibilidade

### Ferramentas Recomendadas

- **Validação**: W3C Validator
- **Performance**: Google PageSpeed Insights
- **Acessibilidade**: WAVE, Axe DevTools
- **Navegadores**: Chrome, Firefox, Safari, Edge

## Extensões Futuras

### Funcionalidades Possíveis

1. **Formulário de Contato**: Integração com email
2. **Carrinho de Compras**: E-commerce básico
3. **Blog**: Seção de artigos e dicas
4. **Galeria**: Fotos dos produtos
5. **Depoimentos**: Seção de clientes satisfeitos
6. **Integração com APIs**: Dados em tempo real

### Tecnologias Recomendadas

- **Backend**: Node.js, Python, PHP
- **Banco de Dados**: MongoDB, PostgreSQL
- **CMS**: WordPress, Strapi
- **E-commerce**: Shopify, WooCommerce

## Troubleshooting

### Problemas Comuns

| Problema | Solução |
|----------|---------|
| Página não carrega | Verificar caminho dos arquivos |
| Estilos não aplicam | Limpar cache do navegador |
| JavaScript não funciona | Verificar console de erros |
| Imagens não aparecem | Verificar pasta `images/` |
| Links não funcionam | Verificar URLs e IDs |

---

**Versão**: 1.0  
**Última atualização**: Outubro 2025

