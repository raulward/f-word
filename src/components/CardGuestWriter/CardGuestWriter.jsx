import { Link } from 'react-router-dom'
import styles from './CardGuestWriter.module.css'

export default function CardGuestWriter({
  to,
  title,
  subtitle,
  author,
  imageSrc,
  imageAlt,
  imageAsset,
  imageColor = '#2a0d0a',
  imagePosition = 'center',
}) {
  return (
    <Link to={to} className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundColor: imageColor, '--image-position': imagePosition }}
      >
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
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </Link>
  )
}
