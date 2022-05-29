import clsx from "clsx"
import { RenderItem } from "@ts/types"
import Icon from "@components/ui/Icon"
import Button from "@components/ui/Button"

interface TaskItemProps extends RenderItem {}

export default function TaskItem({ value, props, isDragged }: TaskItemProps) {
  return (
    <li
      key={props.key}
      className={clsx("px-3", isDragged === false && "animate-appearBottom")} // FUTURE CONFIG
      {...props}
    >
      <Button
        height="low"
        backClassName="w-full"
        frontClassName="flex justify-between p-0"
      >
        <Icon
          icon="grip"
          className={clsx("fill-gray-light hover:fill-gray-regular px-3 py-2", isDragged ? 'cursor-grabbing' : 'cursor-grab')}
          data-movable-handle
        />
        <p className="font-bold text-tomato-dark">{value.title}</p>
        <Icon icon="option-vertical" className="px-3 py-2 fill-gray-light hover:fill-gray-regular"/>
      </Button>
    </li>
  )
}
