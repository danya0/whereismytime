import { FormEvent, ReactElement, useState } from 'react'
import TextInputUI from '../components/UI/TextInputUI'
import ColorPicker from '../components/ColorPicker/ColorPicker'
import ButtonUI from '../components/UI/ButtonUI'

const CreateTimerPage = (): ReactElement => {
  const [timerName, setTimerName] = useState<string>('')
  const createTimer = (e: FormEvent): void => {
    e.preventDefault()
    console.log('create timer')
  }
  return (
    <div className="p-3">
      <form onSubmit={createTimer} className="flex flex-col gap-y-2">
        <label className="flex items-center gap-x-2">
          <span>Timer name:</span>
          <TextInputUI value={timerName} changeValue={setTimerName} />
        </label>
        <label>Select color:</label>
        <ColorPicker />
        <ButtonUI>Create timer</ButtonUI>
      </form>
    </div>
  )
}

export default CreateTimerPage
