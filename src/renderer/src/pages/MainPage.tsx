import { ReactElement } from 'react'
import { useStore } from '../store/store'

const MainPage = (): ReactElement => {
  const store = useStore()

  return (
    <div>
      <h1>Main page</h1>
      <p>bears: {store.bears}</p>
      <button
        className="bg-gray-600 border border-black"
        onClick={() => store.increasePopulation()}
      >
        add bears
      </button>
    </div>
  )
}

export default MainPage
