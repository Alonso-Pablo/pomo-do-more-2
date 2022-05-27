import clsx from "clsx"
import { ItemProps, RenderItem, Task } from "@ts/types"
import Icon from "@components/ui/Icon"
import Button from "@components/ui/Button"

interface TaskItemProps extends RenderItem {}

export default function TaskItem({ value, props, isDragged }: TaskItemProps) {
  return (
    <li
      key={props.key}
      {...props}
    >
      <Button height="low" backClassName="w-full" frontClassName="flex justify-between">
        <Icon
          icon="grip"
          className={clsx(isDragged ? 'cursor-grabbing' : 'cursor-grab', "fill-gray-light hover:fill-gray-regular")}
          data-movable-handle
        />
        <p className="font-bold text-tomato-dark">{value.title}</p>
        <Icon icon="option-vertical" className="fill-gray-light hover:fill-gray-regular"/>
      </Button>
    </li>
  )
}
