# NutriPet - Landing Page

Uma landing page moderna e responsiva para a **NutriPet**, uma pet shop especializada em alimentação, acessórios e farmácia para animais de estimação.

## 📋 Estrutura do Projeto

```
nutripet-landing/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos CSS da página
├── script.js           # JavaScript para interatividade
├── README.md           # Este arquivo
├── docs/               # Documentação adicional
└── images/             # Imagens e assets
    └── logo.png        # Logo da NutriPet
```

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Paleta de Cores**: Laranja vibrante (#FF4500) como cor principal, transmitindo energia e confiança
- **Seções Principais**:
  - Header com navegação sticky
  - Hero section impactante
  - Seção de diferenciais
  - Seção de serviços
  - Seção de contato
  - Footer completo
- **Animações Suaves**: Transições e efeitos visuais agradáveis
- **Otimizado para Conversão**: CTAs (Call-to-Action) estrategicamente posicionados

## 🚀 Como Usar

### 1. Abrir Localmente

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou clique duas vezes no arquivo `index.html`.

### 2. Com um Servidor Local (Recomendado)

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

Se você tiver Node.js com `http-server`:

```bash
npx http-server
```

### 3. Com VSCode

1. Instale a extensão **Live Server** no VSCode
2. Clique com botão direito no arquivo `index.html`
3. Selecione "Open with Live Server"

## 📁 Descrição dos Arquivos

### index.html
Arquivo HTML principal contendo toda a estrutura da página:
- Header com navegação
- Hero section
- Seções de conteúdo (diferenciais, serviços, contato)
- Footer

### styles.css
Arquivo CSS com toda a estilização:
- Variáveis CSS para cores e espaçamento
- Estilos responsivos
- Animações e transições
- Media queries para diferentes tamanhos de tela

### script.js
Arquivo JavaScript com funcionalidades interativas:
- Scroll suave para links de navegação
- Animações de entrada dos elementos
- Efeitos de hover
- Integração com WhatsApp
- Detecção de dispositivo móvel

### docs/
Pasta para documentação adicional do projeto.

### images/
Pasta contendo a logo da NutriPet e outras imagens.

## 🎯 Seções da Landing Page

### 1. Header
- Logo da NutriPet
- Menu de navegação (Serviços, Diferenciais, Contato)
- Botão "Compre Agora"
- Sticky (fica no topo ao rolar)

### 2. Hero Section
- Título principal em destaque
- Subtítulo com proposta de valor
- Dois botões de ação (Compre Agora, Fale Conosco)
- Imagem de um pet feliz

### 3. Diferenciais
Três cards destacando os principais pontos fortes:
- **Entrega Expressa Grátis**: Frete grátis acima de R$100
- **Variedade Completa**: Alimentação, acessórios e farmácia
- **Qualidade Garantida**: Produtos selecionados com cuidado

### 4. Serviços
Três cards detalhando as categorias de produtos:
- **Alimentação Premium**: Rações de qualidade
- **Acessórios Diversos**: Coleiras, brinquedos, camas
- **Farmácia Pet**: Medicamentos e suplementos

### 5. Contato
Três cards com informações de contato:
- **Localização**: Endereço em Passo Fundo, RS
- **WhatsApp**: Link direto para conversar
- **Email**: Endereço de email para contato

### 6. Footer
- Logo da empresa
- Links rápidos
- Redes sociais
- Informações de copyright

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Laranja Principal | #FF4500 | Botões, títulos, destaques |
| Laranja Escuro | #E63900 | Hover dos botões |
| Laranja Claro | #FF6B35 | Variações e gradientes |
| Branco | #FFFFFF | Fundo principal |
| Cinza Escuro | #1F1F1F | Texto principal |
| Cinza Médio | #666666 | Texto secundário |
| Cinza Claro | #F5F5F5 | Fundos alternativos |

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Até 767px

## 🔧 Customização

### Alterar Logo
Substitua o arquivo `images/logo.png` com sua própria logo.

### Alterar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #FF4500;
    --primary-dark: #E63900;
    --primary-light: #FF6B35;
    /* ... outras cores ... */
}
```

### Alterar Conteúdo
Edite o arquivo `index.html` diretamente para modificar textos, links e estrutura.

### Alterar Funcionalidades
Edite o arquivo `script.js` para adicionar ou modificar comportamentos JavaScript.

## 📞 Integração com WhatsApp

Os botões de contato estão configurados para abrir o WhatsApp. Para alterar o número:

1. Abra o arquivo `index.html`
2. Procure por `https://wa.me/5554999999999`
3. Substitua `5554999999999` pelo seu número de WhatsApp (com código do país)

Exemplo: Para o número (54) 99999-9999 no Brasil, use: `https://wa.me/5554999999999`

## 🚀 Deploy

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá para Settings > Pages
4. Selecione a branch main como source
5. Sua página estará disponível em `https://seu-usuario.github.io/seu-repositorio`

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Configure as opções de build (deixe em branco para site estático)
5. Deploy automático realizado!

### Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure e faça o deploy

## 📊 Performance

A página foi otimizada para:
- ✅ Carregamento rápido
- ✅ Bom desempenho em dispositivos móveis
- ✅ SEO amigável
- ✅ Acessibilidade

## 🐛 Troubleshooting

### A página não carrega corretamente
- Verifique se todos os arquivos estão na mesma pasta
- Certifique-se de que a logo está em `images/logo.png`
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Os links de WhatsApp não funcionam
- Verifique se o número de WhatsApp está correto
- Certifique-se de que está usando o formato correto: `+55` + DDD + número

### As imagens não aparecem
- Verifique se o caminho das imagens está correto
- Certifique-se de que a pasta `images/` existe

## 📝 Licença

Este projeto é fornecido como está, livre para uso e modificação.

## 👨‍💻 Desenvolvido por

Manus - Assistente de IA para desenvolvimento web

---

**Versão**: 1.0  
**Última atualização**: Outubro 2025

