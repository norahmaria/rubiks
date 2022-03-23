import { Link } from 'react-router-dom'

import Cube from '../components/Cube/Cube'
import './Home.scss'

const Home = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <main className="home">
      <div className="title side-margins">
        <h1>Rubik's Cube Visuals & Guides</h1>
        <p style={{ lineHeight: '1.75' }}>
          Compilation of{' '}
          <a href="https://www.youtube.com/channel/UCqTVfT9JQqhA6_Hi_h_h97Q" className="visible">
            J Perm
          </a>{' '}
          video tutorials turned into "interactive" text tutorials.
        </p>
      </div>
      <div className="illustration">
        <Link to="/white" aria-label="White Cross">
          <Cube className="white-cross-cube" trackPieces={trackPieces} />
        </Link>
        <Link to="/f2l" aria-label="First Two Laters (F2L)">
          <Cube className="first-two-layers-cube" trackPieces={trackPieces} />
        </Link>
        <Link to="/yellow" aria-label="Yellow Side">
          <Cube className="yellow-cube" trackPieces={trackPieces} />
        </Link>
      </div>
      <p className="disclaimer ">
        ps. Made this because it seemed like a fun design challenge, and I already had some of these visuals
        for my personal PDF. Please don't think i'm trying to take credit for J Perms tutorials 😭
      </p>
    </main>
  )
}

export default Home
