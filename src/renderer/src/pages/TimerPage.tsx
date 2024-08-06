import { ReactElement } from 'react'
import ButtonUI from '../components/UI/ButtonUI'
import { useParams } from 'react-router'
import { useTimersStore } from '../store/timersStore'
import TimerZoneContainer from '../components/TimerZone/TimerZoneContainer'

const TimerPage = (): ReactElement => {
  const { id } = useParams()
  const timerStore = useTimersStore()
  const timer = id ? timerStore.getById(id) : undefined
  return (
    <>
      {!timer ? (
        <div>this timer is undefined</div>
      ) : (
        <div className="flex flex-col items-center gap-y-2 p-5 h-full">
          <div className="flex items-center gap-x-2">
            <div className="rounded-full h-2 w-2" style={{ backgroundColor: timer.color }}></div>
            <h1 className="text-3xl">{timer.name}</h1>
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

          <TimerZoneContainer zones={timer.zones} />
        </div>
      )}
    </>
  )
}

export default TimerPage
