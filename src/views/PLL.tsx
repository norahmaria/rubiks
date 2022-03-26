import Illustration from '../components/Illustration/Illustration'
import Cube from '../components/Cube/Cube'

import './PLL.scss'

const PLL = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <main className="pll">
      <section className="intro side-margins">
        <h2 className="title">
          Permute Last Layer <p>(PLL)</p>
        </h2>

        <div style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          This tutorial assumes you always keep white on the bottom, however you <i>can</i> do the same moves
          with another color on the bottom - it might just make the illustrations a bit harder to follow.
        </div>

        <Illustration>
          <Cube className={`first dark-${darkMode}`} />
          <Cube className={`second dark-${darkMode}`} />
          <Cube className={`third dark-${darkMode}`} />
        </Illustration>

        <p className="description">
          <b>PLL focuses on getting the top layers side faces to be in the right spots and orientation.</b>{' '}
          This is the last step of the CFPO method, so let's finish our cube!
        </p>
      </section>
    </main>
  )
}

export default PLL
