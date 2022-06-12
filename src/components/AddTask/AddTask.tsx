import { useState } from "react"
import { useDispatch } from "react-redux"
import clsx from "clsx"
import { v4 as uuidv4 } from 'uuid';
import { createTask } from "@redux/taskSlice"
import Button from "@components/ui/Button"
import Input from "@components/ui/Input"
import Panel from "@components/ui/Panel"
import { ArrowEnter, Plus } from "@components/icons";

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
    dispatch(createTask(task))

    e.currentTarget['task-name'].value = ''
  }

  return (
    <Panel
      variant="sunken"
      backClassName="bg-tomato-darkest"
      frontClassName="bg-tomato-dark pt-3"
    >
      <Panel
        backClassName="w-full cursor-pointer"
        frontClassName={clsx("bg-white flex justify-between p-0 h-8 transition-all overflow-hidden", isAddingTask && "transition-all h-14")}
      >
        <Button
          variant="text"
          className={clsx('py-3', (isAddingTask === false) && 'w-full','flex justify-start items-center')}
          onClick={handlerAddTask}
        >
          <Plus
            className={clsx(
              "rotate-0 transition-transform text-tomato-dark",
              isAddingTask && "flex items-center rotate-45 transition-transform"
            )}
          />
        </Button>

        {isAddingTask &&
          <form className="flex py-3 pr-3 justify-evenly grow gap-x-3" onSubmit={handleCreateTask}>
            <Input
              name="task-name"
              placeHolder="What are we going to do today?"
              labelClassName="grow"
              backClassName="bg-gray-dark"
              className="bg-gray-light h-7"
              required
            />
            <Button
              type="submit"
              height="low"
              backClassName="bg-tomato-dark"
              frontClassName="bg-tomato-normal"
            >
              <ArrowEnter className="text-white" />
            </Button>
          </form>
        }
      </Panel>
    </Panel>
  )
}
