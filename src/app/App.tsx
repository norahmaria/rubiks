import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Cube from '../components/Cube/Cube'

import Home from '../views/Home'
import Cross from '../views/Cross'
import F2L from '../views/F2L'
import OLL from '../views/OLL'
import PLL from '../views/PLL'

import './App.scss'

const Second = () => {
  const [trackPieces, setTrackPieces] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const localTrackPieces = localStorage.getItem('trackPieces')
    const localDarkMode = localStorage.getItem('darkMode')

    if (localTrackPieces) setTrackPieces(JSON.parse(localTrackPieces))
    if (localDarkMode) setDarkMode(JSON.parse(localDarkMode))

    document.addEventListener('keydown', e => {
      if (e.key === 'd') setDarkMode(prev => !prev)
      if (e.key === 't') setTrackPieces(prev => !prev)
    })

    return () => {
      document.removeEventListener('keydown', e => {
        if (e.key === 'd') setDarkMode(prev => !prev)
        if (e.key === 't') setTrackPieces(prev => !prev)
      })
    }
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
        <Link to="/rubiks" className="logo">
          <Cube className="logo" size="small" />
        </Link>
        <nav>
          <Link to="/rubiks/cross">1. Cross</Link>
          <Link to="/rubiks/f2l">2. F2L</Link>
          <Link to="/rubiks/oll">3. OLL</Link>
          <Link to="/rubiks/pll">4. PLL</Link>
        </nav>
        <div className={`toggle on-${darkMode}`}>
          <input
            type="radio"
            name="rdo"
            id="dark"
            checked={darkMode}
            onChange={() => setDarkMode(true)}
          />
          <input
            type="radio"
            name="rdo"
            id="light"
            checked={!darkMode}
            onChange={() => setDarkMode(false)}
          />

          <label htmlFor="dark" onClick={() => setDarkMode(true)}>
            Dark
          </label>
          <span className="check-cross"></span>
          <label htmlFor="light" onClick={() => setDarkMode(false)}>
            Light
          </label>
        </div>
      </header>

      <Routes>
        <Route
          path="/rubiks"
          element={<Home trackPieces={trackPieces} darkMode={darkMode} />}
        />
        <Route
          path="/rubiks/f2l"
          element={<F2L trackPieces={trackPieces} darkMode={darkMode} />}
        />
        <Route
          path="/rubiks/cross"
          element={<Cross trackPieces={trackPieces} darkMode={darkMode} />}
        />
        <Route
          path="/rubiks/oll"
          element={<OLL trackPieces={trackPieces} darkMode={darkMode} />}
        />
        <Route
          path="/rubiks/pll"
          element={<PLL trackPieces={trackPieces} darkMode={darkMode} />}
        />
      </Routes>

      <button
        className={`track-pieces-button ${trackPieces ? 'on' : 'off'}`}
        onClick={() => setTrackPieces(prev => !prev)}>
        <div className="tooltip">
          <p>Toggle piece tracking</p>
        </div>
        <Cube size="small" className={`${trackPieces ? 'gray' : ''}`} />
      </button>
    </div>
  )
}

export default Second
