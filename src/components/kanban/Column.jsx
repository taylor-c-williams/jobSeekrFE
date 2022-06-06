import KanbanItem from './KanbanItem'
import styles from './kanban.module.css'

export default function Column({ jobs, columnName }) {
  let columnJobs = []
  const columnType = `job.${columnName}`
  console.log(columnType)

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i]
    if (`${columnType}` === true) {
      columnJobs.push(job)
    }
  }
  console.log(columnJobs)
  return (
    <div className={styles.column}>
      {columnJobs.map((job) => {
        return <KanbanItem job={job} key={job.id} />
      })}
    </div>
  )
}
