import { ReactElement } from 'react'
import ColorPickerElement from './ColorPickerElement'

type Props = {
  selectedColor: string
  change: (color: string) => void
}

const ColorPicker = ({ selectedColor, change }: Props): ReactElement => {
  const colors = ['lightblue', 'orange', 'lightgreen']
  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((color) => (
        <ColorPickerElement
          key={color}
          onClick={() => change(color)}
          selected={color === selectedColor}
          color={color}
        />
      ))}
    </div>
  )
}

export default ColorPicker
