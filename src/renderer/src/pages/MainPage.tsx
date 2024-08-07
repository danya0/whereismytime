import { ReactElement } from 'react'
import { useStore } from '../store/store'

const MainPage = (): ReactElement => {
  const store = useStore()

  return (
    <div className="flex flex-col items-center justify-between w-full h-full px-3 pt-8 pb-2">
      <div>
        <h1 className="text-xl mb-7">
          Welcome to <span className="text-[#7b4fd8] font-bold text-5xl">wimt</span>
        </h1>
        <h3 className="text-black/50 max-w-[220px] text-center">
          Let&apos;s track how much time it takes to complete your project. <br />
          Click &quot;Create timer&quot;
        </h3>
      </div>
      <span className="text-sm text-black/20">
        psst... this page will soon display statistics for all timers
      </span>
    </div>
  )
}

export default MainPage
