import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'

import Cube from '../components/Cube/Cube'

import Home from '../pages/Home'
import First from '../pages/First/First'
import WhiteCross from '../pages/WhiteCross/WhiteCross'
import Yellow from '../pages/Yellow/Yellow'

const App = () => {
  const [trackPieces, setTrackPieces] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const localTrackPieces = localStorage.getItem('trackPieces')
    const localDarkMode = localStorage.getItem('darkMode')

    if (localTrackPieces) setTrackPieces(JSON.parse(localTrackPieces))
    if (localDarkMode) setDarkMode(JSON.parse(localDarkMode))
  }, [])

  useEffect(() => {
    localStorage.setItem('trackPieces', trackPieces.toString())
  }, [trackPieces])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())

    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="app">
      <header className="side-margins">
        <Link to="/" className="logo">
          <Cube className="logo" size="small" /> Rubik's Cube
        </Link>
        <nav>
          <Link to="/white">1. White Cross</Link>
          <Link to="/f2l">2. F2L</Link>
          <Link to="/yellow">3. Yellow</Link>
        </nav>
        <div className={`toggle on-${darkMode}`}>
          <input type="radio" name="rdo" id="dark" checked={darkMode} onChange={() => setDarkMode(true)} />
          <input type="radio" name="rdo" id="light" checked={!darkMode} onChange={() => setDarkMode(false)} />

          <label htmlFor="dark" onClick={() => setDarkMode(true)}>
            Dark
          </label>
          <span className="check-cross"></span>
          <label htmlFor="light" onClick={() => setDarkMode(false)}>
            Light
          </label>
        </div>
        {/* <button onClick={() => setDarkMode(prev => !prev)}>Dark mode</button> */}
      </header>

      <Routes>
        <Route path="/" element={<Home trackPieces={trackPieces} />} />
        <Route path="/f2l" element={<First trackPieces={trackPieces} />} />
        <Route path="/white" element={<WhiteCross trackPieces={trackPieces} />} />
        <Route path="/yellow" element={<Yellow trackPieces={trackPieces} />} />
      </Routes>

      <button
        className={`track-pieces-button ${trackPieces ? 'on' : 'off'}`}
        onClick={() => setTrackPieces(prev => !prev)}
      >
        <div className="tooltip">
          <p>Toggle piece tracking</p>
        </div>
        <Cube size="small" className={`${trackPieces ? 'gray' : ''}`} />
      </button>
    </div>
  )
}

export default App
