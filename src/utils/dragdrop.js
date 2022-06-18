/**
 * A semi-generic way to handle multiple lists. Matches
 * the IDs of the droppable container to the names of the
 * source arrays stored in the state.
 */
const id2List = {
  droppable: 'items',
  droppable2: 'selected',
}

const getList = (id) => this.state[this.id2List[id]]

// Reordering result list
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

//  Move an item from one list to another list
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const onDragEnd = (result) => {
  const { source, destination } = result

  // dropped outside the list
  if (!destination) {
    return
  }

  if (source.droppableId === destination.droppableId) {
    const items = reorder(
      this.getList(source.droppableId),
      source.index,
      destination.index
    )

    let state = { items }

    if (source.droppableId === 'droppable2') {
      state = { selected: items }
    }

    this.setState(state)
  } else {
    const result = move(
      this.getList(source.droppableId),
      this.getList(destination.droppableId),
      source,
      destination
    )

    this.setState({
      items: result.droppable,
      selected: result.droppable2,
    })
  }
}
