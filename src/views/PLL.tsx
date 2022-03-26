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
