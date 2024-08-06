import { ReactElement } from 'react'
import { TimerZone } from '../../types/timerTypes'
import TimerZoneElement from './TImerZoneElement'
type Props = {
  zones: TimerZone[]
}
const TimerZoneContainer = ({ zones }: Props): ReactElement => {
  return (
    <div className="flex flex-col gap-y-3 w-full overflow-y-auto">
      {zones.map((item) => (
        <TimerZoneElement key={item.startTime} zone={item} />
      ))}
    </div>
  )
}

export default TimerZoneContainer
