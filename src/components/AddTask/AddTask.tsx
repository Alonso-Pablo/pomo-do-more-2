import { useState } from "react"
import { useDispatch } from "react-redux"
import clsx from "clsx"
import { v4 as uuidv4 } from 'uuid';
import { createTask } from "@redux/taskSlice"
import Button from "@components/ui/Button"
import Icon from "@components/ui/Icon"
import Input from "@components/ui/Input"
import Panel from "@components/ui/Panel"

export default function AddTask() {
  const [ isAddingTask, setIsAddingTask ] = useState<boolean>(false)
  const dispatch = useDispatch()

  function handlerAddTask() {
    setIsAddingTask(!isAddingTask)
  }

  function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const titleTask = e.currentTarget['task-name'].value

    const task = {
      id: uuidv4(),
      title: titleTask,
      pomodoros: {
        estimated: 2,
        completed: 1,
      },
      status: {
        menu: false,
        information: false,
        editing: false,
      },
      finished: false,
    }
    console.log('Tarea Creada')
    dispatch(createTask(task))
  }

  return (
    <Panel
      backClassName="w-full cursor-pointer"
      frontClassName={clsx("bg-white flex justify-between p-0 h-8 transition-all overflow-hidden", isAddingTask && "transition-all h-14")}
    >
      <Button
        variant="text"
        className={clsx('py-3', (isAddingTask === false) && 'w-full','flex justify-start items-center')}
        onClick={handlerAddTask}
      >
        <Icon
          icon="plus"
          className={clsx("rotate-0 transition-transform", isAddingTask && "flex items-center rotate-45 transition-transform")}
        />
      </Button>

      {isAddingTask &&
        <form className="flex py-3 pr-3 justify-evenly grow gap-x-3" onSubmit={handleCreateTask}>
          <Input
            name="task-name"
            placeHolder="What are we doing today?"
            labelClassName="grow"
            backClassName="bg-gray-dark"
            className="bg-gray-light h-7"
          />
          <Button
            type="submit"
            height="low"
            backClassName="bg-tomato-dark"
            frontClassName="bg-tomato-regular"
          >
            <Icon icon="arrow-enter" className="text-white fill-white" />
          </Button>
        </form>
      }
    </Panel>
  )
}
