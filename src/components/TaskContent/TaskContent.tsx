import Button from "@components/ui/Button"
import Icon from "@components/ui/Icon"
import clsx from "clsx"
import { useState } from "react"
import { removeTask } from "@redux/taskSlice"
import { useDispatch } from "react-redux"

export default function TaskContent({ value, isDragged }: any) {
  const [ isDisplayOptions, setIsDisplayOptions ] = useState<boolean>(false)
  const dispatch = useDispatch()

  function handleDisplayOption() {
    setIsDisplayOptions(!isDisplayOptions)
  }

  function handleRemoveTask() {
    dispatch(removeTask(value))
    handleDisplayOption()
  }

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Icon
          icon="grip"
          className={clsx("fill-gray-light hover:fill-gray-normal px-3 py-2", isDragged ? 'cursor-grabbing' : 'cursor-grab')}
          data-movable-handle />
        <p className="font-bold text-tomato-dark">
          {value.title}
        </p>
        <Button variant="text" onClick={handleDisplayOption}>
          <Icon
            icon="option-vertical"
            className=" fill-gray-light hover:fill-gray-normal"
          />
        </Button>
      </div>

      {isDisplayOptions &&
        <div className="w-full flex justify-evenly py-1">
          <Button height="low" backClassName="bg-green-dark" frontClassName="bg-green-normal py-0">
            <p className="text-white font-semibold text-lg">
              Done
            </p>
          </Button>
          <Button height="low" frontClassName="py-0">
            <p className="text-tomato-dark  font-semibold text-lg">
              Edit
            </p>
          </Button>
          <Button onClick={handleRemoveTask} height="low" backClassName="bg-tomato-dark " frontClassName="bg-tomato-normal py-0">
            <p className="text-white font-semibold text-lg">
              Delete
            </p>
          </Button>
        </div>
      }
    </>
  )
}
