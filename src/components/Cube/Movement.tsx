import Cube from './Cube'

interface MovementProps {
  size?: 'small' | 'medium' | 'large'
  flip?: boolean
  trackPieces?: boolean
  className?: string
}

const Movement = {
  L: ({ className, ...props }: MovementProps) => (
    <Cube className={`l ${className}`} shape="down" placement="outer" direction="to-left" {...props} />
  ),
  Lprime: ({ className, ...props }: MovementProps) => (
    <Cube className={`l-prime ${className}`} shape="up" placement="outer" direction="from-left" {...props} />
  ),
  R: ({ className, ...props }: MovementProps) => (
    <Cube className={`r ${className}`} shape="up" placement="inner" direction="from-left" {...props} />
  ),
  Rprime: ({ className, ...props }: MovementProps) => (
    <Cube className={`r-prime ${className}`} shape="down" placement="inner" direction="to-left" {...props} />
  ),
  U: ({ className, ...props }: MovementProps) => (
    <Cube className={`u ${className}`} shape="base" placement="top" direction="from-right" {...props} />
  ),
  Uprime: ({ className, ...props }: MovementProps) => (
    <Cube className={`u-prime ${className}`} shape="base" placement="top" direction="from-left" {...props} />
  ),
  F: ({ className, ...props }: MovementProps) => (
    <Cube className={`f ${className}`} shape="down" placement="inner" direction="to-right" {...props} />
  ),
  Fprime: ({ className, ...props }: MovementProps) => (
    <Cube className={`f-prime ${className}`} shape="up" placement="inner" direction="from-right" {...props} />
  ),
  B: ({ className, ...props }: MovementProps) => (
    <Cube className={`b ${className}`} shape="up" placement="outer" direction="from-right" {...props} />
  ),
  D: ({ className, ...props }: MovementProps) => (
    <Cube className={`d ${className}`} shape="base" placement="bottom" direction="from-left" {...props} />
  ),
  Dprime: ({ className, ...props }: MovementProps) => (
    <Cube
      className={`d-prime ${className}`}
      shape="base"
      placement="bottom"
      direction="from-right"
      {...props}
    />
  ),
}

export default Movement
