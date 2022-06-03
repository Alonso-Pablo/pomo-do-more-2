import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RenderItem, RenderList, State, Task } from "@ts/types"
import { arrayMove } from "@utils/utils"
import List from "@components/List"
import { RootState } from "redux/store"

interface TaskPanelProps {
  renderList: ({ children, props }: RenderList) => JSX.Element;
  renderItem: ({ value, props, isDragged }: RenderItem) => JSX.Element
}

export default function TaskPanel({ renderList, renderItem }: TaskPanelProps) {
  const task = useSelector((state: RootState) => state.task.task.tasks);
  const state = useSelector((state: RootState) => state.task)
  const [ tasks, setTasks ] = useState<Task[]>([])


  function onChangeTasks({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) {
    setTasks(arrayMove(tasks, oldIndex, newIndex))
  }

  useEffect(() => {
    setTasks(task)
    localStorage.setItem('pomo-state', JSON.stringify(state))
  }, [task])

  return (
    <List 
      values={tasks}
      onChange={onChangeTasks}
      renderList={renderList}
      renderItem={renderItem}
    />
  )
}