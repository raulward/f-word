import { Link } from 'react-router-dom'
import styles from './CardEmFoco.module.css'

export default function CardEmFoco({
  to,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageAsset,
  imageColor = '#3a1410',
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
      </div>
    </Link>
  )
}
