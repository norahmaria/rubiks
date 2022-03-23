import { useState } from 'react'

import { ReactComponent as Arrow } from '../../../assets/Arrow.svg'

import Cube from '../../../components/Cube/Cube'
import Movement from '../../../components/Cube/Movement'

import './Steps.scss'

const Steps = () => {
  const [whiteUp, setWhiteUp] = useState(false)

  return (
    <div className={`steps white-up-${whiteUp}`} id="steps">
      <div className="intro side-margins">
        <h3>Steps</h3>
        <p>
          Make sure to get both pieces (a corner piece with a white side and it's matching edge) into the top
          layer before following these steps.
        </p>
      </div>

      <div className="question side-margins">
        <h4>Is white facing up?</h4>

        <div className={`toggle on-${whiteUp}`}>
          <input type="radio" name="rdo" id="yes" checked={whiteUp} onChange={() => setWhiteUp(true)} />
          <input type="radio" name="rdo" id="no" checked={!whiteUp} onChange={() => setWhiteUp(false)} />

          <label htmlFor="yes" onClick={() => setWhiteUp(true)}>
            Yes
          </label>
          <span className="check-cross"></span>
          <label htmlFor="no" onClick={() => setWhiteUp(false)}>
            No
          </label>
        </div>
      </div>

      <div className="intro side-margins">
        <p>
          {whiteUp ? (
            <>
              If white is facing up, move the <b>edge</b> piece a couple times (U or U'), so it aligns with
              it's side color.
            </>
          ) : (
            <>
              If white is not facing up, move the <b>corner</b> piece on top of the slot it needs to go to,
              then move it once (U or U') so the <b>white side can still be seen</b>.
            </>
          )}
        </p>
        <div className="illustration">
          {whiteUp ? (
            <>
              <Movement.Uprime className="gray" />
              <Cube className="gray" />
            </>
          ) : (
            <>
              <Cube className="gray" />
              <Movement.U className="gray" />
            </>
          )}
        </div>
      </div>
      {whiteUp ? (
        <div className="further">
          <p className="side-margins">
            Turn your entire cube, so this line is on the right. Then turn the edge piece away, before moving
            the corner piece on top of it. And at last, put it back!
          </p>
          <div className="illustration">
            <Cube className="gray" />

            <div className="cube-with-text">
              <div className="left">R</div>
              <Movement.R className="gray" />
            </div>

            <div className="cube-with-text">
              <div className="left">U'</div>
              <div className="right">x2</div>
              <Movement.Uprime className="gray" />
            </div>

            <div className="cube-with-text">
              <div className="left">R'</div>
              <Movement.Rprime className="gray" />
            </div>
          </div>
        </div>
      ) : (
        <div className="further">
          <div className="columns side-margins">
            <div>
              <h4>Are top colors the same?</h4>
              <p>
                Place your finger on top, parallel to the white sticker, the two edges you touch, is where the
                edge piece could go. If the top colors match, you want the edge piece to go next to the corner
                piece, if not, you want them to be apart.
                <i>The dark cube shows where the edge piece could go - in two different cases.</i>
              </p>
            </div>
            <div className="illustration">
              <Cube className="gray first" />
              <Cube className="gray second" />
            </div>
          </div>

          <div className="yes">
            <h4 className="side-margins">
              <Arrow className="arrow-down-right" /> If yes...
            </h4>
            <div className="illustration">
              <Cube className="gray" />
              <div className="cube-with-text">
                <div className="left">F'</div>
                <Movement.Fprime className="gray" />
              </div>
              <div className="cube-with-text">
                <div className="left">U'</div>
                <Movement.Uprime className="gray" />
              </div>
              <div className="cube-with-text">
                <div className="left">F</div>
                <Movement.F className="gray" />
              </div>
            </div>
          </div>
          <div className="no">
            <h4 className="side-margins">
              <Arrow className="arrow-down-right" /> If no...
            </h4>
            <div className="illustration">
              <Cube className="gray" />
              <div className="cube-with-text">
                <div className="left">R</div>
                <Movement.R className="gray" />
              </div>
              <div className="cube-with-text">
                <div className="left">U'</div>
                <Movement.Uprime className="gray" />
              </div>
              <div className="cube-with-text">
                <div className="left">R'</div>
                <Movement.Rprime className="gray" />
              </div>
            </div>
          </div>
        </div>
      )}
      <p className="side-margins" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.1rem' }}>
        <b>Great!</b> Now you can insert using one of the{' '}
        <a href="#algorithms" className="visible">
          algorithms up top
        </a>
        .
      </p>
    </div>
  )
}

export default Steps
