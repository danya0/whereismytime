import { ReactElement } from 'react'
import ColorPickerElement from './ColorPickerElement'

const ColorPicker = (): ReactElement => {
  return (
    <div className="flex gap-3 flex-wrap">
      <ColorPickerElement selected />
      <ColorPickerElement />
      <ColorPickerElement />
      <ColorPickerElement />
    </div>
  )
}

export default ColorPicker
