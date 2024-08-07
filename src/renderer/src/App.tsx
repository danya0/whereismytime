import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NavBar from './components/NavBar/NavBar'
import TimerPage from './pages/TimerPage'
import CreateTimerPage from './pages/CreateTimerPage'
import { useEffect } from 'react'
import { useTimersStore } from './store/timersStore'
import usePrevious from './hooks/usePrevious'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const {
    selectedTimerId,
    startedInterval,
    createInterval,
    removeInterval,
    createZone,
    incrementSeconds,
    resetSeconds
  } = useTimersStore()

  const prevSelectedTimerId = usePrevious(selectedTimerId)
  useEffect((): void => {
    if (prevSelectedTimerId && prevSelectedTimerId !== selectedTimerId) {
      createZone(prevSelectedTimerId)
      removeInterval()
      resetSeconds()
      // создаем, чистим и запускаем новый интервал по коду ниже
    }

    if (selectedTimerId) {
      createInterval(
        setInterval(() => {
          incrementSeconds()
        }, 1000)
      )
    }

    if (selectedTimerId === null && startedInterval) {
      removeInterval()
    }
  }, [selectedTimerId])

  return (
    <div className="h-screen w-screen flex items-stretch">
      <NavBar />
      <div className="grow overflow-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/timer/:id" element={<TimerPage />} />
          <Route path="/create-timer" element={<CreateTimerPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
