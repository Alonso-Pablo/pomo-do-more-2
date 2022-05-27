import { useState } from "react"
import { RenderItem, RenderList, Task } from "@ts/types"
import { arrayMove } from "@utils/utils"
import List from "@components/List"
import TaskList from "@components/TaskList"
import TaskItem from "@components/TaskItem"

const exampleTask: Task = {
  title: 'Example Task',
  pomodoros: {
    estimated: 4,
    completed: 1,
  },
  status: {
    menu: false,
    information: false,
    editing: false,
  },
  finished: false,
}

interface TaskPanelProps {
  renderList: ({ children, props }: RenderList) => JSX.Element;
  renderItem: ({ value, props, isDragged }: RenderItem) => JSX.Element
}

export default function TaskPanel({ renderList, renderItem }: TaskPanelProps) {
  const [ tasks, setTasks ] = useState<Task[]>([exampleTask, exampleTask, exampleTask, exampleTask, exampleTask, exampleTask, exampleTask, exampleTask])

  function onChangeTasks({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) {
    setTasks(arrayMove(tasks, oldIndex, newIndex))
  }

  return (
    <List 
      values={tasks}
      onChange={onChangeTasks}
      renderList={renderList}
      renderItem={renderItem}
    />
  )
}