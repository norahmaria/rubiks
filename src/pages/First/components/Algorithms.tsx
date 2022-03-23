import Cube from '../../../components/Cube/Cube'
import Movement from '../../../components/Cube/Movement'

import './Algorithms.scss'

const Algorithms = ({ trackPieces }: { trackPieces: boolean }) => {
  return (
    <div className="algorithms" id="algorithms">
      <div className="intro side-margins">
        <h3>Fundamental Algorithms</h3>
        <p style={{ marginBottom: '0' }}>
          These are the movements you can use to insert the edges to their corner. You might have to turn your
          cube or the top layer to get to a specific case, but we will go through getting the edge and corner
          piece to these positions.
        </p>
      </div>
      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="case-one" />
          <p>Move matching pair in top left corner to bottom right corner.</p>
        </div>
        <div className={`illustration case-one ${trackPieces ? 'track-pieces' : ''}`}>
          <div className="movement">
            <p>R</p>
            <Movement.R trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>U'</p>
            <Movement.Uprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>R'</p>
            <Movement.Rprime trackPieces={trackPieces} />
          </div>
        </div>
      </div>
      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="case-two" />
          <p>Move matching pair in top right corner to bottom left corner.</p>
        </div>
        <div className={`illustration case-two ${trackPieces ? 'track-pieces' : ''}`}>
          <div className="movement">
            <p>L'</p>
            <Movement.Lprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>L</p>
            <Movement.L trackPieces={trackPieces} />
          </div>
        </div>
      </div>
      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="case-three" />
          <p>Move back edge and top right corner, with different colors up, to the bottom right corner.</p>
        </div>
        <div className={`illustration case-three ${trackPieces ? 'track-pieces' : ''}`}>
          <div className="movement">
            <p>R</p>
            <Movement.R trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>R'</p>

            <Movement.Rprime trackPieces={trackPieces} />
          </div>
        </div>
      </div>

      <div className="algorithm">
        <div className="case side-margins">
          <Cube className="case-four" />
          <p>Move back edge and top left corner, with different colors up, to the bottom left corner.</p>
        </div>
        <div className={`illustration case-four ${trackPieces ? 'track-pieces' : ''}`}>
          <div className="movement">
            <p>L'</p>
            <Movement.Lprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>U'</p>
            <Movement.Uprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p>L</p>
            <Movement.L trackPieces={trackPieces} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Algorithms
