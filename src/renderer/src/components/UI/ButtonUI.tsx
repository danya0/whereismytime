import { ReactElement } from 'react'

type Props = {
  children?: ReactElement | string
  onClick?: () => void
  className?: string
}

const ButtonUi = ({ children, onClick, className }: Props): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#7b4fd8] text-white rounded-md px-2 py-1 ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonUi
