interface Cube {
  shape?: 'down' | 'up' | 'base'
  className?: string
  size?: 'small' | 'medium' | 'large'
  flip?: boolean
  trackPieces?: boolean
}

interface Direction extends Cube {
  shape?: 'base'
  direction?: 'from-left' | 'from-right'
  placement?: 'top' | 'middle' | 'bottom'
}

interface DirectionDown extends Cube {
  shape: 'down'
  direction?: 'to-left' | 'to-right'
  placement?: 'outer' | 'middle' | 'inner'
}

interface DirectionUp extends Cube {
  shape: 'up'
  direction?: 'from-left' | 'from-right'
  placement?: 'outer' | 'middle' | 'inner'
}

type CubeProps = Cube & (Direction | DirectionDown | DirectionUp)
export default CubeProps
