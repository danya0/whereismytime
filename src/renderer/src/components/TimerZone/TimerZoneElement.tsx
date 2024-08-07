import { ReactElement } from 'react'
import { TimerZone } from '../../types/timerTypes'
import { ZoneConverter } from '../../utils/zoneConverter'

type Props = {
  zone: TimerZone
}

const TimerZoneElement = ({ zone }: Props): ReactElement => {
  return (
    <div className="rounded-md bg-black/5 p-2 flex justify-between">
      <div className="text-center basis-1/3">
        <p>Start</p>
        <p className="text-sm text-black/70">{ZoneConverter.toLocalString(zone.startTime)}</p>
        <p className="text-sm text-black/70">{ZoneConverter.toLocalString(zone.startTime, true)}</p>
      </div>
      <div className="text-center basis-1/3">
        <p>End</p>
        <p className="text-sm text-black/70">{ZoneConverter.toLocalString(zone.endTime)}</p>
        <p className="text-sm text-black/70">{ZoneConverter.toLocalString(zone.endTime, true)}</p>
      </div>
      <div className="text-center basis-1/3">
        <p>Total</p>
        <p className="text-sm text-black/70">{ZoneConverter.fromSeconds(zone.totalTime)}</p>
      </div>
    </div>
  )
}

export default TimerZoneElement
