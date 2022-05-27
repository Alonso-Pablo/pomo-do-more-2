import Panel from "@components/ui/Panel"
import { RenderList } from "@ts/types"

interface TaskListProps extends RenderList {}

export default function TaskList({ children, props }: TaskListProps) {
  return (
    <Panel
      backClassName="mt-1 bg-transparent pl-0"
      frontClassName="bg-transparent p-0 mt-4"
    >
      <ul
        className="flex flex-col px-0 pt-1 overflow-y-scroll bg-transparent rounded no-scrollbar max-h-40 gap-y-5" 
        {...props}
      >
        {children}
      </ul>
    </Panel>
  )
}
