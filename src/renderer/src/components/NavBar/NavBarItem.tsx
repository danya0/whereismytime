import { ReactElement } from 'react'
import { redirect } from 'react-router'

type Props = {
  active?: boolean
}

const NavBarItem = ({ active }: Props): ReactElement => {
  return (
    <div
      onClick={() => redirect('/')}
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
