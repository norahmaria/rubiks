import Cube from '../../components/Cube/Cube'
import Illustration from '../../components/Illustration/Illustration'
import './OneCorner.scss'

import { ReactComponent as Arrow } from '../../assets/Arrow.svg'
import Movement from '../../components/Cube/Movement'

const OneCorner = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <div className="one-corner">
      <div className="columns side-margins">
        <div>
          <h4>One Yellow Corner</h4>
          <p>
            Move the corner so that it is in the front, and so that you can see one yellow
            side in the front as well.
          </p>
        </div>

        <Illustration slide={true}>
          <div className="illustration">
            <Cube className="gray left" />
            <p className="description">Top yellow sticker on the left</p>
          </div>
          <div className="illustration">
            <Cube className="gray right" />
            <p className="description">Top yellow sticker on the right</p>
          </div>
        </Illustration>
      </div>

      <h5 className="side-margins">If top yellow sticker is on the left, "Sune"</h5>

      <Illustration className="sune">
        <Movement.R className="first" trackPieces={trackPieces} />
        <Movement.U className="first" trackPieces={trackPieces} />
        <Movement.Rprime className="first" trackPieces={trackPieces} />
        <Movement.U className="second" trackPieces={trackPieces} />
        <Movement.R className="second" trackPieces={trackPieces} />
        <div className="movement">
          <p className="right">x2</p>
          <Movement.Uprime trackPieces={trackPieces} />
        </div>
        <Movement.Rprime className="second" trackPieces={trackPieces} />
      </Illustration>

      <br style={{ height: '1rem' }} />
      <h5 className="side-margins">If top yellow sticker is on the right, "Antisune"</h5>

      <Illustration className="antisune">
        <Movement.Lprime className="first" trackPieces={trackPieces} />
        <Movement.Uprime className="first" trackPieces={trackPieces} />
        <Movement.L className="first" trackPieces={trackPieces} />
        <Movement.Uprime className="second" trackPieces={trackPieces} />
        <Movement.Lprime className="second" trackPieces={trackPieces} />
        <div className="movement">
          <p className="right">x2</p>
          <Movement.U trackPieces={trackPieces} />
        </div>
        <Movement.L className="second" trackPieces={trackPieces} />
      </Illustration>
    </div>
  )
}

export default OneCorner
