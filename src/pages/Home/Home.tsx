import '@assets/main.css'
import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import Panel from '@components/ui/Panel'

export default function Home() {
  return (
    <main className="h-screen font-main bg-tomato-regular">
      <div className="max-w-lg mx-auto p-5">
        <Panel
          variant="sunken"
          backClassName="bg-tomato-darkest"
          frontClassName="bg-tomato-dark"
        >
          <Button height="low" backClassName="w-full" frontClassName="bg-white flex justify-start">
            <Icon icon="plus"/>
          </Button>
        </Panel>
        <Panel backClassName="bg-tomato-dark my-3" frontClassName="bg-tomato-light text-center text-white">
            <p className="font-bold text-8xl">25:00</p>
        </Panel>
        <div className="my-5 flex justify-between">
          <Button height="high">
            <p className="font-bold text-2xl uppercase text-tomato-dark w-24">start</p>
          </Button>

          <Button height="high">
            <p className="font-bold text-2xl uppercase text-tomato-dark w-24">stop</p>
          </Button>
        </div>
      </div>
    </main>
  )
}