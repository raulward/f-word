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
