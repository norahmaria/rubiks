import Illustration from '../components/Illustration/Illustration'
import Cube from '../components/Cube/Cube'

import './OLL.scss'

const OLL = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <main className="oll">
      <section className="intro side-margins">
        <h2 className="title">
          Orientation of Last Layer <p>(OLL)</p>
        </h2>

        <Illustration>
          <Cube className={`first dark-${darkMode}`} />
          <Cube className={`second dark-${darkMode}`} />
          <Cube className={`third dark-${darkMode}`} />
        </Illustration>

        <p className="description">
          Solving the white cross and F2L were a bit more intuitive,{' '}
          <b>now it's time for a lil more of an algorithm based approach</b>. OLL focuses on turning the top
          face of the cube into yellow, don't worry about the sides of the layer (unless specified) - we will
          get to them in the last step!
        </p>
      </section>
    </main>
  )
}

export default OLL
