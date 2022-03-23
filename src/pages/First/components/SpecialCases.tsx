import Cube from '../../../components/Cube/Cube'
import Movement from '../../../components/Cube/Movement'

import './SpecialCases.scss'

const SpecialCases = () => {
  return (
    <div className="special-cases" id="special-cases">
      <div className="intro side-margins">
        <h3>Special Cases</h3>
        <div className="columns">
          <div>
            <h4>What to do?</h4>
            <p>
              Sometimes you have a case where none of the above methods work for you. We are going to turn our
              case into one where they do, <b>so you can go back to the top and follow the same guide</b>.
            </p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
              If you want to learn more algorithms to deal with these cases, rather than switch the case,
              check out{' '}
              <a
                href="https://drive.google.com/file/d/1nzAXYUWZJ6H2wIOXaHdWXep3W57tArbR/view"
                className="visible"
              >
                J Perm's guide.
              </a>
            </p>
          </div>
          <div className="illustration">
            <Cube className="gray" />
            <p>
              The dark pieces will be affected by these moves, make sure to not have any solved edges in that
              spot.
            </p>
          </div>
        </div>
      </div>

      <div className="further">
        <div className="illustration">
          <div>
            <p>A Special Case</p>
            <Cube className="gray first" />
          </div>
          <div>
            <p>1. Move the corner down</p>
            <Movement.Rprime className="gray second" />
          </div>
          <div>
            <p>2. Move the edge away</p>
            <Movement.U className="gray third" />
          </div>
          <div>
            <p>3. Move the corner back</p>
            <Movement.R className="gray fourth" />
          </div>
        </div>
      </div>
      <p className="side-margins" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.1rem' }}>
        <b>Great!</b> Now you can go follow the{' '}
        <a href="#steps" className="visible">
          steps
        </a>
        .
      </p>
    </div>
  )
}

export default SpecialCases
