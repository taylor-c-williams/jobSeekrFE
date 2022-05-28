import styles from './kanban.module.css'

export default function KanbanItem({ job }) {
  return (
    <div>
      <ul className={styles.kanbanItem}>
        <li className={styles.title}>
          <h3>{job.title}</h3>
        </li>
        <li>{job.company}</li>
      </ul>
    </div>
  )
}
