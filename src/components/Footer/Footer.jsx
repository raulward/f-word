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
