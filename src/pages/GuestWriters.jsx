import CardGuestWriter from '../components/CardGuestWriter/CardGuestWriter.jsx'
import artigoSobNovaDirecao from '../../artigo-sob-a-nova-direcao.svg'
import styles from './GuestWriters.module.css'

export default function GuestWriters() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p>Conheça nossos Guest Writers e os artigos desenvolvidos por eles.</p>
        <p>Explore suas análises e descubra novos interesses.</p>
      </section>

      <section className={styles.list}>
        <CardGuestWriter
          to="/artigos/moda-sob-nova-direcao"
          title="A Moda Sob Nova Direção:"
          subtitle="Quando o Roteiro de O Diabo Veste Prada 2 Encontra a Realidade do Met Gala"
          author="Bianca Mei"
          imageSrc={artigoSobNovaDirecao}
          imageAlt="A Moda Sob Nova Direção"
          imageAsset="artigo-sob-a-nova-direcao.svg"
        />
      </section>
    </main>
  )
}
