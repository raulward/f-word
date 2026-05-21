# F-WORD — Specs de Implementação

Cada spec é independente: copie o prompt num chat novo do Claude Code rodando no diretório `/home/raulw/development/f-word/`. Execute na ordem (SPEC-01 → SPEC-07).

## Contexto comum (todos os specs assumem)

- **Stack:** Vite + React 19 + JavaScript puro (sem TypeScript) + react-router-dom v7
- **Estilos:** CSS Modules por componente, variáveis CSS globais em `src/styles/global.css`
- **Layout:** stage fixo de **1920px** de largura (variável `--stage-w`). NÃO é responsivo — replique pixel-perfect do design 1920x1080.
- **Fonte de verdade visual:** PNGs em `/home/raulw/development/f-word/design/`
- **Estrutura atual:** Navbar, Footer, Layout e páginas placeholder (PageStub) já existem. Substitua o `<PageStub />` de cada página pela implementação real conforme o screenshot.
- **Convenções:**
  - Componentes em `src/components/<Nome>/<Nome>.jsx` + `<Nome>.module.css`
  - Páginas em `src/pages/...`
  - Imagens em `src/assets/` (criar se não existir) ou `public/`
  - Sem comentários supérfluos no código
  - Mantenha CSS Modules, não use Tailwind nem styled-components

---

## SPEC-01 — Design tokens + tipografia

**Modelo:** Haiku 4.5
**Esforço:** low
**Objetivo:** Extrair cores exatas dos PNGs e configurar Google Fonts.

### Tarefas
1. Analisar `design/home.png`, `design/sobre-nos.png`, `design/guest-writers.png` para extrair valores hex precisos de:
   - Vinho/borgonha do footer e header de Sobre Nós
   - Vermelho dos botões pill
   - Creme/off-white do texto e cards "Em foco"
   - Preto do fundo geral
2. Configurar tipografia confirmada pelo designer:
   - **Inter** (peso 400/Regular, 700/Bold, 800/ExtraBold) — Google Fonts
   - **Cormorant** — Google Fonts (para artigos)
   - Variáveis: `--font-sans` (Inter), `--font-article` (Cormorant)
3. Adicionar `<link>` do Google Fonts no `index.html`.
4. Atualizar `src/styles/global.css` com `--font-sans`, `--font-article` e cores refinadas.

### Tipografia por uso (confirmada)
| Elemento | Fonte | Peso |
|---|---|---|
| Navbar (Home, Editoriais…) | Inter | Bold 700 |
| Subtítulo / "Moda como linguagem cultural" | Inter | Regular 400 |
| Títulos chamativos (hero, seções) | Inter | ExtraBold 800 |
| Artigos (corpo de texto) | Cormorant | — |

### Hero da Home
O hero é um **vídeo** (não imagem estática). Implementar com `<video autoPlay muted loop playsInline>` em tela cheia.

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-01") e execute a SPEC-01.
Foco apenas em:
- index.html: adicionar Google Fonts (Inter 400/700/800 + Cormorant)
- src/styles/global.css: refinar variáveis de cor com hex precisos dos PNGs e adicionar:
  --font-sans: 'Inter', sans-serif
  --font-article: 'Cormorant', serif
- Aplicar font-family no body

Não toque em outros arquivos. Use as imagens em design/ pra calibrar cores.
Confirme cada hex extraído antes de gravar.
```

---

## SPEC-02 — Navbar + Footer pixel-perfect

**Modelo:** Sonnet 4.6
**Esforço:** medium
**Objetivo:** Refinar componentes compartilhados pra bater com qualquer screenshot.

### Tarefas
1. Comparar `src/components/Navbar/` com a Navbar de `design/home.png` (e demais screenshots — Navbar é igual em todas as telas).
2. Ajustar paddings, tamanho da logo, espaçamento entre pills, peso/tamanho da fonte, estado ativo.
3. Comparar `src/components/Footer/` com `design/home.png` e `design/sobre-nos.png`.
4. Ajustar grid de 3 colunas, tipografia da brand grande no footer, espaçamentos, alinhamento da coluna de links à direita.
5. Garantir links âncora funcionais (todos os labels do footer levam às rotas certas).

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-02") e execute a SPEC-02.
Você vai refinar APENAS:
- src/components/Navbar/Navbar.jsx + .module.css
- src/components/Footer/Footer.jsx + .module.css

Compare cada propriedade visual com design/home.png e design/sobre-nos.png.
Não invente conteúdo — extraia textos dos PNGs literalmente.
Rode `npm run dev` no final e confirme que / e /sobre-nos renderizam navbar+footer iguais ao PNG.
```

---

## SPEC-03 — Página Home

**Modelo:** Opus 4.7
**Esforço:** high
**Objetivo:** Implementar a Home completa do `design/home.png`.

### Tarefas
1. **Hero:** vídeo em tela cheia (`<video autoPlay muted loop playsInline>`) com logo F-WORD sobreposta e botão "Junte-se a nós" (link `/sobre-nos`). Placeholder: `<div>` cor sólida enquanto o asset de vídeo não chegar.
2. **Em foco:** título + 2 cards horizontais lado a lado com foto à esquerda e copy/título à direita (fundo creme).
3. **Artigos:** título + 3 cards verticais (foto + título + descrição + autor) com fundo escuro gradient.
4. **Guest Writers:** título + 1 card horizontal destacado (foto + título + descrição + autor).
5. Cada card deve ser um `<Link>` para a rota correspondente:
   - Em foco → `/artigos/diabo-veste-prada`, `/artigos/cabelo-como-politica`
   - Artigos → `/artigos/moda-sob-nova-direcao`, `/artigos/internet-transformou-tendencia`, `/artigos/muito-alem-do-look`
   - Guest Writer → `/artigos/diabo-veste-prada`
6. Imagens placeholder por enquanto (cor sólida ou `via.placeholder.com`); o usuário enviará assets reais depois.
7. Extrair textos exatos do PNG.

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-03") e execute a SPEC-03.

Substitua o PageStub em src/pages/Home/Home.jsx por uma implementação completa baseada em design/home.png.

Crie sub-componentes em src/components/ se ajudar (ex: HeroBanner, CardEmFoco, CardArtigo, CardGuestWriter).

Regras:
- 1920px de largura fixa
- Use as variáveis de cor e fonte do global.css (não hardcode hex)
  - Navbar: Inter Bold (weight 700)
  - Títulos chamativos (hero, seções): Inter ExtraBold (weight 800)
  - Subtítulos / "Moda como linguagem cultural": Inter Regular (weight 400)
  - Corpo de artigos: Cormorant
- Hero: <video autoPlay muted loop playsInline> ocupando 100vw x 100vh. Placeholder: <div> cor sólida com comentário "// placeholder: video hero"
- Cada card é <Link> pra rota do artigo (veja mapeamento na SPEC-03)
- Imagens: <div> com background-color sólido + width/height fixos. Comentário "// placeholder" inline indicando qual asset entra ali.
- Textos: extrair literalmente do PNG, com acentuação correta
- Rode npm run dev e confirme visualmente abrindo http://localhost:5173/
```

---

## SPEC-04 — Página Sobre Nós

**Modelo:** Sonnet 4.6
**Esforço:** medium
**Objetivo:** Implementar `design/sobre-nos.png`.

### Tarefas
1. **Banner topo vermelho:** título "Sobre nós" + parágrafo de descrição da revista.
2. **Nossa Equipe:** título grande + lista de 7 cards horizontais, cada um com foto + nome/cargo + bio curta.
3. Membros (extrair texto exato do PNG):
   - Natan Barreto — Diretor de Conteúdo
   - Giulia Vieira — Designer Editorial
   - Nicole Cortés — Designer Editorial
   - Victor Oliveira — Estrategista de Marketing
   - Yasmin Gama — Estrategista de Marketing
   - Olívia Lima — Administradora
   - Sarah Lima — Redatora

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-04") e execute a SPEC-04.

Substitua o PageStub em src/pages/SobreNos.jsx por uma implementação fiel a design/sobre-nos.png.

Crie um sub-componente TeamCard em src/components/TeamCard/ — cada membro renderiza um TeamCard.
Os dados dos membros vão num array dentro de SobreNos.jsx (ou src/data/team.js se preferir centralizar).

Textos: copie EXATO do PNG, incluindo a bio de cada membro. Não invente.
Fotos: placeholder por background-color circular.
```

---

## SPEC-05 — Página Guest Writers

**Modelo:** Sonnet 4.6
**Esforço:** medium
**Objetivo:** Implementar `design/guest-writers.png`.

### Tarefas
1. **Topo:** 2 colunas de texto — "Conheça nossos Guest Writers e os artigos desenvolvidos por eles." (esquerda) e "Explore suas análises e descubra novos interesses." (direita).
2. **Lista:** 4 cards horizontais (foto + título + autor):
   - **Card 1 (destacado, fundo creme, texto vermelho):** "A Moda Sob Nova Direção: Quando o Roteiro de O Diabo Veste Prada 2 Encontra a Realidade do Met Gala" — Bianca Mei → link `/artigos/diabo-veste-prada`
   - **Cards 2, 3, 4:** placeholders "Título da matéria" / "Nome e sobrenome autor"

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-05") e execute a SPEC-05.

Substitua o PageStub em src/pages/GuestWriters.jsx por uma implementação fiel a design/guest-writers.png.

Crie sub-componente WriterCard (variantes: featured | placeholder).
Textos exatos do PNG. Card destacado deve linkar pra /artigos/diabo-veste-prada.
```

---

## SPEC-06 — Template de Artigo + 5 conteúdos

**Modelo:** Sonnet 4.6
**Esforço:** high (dividido em 6 sub-blocos para evitar travar o agente)
**Objetivo:** Criar template comum de página de artigo e preencher os 5.

### Repositório de referência

Existe uma implementação anterior em **https://github.com/raulward/test-giulia** que pode ser consultada como referência de:
- estrutura de `ArticleLayout` (componente + CSS)
- tipografia, espaçamentos e variantes de coluna
- **conteúdo extraído do artigo "O Diabo Veste Prada 2"** — já transcrito do PNG naquele repo; pode-se reaproveitar o texto direto, sem precisar reler o PNG do zero

Sempre que um bloco abaixo precisar de uma decisão visual ou de extração de texto, comparar com o `test-giulia` antes de inventar.

### Divisão em sub-blocos

Cada sub-bloco é um chat independente — rodar na ordem (06A primeiro; 06B–06F paralelizáveis).

| Bloco | Escopo | Arquivos | Autor |
|---|---|---|---|
| 06A | Template `ArticleLayout` | `src/components/ArticleLayout/*` | — |
| 06B | Artigo Diabo Veste Prada | `src/pages/posts/DiaboVestePrada.jsx` + `design/diabo-veste-prada-artigo.png` | Olívia Lima |
| 06C | Artigo Moda Sob Nova Direção | `src/pages/posts/ModaSobNovaDirecao.jsx` + `design/moda-sob-nova-direcao.png` | Bianca Mei |
| 06D | Artigo Cabelo como Política | `src/pages/posts/CabeloComoPolitica.jsx` + `design/cabelo-como-politica.png` | extrair do PNG |
| 06E | Artigo Internet Transformou Tendência | `src/pages/posts/InternetTransformouTendencia.jsx` + `design/internet-transformou-tendencia.png` | Giulia Vieira |
| 06F | Artigo Muito Além do Look | `src/pages/posts/MuitoAlemDoLook.jsx` + `design/muito-alem-do-look.png` | Yasmin Gama |

---

### Bloco 06A — Template `ArticleLayout`

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06A.

Use como referência visual e estrutural o repo https://github.com/raulward/test-giulia
(já tem um ArticleLayout funcionando). Adapte para este projeto sem copiar cego — respeite as variáveis de global.css daqui.

Crie:
- src/components/ArticleLayout/ArticleLayout.jsx
- src/components/ArticleLayout/ArticleLayout.module.css

Props: { title, subtitle, author, hero, children, columns = 2 }

Layout:
- hero no topo (largura do stage, altura fixa) — `hero` é um ReactNode (img ou div placeholder)
- título serif grande (Cormorant) em destaque
- subtítulo/dek logo abaixo, fonte serif menor
- corpo via {children} — diagramado em 1 ou 2 colunas conforme prop `columns`
- assinatura "Por <Autor>" no final, itálico serif

Stage 1920px, sem responsividade. Use variáveis do global.css (não hardcode hex).
NÃO toque nas páginas de posts neste bloco.
```

---

### Bloco 06B — Artigo Diabo Veste Prada

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06B.
Pré-requisito: ArticleLayout (Bloco 06A) já existe.

Este artigo JÁ ESTÁ TRANSCRITO no repo https://github.com/raulward/test-giulia.
Busque o arquivo correspondente lá (provavelmente em src/pages/posts/DiaboVestePrada.* ou similar)
e REAPROVEITE o texto integral — não precisa reler o PNG do zero.
Caso o repo esteja inacessível, cair para extração via design/diabo-veste-prada-artigo.png.

Substitua o PageStub em src/pages/posts/DiaboVestePrada.jsx por:
  <ArticleLayout
    title="..."
    subtitle="..."
    author="Olívia Lima"
    hero={<div /* placeholder: diabo-veste-prada-hero */ />}
    columns={2}
  >
    ...parágrafos e subtítulos de seção...
  </ArticleLayout>

Trechos ilegíveis → [TRECHO ILEGÍVEL]. Não invente texto.
```

---

### Bloco 06C — Artigo Moda Sob Nova Direção

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06C.
Pré-requisito: ArticleLayout (Bloco 06A) já existe.

Abra design/moda-sob-nova-direcao.png e extraia EXATAMENTE:
- título, subtítulo/dek
- todos os parágrafos e subtítulos de seção
- diagramação (1 ou 2 colunas)

Pode consultar https://github.com/raulward/test-giulia para conferir convenções
(ex.: como subtítulos de seção foram marcados, classes auxiliares).

Substitua o PageStub em src/pages/posts/ModaSobNovaDirecao.jsx por
<ArticleLayout title=... subtitle=... author="Bianca Mei" hero={placeholder} columns={...}>...</ArticleLayout>

hero = <div> placeholder com comentário inline indicando o asset.
Trechos ilegíveis → [TRECHO ILEGÍVEL]. Não invente texto.
```

---

### Bloco 06D — Artigo Cabelo como Política

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06D.
Pré-requisito: ArticleLayout (Bloco 06A) já existe.

Abra design/cabelo-como-politica.png e extraia EXATAMENTE:
- título, subtítulo/dek
- todos os parágrafos e subtítulos de seção
- autor (ler do PNG — não está fixado na spec)
- diagramação (1 ou 2 colunas)

Pode consultar https://github.com/raulward/test-giulia para convenções de layout.

Substitua o PageStub em src/pages/posts/CabeloComoPolitica.jsx por
<ArticleLayout title=... subtitle=... author=... hero={placeholder} columns={...}>...</ArticleLayout>

Trechos ilegíveis → [TRECHO ILEGÍVEL]. Não invente texto.
```

---

### Bloco 06E — Artigo Internet Transformou Tendência

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06E.
Pré-requisito: ArticleLayout (Bloco 06A) já existe.

Abra design/internet-transformou-tendencia.png e extraia EXATAMENTE:
- título, subtítulo/dek
- todos os parágrafos e subtítulos de seção
- diagramação (1 ou 2 colunas)

Pode consultar https://github.com/raulward/test-giulia para convenções de layout.

Substitua o PageStub em src/pages/posts/InternetTransformouTendencia.jsx por
<ArticleLayout title=... subtitle=... author="Giulia Vieira" hero={placeholder} columns={...}>...</ArticleLayout>

Trechos ilegíveis → [TRECHO ILEGÍVEL]. Não invente texto.
```

---

### Bloco 06F — Artigo Muito Além do Look

```
Leia SPECS.md (seções "Contexto comum" e "SPEC-06") — execute APENAS o Bloco 06F.
Pré-requisito: ArticleLayout (Bloco 06A) já existe.

Abra design/muito-alem-do-look.png e extraia EXATAMENTE:
- título, subtítulo/dek
- todos os parágrafos e subtítulos de seção
- diagramação (1 ou 2 colunas)

Pode consultar https://github.com/raulward/test-giulia para convenções de layout.

Substitua o PageStub em src/pages/posts/MuitoAlemDoLook.jsx por
<ArticleLayout title=... subtitle=... author="Yasmin Gama" hero={placeholder} columns={...}>...</ArticleLayout>

Trechos ilegíveis → [TRECHO ILEGÍVEL]. Não invente texto.
```

---

## SPEC-07 — Editoriais + QA visual

**Modelo:** Sonnet 4.6
**Esforço:** medium
**Objetivo:** Implementar `/editoriais` (não há PNG — propor estrutura coerente) e fazer passada de QA.

### Tarefas
1. **Editoriais:** não há tela no Figma. Criar página com mesma identidade visual listando categorias/temas editoriais (sugestão: cards estilo "Em foco" da Home). Confirmar com o usuário antes de finalizar.
2. **QA visual:** rodar `npm run dev` e comparar cada rota com seu PNG correspondente:
   - `/` ↔ `home.png`
   - `/sobre-nos` ↔ `sobre-nos.png`
   - `/guest-writers` ↔ `guest-writers.png`
   - `/artigos/<slug>` ↔ PNG correspondente
3. Anotar discrepâncias e corrigir as visíveis (espaçamentos, alinhamentos, tamanhos de fonte).
4. Verificar todos os links de navegação (Navbar, Footer, cards) — todos devem levar a rotas válidas.

### Prompt
```
Leia SPECS.md (seção "Contexto comum" e "SPEC-07") e execute a SPEC-07.

Parte 1 — /editoriais:
Não há PNG. Pergunte ao usuário se ele quer (a) lista de categorias editoriais (b) replicar layout de /artigos (c) algo diferente. Implemente após confirmar.

Parte 2 — QA visual:
Para cada rota listada na SPEC-07, abra o PNG correspondente, abra a rota no navegador (npm run dev já está rodando ou suba), e liste num arquivo /tmp/f-word-qa.md as discrepâncias encontradas (espaçamento, cor, tamanho de fonte, texto faltante).
Depois corrija as discrepâncias visíveis. Não invente conteúdo que não existe no PNG.
Valide que TODOS os links (Navbar, Footer, cards de artigo) levam a rotas existentes — não pode aparecer 404 navegando manualmente.
```

---

## Ordem de execução recomendada

```
SPEC-01 ─┐
         ├─→ SPEC-02 ─→ SPEC-03 ─┐
                                  ├─→ SPEC-07
              SPEC-04 ────────────┤
              SPEC-05 ────────────┤
              SPEC-06 ────────────┘
```

SPEC-01 e SPEC-02 são pré-requisitos. SPEC-03/04/05/06 são paralelizáveis (chats independentes). SPEC-07 fecha tudo.

## Quando o usuário enviar imagens reais

Substituir os placeholders (background-color sólidos) por `<img src="/assets/<nome>.jpg" />` ou `import` do asset em `src/assets/`. Manter as proporções definidas no CSS.
