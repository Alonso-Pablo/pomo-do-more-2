import Button from "@components/ui/Button"
import { Grip, Plus, ArrowEnter, OptionVertical, PomoTargeted, PomoCompleted } from '@components/Icons'
import clsx from "clsx"
import { useEffect, useState } from "react"
import { createTask, updateTask, removeTask } from "@redux/taskSlice"
import { useDispatch } from "react-redux"
import Input from "@components/ui/Input"
import { Task } from "@ts/types"

interface TaskContentProps {
  value: Task;
  isDragged: boolean;
}

export default function TaskContent({ value, isDragged }: TaskContentProps) {
  const [ isDisplayOptions, setIsDisplayOptions ] = useState<boolean>(false)
  const [ isEditing, setIsEditing ] = useState<boolean>(false)
  const [ isDisplayProgressBar, setIsDisplayProgressBar ] = useState<boolean>(false)
  const [ percentCompleted, setPercentCompleted ] = useState<number>(0)
  const dispatch = useDispatch()

  function handleDisplayOptions() {
    setIsDisplayOptions(!isDisplayOptions)
  }

  function handleIsEditing() {
    setIsEditing(!isEditing)
  }

  function handleDisplayProgressBar() {
    setIsDisplayProgressBar(!isDisplayProgressBar)
  }

  function handleDoneTask() {
    dispatch(removeTask(value))
    const finishedTask = {
      ...value,
      finished: !value.finished,
    }
    dispatch(createTask(finishedTask))
  }

  function handleUpdateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const titleTask = e.currentTarget['new-task-name'].value

    const editedTask = {
      ...value,
      title: titleTask,
    }
    dispatch(updateTask(editedTask))
    handleIsEditing()
  }

  function handleRemoveTask() {
    dispatch(removeTask(value))
    handleDisplayOptions()
  }

  function handleProgressBar() {
    const { pomodoros } = value
    const percentCompleted = ((pomodoros.completed * 100) / pomodoros.estimated)
    setPercentCompleted(percentCompleted)
  }

  useEffect(() => {
    handleProgressBar()
  }, [value.pomodoros.completed, value.pomodoros.estimated])

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Grip
          data-movable-handle
          className={clsx("fill-gray-light hover:fill-gray-normal px-3 py-2", isDragged ? 'cursor-grabbing' : 'cursor-grab')}
        />
        {isEditing
          ? <form onSubmit={handleUpdateTask} className="flex py-3 pr-3 grow gap-x-3">
              <div className="flex grow">
                <Button
                  variant="text"
                  className="px-3 py-0"
                  type="button"
                  onClick={handleIsEditing}
                >
                  <Plus className="flex items-center transition-transform rotate-45" />
                </Button>
                <Input
                  name="new-task-name"
                  className="bg-gray-light h-7"
                  labelClassName="grow"
                  defaultValue={value.title}
                  required
                />
              </div>
              <Button
                type="submit"
                height="low"
                backClassName="bg-tomato-dark"
                frontClassName="bg-tomato-normal"
              >
                <ArrowEnter className="text-white fill-white" />
              </Button>
            </form>
          : <Button variant="text" className="w-full py-1.5 px-0" onClick={handleDisplayProgressBar}>
              <p className="font-bold text-center truncate text-tomato-dark">
                {value.finished
                  ? <del>{value.title}</del>
                  : value.title
                }
              </p>
            </Button>
        }
        <Button variant="text" onClick={handleDisplayOptions}>
          <OptionVertical className="fill-gray-light hover:fill-gray-normal" />
        </Button>
      </div>

      {/* Progress bar */}
      {isDisplayProgressBar &&
        <div className="flex w-full px-5 py-2 pb-2 gap-x-3">
          <div className="flex items-center justify-center bg-white rounded-lg">
            <PomoTargeted />
            <p className="font-semibold text-tomato-darkest">
              {value.pomodoros.estimated}
            </p>
          </div>
          <div className="flex items-center grow">
            <div className="bg-gray-light w-full py-1 px-1.5 rounded-full">
              <div style={{width: `${percentCompleted}%`}} className={`bg-tomato-normal py-0.5 pb-1.5 px-2 rounded-full`}>
                <div className="w-full bg-tomato-light py-0.5 rounded-full">
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-cente">
            <PomoCompleted />
            <p className="font-semibold text-tomato-darkest">
              {value.pomodoros.completed}
            </p>
          </div>
        </div>
      }

      {/* More Options */}
      {isDisplayOptions &&
        <div className="flex w-full px-5 py-2 gap-x-3">
          <div className="flex justify-start grow">
            <Button 
              onClick={handleDoneTask}
              height="low"
              backClassName="bg-green-dark grow"
              frontClassName="bg-green-normal py-0 px-0"
            >
              <p className="text-lg font-semibold text-white">
                {value.finished
                  ? "Undone"
                  : "Done"
                }
              </p>
            </Button>
          </div>
          <div className="flex justify-center grow">
            <Button 
              isPressed={isEditing}
              onClick={handleIsEditing}
              height="low"
              backClassName="grow"
              frontClassName="bg-gray-ultralight py-0 px-0"
            >
              <p className="text-lg font-semibold text-tomato-dark">
                Edit
              </p>
            </Button>
          </div>
          <div className="flex justify-end grow">
            <Button 
              onClick={handleRemoveTask}
              height="low"
              backClassName="bg-tomato-dark grow"
              frontClassName="bg-tomato-normal py-0 px-0"
            >
              <p className="text-lg font-semibold text-white">
                Delete
              </p>
            </Button>
          </div>
        </div>
      }
    </>
  )
}
