import { Link } from 'react-router-dom'
import styles from './CardArtigo.module.css'

export default function CardArtigo({
  to,
  title,
  body,
  imageSrc,
  imageAlt,
  imageAsset,
  imageColor = '#3a1f1a',
}) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.image} style={{ backgroundColor: imageColor }}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt || imageAsset || title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.lede}>{body}</p>
      </div>
    </Link>
  )
}
