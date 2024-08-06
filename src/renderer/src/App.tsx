import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TestPage from './pages/TestPage'
import NavBar from './components/NavBar/NavBar'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="h-screen w-screen flex items-stretch">
      <NavBar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
