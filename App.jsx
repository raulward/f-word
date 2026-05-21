import './App.css'

const navItems = ['Home', 'Editoriais', 'Artigos', 'Guest Writers', 'Sobre nós']

const firstTopics = [
  {
    title: 'Autoridade e Estrutura:',
    text:
      'O uso de tecidos encorpados e silhuetas marcadas para demonstrar poder continua sendo a assinatura de personagens interpretadas por Meryl Streep, agora em um cenário de guerra por métricas.',
  },
  {
    title: 'Vulnerabilidade e Fluidez:',
    text:
      'Cortes mais leves aparecem em momentos de crise, refletindo a transição do físico para o digital, um desafio central para as protagonistas nesta nova fase.',
  },
  {
    title: 'O Novo Mercado:',
    text:
      'A mistura entre a alta-costura tradicional e o vestuário utilitário simboliza a união entre casas de luxo e marcas nativas digitais, tendência que transformou o setor desde 2006.',
  },
]

const secondTopics = [
  {
    title: 'Tecnologia Wearable:',
    text:
      'A integração definitiva da moda com o digital, é apresentada como a nova fronteira da elegância e da funcionalidade.',
  },
  {
    title: 'Vintage e Upcycling:',
    text:
      'O reaproveitamento de peças clássicas surge como resposta à sustentabilidade, honrando o legado visual do filme original dirigido por David Frankel.',
  },
  {
    title: 'Colaborações Digitais:',
    text:
      'O reflexo da evolução do mercado é visto na presença de influenciadores e marcas de redes sociais no ecossistema da revista Runway.',
  },
]

const team = [
  'Natan Barreto: Diretor de conteúdo',
  'Giulia Vieira: Designer editorial',
  'Nicole Cortês: Designer editorial',
  'Victor Oliveira: Estrategista de marketing',
  'Yasmin Gama: Estrategista de marketing',
  'Olívia Lima: Administradora',
  'Sarah Lima: Redatora',
]

function App() {
  return (
    <div className="site-shell">
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <img src="/images/logo.svg" alt="F-WORD" />
        </a>
        <div className="navbar__links">
          {navItems.map((item) => (
            <a href="#" className="navbar__link" key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="page-content">
        <div className="article-column">
          <header className="article-header">
            <h1 className="article-header__title">Diabo Veste Prada 2:</h1>
            <p className="article-header__subtitle">A Moda, o Poder e o Cerco das Big Techs</p>
            <p className="article-header__intro">
              O aguardado retorno de Miranda Priestly traz mais do que apenas figurinos
              icônicos; traz uma crítica feroz ao estado atual da comunicação. Em O Diabo
              Veste Prada 2, o glamour das passarelas divide espaço com uma realidade amarga:
              a desvalorização do jornalismo profissional diante do domínio das plataformas
              digitais.
            </p>
          </header>

          <figure className="feature-image">
            <img src="/images/imagem.svg" alt="Cena do filme O Diabo Veste Prada 2" />
          </figure>

          <article className="article-body">
            <p>
              No novo filme, os figurinos deixam de ser apenas estética para se tornarem
              ferramentas de sobrevivência. Assim como a personagem de Emily Blunt precisava
              de agilidade no primeiro longa, a nova trama reflete a necessidade de adaptação
              a um conteúdo digital dinâmico na Nova Iorque de 2026. A moda é usada para
              marcar os arcos emocionais e as tensões do mercado:
            </p>

            <ul>
              {firstTopics.map((topic) => (
                <li key={topic.title}>
                  <strong>{topic.title}</strong> {topic.text}
                </li>
              ))}
            </ul>

            <p>
              O longa-metragem atualiza o universo fashion com as pautas que dominam o mundo
              real em 2026. A estética agora precisa lidar com a velocidade e a ética como:
            </p>

            <ul>
              {secondTopics.map((topic) => (
                <li key={topic.title}>
                  <strong>{topic.title}</strong> {topic.text}
                </li>
              ))}
            </ul>

            <p>
              Se a moda ainda deslumbra, o jornalismo em O Diabo Veste Prada 2 vive um luto.
              O filme dramatiza como as Big Techs alteraram o ecossistema da informação:
              <em>
                {' '}
                "O verdadeiro luxo hoje pode ser a informação bem apurada — um bem escasso
                em tempos de feeds impulsionados por algoritmos e vídeos virais."
              </em>
            </p>

            <p>
              As redações aparecem encolhidas e os editores vivem sob a pressão das métricas.
              A lógica da viralidade substitui a curadoria editorial, reduzindo o espaço para
              a investigação e para a profundidade que antes definiam publicações de referência
              como a <strong>Runway</strong>.
            </p>

            <p>
              O filme sugere que tanto a moda quanto a mídia precisam se reinventar para não
              serem engolidas. O desafio agora é equilibrar a busca por visibilidade com a
              responsabilidade cultural. Para quem assiste, fica o convite: valorizar a apuração
              e os formatos que resistam à banalização da notícia.
            </p>
          </article>

          <p className="signature">Por Olívia Lima</p>
        </div>
      </main>

      <footer className="footer">
        <section className="footer-panel footer-panel--brand">
          <img src="/images/logo.svg" alt="F-WORD" />
          <p>Moda, cultura e comportamento para uma geração moldada pela internet.</p>
        </section>

        <section className="footer-panel footer-panel--team">
          <h2>Nossa Equipe:</h2>
          <div className="footer-panel__team">
            {team.map((member) => {
              const [name, role] = member.split(': ')

              return (
                <p key={member}>
                  <span className="footer-panel__contributor-name">{name}:</span> {role}
                </p>
              )
            })}
          </div>
          <div className="footer-panel__institution">
            <p>Universidade Católica de Brasília</p>
            <p>Trabalho Acadêmico</p>
            <p>Disciplina: SEO e Google Analytics</p>
            <p>Orientador: Leonardo Eterno Ribeiro</p>
          </div>
        </section>

        <section className="footer-panel footer-panel--links">
          <nav>
            {navItems.map((item) => (
              <a href="#" key={item}>
                {item === 'Guest Writers' ? 'Guest writers' : item}
              </a>
            ))}
          </nav>
          <div className="footer-panel__contacts">
            <h2>Contatos</h2>
            <p className="footer-panel__email">fwordpublications@gmail.com</p>
            <p>6198341-1192</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default App
