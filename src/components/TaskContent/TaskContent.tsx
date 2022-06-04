import Button from "@components/ui/Button"
import Icon from "@components/ui/Icon"
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
      <div className="w-full flex justify-between items-center">
        <Icon
          icon="grip"
          className={clsx("fill-gray-light hover:fill-gray-normal px-3 py-2", isDragged ? 'cursor-grabbing' : 'cursor-grab')}
          data-movable-handle
        />
        {isEditing
          ? <form onSubmit={handleUpdateTask} className="flex py-3 pr-3 grow gap-x-3">
              <div className="flex grow">
                <Button
                  variant="text"
                  className="py-0 px-3"
                  type="button"
                  onClick={handleIsEditing}
                  >
                  <Icon
                    icon="plus"
                    className="flex items-center rotate-45 transition-transform"
                  />
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
                <Icon icon="arrow-enter" className="text-white fill-white" />
              </Button>
            </form>
          : <Button variant="text" className="w-full py-1.5 px-0" onClick={handleDisplayProgressBar}>
              <p className="text-center font-bold text-tomato-dark truncate">
                {value.finished
                  ? <del>{value.title}</del>
                  : value.title
                }
              </p>
            </Button>
        }
        <Button variant="text" onClick={handleDisplayOptions}>
          <Icon
            icon="option-vertical"
            className="fill-gray-light hover:fill-gray-normal"
          />
        </Button>
      </div>

      {/* Progress bar */}
      {isDisplayProgressBar &&
        <div className="w-full flex py-2 px-5 pb-2 gap-x-3">
          <div className="flex justify-center items-center bg-white rounded-lg">
            <Icon icon="pomo-targeted" />
            <p className="text-tomato-darkest font-semibold">
              {value.pomodoros.estimated}
            </p>
          </div>
          <div className="grow flex items-center">
            <div className="bg-gray-light w-full py-1 px-1.5 rounded-full">
              <div style={{width: `${percentCompleted}%`}} className={`bg-tomato-normal py-0.5 pb-1.5 px-2 rounded-full`}>
                <div className="w-full bg-tomato-light py-0.5 rounded-full">
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-cente">
            <Icon icon="pomo-completed" />
            <p className="text-tomato-darkest font-semibold">
              {value.pomodoros.completed}
            </p>
          </div>
        </div>
      }

      {/* More Options */}
      {isDisplayOptions &&
        <div className="w-full flex py-2 px-5">
          <div className="flex justify-start grow">
            <Button onClick={handleDoneTask} height="low" backClassName="bg-green-dark" frontClassName="bg-green-normal py-0 w-24">
              <p className="text-white font-semibold text-lg">
                {value.finished
                  ? "Undone"
                  : "Done"
                }
              </p>
            </Button>
          </div>
          <div className="flex justify-center grow">
            <Button onClick={handleIsEditing} height="low"  frontClassName="bg-gray-ultralight py-0 w-24">
              <p className="text-tomato-dark font-semibold text-lg">
                Edit
              </p>
            </Button>
          </div>
          <div className="flex justify-end grow">
            <Button onClick={handleRemoveTask} height="low" backClassName="bg-tomato-dark " frontClassName="bg-tomato-normal py-0 w-24">
              <p className="text-white font-semibold text-lg">
                Delete
              </p>
            </Button>
          </div>
        </div>
      }
    </>
  )
}
