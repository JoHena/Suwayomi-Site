import styles from '../app/scss/clients.module.scss'

export function ClientCard({ href, icon, title, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <span className={styles.arrow} aria-hidden="true">&rarr;</span>
      </span>
      <div className={styles.desc}>{children}</div>
    </a>
  )
}
