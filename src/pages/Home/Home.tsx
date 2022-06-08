import '@assets/main.css'
import AddTask from '@components/AddTask'
import TaskItem from '@components/TaskItem'
import TaskList from '@components/TaskList'
import TaskPanel from '@components/TaskPanel'
import Button from '@components/ui/Button'
import Panel from '@components/ui/Panel'

import { useClock } from '@hooks/useClock'
import formatToTimeClock from '@utils/formatToTimeClock'

export default function Home() {
  const {
    timeRest,
    clock,
    startHandler,
    pauseHandler,
    restartHandler
  } = useClock(5)

  return (
    <main className="flex h-full py-10 font-main bg-tomato-normal grow">
      <div className="flex flex-col w-full h-full max-w-lg p-5 mx-auto gap-y-10">
        <div className="flex flex-col gap-y-4 grow">
          <AddTask />
          <TaskPanel renderList={TaskList} renderItem={TaskItem} />
        </div>

        {/* Clock */}
        <div className="flex flex-col justify-between gap-y-14 grow">
          <Panel
            variant="sunken"
            backClassName="bg-tomato-darkest"
            frontClassName="bg-tomato-dark text-center text-white p-0 pb-2"
          >
            <p className="font-bold text-white select-none text-8xl">{formatToTimeClock(timeRest)}</p>
          </Panel>

          {/* Two buttons */}
          <div className="flex justify-between">
            <Button
              isPressed={clock ? true : false}
              disabled={clock ? ((timeRest) ? true : false) : false}
              height="high"
              onClick={startHandler}
            >
              <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">start</p>
            </Button>

            <Button
              isPressed={clock ? false : true}
              disabled={clock ? ((timeRest) ? false : true) : true}
              height="high"
              onClick={pauseHandler}
            >
              <p className="w-24 text-2xl font-bold uppercase text-tomato-dark">stop</p>
            </Button>
          </div>

        </div>
      </div>
    </main>
  )
}