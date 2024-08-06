import { ReactElement } from 'react'

type Props = {
  value?: string
  changeValue?: (value: string) => void
}

const TextInputUI = ({ value, changeValue }: Props): ReactElement => {
  const inputEvent = (e): void => {
    const target = e.target as HTMLInputElement
    if (changeValue) changeValue(target.value)
  }
  return (
    <input
      onInput={inputEvent}
      value={value}
      type="text"
      className="border border-black/50 rounded-sm text-sm"
    />
  )
}

export default TextInputUI
