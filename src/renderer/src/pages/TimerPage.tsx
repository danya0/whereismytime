import { ReactElement } from 'react'
import ButtonUI from '../components/UI/ButtonUI'

const TimerPage = (): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-y-2 p-5 h-full">
      <div className="flex items-center gap-x-2">
        <div className="rounded-full h-2 w-2" style={{ backgroundColor: 'lightgreen' }}></div>
        <h1 className="text-3xl">Talkiee</h1>
      </div>
      <p className="text-4xl italic text-black/30">1d 12h 32m 9s</p>
      <ButtonUI className="mt-4">Start timer</ButtonUI>

      <div>
        <p className="text-black/50 flex items-center gap-x-1">
          <span className="underline cursor-pointer">List</span>
          <span>|</span>
          <span className="cursor-pointer">Graphics</span>
        </p>
      </div>

      <div className="flex flex-col gap-y-3 w-full overflow-y-auto">
        <div className="rounded-md bg-black/5 p-2 flex justify-between">
          <div className="text-center">
            <p>Start</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>End</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>Total</p>
            <p className="text-sm text-black/70">1h 12m 32s</p>
          </div>
        </div>
        <div className="rounded-md bg-black/5 p-2 flex justify-between">
          <div className="text-center">
            <p>Start</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>End</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>Total</p>
            <p className="text-sm text-black/70">1h 12m 32s</p>
          </div>
        </div>
        <div className="rounded-md bg-black/5 p-2 flex justify-between">
          <div className="text-center">
            <p>Start</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>End</p>
            <p className="text-sm text-black/70">10.06.2024</p>
            <p className="text-sm text-black/70">18:32:12</p>
          </div>
          <div className="text-center">
            <p>Total</p>
            <p className="text-sm text-black/70">1h 12m 32s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerPage
