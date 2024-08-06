import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Timer } from '../../types/timerTypes'

type Props = {
  active?: boolean
  timer: Timer
}

const NavBarItem = ({ active, timer }: Props): ReactElement => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/timer/${timer.id}`)}
      className={`rounded-md cursor-pointer px-3 py-1 transition-colors ${active ? 'bg-white' : 'hover:bg-white/50'}`}
    >
      <div className="flex items-center gap-x-2">
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: timer.color }} />
        <p>{timer.name}</p>
      </div>
      <p className="italic text-black/30 text-sm">1d 12h 37m 8s</p>
    </div>
  )
}

export default NavBarItem
