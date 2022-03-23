import { HashLink } from 'react-router-hash-link'

import Cube from '../../components/Cube/Cube'
import './First.scss'

import Algorithms from './components/Algorithms'
import Steps from './components/Steps'
import SpecialCases from './components/SpecialCases'

const First = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  return (
    <div className="first-two-layers">
      <div className="menu">
        <HashLink to="#algorithms">Algorithms</HashLink>
        <HashLink to="#steps">Steps</HashLink>
        <HashLink to="#special-cases">Special Cases</HashLink>
      </div>

      <div className="intro side-margins">
        <h2 className="title">
          The First Two Layers <p>(F2L)</p>
        </h2>
        <div className="illustration">
          <Cube flip className={`first dark-${darkMode}`} />
          <Cube flip className={`second dark-${darkMode}`} />
          <Cube flip className={`third dark-${darkMode}`} />
        </div>
        <p className="description">
          <b>You've solved the white cross, congrats!</b> Now it's time to solve the first two layers. F2L is
          supposed to be a more intutitive method, but these are some tips and tools to help you along the
          way.
        </p>
      </div>

      <Algorithms trackPieces={trackPieces} />
      <Steps />
      <SpecialCases />
    </div>
  )
}

export default First
