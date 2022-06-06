import { Draggable } from 'react-beautiful-dnd'
import styles from './kanban.module.css'

export default function KanbanItem(job, index) {
  return (
    <li className={styles.title}>
      <h3>{job.title}</h3>
      {job.company}
    </li>
  )
}
