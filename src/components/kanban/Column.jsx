import KanbanItem from './KanbanItem'
import styles from './kanban.module.css'

export default function Column({ jobs }) {
  return (
    <div className={styles.column}>
      {jobs.map((job) => {
        return <KanbanItem job={job} key={job.id} />
      })}
    </div>
  )
}
