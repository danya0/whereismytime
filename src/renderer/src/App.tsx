import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NavBar from './components/NavBar/NavBar'
import TimerPage from './pages/TimerPage'
import CreateTimerPage from './pages/CreateTimerPage'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="h-screen w-screen flex items-stretch">
      <NavBar />
      <div className="grow overflow-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/create-timer" element={<CreateTimerPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
