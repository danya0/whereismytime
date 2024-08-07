import { FormEvent, ReactElement, useState } from 'react'
import TextInputUI from '../components/UI/TextInputUI'
import ColorPicker from '../components/ColorPicker/ColorPicker'
import ButtonUI from '../components/UI/ButtonUI'
import { useTimersStore } from '../store/timersStore'
import { useNavigate } from 'react-router-dom'

const CreateTimerPage = (): ReactElement => {
  const navigate = useNavigate()
  const timerStore = useTimersStore()
  const [timerName, setTimerName] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('#FFD1DC')
  const createTimer = (e: FormEvent): void => {
    e.preventDefault()
    const timer = timerStore.addTimer({ color: selectedColor, name: timerName })
    navigate(`/timer/${timer.id}`)
  }
  return (
    <div className="p-3">
      <form onSubmit={createTimer} className="flex flex-col gap-y-2">
        <label className="flex items-center gap-x-2">
          <span>Timer name:</span>
          <TextInputUI value={timerName} changeValue={setTimerName} />
        </label>
        <label>Select color:</label>
        <ColorPicker selectedColor={selectedColor} change={setSelectedColor} />
        <ButtonUI>Create timer</ButtonUI>
      </form>
    </div>
  )
}

export default CreateTimerPage
