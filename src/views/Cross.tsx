import Illustration from '../components/Illustration/Illustration'
import Movement from '../components/Cube/Movement'
import Cube from '../components/Cube/Cube'

import './Cross.scss'

const WhiteCross = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <main className="white-cross">
      <section className="intro side-margins">
        <h2 className="title">The Cross</h2>

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
          <b>So you want to learn the CFOP method for solving a Rubik's Cube?</b> Great! This tutorial will
          assume you already know how to solve the cube using the beginners method, and are just looking to
          casually speed up your solves. So, let's get started by solving the white cross!
        </p>
      </section>

      <section className="algorithms" id="algorithms">
        <div className="intro-mini side-margins">
          <h3>Fundamental Algorithms</h3>
          <p>
            There is only really one algorithm i'll share for solving the white cross, you might have to turn
            your cube or the topy layer to get the case.
          </p>
        </div>

        <div className="algorithm case-one">
          <div className="case side-margins">
            <Cube className="case-one" />
            <p>Flip an edge piece.</p>
          </div>

          <Illustration>
            <div className="movement">
              <p className="left">R'</p>
              <Movement.Rprime trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">U</p>
              <Movement.U trackPieces={trackPieces} />
            </div>
            <div className="movement">
              <p className="left">F'</p>
              <Movement.Fprime trackPieces={trackPieces} />
            </div>
          </Illustration>
        </div>
      </section>

      <section className="steps side-margins" id="steps">
        <div className="intro-mini">
          <h3>General Steps</h3>
        </div>
        <Illustration>
          <div className="movement">
            <p>1. Move white edge pieces to the top</p>
            <Cube className={`first dark-${darkMode}`} />
          </div>
          <div className="movement">
            <p>2. Flip edges so white faces up</p>
            <Cube className={`second dark-${darkMode}`} />
          </div>
          <div className="movement">
            <p>3. Move edges to their spot</p>
            <Cube className={`third dark-${darkMode}`} />
          </div>
        </Illustration>
      </section>

      <section className="solve" id="solve">
        <h3 className="side-margins">Example Solve</h3>

        <div className="columns side-margins">
          <div>
            <h4>Preparation</h4>
            <p>
              <b>Looking at the scramble here, we can see where the four pieces we want to move are.</b> We
              know the far right is red, as it's the only corner piece left that we can't see the color of.
              <br />
              Another thing to note is that red and blue both have the white side facing the “wrong” way, so
              we'll have to flip their white sides before inserting them.
            </p>
          </div>
          <Illustration>
            <Cube className="gray solve" />
            <p className="description">
              Keep in mind what centers you can't see. In this case, orange is to the left and green to the
              right.
            </p>
          </Illustration>
        </div>

        <div className="intro-mini side-margins">
          <h4>The Solve</h4>
          <p>
            <b>I see that green only needs two moves to be inserted, so we'll insert it</b> - but I first want
            to move the red piece up, so that it's white side faces up, so we don't move it by placing green
            and have it in a better spot for later.
          </p>
        </div>

        <Illustration className="step-one">
          <Cube className={`gray solve`} />
          <Movement.B className={`gray solve`} />
          <Movement.Rprime className={`gray solve`} />
          <Movement.D className={`gray solve`} />
        </Illustration>

        <p className="side-margins">
          <b>Now we'll move the blue piece into it's spot.</b> I'll move the blue piece away, then move the
          orange piece out of the way to make it easier for us in the end, before putting the blue in its
          spot.
        </p>

        <Illustration className="step-two">
          <Cube className={`gray solve`} />
          <div className="movement">
            <p>1. Move blue down</p>
            <Movement.L className={`gray solve`} />
          </div>
          <div className="movement">
            <p>2. Move orange</p>
            <Movement.Uprime className={`gray solve`} />
          </div>
          <div className="movement">
            <p>3. Place blue</p>
            <Movement.Fprime className={`gray solve`} />
          </div>
        </Illustration>

        <p className="side-margins">Now we can insert orange and red into their spot.</p>

        <Illustration className="step-three">
          <Cube className={`gray solve`} />
          <div className="movement">
            <p className="right">x2</p>
            <Movement.Uprime className={`gray solve`} />
          </div>
          <div className="movement">
            <p className="right">x2</p>
            <Movement.R className={`gray solve`} />
          </div>
          <div className="movement">
            <p className="right">x2</p>
            <Movement.L className={`gray solve`} />
          </div>
        </Illustration>
      </section>
      <div className="side-margins h4" style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 400 }}>
        <b>Great!</b> That's the white cross solved.
      </div>
    </main>
  )
}

export default WhiteCross
