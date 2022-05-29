import Panel from "@components/ui/Panel"
import { RenderList } from "@ts/types"

interface TaskListProps extends RenderList {}

export default function TaskList({ children, props }: TaskListProps) {
  return (
    <Panel
      backClassName="bg-transparent pl-0"
      frontClassName="bg-transparent p-0"
    >
      <ul
        className="flex flex-col px-0 overflow-y-scroll transition-all bg-transparent rounded max-h-96 gap-y-3 first:pt-4 last:pb-2 no-scrollbar"
        {...props}
      >
        {children}
      </ul>
    </Panel>
  )
}
