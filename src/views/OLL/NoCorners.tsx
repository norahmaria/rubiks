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
          <div className="movement">
            <p className="left">F</p>
            <Movement.F trackPieces={trackPieces} />
          </div>

          <div className="repeat-group">
            <div className="movement">
              <p className="left">R</p>
              <Movement.R trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U</p>
              <Movement.U trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">R'</p>
              <Movement.Rprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U'</p>
              <Movement.Uprime trackPieces={trackPieces} />
            </div>
            <p>x3</p>
          </div>

          <div className="movement">
            <p className="left">F'</p>
            <Movement.Fprime trackPieces={trackPieces} />
          </div>
        </Illustration>
      </div>

      <div className="algorithm pi">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>Two yellow sides facing forward, and two to the sides, "Pi"</p>
        </div>
        <Illustration>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">R</p>
            <Movement.R className="first" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">U'</p>
            <p className="right">x2</p>
            <Movement.Uprime className="first" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">R'</p>
            <p className="right">x2</p>
            <Movement.Rprime className="first" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime className="second" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">R</p>
            <p className="right">x2</p>
            <Movement.R className="second" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime className="third" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">R'</p>
            <p className="right">x2</p>
            <Movement.Rprime className="second" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">U'</p>
            <p className="right">x2</p>
            <Movement.Uprime className="fourth" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">R</p>
            <Movement.R className="third" trackPieces={trackPieces} />
          </div>
        </Illustration>
      </div>
    </div>
  )
}

export default NoCorners
