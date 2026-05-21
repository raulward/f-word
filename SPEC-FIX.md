# SPEC-FIX — Alinhar tokens, Navbar e Footer com a referência

## Contexto

A versão anterior do projeto (repo `raulward/test-giulia`, pasta `fword-page/`) define
a identidade visual canônica. O projeto atual em `/home/raulw/development/f-word/`
tem cores erradas, footer estruturalmente diferente e está usando texto "F-WORD"
no lugar do logo SVG.

Esta SPEC corrige **apenas**:

1. `index.html` — Google Fonts e favicon
2. `src/styles/global.css` — variáveis de cor e fonte
3. `src/components/Navbar/Navbar.jsx` + `Navbar.module.css`
4. `src/components/Footer/Footer.jsx` + `Footer.module.css`

**Não toque em**: `App.jsx`, `Layout.jsx`, páginas (`src/pages/**`), nem nos PageStubs.
A estrutura multi-page com `react-router-dom` é intencional e deve ser preservada.

Os assets (`logo.svg`, `favicon.svg`, `icons.svg`, `imagem.svg`) **já foram copiados**
para `public/` e `public/images/`. Não precisa baixar nada.

## Stack

- Vite + React 19 + JS puro + `react-router-dom` v7
- CSS Modules por componente, variáveis globais em `src/styles/global.css`
- Logo é o **SVG** em `/images/logo.svg`, nunca texto "F-WORD"

---

## 1. `index.html`

Substituir o `<link>` do Google Fonts pelo da referência (Inter com pesos
100/400/700/800/900 + itálicos, Cormorant 400-700 + itálicos) e adicionar favicon.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>F-WORD</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,100;0,400;0,700;0,800;0,900;1,100;1,400;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 2. `src/styles/global.css`

Sobrescrever as variáveis para baterem com a referência. Mantenha o resto do reset
(`*`, `body`, `img`, `a`, `button`, `h1..h6`) como está.

Variáveis corretas:

```css
:root {
  /* Tipografia */
  --font-sans: 'Inter', sans-serif;
  --font-article: 'Cormorant', 'Cormorant Garamond', Georgia, serif;

  /* Paleta canônica (test-giulia) */
  --color-black: #000;
  --color-white: #fff;
  --color-red: #ba1f1b;        /* pills da Navbar */
  --color-red-hover: #a01a17;
  --color-footer-red: #900f0c; /* painéis do footer */

  /* Aliases semânticos */
  --color-bg: var(--color-black);
  --color-fg: var(--color-white);
  --color-accent: var(--color-red);

  /* Stage */
  --stage-w: 1920px;
  --stage-h: 1080px;
}
```

- Remova `--color-wine`, `--color-wine-dark`, `--color-cream`, `--color-card`,
  `--color-muted`, `--color-surface` — não são usados pela referência.
- `body` continua com `font-family: var(--font-sans)` e `background: var(--color-bg)`.
- O `min-width: 1920px` + `overflow-x: auto` no body fica como está.

---

## 3. Navbar

### `Navbar.jsx`

Trocar o texto "F-WORD" pelo SVG. Estrutura final:

```jsx
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/editoriais', label: 'Editoriais' },
  { to: '/artigos', label: 'Artigos' },
  { to: '/guest-writers', label: 'Guest Writers' },
  { to: '/sobre-nos', label: 'Sobre Nós' },
]

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src="/images/logo.svg" alt="F-WORD" />
      </Link>
      <nav className={styles.nav}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${styles.pill} ${isActive ? styles.pillActive : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
```

### `Navbar.module.css`

Bater com `.navbar` / `.navbar__link` da referência (`/tmp/test-giulia-ref/fword-page/src/App.css`).

```css
.navbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 81px;
  padding: 23px 29px 0;
  background: var(--color-black);
}

.logo {
  display: block;
  width: 147px;
  flex: 0 0 auto;
}

.logo img {
  width: 147px;
  height: 27px;
  display: block;
}

.nav {
  display: flex;
  align-items: flex-start;
  gap: 17px;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 5px 20px 7px;
  border-radius: 999px;
  background: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.15s ease;
}

.pill:hover {
  background: var(--color-red-hover);
}

.pillActive {
  background: var(--color-footer-red);
}
```

- Sem `position: sticky` — a referência não tem.
- Sem `letter-spacing` extra.

---

## 4. Footer

Esse é o ajuste mais estrutural. A referência tem **3 painéis separados** em um grid,
cada um com `border-radius: 44px 44px 0 0` em cima e um `gap: 2px` que aparece como
linha preta entre eles (porque o `.footer` herda fundo preto).

### `Footer.jsx`

```jsx
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const team = [
  ['Natan Barreto', 'Diretor de conteúdo'],
  ['Giulia Vieira', 'Designer editorial'],
  ['Nicole Cortês', 'Designer editorial'],
  ['Victor Oliveira', 'Estrategista de marketing'],
  ['Yasmin Gama', 'Estrategista de marketing'],
  ['Olívia Lima', 'Administradora'],
  ['Sarah Lima', 'Redatora'],
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/editoriais', label: 'Editoriais' },
  { to: '/artigos', label: 'Artigos' },
  { to: '/guest-writers', label: 'Guest writers' },
  { to: '/sobre-nos', label: 'Sobre nós' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={`${styles.panel} ${styles.brand}`}>
        <img src="/images/logo.svg" alt="F-WORD" />
        <p>Moda, cultura e comportamento para uma geração moldada pela internet.</p>
      </section>

      <section className={`${styles.panel} ${styles.team}`}>
        <h2>Nossa Equipe:</h2>
        <div className={styles.teamList}>
          {team.map(([name, role]) => (
            <p key={name}>
              <span className={styles.teamName}>{name}:</span> {role}
            </p>
          ))}
        </div>
        <div className={styles.institution}>
          <p>Universidade Católica de Brasília</p>
          <p>Trabalho Acadêmico</p>
          <p>Disciplina: SEO e Google Analytics</p>
          <p>Orientador: Leonardo Eterno Ribeiro</p>
        </div>
      </section>

      <section className={`${styles.panel} ${styles.links}`}>
        <nav>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <div className={styles.contacts}>
          <h2>Contatos</h2>
          <p className={styles.email}>fwordpublications@gmail.com</p>
          <p>6198341-1192</p>
        </div>
      </section>
    </footer>
  )
}
```

### `Footer.module.css`

Espelha `.footer`, `.footer-panel*` da referência.

```css
.footer {
  display: grid;
  grid-template-columns: 38.05% 39.55% 22.4%;
  gap: 2px;
  align-items: stretch;
  min-height: 468px;
  background: var(--color-black);
}

.panel {
  min-width: 0;
  background: var(--color-footer-red);
  border-radius: 44px 44px 0 0;
  color: var(--color-white);
}

.brand {
  padding: 68px 36px 35px;
}

.brand img {
  width: 395px;
  max-width: 100%;
  height: auto;
}

.brand p {
  width: 415px;
  max-width: 100%;
  margin-top: 43px;
  font-family: var(--font-article);
  font-size: 31px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.42;
  text-transform: uppercase;
}

.team {
  padding: 37px 14px 30px;
}

.panel h2 {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}

.teamList {
  margin-top: 43px;
}

.teamList p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.05;
}

.teamName {
  font: inherit;
}

.institution {
  margin-top: 47px;
}

.institution p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 27px;
  font-style: italic;
  font-weight: 100;
  line-height: 1.18;
  text-transform: uppercase;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 87px 12px 30px;
  text-align: center;
}

.links nav {
  display: grid;
  gap: 16px;
}

.links a {
  font-family: var(--font-sans);
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
}

.contacts {
  margin-top: 80px;
}

.contacts h2 {
  margin-bottom: 28px;
  font-size: 25px;
}

.contacts p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.05;
}

.email {
  font-family: var(--font-sans);
  font-style: italic;
  font-weight: 400;
}
```

---

## Critérios de aceite

Rode `npm run dev` e verifique em `http://localhost:5173/` (qualquer rota — Navbar
e Footer são compartilhados pelo Layout):

- [ ] Navbar: logo SVG à esquerda (147x27px), pills vermelhas `#ba1f1b` à direita,
      texto Inter 700 22px, gap 17px entre pills.
- [ ] Pill ativa muda para `#900f0c`.
- [ ] Footer: 3 painéis vermelho `#900f0c` lado a lado, **cantos superiores
      arredondados em 44px**, separados por uma fina linha preta de 2px.
- [ ] Painel 1: logo SVG grande (395px) + tagline Cormorant italic 31px uppercase.
- [ ] Painel 2: "Nossa Equipe:" em caps Inter 700 24px, 7 membros em Inter italic 20px,
      bloco institucional Inter italic peso 100 (light) 27px uppercase.
- [ ] Painel 3: 5 links de nav Inter 700 25px centralizados, "Contatos" embaixo com
      email + telefone Inter italic 18px.
- [ ] Fundo do body permanece `#000`, texto branco.
- [ ] Nenhuma página dentro de `src/pages/` foi modificada.

---

## Prompt para colar num chat novo

```
Leia SPEC-FIX.md e execute integralmente. Os assets já estão em public/images/.
Você deve modificar APENAS estes arquivos:
- index.html
- src/styles/global.css
- src/components/Navbar/Navbar.jsx
- src/components/Navbar/Navbar.module.css
- src/components/Footer/Footer.jsx
- src/components/Footer/Footer.module.css

Não toque em App.jsx, Layout.jsx, nem em nada dentro de src/pages/.
Rode `npm run dev` no final e confirme que a Navbar e o Footer batem com os
critérios de aceite listados na SPEC-FIX.md.

Referência canônica do código original está em /tmp/test-giulia-ref/fword-page/
caso você queira conferir algum detalhe — em particular src/App.css e src/App.jsx.
```
