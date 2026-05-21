import { Link } from 'react-router-dom'
import heroVideo from '../../assets/video/hero-loop.mp4'
import styles from './HeroBanner.module.css'

const tags = [
  'FASHION',
  'CULTURE',
  'INTERNET',
  'IDENTITY',
  'ART',
  'BEHAVIOR',
  'SUBCULTURES',
  'GEN Z',
]

const marqueeTrack = [...tags, ...tags]

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className={styles.overlay}>
        <img
          src="/images/logo.svg"
          alt="F-WORD"
          className={styles.logo}
        />
        <div className={styles.row}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              MODA COMO
              <br />
              LINGUAGEM CULTURAL
            </p>
            <p className={styles.lede}>
              Tendências, comportamento e identidade analisados sob uma
              perspectiva concisa, social e digital.
            </p>
          </div>
          <Link to="/artigos" className={styles.cta}>
            EXPLORAR ARTIGOS
          </Link>
        </div>
      </div>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {marqueeTrack.map((tag, i) => (
            <span key={`${tag}-${i}`} className={styles.marqueeItem}>
              <span className={styles.tagText}>{tag}</span>
              <span className={styles.dash}>—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
