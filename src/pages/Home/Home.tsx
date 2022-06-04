import '@assets/main.css'
import AddTask from '@components/AddTask'
import TaskItem from '@components/TaskItem'
import TaskList from '@components/TaskList'
import TaskPanel from '@components/TaskPanel'
import Button from '@components/ui/Button'
import Panel from '@components/ui/Panel'
import { RootState } from '@redux/store'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

export default function Home() {
  const tasks = useSelector((state: RootState) => state.task.task.tasks)
  console.log(tasks)
  return (
    <main className="flex h-full font-main bg-tomato-normal grow py-10">
      <div className="flex flex-col w-full h-full max-w-lg p-5 mx-auto gap-y-10">
        <div className={clsx("flex flex-col gap-y-4 grow",
          tasks.length ? "justify-start" : "justify-center"
        )}>
          {/* First hole - Add Tasks */}
          <AddTask />
          {/* Second hole - Panel Tasks */}
          <TaskPanel renderList={TaskList} renderItem={TaskItem} />
        </div>

        {/* Clock */}
        <div className="flex flex-col gap-y-8">
          <Panel
            variant="sunken"
            backClassName="bg-tomato-darkest"
            frontClassName="bg-tomato-dark text-center text-white p-0 pb-2"
            >
              <p className="text-white font-bold text-8xl">25:00</p>
          </Panel>

          {/* Buttons */}
          <div className="flex justify-between">
            <Button height="high">
              <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">start</p>
            </Button>

            <Button height="high">
              <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">stop</p>
            </Button>
          </div>

        </div>
      </div>
    </main>
  )
}