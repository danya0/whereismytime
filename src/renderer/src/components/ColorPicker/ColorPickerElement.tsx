import { ReactElement } from 'react'
type Props = {
  selected?: boolean
}
const ColorPicker = ({ selected }: Props): ReactElement => {
  return (
    <div
      className={`h-10 cursor-pointer w-10 bg-blue-300 rounded-md border ${selected ? 'border-black' : ''}`}
    />
  )
}

export default ColorPicker
