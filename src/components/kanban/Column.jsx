import { Droppable, Draggable } from 'react-beautiful-dnd'
import styles from './kanban.module.css'

export default function Column({ jobs, columnName }) {
  return (
    <div className={styles.column}>
      <Droppable droppableId={columnName}>
        {(provided) => (
          // Droppable Content
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {jobs.map((job, index) => {
              return (
                // Draggable Item
                <Draggable key={job.id} draggableId={job.id} index={index}>
                  {(provided) => (
                    <li
                      className={styles.title}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <h3>{job.title}</h3>
                      {job.company}
                    </li>
                  )}
                </Draggable>
                // End Draggable Item
              )
            })}
            {provided.placeholder}
          </ul>
          // End Droppable Content
        )}
      </Droppable>
    </div>
  )
}
