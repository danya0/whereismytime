import { ReactElement } from 'react'
import NavBarItem from './NavBarItem'
import ButtonUI from '../UI/ButtonUI'

const NavBar = (): ReactElement => {
  return (
    <nav className="shrink-0 bg-[#f2f4f5] max-w-[230px] basis-[30%] p-3 flex flex-col justify-between">
      <ul className="flex flex-col gap-y-1">
        <li>
          <NavBarItem />
        </li>
        <li>
          <NavBarItem />
        </li>
        <li>
          <NavBarItem active />
        </li>
      </ul>

      <ButtonUI>Create timer</ButtonUI>
    </nav>
  )
}

export default NavBar
