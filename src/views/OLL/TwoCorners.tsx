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
              Rotate the cube, so you face the bottom, then do this algorithm before turning the cube back.
            </b>
          </p>
        </div>
        <Illustration>
          {/* <div className="movement">
            <p>Face the bottom</p>
            <Cube className="case-initial-turn" trackPieces={trackPieces} />
          </div> */}
          <Movement.Rprime className="first" trackPieces={trackPieces} />
          <Movement.U trackPieces={trackPieces} />
          <Movement.R className="first" trackPieces={trackPieces} />
          <Movement.Dprime trackPieces={trackPieces} />

          <Movement.Rprime className="second" trackPieces={trackPieces} />
          <Movement.Uprime trackPieces={trackPieces} />
          <Movement.R className="second" trackPieces={trackPieces} />
          <Movement.D trackPieces={trackPieces} />
          {/* <div className="movement">
            <p>Turn cube back</p>
            <Cube className="case-initial finish" trackPieces={trackPieces} />
          </div> */}
        </Illustration>
      </div>

      <div className="algorithm t">
        <div className="case side-margins">
          <Cube className="white case-initial" />
          <p>
            Two solved corners next to each other while two are facing to the side, "T".{' '}
            <b>
              Rotate the cube, so you face the bottom, then do this algorithm before turning the cube back.
            </b>
          </p>
        </div>
        <Illustration>
          <Movement.L trackPieces={trackPieces} />
          <Movement.U className="first" trackPieces={trackPieces} />
          <Movement.Rprime trackPieces={trackPieces} />
          <Movement.Uprime className="first" trackPieces={trackPieces} />

          <Movement.Lprime trackPieces={trackPieces} />
          <Movement.U className="second" trackPieces={trackPieces} />
          <Movement.R trackPieces={trackPieces} />
          <Movement.Uprime className="second" trackPieces={trackPieces} />
        </Illustration>
      </div>

      <div className="algorithm algorithm-u">U algorithm</div>
    </div>
  )
}

export default TwoCorners
