import Cube from '../../components/Cube/Cube'
import Movement from '../../components/Cube/Movement'
import Illustration from '../../components/Illustration/Illustration'

import './NoCorners.scss'

const NoCorners = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <div className="no-corners">
      <div className="algorithm h">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>Two yellow sides facing forward, and backwards, "H"</p>
        </div>
        <Illustration>
          <Movement.F trackPieces={trackPieces} />
          <div className="repeat-group">
            <Movement.R trackPieces={trackPieces} />
            <Movement.U trackPieces={trackPieces} />
            <Movement.Rprime trackPieces={trackPieces} />
            <Movement.Uprime trackPieces={trackPieces} />
            <p>x3</p>
          </div>
          <Movement.Fprime trackPieces={trackPieces} />
        </Illustration>
      </div>

      <div className="algorithm pi">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>Two yellow sides facing forward, and two to the sides, "Pi"</p>
        </div>
        <Illustration>
          <Movement.U trackPieces={trackPieces} />
          <Movement.R className="first" trackPieces={trackPieces} />

          <div className="movement">
            <p className="right">x2</p>
            <Movement.Uprime className="first" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="right">x2</p>
            <Movement.Rprime className="first" trackPieces={trackPieces} />
          </div>

          <Movement.Uprime className="second" trackPieces={trackPieces} />

          <div className="movement">
            <p className="right">x2</p>
            <Movement.R className="second" trackPieces={trackPieces} />
          </div>

          <Movement.Uprime className="third" trackPieces={trackPieces} />

          <div className="movement">
            <p className="right">x2</p>
            <Movement.Rprime className="second" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="right">x2</p>
            <Movement.Uprime className="fourth" trackPieces={trackPieces} />
          </div>

          <Movement.R className="third" trackPieces={trackPieces} />
        </Illustration>
      </div>
    </div>
  )
}

export default NoCorners
