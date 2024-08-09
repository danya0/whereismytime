import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Timer } from '../../types/timerTypes'
import { useTimersStore } from '../../store/timersStore'
import { ZoneConverter } from '../../utils/zoneConverter'

type Props = {
  active?: boolean
  timer: Timer
}

const NavBarItem = ({ active, timer }: Props): ReactElement => {
  const navigate = useNavigate()
  const { getTotalZonesTime, selectedTimerId, seconds } = useTimersStore()
  const startedTimer = selectedTimerId === timer.id
  return (
    <div
      onClick={() => navigate(`/timer/${timer.id}`)}
      className={`rounded-md overflow-hidden cursor-pointer px-3 py-1 transition-colors ${startedTimer ? 'bg-green-200' : active ? 'bg-white' : 'hover:bg-white/50'}`}
    >
      <div className="flex items-center gap-x-2">
        <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: timer.color }} />
        <p className="truncate">{timer.name}</p>
      </div>
      <p className={`italic text-sm ${startedTimer ? 'text-green-500' : 'text-black/30'}`}>
        {ZoneConverter.fromSeconds(getTotalZonesTime(timer.id) + (startedTimer ? seconds : 0))}
      </p>
    </div>
  )
}

export default NavBarItem
