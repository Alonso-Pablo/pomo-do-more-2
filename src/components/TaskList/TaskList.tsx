import Panel from "@components/ui/Panel"
import { RenderList } from "@ts/types"

interface TaskListProps extends RenderList {}

export default function TaskList({ children, props }: TaskListProps) {
  if (children instanceof Array && children.length) return (
    <Panel
      variant="sunken"
      backClassName="bg-tomato-darkest"
      frontClassName="flex w-full bg-tomato-dark p-0"
    >
      <ul
        className="flex flex-col w-full px-0 pb-3 overflow-y-scroll transition-all bg-transparent rounded max-h-96 gap-y-3 first:pt-3 no-scrollbar"
        {...props}
      >
        {children}
      </ul>
    </Panel>
  )

  return (<ul className="hidden" {...props}></ul>)
}
