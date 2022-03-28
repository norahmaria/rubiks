import Cube from '../../components/Cube/Cube'
import Movement from '../../components/Cube/Movement'
import Illustration from '../../components/Illustration/Illustration'

import './TwoCorners.scss'

const TwoCorners = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <div className="two-corners">
      <div className="algorithm algorithm-l">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>
            Edges are diagonal from each other, "L".{' '}
            <b>
              Rotate the cube, so you face the bottom, then do this algorithm before
              turning the cube back.
            </b>
          </p>
        </div>
        <Illustration>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">D'</p>
            <Movement.Dprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime className="second" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R className="second" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">D</p>
            <Movement.D trackPieces={trackPieces} />
          </div>
        </Illustration>
      </div>

      <div className="algorithm t">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>
            Two solved corners next to each other while two are facing to the side, "T".{' '}
            <b>
              Rotate the cube, so you face the bottom, then do this algorithm before
              turning the cube back.
            </b>
          </p>
        </div>
        <Illustration>
          <div className="movement">
            <p className="left">L</p>
            <Movement.L trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">L'</p>
            <Movement.Lprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U className="second" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime className="second" trackPieces={trackPieces} />
          </div>
        </Illustration>
      </div>

      <div className="algorithm algorithm-u">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>
            Two solved corners next to each other while the other two are facing toward
            you, "U".
          </p>
        </div>
        <Illustration>
          <div className="movement">
            <p className="left">R</p>
            <p className="right">x2</p>
            <Movement.R className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">D</p>
            <Movement.D trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <p className="right">x2</p>
            <Movement.U className="first" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R className="second" trackPieces={trackPieces} />
          </div>

          <div className="movement">
            <p className="left">D'</p>
            <Movement.Dprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime className="second" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="right">x2</p>
            <Movement.U className="second" trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime className="third" trackPieces={trackPieces} />
          </div>
        </Illustration>
      </div>
    </div>
  )
}

export default TwoCorners
