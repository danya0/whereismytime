import { ReactElement } from 'react'
import { TimerZone } from '../../types/timerTypes'
import { timeToText } from '../../utils/timeToText'

type Props = {
  zone: TimerZone
}

const TimerZoneElement = ({ zone }: Props): ReactElement => {
  return (
    <div className="rounded-md bg-black/5 p-2 flex justify-between">
      <div className="text-center basis-1/3">
        <p>Start</p>
        <p className="text-sm text-black/70">{zone.startTime}</p>
      </div>
      <div className="text-center basis-1/3">
        <p>End</p>
        <p className="text-sm text-black/70">{zone.endTime}</p>
      </div>
      <div className="text-center basis-1/3">
        <p>Total</p>
        <p className="text-sm text-black/70">{timeToText(zone.totalTime)}</p>
      </div>
    </div>
  )
}

export default TimerZoneElement
