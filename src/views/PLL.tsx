import Illustration from '../components/Illustration/Illustration'
import Movement from '../components/Cube/Movement'
import Cube from '../components/Cube/Cube'

// no edges solved
// -- case 1: two edges (all?) need to go to the opposite side
// -- case 2: adjacent edge swap, diagonally need to swap edges (?)

import './PLL.scss'
import { useState } from 'react'

const PLL = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  const [edges, setEdges] = useState(0)
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

      <section className="edges" id="edges">
        <div className="intro-mini side-margins">
          <h3>The Edges</h3>
          <div className="question">
            <h4>How many edges are already solved?</h4>
          </div>

          <Illustration className="pick-edges">
            <div
              tabIndex={0}
              className={`movement selected-${edges === 0}`}
              onClick={() => setEdges(0)}>
              <p>None</p>
              <Cube className="gray none" />
            </div>
            <div
              tabIndex={0}
              className={`movement selected-${edges === 1}`}
              onClick={() => setEdges(1)}>
              <p>1 Edge</p>
              <Cube className="gray one" />
            </div>
          </Illustration>
        </div>

        {edges === 1 ? (
          <div className="case-one-edge">
            <div className="algorithm cycle-to-left">
              <div className="case side-margins">
                <Cube className="white case-initial" />
                <p>
                  <b>Put the solved edge at the back.</b> The edge on the right side needs
                  to go to the left side.
                </p>
              </div>
              <Illustration>
                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <Movement.U className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <Movement.U className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="fourth" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R</p>
                  <p className="right">x2</p>
                  <Movement.R className="fifth" trackPieces={trackPieces} />
                </div>
              </Illustration>
            </div>
            <div className="algorithm cycle-to-right">
              <div className="case side-margins">
                <Cube className="white case-initial" />
                <p>
                  <b>Put the solved edge at the back.</b> The edge on the left side needs
                  to go to the right side.
                </p>
              </div>
              <Illustration>
                <div className="movement">
                  <p className="left">R</p>
                  <p className="right">x2</p>
                  <Movement.R className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <Movement.Uprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <Movement.U className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <Movement.U className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime className="fourth" trackPieces={trackPieces} />
                </div>
              </Illustration>
            </div>
          </div>
        ) : (
          <div className="case-no-edges">
            <div className="algorithm opposite-edge-swap">
              <div className="case side-margins">
                <Cube className="white case-initial" />
                <p>All the edges need to swap to the opposite side.</p>
              </div>
              <Illustration>
                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <p className="right">x2</p>
                  <Movement.Uprime className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="fourth" trackPieces={trackPieces} />
                </div>
              </Illustration>
            </div>
            <div className="algorithm adjacent-edge-swap">
              <div className="case side-margins">
                <Cube className="white case-initial" />
                <p>
                  Edges need to be swapped diagonally.{' '}
                  <b>Place the ones you need to swap on the front and right!</b>
                </p>
              </div>
              <Illustration>
                <div className="movement">
                  <p className="left">M'</p>
                  <Movement.M className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="first" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="second" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="third" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M'</p>
                  <Movement.M className="fourth" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">U</p>
                  <p className="right">x2</p>
                  <Movement.Uprime className="fourth" trackPieces={trackPieces} />
                </div>

                <div className="movement">
                  <p className="left">M</p>
                  <p className="right">x2</p>
                  <Movement.M className="fifth" trackPieces={trackPieces} />
                </div>
              </Illustration>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default PLL
