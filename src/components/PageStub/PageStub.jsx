import styles from './PageStub.module.css'

export default function PageStub({ title, kicker }) {
  return (
    <section className={styles.stub}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.note}>Em construção.</p>
    </section>
  )
}
