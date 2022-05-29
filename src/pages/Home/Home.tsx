import '@assets/main.css'
import AddTask from '@components/AddTask'
import TaskItem from '@components/TaskItem'
import TaskList from '@components/TaskList'
import TaskPanel from '@components/TaskPanel'
import Button from '@components/ui/Button'
import Panel from '@components/ui/Panel'

export default function Home() {
  return (
    <main className="flex w-full h-full font-main bg-tomato-regular grow">
      <div className="flex flex-col justify-center w-full h-full max-w-lg p-5 mx-auto gap-y-10">
        <div className="flex flex-col gap-y-4">
          {/* First hole - Add Tasks */}
          <Panel
            variant="sunken"
            backClassName="bg-tomato-darkest"
            frontClassName="bg-tomato-dark pt-3"
            >
            <AddTask />
          </Panel>

          {/* Second hole - Panel Tasks */}
          <Panel
            variant="sunken"
            backClassName="bg-tomato-darkest"
            frontClassName="bg-tomato-dark p-0"
            >
            <TaskPanel renderList={TaskList} renderItem={TaskItem} />
          </Panel>
        </div>

        {/* Clock */}
        <div className="flex flex-col gap-y-8">
          <Panel
            backClassName="bg-tomato-dark"
            frontClassName="bg-tomato-light text-center text-white"
            >
              <p className="font-bold text-8xl">25:00</p>
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