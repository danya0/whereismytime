import { ReactElement } from 'react'
import NavBarItem from './NavBarItem'
import ButtonUI from '../UI/ButtonUI'
import { Link, useLocation } from 'react-router-dom'
import HomeSvg from '../../assets/Icons/Home.svg'
import { useTimersStore } from '../../store/timersStore'

const NavBar = (): ReactElement => {
  const timerStore = useTimersStore()
  const timers = timerStore.timers
  const location = useLocation()
  const timerIsActive = (timerId: string): boolean => {
    return location.pathname.includes(timerId)
  }

  return (
    <nav className="shrink-0 overflow-hidden bg-[#f2f4f5] gap-y-6 min-w-[230px] basis-[30%] py-3 pl-3 flex flex-col justify-between">
      <div>
        <Link className="flex items-center gap-x-2 mb-2 p-2 bg-white rounded-md mr-3" to="/">
          <img className="h-4 w-4" src={HomeSvg} alt="home" />
          <span>Home page</span>
        </Link>
        <ul className="flex flex-col gap-y-1 overflow-y-auto">
          {timers.map((timer) => (
            <li key={timer.id} className="mr-3">
              <NavBarItem active={timerIsActive(timer.id)} timer={timer} />
            </li>
          ))}
        </ul>
      </div>

      <ButtonUI navigate="/create-timer" className="mr-3">
        Create timer
      </ButtonUI>
    </nav>
  )
}

export default NavBar
