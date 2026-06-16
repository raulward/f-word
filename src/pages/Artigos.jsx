import { Link } from 'react-router-dom'
import PageStub from '../components/PageStub/PageStub.jsx'

export const articles = [
  { slug: 'moda-sob-nova-direcao', title: 'A Moda Sob Nova Direção' },
  { slug: 'diabo-veste-prada', title: 'Diabo Veste Prada 2' },
  { slug: 'cabelo-como-politica', title: 'Cabelo como Política' },
  { slug: 'internet-transformou-tendencia', title: 'A Internet Transformou a Tendência' },
  { slug: 'muito-alem-do-look', title: 'Muito Além do Look' },
  { slug: 'o-que-voce-veste', title: 'O que Você Veste Diz Quem Você É (ou Quem Quer Ser)' },
]

export default function Artigos() {
  return (
    <>
      <PageStub title="Artigos" kicker="Artigos" />
      <ul style={{ padding: '0 64px 80px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {articles.map((a) => (
          <li key={a.slug}>
            <Link to={`/artigos/${a.slug}`} style={{ fontSize: 22, color: 'var(--color-red)' }}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
