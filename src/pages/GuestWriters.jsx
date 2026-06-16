import CardGuestWriter from '../components/CardGuestWriter/CardGuestWriter.jsx'
import artigoSobNovaDirecao from '../../artigo-sob-a-nova-direcao.svg'
import fotografiaModa from '../../novas_imagens/1.jpeg'
import styles from './GuestWriters.module.css'

const guestWriters = [
  {
    to: '/artigos/moda-sob-nova-direcao',
    title: 'A Moda Sob Nova Direção:',
    subtitle: 'Quando o Roteiro de O Diabo Veste Prada 2 Encontra a Realidade do Met Gala',
    author: 'Bianca Mei',
    imageSrc: artigoSobNovaDirecao,
    imageAlt: 'A Moda Sob Nova Direção',
    imageAsset: 'artigo-sob-a-nova-direcao.svg',
  },
  {
    to: '/artigos/fotografia-de-moda-na-atualidade',
    title: 'Fotografia de Moda na Atualidade:',
    subtitle: 'imagem, narrativa e consumo visual',
    author: 'Lucas Xavier (Luke Xavier)',
    imageSrc: fotografiaModa,
    imageAlt: 'Fotografia de Moda na Atualidade',
    imageAsset: 'novas_imagens/1.jpeg',
    imagePosition: 'center 38%',
  },
]

export default function GuestWriters() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p>Conheça nossos Guest Writers e os artigos desenvolvidos por eles.</p>
        <p>Explore suas análises e descubra novos interesses.</p>
      </section>

      <section className={styles.list}>
        {guestWriters.map((article) => (
          <CardGuestWriter key={article.to} {...article} />
        ))}
      </section>
    </main>
  )
}
