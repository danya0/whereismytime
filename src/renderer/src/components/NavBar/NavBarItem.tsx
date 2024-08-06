import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  active?: boolean
}

const NavBarItem = ({ active }: Props): ReactElement => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/timer')}
      className={`rounded-md cursor-pointer p-3 transition-colors ${active ? 'bg-white' : 'hover:bg-white/50'}`}
    >
      <div className="flex items-center gap-x-2">
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'lightgreen' }} />
        <p>Talkiee</p>
      </div>
      <p className="italic text-black/30 text-sm">1d 12h 37m 8s</p>
    </div>
  )
}

export default NavBarItem
