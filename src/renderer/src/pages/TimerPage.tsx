import { ReactElement, useState } from 'react'
import ButtonUI from '../components/UI/ButtonUI'
import { useParams } from 'react-router'
import { useTimersStore } from '../store/timersStore'
import TimerZoneContainer from '../components/TimerZone/TimerZoneContainer'
import { ZoneConverter } from '../utils/zoneConverter'
import pause from '../assets/Icons/pause.svg'
import play from '../assets/Icons/play.svg'
import trash from '../assets/Icons/trash.svg'
import { useNavigate } from 'react-router-dom'

const TimerPage = (): ReactElement => {
  const navigate = useNavigate()
  const { id } = useParams()
  const timerStore = useTimersStore()
  const timerFromStore = id ? timerStore.getById(id) : undefined

  const { toggleTimer, selectedTimerId, seconds, getTotalZonesTime, removeTimer } = useTimersStore()
  const currentIdSelected = selectedTimerId === id
  const togTimer = (): void => {
    const val = !currentIdSelected && timerFromStore ? timerFromStore.id : null
    toggleTimer(val)
  }

  const totalTime = ZoneConverter.fromSeconds(
    (currentIdSelected ? seconds : 0) + (timerFromStore ? getTotalZonesTime(timerFromStore.id) : 0)
  )
  const sortedZones = timerFromStore
    ? timerFromStore.zones.sort((a, b) => +b.startTime - +a.startTime)
    : []

  const [sureDelete, setSureDelete] = useState<boolean>(false)
  const rm = (): void => {
    if (!timerFromStore) return
    removeTimer(timerFromStore.id)
    navigate('/')
  }

  return (
    <>
      {!timerFromStore ? (
        <div>this timer is undefined</div>
      ) : (
        <div className="flex flex-col items-center gap-y-2 px-5 py-2 h-full">
          <div className="w-full flex justify-end text-black/50 text-sm">
            {sureDelete ? (
              <div className="flex gap-x-1">
                <span onClick={rm} className="cursor-pointer underline">
                  Yes
                </span>
                <span>You sure?</span>
                <span onClick={() => setSureDelete(false)} className="cursor-pointer underline">
                  No
                </span>
              </div>
            ) : (
              <button onClick={() => setSureDelete(!sureDelete)}>
                <div className="flex gap-x-1 items-center">
                  <img className="h-4 w-4" src={trash} alt="delete" />
                  <span>Delete</span>
                </div>
              </button>
            )}
          </div>
          <div className="flex items-center gap-x-2 max-w-full">
            <div
              className="rounded-full h-2 w-2 shrink-0"
              style={{ backgroundColor: timerFromStore.color }}
            />
            <h1 className="text-3xl truncate max-w-full">{timerFromStore.name}</h1>
          </div>
          <p
            className={`text-4xl italic transition-colors ${currentIdSelected ? 'text-green-400' : 'text-black/30'}`}
          >
            {totalTime}
          </p>
          <ButtonUI className="mt-4 flex items-center gap-x-1" onClick={togTimer}>
            <>
              {currentIdSelected ? (
                <img className="h-4 w-4" src={pause} alt="pause" />
              ) : (
                <img className="h-4 w-4" src={play} alt="play" />
              )}
              <span>{currentIdSelected ? 'Stop' : 'Start'} timer</span>
            </>
          </ButtonUI>

          {/* todo: сделаем отображение потраченного времени в графике*/}
          {/*<div>*/}
          {/*  <p className="text-black/50 flex items-center gap-x-1">*/}
          {/*    <span className="underline cursor-pointer">List</span>*/}
          {/*    <span>|</span>*/}
          {/*    <span className="cursor-pointer">Graphics</span>*/}
          {/*  </p>*/}
          {/*</div>*/}

          <TimerZoneContainer zones={sortedZones} />
        </div>
      )}
    </>
  )
}

export default TimerPage
