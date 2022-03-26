import { useState } from 'react'

import Illustration from '../components/Illustration/Illustration'
import Movement from '../components/Cube/Movement'
import Cube from '../components/Cube/Cube'

import { ReactComponent as Arrow } from '../assets/Arrow.svg'
import './F2L.scss'

const F2L = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  const [whiteUp, setWhiteUp] = useState(false)

  return (
    <main className="f2l">
      <section className="intro side-margins">
        <h2 className="title">
          The First Two Layers <p>(F2L)</p>
        </h2>

        <div style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          This tutorial assumes you always keep white on the bottom, however you <i>can</i> do the same moves
          with another color on the bottom - it might just make the illustrations a bit harder to follow.
        </div>

        <Illustration>
          <Cube flip className={`first dark-${darkMode}`} />
          <Cube flip className={`second dark-${darkMode}`} />
          <Cube flip className={`third dark-${darkMode}`} />
        </Illustration>

        <p className="description">
          <b>You've solved the white cross, congrats!</b> Now it's time to solve the first two layers. F2L is
          supposed to be a intutitive method to solving the first two layers, but there are still tips and
          algorithms that make it smoother.
        </p>
      </section>

      <section className="algorithms" id="algorithms">
        <div className="intro-mini side-margins">
          <h3>Fundamental Algorithms</h3>
          <p>
            These are the movements you can use to insert the edges to their corner. You might have to turn
            your cube or the top layer to get to a specific case, but we will go through getting the edge and
            corner piece to these positions.
          </p>
        </div>

        <div className="algorithm case-one">
          <div className="case side-margins">
            <Cube className="case-one" />
            <p>Move matching pair in top left corner to bottom right corner.</p>
          </div>

          <Illustration>
            <div className="movement">
              <p className="left">R</p>
              <Movement.R trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U'</p>
              <Movement.Uprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">R'</p>
              <Movement.Rprime trackPieces={trackPieces} />
            </div>
          </Illustration>
        </div>

        <div className="algorithm case-two">
          <div className="case side-margins">
            <Cube className="case-two" />
            <p>Move matching pair in top right corner to bottom left corner.</p>
          </div>

          <Illustration>
            <div className="movement">
              <p className="left">L'</p>
              <Movement.Lprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U</p>
              <Movement.U trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">L</p>
              <Movement.L trackPieces={trackPieces} />
            </div>
          </Illustration>
        </div>

        <div className="algorithm case-three">
          <div className="case side-margins">
            <Cube className="case-three" />
            <p>
              Move piece at the top right corner, and edge piece in the back to the bottom right corner, with
              different colours up.
            </p>
          </div>

          <Illustration>
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
              <Movement.Rprime trackPieces={trackPieces} />
            </div>
          </Illustration>
        </div>

        <div className="algorithm case-four">
          <div className="case side-margins">
            <Cube className="case-four" />
            <p>
              Move piece at the top left corner, and edge piece in the back to the bottom left corner, with
              different colours up.
            </p>
          </div>

          <Illustration>
            <div className="movement">
              <p className="left">L'</p>
              <Movement.Lprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U'</p>
              <Movement.Uprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">L</p>
              <Movement.L trackPieces={trackPieces} />
            </div>
          </Illustration>
        </div>
      </section>

      <section className="steps" id="steps">
        <div className="mini-intro side-margins">
          <h3>Steps</h3>
          <p style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Make sure you've moved a white corner piece and it's matching edge piece in to the top layer. You
            should already know how to do this.
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

        <div className={`intro-mini side-margins white-up-${whiteUp}`} style={{ marginTop: '1rem' }}>
          <b>
            Double check below that you don't have a <a href="#special-cases">special case</a>.
          </b>
          {whiteUp
            ? ` If white is facing up, move the edge piece a couple times, so it aligns with it's side color.`
            : ` If white is not facing up, move the corner piece on top of the slot it needs to go to, then move it once so the white side can still be seen.`}
          {!whiteUp && <b> Double check that none of the algorithms above fit your case.</b>}
          <Illustration>
            {whiteUp ? (
              <>
                <Cube className="gray" />
                <div className="movement">
                  <p className="right">x2</p>
                  <Movement.Uprime className="gray" />
                </div>
              </>
            ) : (
              <>
                <Cube className="gray" />
                <Movement.U className="gray" />
              </>
            )}
          </Illustration>
        </div>

        {!whiteUp && (
          <div className="columns side-margins top-colors">
            <div>
              <h4>Are top colors the same?</h4>
              <p>
                Place your finger on top, parallel to the white sticker, the two edges you touch, is where the
                edge piece could go. If the top colors match, you want the edge piece to go next to the corner
                piece, if not, you want them to be apart
                <br />
                <i>The dark cube shows where the edge piece could go - in two different cases.</i>
              </p>
            </div>
            <Illustration>
              <Cube className="gray first" />
              <Cube className="gray second" />
            </Illustration>
          </div>
        )}

        {whiteUp ? (
          <div className="solutions white-up-true">
            <p className="side-margins" style={{ marginTop: '1.5rem' }}>
              Turn your entire cube, so the created line is on the right. Then turn the edge piece away,
              before moving the corner piece on top of it. At last, put it back!
            </p>
            <Illustration>
              <Cube className="gray case-one" />
              <Movement.R className="gray case-one" />
              <Movement.Uprime className="gray case-one" />
              <Movement.Rprime className="gray case-one" />
            </Illustration>
          </div>
        ) : (
          <div className="solutions white-up-false">
            <div className="h4 side-margins">If yes...</div>
            <Illustration slide={true} className="top-colors-match">
              <div className="illustration">
                <Cube className="gray case-one" />

                <div className="movement">
                  <p className="left">F'</p>
                  <Movement.Fprime className="gray case-one" />
                </div>

                <div className="movement">
                  <p className="left">U'</p>
                  <Movement.Uprime className="gray case-one" />
                </div>

                <div className="movement">
                  <p className="left">F</p>
                  <Movement.F className="gray case-one" />
                </div>
              </div>

              <div className="illustration">
                <Cube className="gray case-two" />
                <div className="movement">
                  <p className="left">R</p>
                  <Movement.R className="gray case-two" />
                </div>
                <div className="movement">
                  <p className="left">U</p>
                  <Movement.U className="gray case-two" />
                </div>

                <div className="movement">
                  <p className="left">R'</p>
                  <Movement.Rprime className="gray case-two" />
                </div>
              </div>
            </Illustration>

            <div className="h4 side-margins">If no...</div>
            <Illustration className="top-colors-opposite">
              <Cube className="gray case-one" />
              <div className="movement">
                <p className="left">R</p>
                <Movement.R className="gray case-one" />
              </div>
              <div className="movement">
                <p className="left">U'</p>
                <Movement.Uprime className="gray case-one" />
              </div>
              <div className="movement">
                <p className="left">R'</p>
                <Movement.Rprime className="gray case-one" />
              </div>
            </Illustration>
          </div>
        )}

        <div
          className="side-margins h4"
          style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}
        >
          <b>Great!</b> Now you can insert using one of the <a href="#algorithms">algorithms</a> up top.
        </div>
      </section>

      <section className="special-cases" id="special-cases">
        <div className="intro-mini side-margins">
          <h3>Special Cases</h3>
          <p>
            A special case can often be recognized by having the two colored sides matching, but white is
            facing the wrong direction for insertion.
          </p>
        </div>
        <div className="columns side-margins">
          <div>
            <h4>What to do?</h4>
            <p>
              Sometimes you have a case where none of the above methods work for you.{' '}
              <b>We are going to turn our case into one where they do</b>, so you can go back to the top and
              follow the same guide.
              <br />
              <i>
                If you want to learn more algorithms to deal with these cases, rather than switch the case,
                check out <a href="https://jperm.net/">J Perms</a> guides.
              </i>
            </p>
          </div>
          <div>
            <Illustration>
              <Cube className="gray case-one warning-pieces" />
              <p className="description">
                The dark pieces will be affected by these moves, make sure to not have any solved edges in
                that spot.
              </p>
            </Illustration>
          </div>
        </div>
        <Illustration>
          <div className="movement">
            <p>An Example Special Case</p>
            <Cube className="gray case-one" />
          </div>

          <div className="movement">
            <p>1. Move the corner down</p>
            <Movement.Rprime className="gray case-one" />
          </div>

          <div className="movement">
            <p>2. Move the edge away</p>
            <Movement.U className="gray case-one" />
          </div>

          <div className="movement">
            <p>3. Move the corner back</p>
            <Movement.R className="gray case-one" />
          </div>
        </Illustration>

        <div
          className="side-margins h4"
          style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}
        >
          <b>Great!</b> Now you can go follow the <a href="#steps">steps</a>.
        </div>
      </section>
    </main>
  )
}

export default F2L
