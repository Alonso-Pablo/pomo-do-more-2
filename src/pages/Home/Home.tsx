import '@assets/main.css'
import AddTask from '@components/AddTask'
import { Gear, Reload, User, Speaker } from '@components/Icons'
import OptionVertical from '@components/Icons/OptionVertical'
import TaskItem from '@components/TaskItem'
import TaskList from '@components/TaskList'
import TaskPanel from '@components/TaskPanel'
import Button from '@components/ui/Button'
import Panel from '@components/ui/Panel'

import { useClock } from '@hooks/useClock'
import formatToTimeClock from '@utils/formatToTimeClock'
import { useState } from 'react'

export default function Home() {
  const {
    timeRest,
    clock,
    startHandler,
    pauseHandler,
    restartHandler
  } = useClock(5)

  const [ isDisplayConfig, setIsDisplayConfig ] = useState<boolean>(false)
  const [ isMuted, setIsMuted ] = useState<boolean>(false) // TO DO: Pasarlos a la configuracion (dentro del estado)

  return (
    <main className="flex h-full py-10 font-main bg-tomato-normal grow">
      <div className="flex flex-col w-full h-full max-w-lg p-5 mx-auto gap-y-10">
        <div className="flex flex-col gap-y-4 grow">
          <AddTask />
          <TaskPanel renderList={TaskList} renderItem={TaskItem} />
        </div>

        <div className="flex flex-col justify-between gap-y-14 grow">
          {/* Clock */}
          <Panel
            variant="sunken"
            backClassName="bg-tomato-darkest"
            frontClassName="relative flex bg-tomato-dark justify-center p-0 pb-2 cursor-pointer last:justify-self-end"
          >
              <div className="flex flex-col gap-y-4">
                <p className="font-bold text-center text-white select-none text-8xl">{formatToTimeClock(timeRest)}</p>
                {isDisplayConfig &&
                  <div className="flex justify-center px-3 gap-x-5">
                    <Button onClick={restartHandler} backClassName="bg-gray-light" frontClassName="flex justify-center bg-white max-h-[40px]">
                      <Reload className="text-tomato-dark" />
                    </Button>
                    <Button isPressed={isMuted} onClick={() => setIsMuted(!isMuted)} backClassName="bg-tomato-darkest" frontClassName="flex justify-center bg-tomato-normal max-h-[40px]">
                      <Speaker variant={isMuted ? 'muted' : 'default'} className="text-white" />
                    </Button>
                    <Button backClassName="bg-tomato-darkest" frontClassName="flex justify-center bg-tomato-normal max-h-[40px]">
                      <Gear className="text-white" />
                    </Button>
                    <Button backClassName="bg-tomato-darkest" frontClassName="flex justify-center bg-tomato-normal max-h-[40px]">
                      <User className="text-white" />
                    </Button>
                  </div>
                }
              </div>
              <Button
                variant="text"
                className="absolute top-0 bottom-0 right-0 px-6 bg-tomato-dark"
                onClick={() => setIsDisplayConfig(!isDisplayConfig)}
              >
                <OptionVertical className="fill-tomato-darkest" />
              </Button>
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