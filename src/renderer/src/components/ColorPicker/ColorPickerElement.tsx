import { ReactElement } from 'react'
import checked from '../../assets/Icons/checked.svg'

type Props = {
  selected?: boolean
  color: string
  onClick?: () => void
}
const ColorPicker = ({ selected, color, onClick }: Props): ReactElement => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`flex items-center justify-center h-10 cursor-pointer w-10 bg-blue-300 rounded-md border-2 ${selected ? 'border-black' : ''}`}
    >
      {selected && <img className="h-3 w-3" src={checked} alt="checked" />}
    </div>
  )
}

export default ColorPicker
