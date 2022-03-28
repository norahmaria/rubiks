import { Link } from 'react-router-dom'
import Cube from '../components/Cube/Cube'
import Illustration from '../components/Illustration/Illustration'

import './Home.scss'

const Home = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <div className="home">
      <div className="intro">
        <h2>Beginners guide to CFOP</h2>
        <p>
          A lil collection of visuals, and things to look for when solving the Rubik's
          Cube using the beginner CFPO method.
        </p>
      </div>
      <Illustration>
        <Link to="/cross">
          <div className="movement">
            <p>Cross</p>
            <Cube flip className="gray white-cross" size="large" />
          </div>
        </Link>
        <Link to="/f2l">
          <div className="movement">
            <p>F2L</p>
            <Cube flip className="gray f2l" size="large" />
          </div>
        </Link>

        <Link to="/oll">
          <div className="movement">
            <p>OLL</p>
            <Cube className="gray oll" size="large" />
          </div>
        </Link>
        <Link to="/pll">
          <div className="movement">
            <p>PLL</p>
            <Cube className="gray pll" size="large" />
          </div>
        </Link>
      </Illustration>
      <p className="ps" style={{ zIndex: 10 }}>
        ps. This is a static visual representation of some of{' '}
        <a href="https://www.youtube.com/channel/UCqTVfT9JQqhA6_Hi_h_h97Q">J Perms</a>{' '}
        videos, among other YouTube tutorials that I followed to learn to solve a Rubik's
        Cube ❤️
      </p>
    </div>
  )
}

export default Home
