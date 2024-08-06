import { ReactElement } from 'react'
import { TimerZone } from '../../types/timerTypes'

type Props = {
  zone: TimerZone
}

const TimerZoneElement = ({ zone }: Props): ReactElement => {
  return (
    <div className="rounded-md bg-black/5 p-2 flex justify-between">
      <div className="text-center">
        <p>Start</p>
        <p className="text-sm text-black/70">{zone.startTime}</p>
      </div>
      <div className="text-center">
        <p>End</p>
        <p className="text-sm text-black/70">{zone.endTime}</p>
      </div>
      <div className="text-center">
        <p>Total</p>
        <p className="text-sm text-black/70">1h 12m 32s</p>
      </div>
    </div>
  )
}

export default TimerZoneElement
