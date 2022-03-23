import { ReactComponent as CubeSVG } from '../../assets/Cube.svg'

import { ReactComponent as Arrow } from '../../assets/arrows/Arrow.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrows/ArrowDown.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrows/ArrowUp.svg'

import CubeProps from './Cube.types'
import './Cube.scss'

const Cube = ({ shape, trackPieces = false, flip, className, direction, placement, size }: CubeProps) => {
  const getIcon = (shape?: 'down' | 'up' | 'base') => {
    switch (shape) {
      case 'base':
      case undefined:
        return Arrow

      case 'down':
        return ArrowDown

      case 'up':
        return ArrowUp
    }
  }

  const Icon = getIcon(shape)

  const getDirection = (direction?: 'from-left' | 'from-right' | 'to-left' | 'to-right') => {
    switch (direction) {
      case undefined:
        if (shape === 'down') {
          return 'to-left'
        } else {
          return 'from-left'
        }

      default:
        return direction
    }
  }

  const getPlacement = (placement?: string) => {
    switch (placement) {
      case undefined:
        if (!shape || shape === 'base') {
          return 'top'
        } else {
          return 'outer'
        }

      default:
        return placement
    }
  }

  return (
    <div className={`cube ${size || 'medium'}`}>
      {shape && (
        <Icon
          className={`arrow 
          ${shape || 'base'} 
          ${getDirection(direction)}
          ${getPlacement(placement)}
    
        `}
        />
      )}

      <CubeSVG
        className={`cube-svg 
          ${className || ''} 
          ${size || 'medium'} 
          ${flip ? 'flip' : ''} 
          ${trackPieces ? 'track-pieces' : ''}
        `}
      />
    </div>
  )
}

export default Cube
