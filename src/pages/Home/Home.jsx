import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'
import CardEmFoco from '../../components/CardEmFoco/CardEmFoco.jsx'
import CardArtigo from '../../components/CardArtigo/CardArtigo.jsx'
import CardGuestWriter from '../../components/CardGuestWriter/CardGuestWriter.jsx'
import diaboEmFoco from '../../../GettyImages-2244990664 1.png'
import cabeloPolitica from '../../../artigo-cabelo-politica.svg'
import artigoSobNovaDirecao from '../../../artigo-sob-a-nova-direcao.svg'
import artigoAlemDoLook from '../../../artigo-alem-do-look.svg'
import artigoInternet from '../../../artigo-a-internet.svg'
import artigoImagem3 from '../../../3.svg'
import fotografiaModaGuest from '../../../novas_imagens/1.jpeg'
import equilibrivmModaGuest from '../../assets/equilibrivm/capa.jpeg'
import quemContaAModa from '../../assets/quem-conta-a-moda/capa.png'
import meiaNoiteParisGuest from '../../assets/meia-noite-paris/capa.jpeg'
import styles from './Home.module.css'

const destaque = {
  to: '/artigos/quem-conta-a-moda',
  title: 'Quem conta a moda?',
  body: 'Entre pesquisa, crítica e tradução cultural, três comunicadoras refletem sobre o papel da comunicação na construção da moda brasiliense.',
  imageSrc: quemContaAModa,
  imageAlt: 'Exposição de moda brasiliense com peças em manequins',
  imageAsset: 'src/assets/quem-conta-a-moda/capa.png',
  imageColor: '#d5c2a7',
  imagePosition: 'center 45%',
}

const emFoco = [
  {
    to: '/artigos/fotografia-de-moda-na-atualidade',
    title: 'Fotografia de Moda na Atualidade:',
    subtitle: 'imagem, narrativa e consumo visual',
    imageSrc: fotografiaModaGuest,
    imageAlt: 'Fotografia de Moda na Atualidade',
    imageAsset: 'novas_imagens/1.jpeg',
    imageColor: '#2a0d0a',
    imagePosition: 'center 38%',
  },
  {
    to: '/artigos/cabelo-como-politica',
    title: 'Cabelo como política:',
    subtitle: 'tranças, dreads e a resistência negra',
    imageSrc: cabeloPolitica,
    imageAlt: 'Pessoas trançando cabelo',
    imageAsset: 'artigo-cabelo-politica.svg',
    imageColor: '#1f1410',
  },
]

const artigos = [
  {
    to: '/artigos/diabo-veste-prada',
    title: 'Diabo Veste Prada 2:',
    body: 'A moda, o Poder e o Cerco das Big Techs',
    imageSrc: diaboEmFoco,
    imageAlt: 'Miranda Priestly em vestido vermelho',
    imageAsset: 'em-foco-diabo-veste-prada.jpg',
    imageColor: '#5a1a16',
    imagePosition: '56% 18%',
  },
  {
    to: '/artigos/muito-alem-do-look',
    title: 'Muito além do look do dia: O que a sua roupa diz sobre a sua idade (e o seu bolso)',
    body: 'Do look “diferentão” à escolha inteligente: veja como as prioridades de consumo mudam dos 18 aos 30 anos',
    imageSrc: artigoAlemDoLook,
    imageAlt: 'Imagem do artigo Muito além do look do dia',
    imageAsset: 'artigo-alem-do-look.svg',
    imageColor: '#3a1f1a',
  },
  {
    to: '/artigos/internet-transformou-tendencia',
    title: 'A internet transformou autenticidade em tendência:',
    body: "Numa época em que tudo é conteúdo, até o 'ser você mesmo' virou estratégia",
    imageSrc: artigoInternet,
    imageAlt: 'Imagem do artigo A internet transformou autenticidade em tendência',
    imageAsset: 'artigo-a-internet.svg',
    imageColor: '#2b1a12',
  },
  {
    to: '/artigos/o-que-voce-veste',
    title: 'O que você veste diz quem você é (ou quem quer ser):',
    body: 'Moda, identidade e os códigos invisíveis que carregamos no corpo',
    imageSrc: artigoImagem3,
    imageAlt: 'Imagem do artigo O que você veste diz quem você é ou quem quer ser',
    imageAsset: '3.svg',
    imageColor: '#3a2218',
  },
]

const guestWriters = [
  {
    to: '/artigos/sindrome-meia-noite-paris',
    title: 'Síndrome de Meia-Noite em Paris:',
    subtitle: 'Porque a Geração Z está obcecada pelos anos 2000?',
    author: 'Vini Santin',
    imageSrc: meiaNoiteParisGuest,
    imageAlt: 'Imagem do guest writer Síndrome de Meia-Noite em Paris',
    imageAsset: 'src/assets/meia-noite-paris/capa.jpeg',
    imageColor: '#1b1715',
    imagePosition: '40% center',
  },
  {
    to: '/artigos/equilibrivm-e-a-moda',
    title: 'A moda como instrumento de transição nas eras na carreira de divas pop:',
    subtitle: 'Anitta e a era EQUILIBRIVM',
    author: 'Duda Lucena',
    imageSrc: equilibrivmModaGuest,
    imageAlt: 'Imagem do guest writer Anitta e a era EQUILIBRIVM',
    imageAsset: 'src/assets/equilibrivm/capa.jpeg',
    imageColor: '#2a0d0a',
    imagePosition: 'center 42%',
  },
  {
    to: '/artigos/moda-sob-nova-direcao',
    title: 'A Moda Sob Nova Direção:',
    subtitle: 'Quando o Roteiro de O Diabo Veste Prada 2 Encontra a Realidade do Met Gala',
    author: 'Bianca Mei',
    imageSrc: artigoSobNovaDirecao,
    imageAlt: 'Imagem do guest writer A Moda Sob Nova Direção',
    imageAsset: 'artigo-sob-a-nova-direcao.svg',
    imageColor: '#2a0d0a',
  },
  {
    to: '/artigos/fotografia-de-moda-na-atualidade',
    title: 'Fotografia de Moda na Atualidade:',
    subtitle: 'imagem, narrativa e consumo visual',
    author: 'Lucas Xavier (Luke Xavier)',
    imageSrc: fotografiaModaGuest,
    imageAlt: 'Imagem do guest writer Fotografia de Moda na Atualidade',
    imageAsset: 'novas_imagens/1.jpeg',
    imageColor: '#2a0d0a',
    imagePosition: 'center 38%',
  },
]

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroBanner />

      <section className={`${styles.section} ${styles.destaque}`}>
        <CardArtigo {...destaque} />
      </section>

      <section className={`${styles.section} ${styles.emFocoSection}`}>
        <h2 className={styles.sectionTitle}>Em foco:</h2>
        <div className={styles.emFocoGrid}>
          {emFoco.map((card) => (
            <CardEmFoco key={card.to} {...card} />
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.artigos}`}>
        <h2 className={styles.sectionTitle}>Artigos:</h2>
        <div className={styles.artigosStack}>
          {artigos.map((card, i) => (
            <CardArtigo key={`${card.to}-${i}`} {...card} />
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.guest}`}>
        <h2 className={styles.sectionTitle}>Guest Writers:</h2>
        <div className={styles.guestStack}>
          {guestWriters.map((card) => (
            <CardGuestWriter key={card.to} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}
