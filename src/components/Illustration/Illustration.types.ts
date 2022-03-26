interface Illustration {
  slide?: boolean
  className?: string
}

interface SlideProps extends Illustration {
  fullWidth?: true
  slide?: true
  children: React.ReactChild[]
}

interface NonSlideProps extends Illustration {
  fullWidth?: boolean
  slide?: false
  children: React.ReactChild | React.ReactChild[]
}

type IllustrationProps = Illustration & (SlideProps | NonSlideProps)
export default IllustrationProps
