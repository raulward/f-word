import styles from './ArticleLayout.module.css'

export default function ArticleLayout({
  title,
  subtitle,
  intro,
  author,
  hero,
  children,
}) {
  return (
    <article className={styles.article}>
      <div className={styles.column}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>

        {hero && <figure className={styles.featureImage}>{hero}</figure>}

        <div className={styles.body}>{children}</div>

        {author && <p className={styles.signature}>Por {author}</p>}
      </div>
    </article>
  )
}
