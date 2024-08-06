import { Link, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TestPage from './pages/TestPage'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Main</Link>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
