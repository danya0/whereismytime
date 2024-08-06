import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  children?: ReactElement | string
  onClick?: () => void
  className?: string
  navigate?: string
}

const ButtonUi = ({ children, onClick, className, navigate }: Props): ReactElement => {
  const localNavigate = useNavigate()
  const clickFunction = (): void => {
    if (navigate) {
      localNavigate(navigate)
      return
    }
    if (onClick) onClick()
  }
  return (
    <button
      onClick={clickFunction}
      className={`bg-[#7b4fd8] text-white rounded-md px-2 py-1 ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonUi
