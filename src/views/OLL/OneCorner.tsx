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
        <div className="movement">
          <p className="left">R</p>
          <Movement.R className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U</p>
          <Movement.U className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">R'</p>
          <Movement.Rprime className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U</p>
          <Movement.U className="second" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">R</p>
          <Movement.R className="second" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U'</p>
          <p className="right">x2</p>
          <Movement.Uprime trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">R'</p>
          <Movement.Rprime className="second" trackPieces={trackPieces} />
        </div>
      </Illustration>

      <br style={{ height: '1rem' }} />
      <h5 className="side-margins">If top yellow sticker is on the right, "Antisune"</h5>

      <Illustration className="antisune">
        <div className="movement">
          <p className="left">L'</p>
          <Movement.Lprime className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U'</p>
          <Movement.Uprime className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">L</p>
          <Movement.L className="first" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U'</p>
          <Movement.Uprime className="second" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">L'</p>
          <Movement.Lprime className="second" trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">U</p>
          <p className="right">x2</p>
          <Movement.U trackPieces={trackPieces} />
        </div>
        <div className="movement">
          <p className="left">L</p>
          <Movement.L className="second" trackPieces={trackPieces} />
        </div>
      </Illustration>
    </div>
  )
}

export default OneCorner
