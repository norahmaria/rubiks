import Cube from '../../components/Cube/Cube'
import Illustration from '../../components/Illustration/Illustration'
import './OneCorner.scss'

import Movement from '../../components/Cube/Movement'

const OneCorner = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <div className="one-corner">
      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="gray left" />
          <p>If top yellow sticker is on the left, "Sune"</p>
        </div>
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
      </div>

      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="gray right" />
          <p>If top yellow sticker is on the right, "Antisune"</p>
        </div>
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
    </div>
  )
}

export default OneCorner
