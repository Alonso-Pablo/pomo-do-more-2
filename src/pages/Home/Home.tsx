import '@assets/main.css'
import AddTask from '@components/AddTask'
import TaskItem from '@components/TaskItem'
import TaskList from '@components/TaskList'
import TaskPanel from '@components/TaskPanel'
import Button from '@components/ui/Button'
import Panel from '@components/ui/Panel'

export default function Home() {
  return (
    <main className="h-screen font-main bg-tomato-regular">
      <div className="max-w-lg p-5 mx-auto">
        {/* Tasks */}
        <Panel
          variant="sunken"
          backClassName="bg-tomato-darkest"
          frontClassName="bg-tomato-dark"
        >
          <AddTask />
          <TaskPanel renderList={TaskList} renderItem={TaskItem} />
        </Panel>

        {/* Clock */}
        <Panel backClassName="bg-tomato-dark my-3" frontClassName="bg-tomato-light text-center text-white">
            <p className="font-bold text-8xl">25:00</p>
        </Panel>
        <div className="flex justify-between my-5">
          <Button height="high">
            <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">start</p>
          </Button>

          <Button height="high">
            <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">stop</p>
          </Button>
        </div>
      </div>
    </main>
  )
}