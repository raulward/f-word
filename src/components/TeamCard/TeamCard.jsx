import styles from './TeamCard.module.css'

export default function TeamCard({ name, logo, logoSrc, role, bio }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {logoSrc ? <img src={logoSrc} alt="" loading="lazy" decoding="async" /> : logo}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>
          {name} - {role}
        </p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  )
}
