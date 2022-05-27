import { useState } from "react"
import Button from "@components/ui/Button"
import Icon from "@components/ui/Icon"
import Input from "@components/ui/Input"
import Panel from "@components/ui/Panel"
import clsx from "clsx"

export default function AddTask() {
  const [ isAddingTask, setIsAddingTask ] = useState<boolean>(false)

  function handlerAddTask() {
    setIsAddingTask(!isAddingTask)
    return
  }

  return (
    <Panel
      backClassName="w-full cursor-pointer"
      frontClassName="bg-white flex justify-between"
    >
      <Button
        variant="text"
        className={clsx(!isAddingTask && 'w-full','flex justify-start px-1')}
        onClick={handlerAddTask}
      >
        <Icon icon="plus" className="flex items-center"/>
      </Button>

      {isAddingTask &&
        <form className="flex justify-evenly grow" onSubmit={()=> console.log('submiteando')}>
          <Input
            placeHolder="What are we doing today?"
            labelClassName="grow px-3"
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
