import { ReactElement } from 'react'
import NavBarItem from './NavBarItem'
import ButtonUI from '../UI/ButtonUI'

const NavBar = (): ReactElement => {
  return (
    <nav className="shrink-0 overflow-hidden bg-[#f2f4f5] gap-y-6 max-w-[230px] basis-[30%] py-3 pl-3 flex flex-col justify-between">
      <ul className="flex flex-col gap-y-1 overflow-y-auto">
        <li className="mr-3">
          <NavBarItem active />
        </li>
      </ul>

      <ButtonUI>Create timer</ButtonUI>
    </nav>
  )
}

export default NavBar
