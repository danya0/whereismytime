import { ReactElement } from 'react'
import ButtonUI from '../components/UI/ButtonUI'
import { useParams } from 'react-router'
import { useTimersStore } from '../store/timersStore'
import TimerZoneContainer from '../components/TimerZone/TimerZoneContainer'
import { ZoneConverter } from '../utils/zoneConverter'

const TimerPage = (): ReactElement => {
  const { id } = useParams()
  const timerStore = useTimersStore()
  const timerFromStore = id ? timerStore.getById(id) : undefined

  const { toggleTimer, selectedTimerId, seconds, getTotalZonesTime } = useTimersStore()
  const currentIdSelected = selectedTimerId === id
  const togTimer = (): void => {
    const val = !currentIdSelected && timerFromStore ? timerFromStore.id : null
    toggleTimer(val)
  }

  const totalTime = ZoneConverter.fromSeconds(
    (currentIdSelected ? seconds : 0) + (timerFromStore ? getTotalZonesTime(timerFromStore.id) : 0)
  )

  return (
    <>
      {!timerFromStore ? (
        <div>this timer is undefined</div>
      ) : (
        <div className="flex flex-col items-center gap-y-2 p-5 h-full">
          <div className="flex items-center gap-x-2">
            <div
              className="rounded-full h-2 w-2"
              style={{ backgroundColor: timerFromStore.color }}
            />
            <h1 className="text-3xl">{timerFromStore.name}</h1>
          </div>
          <p
            className={`text-4xl italic transition-colors ${currentIdSelected ? 'text-green-400' : 'text-black/30'}`}
          >
            {totalTime}
          </p>
          <ButtonUI className="mt-4" onClick={togTimer}>
            {currentIdSelected ? 'Stop' : 'Start'} timer
          </ButtonUI>

          <div>
            <p className="text-black/50 flex items-center gap-x-1">
              <span className="underline cursor-pointer">List</span>
              <span>|</span>
              <span className="cursor-pointer">Graphics</span>
            </p>
          </div>

          <TimerZoneContainer zones={timerFromStore.zones} />
        </div>
      )}
    </>
  )
}

export default TimerPage
