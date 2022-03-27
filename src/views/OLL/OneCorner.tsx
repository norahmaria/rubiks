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
            Move the corner so that it is in the front, and so that you can see one yellow side in the front
            as well.
          </p>
        </div>

        <Illustration slide={true}>
          <div className="illustration">
            <Cube className="gray left" />
          </div>
          <div className="illustration">
            <Cube className="gray right" />
          </div>
        </Illustration>
      </div>

      <h5 className="side-margins">If top yellow sticker is on the left, "Sune"</h5>

      <Illustration className="sune">
        <Cube className="gray initial" />
        <Movement.R className="gray first" />
        <Movement.U className="gray first" />
        <Movement.Rprime className="gray first" />
        <Movement.U className="gray second" />
        <Movement.R className="gray second" />
        <div className="movement">
          <p className="right">x2</p>
          <Movement.Uprime className="gray" />
        </div>
        <Movement.Rprime className="gray second" />
      </Illustration>

      <br style={{ height: '1rem' }} />
      <h5 className="side-margins">If top yellow sticker is on the right, "Antisune"</h5>

      <Illustration className="antisune">
        <Cube className="gray initial" />
        <Movement.Lprime className="gray first" />
        <Movement.Uprime className="gray first" />
        <Movement.L className="gray first" />
        <Movement.Uprime className="gray second" />
        <Movement.Lprime className="gray second" />
        <div className="movement">
          <p className="right">x2</p>
          <Movement.U className="gray" />
        </div>
        <Movement.L className="gray second" />
      </Illustration>
    </div>
  )
}

export default OneCorner
