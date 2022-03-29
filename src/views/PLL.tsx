import Illustration from '../components/Illustration/Illustration'
import Movement from '../components/Cube/Movement'
import Cube from '../components/Cube/Cube'

// EDGES
// one edge solved
// --- case 1: one of the edges need to go to the opposite side (right needs to go to the left)
// --- case 2: one of the edges need to go to the opposite side (left needs to go to the right)
// no edges solved
// -- case 1: two edges (all?) need to go to the opposite side
// -- case 2: adjacent edge swap, diagonally need to swap edges (?)

import './PLL.scss'

const PLL = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <main className="pll">
      <section className="intro side-margins">
        <h2 className="title">
          Permute Last Layer <p>(PLL)</p>
        </h2>

        <div style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          This tutorial assumes you always keep white on the bottom, however you{' '}
          <i>can</i> do the same moves with another color on the bottom - it might just
          make the illustrations a bit harder to follow.
        </div>

        <Illustration>
          <Cube className={`first dark-${darkMode}`} />
          <Cube className={`second dark-${darkMode}`} />
          <Cube className={`third dark-${darkMode}`} />
        </Illustration>

        <p className="description">
          <b>
            PLL focuses on getting the top layers side faces to be in the right spots and
            orientation.
          </b>{' '}
          This is the last step of the CFPO method, so let's finish our cube!
        </p>
      </section>

      <section className="corners" id="corners">
        <div className="intro-mini side-margins">
          <h3>The Corners</h3>

          <Illustration>
            <div className="movement">
              <p style={{ marginTop: '1rem' }} className="description">
                No corners solved
              </p>
              <Cube className="gray no-corners" />
            </div>
            <div className="movement">
              <p style={{ marginTop: '1rem' }} className="description">
                One corner pair solved
              </p>
              <Cube className="gray one-corner-pair" />
            </div>
          </Illustration>
        </div>

        <p className="side-margins" style={{ marginTop: '2rem' }}>
          If you have no corners solved, you can see the algorithm in the first slide -
          otherwise, if you have one corner pair move the matching pair to the left side -
          the visuals are in the second slide.
        </p>
        <Illustration slide={true}>
          <div className="illustration case-no-corners">
            <div className="repeat-group part-one">
              <div className="movement">
                <p className="left">F</p>
                <Movement.F trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime className="second" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="second" trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">U</p>
                <Movement.U trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="second" trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">F'</p>
                <Movement.Fprime trackPieces={trackPieces} />
              </div>
            </div>
            <div className="repeat-group part-two">
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U</p>
                <Movement.U trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="second" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">F</p>
                <Movement.F trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="second" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">F'</p>
                <Movement.Fprime trackPieces={trackPieces} />
              </div>
            </div>
          </div>

          <div className="illustration case-one-corner-pair">
            <div className="repeat-group part-one">
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
                <Movement.Rprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="second" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">F</p>
                <Movement.F trackPieces={trackPieces} />
              </div>
            </div>
            <div className="repeat-group part-two">
              <div className="movement">
                <p className="left">R</p>
                <p className="right">x2</p>
                <Movement.R className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="first" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime className="second" trackPieces={trackPieces} />
              </div>
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="second" trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">U</p>
                <Movement.U trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="second" trackPieces={trackPieces} />
              </div>

              <div className="movement">
                <p className="left">F'</p>
                <Movement.Fprime trackPieces={trackPieces} />
              </div>
            </div>
          </div>
        </Illustration>
      </section>
    </main>
  )
}

export default PLL
