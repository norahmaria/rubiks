import { useEffect, useRef, useState } from 'react'
import { ReactComponent as CubeSVG } from '../../assets/Cube.svg'

import { ReactComponent as Arrow } from '../../assets/arrows/Arrow.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrows/ArrowDown.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrows/ArrowUp.svg'

import CubeProps from './Cube.types'
import './Cube.scss'

const Cube = ({
  shape,
  trackPieces = false,
  flip,
  className,
  direction,
  placement,
  size,
}: CubeProps) => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    ref.current?.addEventListener('load', () => {
      console.log('loaded!!!')

      setTimeout(() => {
        setLoaded(true)
      }, 1000)
      // setLoaded(true)
    })

    return () => {
      ref.current?.removeEventListener('load', () => {
        console.log('loaded!!!')

        setTimeout(() => {
          setLoaded(true)
        }, 1000)
        // setLoaded(false)
      })
    }
  }, [])

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

  const getDirection = (
    direction?: 'from-left' | 'from-right' | 'to-left' | 'to-right'
  ) => {
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

      {/* <CubeSVG
        ref={ref}
        className={`cube-svg 
          ${className || ''} 
          ${size || 'medium'} 
          ${flip ? 'flip' : ''} 
          ${trackPieces ? 'track-pieces' : ''}
        `}
      /> */}

      {/* {!loaded && <div>loading</div>} */}

      <svg
        ref={ref}
        className={`cube-svg 
          ${className || ''} 
          ${size || 'medium'} 
          ${flip ? 'flip' : ''} 
          ${trackPieces ? 'track-pieces' : ''}
        `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1008 1160">
        <g id="bottom-layer">
          <g id="right-corner" filter="url(#filter0_dd_309_3368)">
            <mask
              id="mask0_309_3368"
              width="334"
              height="368"
              x="669"
              y="586"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon"
                fill="#fff"
                d="M806 595c19-11 42-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-30-52V708c0-21 12-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask0_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M821 586c9-5 21-5 30 0l137 79c9 6 15 15 15 26v158c0 11-6 21-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-5-15-15-15-26V691c0-11 6-20 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m988 665-152-87v333c0 23 25 37 45 26l107-62c9-5 15-15 15-26V691c0-11-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m684 875 107 62c20 11 45-3 45-26V578l-152 87c-9 6-15 15-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M1003 867V709c0-16-17-25-30-18l-107 62a60 60 0 0 0-30 52v123c0 16 17 25 30 18l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M669 855c0 7 4 14 10 17l127 74c13 7 30-2 30-18V805c0-21-11-41-30-52l-107-62c-13-7-30 2-30 18v146Z"
              />
            </g>
          </g>
          <g id="front-right" filter="url(#filter1_ddd_309_3368)">
            <mask
              id="mask1_309_3368"
              width="334"
              height="368"
              x="503"
              y="682"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_2"
                fill="#fff"
                d="M640 691c19-11 42-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-29-52V804c0-21 11-41 29-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask1_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M655 682c9-5 21-5 30 0l137 79c9 5 15 15 15 26v158c0 11-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-14-15-14-26V787c0-11 5-21 14-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m822 761-152-88v334c0 23 25 37 45 26l107-62c9-6 15-15 15-26V787c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m518 971 107 61c20 12 45-2 45-25V673l-152 88c-9 5-14 15-14 26v158c0 11 5 20 14 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M837 962V804c0-15-17-25-30-17l-107 62a60 60 0 0 0-30 52v123c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M504 951c0 7 3 14 10 17l126 73c14 8 30-2 30-17V901c0-22-11-42-30-52l-106-62c-14-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="left-corner" filter="url(#filter2_dd_309_3368)">
            <mask
              id="mask2_309_3368"
              width="334"
              height="368"
              x="4"
              y="586"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_3"
                fill="#fff"
                d="M141 595c18-11 41-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0L34 884a60 60 0 0 1-30-52V708c0-21 12-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask2_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M156 586c9-5 21-5 30 0l137 79c9 6 15 15 15 26v158c0 11-6 21-15 26l-137 79c-9 5-21 5-30 0L19 875c-9-5-15-15-15-26V691c0-11 6-20 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m323 665-152-87v333c0 23 25 37 45 26l107-62c9-5 15-15 15-26V691c0-11-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m19 875 107 62c20 11 45-3 45-26V578L19 665c-9 6-15 15-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M338 867V709c0-16-17-25-30-18l-107 62a60 60 0 0 0-30 52v123c0 16 17 25 30 18l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M4 855c0 7 4 14 10 17l127 74c13 7 30-2 30-18V805c0-21-12-41-30-52L34 691c-13-7-30 2-30 18v146Z"
              />
            </g>
          </g>
          <g id="front-left" filter="url(#filter3_ddd_309_3368)">
            <mask
              id="mask3_309_3368"
              width="335"
              height="368"
              x="170"
              y="682"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_4"
                fill="#fff"
                d="M308 691c18-11 41-11 60 0l106 61c19 11 30 31 30 52v124c0 21-11 41-30 52l-106 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-30-52V804c0-21 11-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask3_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M323 682c9-5 20-5 30 0l136 79c10 5 15 15 15 26v158c0 11-5 20-15 26l-136 79c-10 5-21 5-30 0l-137-79c-9-6-15-15-15-26V787c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m489 761-151-88v334c0 23 25 37 45 26l106-62c10-6 15-15 15-26V787c0-11-5-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m186 971 107 61c20 12 45-2 45-25V673l-152 88c-9 5-15 15-15 26v158c0 11 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M504 962V804c0-15-16-25-30-17l-106 62a60 60 0 0 0-30 52v123c0 15 16 25 30 17l136-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M171 951c0 7 4 14 10 17l127 73c13 8 30-2 30-17V901c0-22-12-42-30-52l-107-62c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="front-corner" filter="url(#filter4_ddd_309_3368)">
            <mask
              id="mask4_309_3368"
              width="334"
              height="367"
              x="337"
              y="779"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_5"
                fill="#fff"
                d="M474 787c19-11 42-11 60 0l107 62c18 10 30 30 30 52v123c0 22-12 41-30 52l-107 62a60 60 0 0 1-60 0l-106-62a60 60 0 0 1-30-52V901c0-22 11-42 30-52l106-62Z"
              />
            </mask>
            <g mask="url(#mask4_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M489 778c10-5 21-5 30 0l137 79c9 6 15 16 15 26v158c0 11-6 21-15 26l-137 79c-9 6-20 6-30 0l-136-79c-10-5-15-15-15-26V883c0-10 5-20 15-26l136-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m656 857-152-87v333c0 23 25 38 45 26l107-62c9-5 15-15 15-26V883c0-10-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m353 1067 106 62c20 12 45-3 45-26V770l-151 87c-10 6-15 16-15 26v158c0 11 5 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M671 1059V901c0-15-17-25-30-17l-107 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M338 1047c0 7 3 14 10 18l126 73c14 8 30-2 30-17V997c0-21-11-41-30-52l-106-61c-14-8-30 2-30 17v146Z"
              />
            </g>
          </g>
        </g>
        <g id="middle-layer">
          <g id="right-corner" filter="url(#filter5_dd_309_3368)">
            <mask
              id="mask5_309_3368"
              width="334"
              height="368"
              x="669"
              y="394"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_6"
                fill="#fff"
                d="M806 403c19-11 42-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-30-52V516c0-21 12-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask5_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M821 394c9-5 21-5 30 0l137 79c9 5 15 15 15 26v158c0 11-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-15-15-15-26V499c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m988 473-152-88v334c0 23 25 37 45 25l107-61c9-6 15-15 15-26V499c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m684 683 107 61c20 12 45-2 45-25V385l-152 88c-9 5-15 15-15 26v158c0 11 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M1003 674V516c0-15-17-25-30-17l-107 62a60 60 0 0 0-30 52v123c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M669 663c0 7 4 14 10 17l127 73c13 8 30-2 30-17V613c0-22-11-42-30-52l-107-62c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="front-right" filter="url(#filter6_ddd_309_3368)">
            <mask
              id="mask6_309_3368"
              width="334"
              height="367"
              x="503"
              y="490"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_7"
                fill="#fff"
                d="M640 498c19-10 42-10 60 0l107 62c18 11 30 31 30 52v123c0 22-12 42-30 52l-107 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-29-52V612c0-21 11-41 29-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask6_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M655 490c9-6 21-6 30 0l137 79c9 5 15 15 15 26v158c0 10-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-14-16-14-26V595c0-11 5-21 14-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m822 569-152-88v333c0 23 25 38 45 26l107-61c9-6 15-16 15-26V595c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m518 779 107 61c20 12 45-3 45-26V481l-152 88c-9 5-14 15-14 26v158c0 10 5 20 14 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M837 770V612c0-15-17-25-30-17l-107 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M504 759c0 7 3 13 10 17l126 73c14 8 30-2 30-17V708c0-21-11-41-30-52l-106-61c-14-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="left-corner" filter="url(#filter7_dd_309_3368)">
            <mask
              id="mask7_309_3368"
              width="334"
              height="368"
              x="4"
              y="394"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_8"
                fill="#fff"
                d="M141 403c18-11 41-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0L34 692a60 60 0 0 1-30-52V516c0-21 12-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask7_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M156 394c9-5 21-5 30 0l137 79c9 5 15 15 15 26v158c0 11-6 20-15 26l-137 79c-9 5-21 5-30 0L19 683c-9-6-15-15-15-26V499c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m323 473-152-88v334c0 23 25 37 45 25l107-61c9-6 15-15 15-26V499c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m19 683 107 61c20 12 45-2 45-25V385L19 473c-9 5-15 15-15 26v158c0 11 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M338 674V516c0-15-17-25-30-17l-107 62a60 60 0 0 0-30 52v123c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M4 663c0 7 4 14 10 17l127 73c13 8 30-2 30-17V613c0-22-12-42-30-52L34 499c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="front-left" filter="url(#filter8_ddd_309_3368)">
            <mask
              id="mask8_309_3368"
              width="335"
              height="367"
              x="170"
              y="490"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_9"
                fill="#fff"
                d="M308 498c18-10 41-10 60 0l106 62c19 11 30 31 30 52v123c0 22-11 42-30 52l-106 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-30-52V612c0-21 11-41 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask8_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M323 490c9-6 20-6 30 0l136 79c10 5 15 15 15 26v158c0 10-5 20-15 26l-136 79c-10 5-21 5-30 0l-137-79c-9-6-15-16-15-26V595c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m489 569-151-88v333c0 23 25 38 45 26l106-61c10-6 15-16 15-26V595c0-11-5-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m186 779 107 61c20 12 45-3 45-26V481l-152 88c-9 5-15 15-15 26v158c0 10 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M504 770V612c0-15-16-25-30-17l-106 61a60 60 0 0 0-30 52v124c0 15 16 25 30 17l136-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M171 759c0 7 4 13 10 17l127 73c13 8 30-2 30-17V708c0-21-12-41-30-52l-107-61c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="front-corner" filter="url(#filter9_ddd_309_3368)">
            <mask
              id="mask9_309_3368"
              width="334"
              height="368"
              x="337"
              y="586"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_10"
                fill="#fff"
                d="M474 595c19-11 42-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-106-61a60 60 0 0 1-30-52V708c0-21 11-41 30-52l106-61Z"
              />
            </mask>
            <g mask="url(#mask9_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M489 586c10-5 21-5 30 0l137 79c9 6 15 15 15 26v158c0 11-6 21-15 26l-137 79c-9 5-20 5-30 0l-136-79c-10-5-15-15-15-26V691c0-11 5-20 15-26l136-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m656 665-152-87v333c0 23 25 37 45 26l107-62c9-5 15-15 15-26V691c0-11-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m353 875 106 62c20 11 45-3 45-26V578l-151 87c-10 6-15 15-15 26v158c0 11 5 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M671 867V709c0-16-17-25-30-18l-107 62a60 60 0 0 0-30 52v123c0 16 17 25 30 18l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M338 855c0 7 3 14 10 17l126 74c14 7 30-2 30-18V805c0-21-11-41-30-52l-106-62c-14-7-30 2-30 18v146Z"
              />
            </g>
          </g>
        </g>
        <g id="top-layer">
          <g id="back-corner" filter="url(#filter10_d_309_3368)">
            <mask
              id="mask10_309_3368"
              width="334"
              height="367"
              x="338"
              y="10"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_11"
                fill="#fff"
                d="M475 18c19-11 41-11 60 0l107 62c18 10 30 30 30 52v123c0 21-12 41-30 52l-107 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-30-52V132c0-22 12-42 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask10_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M490 9c9-5 21-5 30 0l137 79c9 6 15 16 15 26v158c0 11-6 21-15 26l-137 79c-9 6-21 6-30 0l-137-79c-9-5-15-15-15-26V114c0-10 6-20 15-26L490 9Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="M657 88 505 1v333c0 23 25 38 45 26l107-62c9-5 15-15 15-26V114c0-10-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m353 298 107 62c20 12 45-3 45-26V1L353 88c-9 6-15 16-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M672 290V132c0-15-17-25-30-17l-107 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M338 278c0 7 4 14 10 18l127 73c13 8 30-2 30-17V228c0-21-11-41-30-52l-107-61c-13-8-30 2-30 17v146Z"
              />
            </g>
          </g>
          <g id="back-left" filter="url(#filter11_dd_309_3368)">
            <mask
              id="mask11_309_3368"
              width="335"
              height="368"
              x="171"
              y="106"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_12"
                fill="#fff"
                d="M308 115c19-11 42-11 60 0l107 61c19 11 30 31 30 52v124c0 21-11 41-30 52l-107 61a60 60 0 0 1-60 0l-106-61a60 60 0 0 1-30-52V228c0-21 11-41 30-52l106-61Z"
              />
            </mask>
            <g mask="url(#mask11_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M323 106c10-5 21-5 30 0l137 79c9 5 15 15 15 26v158c0 11-6 20-15 26l-137 79c-9 5-20 5-30 0l-136-79c-10-6-15-15-15-26V211c0-11 5-21 15-26l136-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="M490 185 338 97v334c0 23 25 37 45 25l107-61c9-6 15-15 15-26V211c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m187 395 106 61c20 12 45-2 45-25V97l-151 88c-10 5-15 15-15 26v158c0 11 5 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M505 386V228c0-15-17-25-30-17l-107 62a60 60 0 0 0-30 52v123c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M172 375c0 7 3 14 10 17l126 73c14 8 30-2 30-17V325c0-22-11-42-30-52l-106-62c-14-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="back-right" filter="url(#filter12_dd_309_3368)">
            <mask
              id="mask12_309_3368"
              width="334"
              height="368"
              x="503"
              y="106"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_13"
                fill="#fff"
                d="M640 115c19-11 42-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-29-52V228c0-21 11-41 29-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask12_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M655 106c9-5 21-5 30 0l137 79c9 5 15 15 15 26v158c0 11-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-14-15-14-26V211c0-11 5-21 14-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="M822 185 670 97v334c0 23 25 37 45 25l107-61c9-6 15-15 15-26V211c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m518 395 107 61c20 12 45-2 45-25V97l-152 88c-9 5-14 15-14 26v158c0 11 5 20 14 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M837 386V228c0-15-17-25-30-17l-107 62a60 60 0 0 0-30 52v123c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M504 375c0 7 3 14 10 17l126 73c14 8 30-2 30-17V325c0-22-11-42-30-52l-106-62c-14-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="right-corner" filter="url(#filter13_dd_309_3368)">
            <mask
              id="mask13_309_3368"
              width="334"
              height="367"
              x="670"
              y="203"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_14"
                fill="#fff"
                d="M807 211c18-11 41-11 60 0l107 62c18 10 30 30 30 52v123c0 21-12 41-30 52l-107 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-30-52V325c0-22 12-42 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask13_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M822 202c9-5 21-5 30 0l137 79c9 6 15 16 15 26v158c0 11-6 21-15 26l-137 79c-9 6-21 6-30 0l-137-79c-9-5-15-15-15-26V307c0-10 6-20 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m989 281-152-87v333c0 23 25 38 45 26l107-62c9-5 15-15 15-26V307c0-10-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m685 491 107 62c20 12 45-3 45-26V194l-152 87c-9 6-15 16-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M1004 483V325c0-15-17-25-31-17l-106 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M670 471c0 7 4 14 10 18l127 73c13 8 30-2 30-17V421c0-21-12-41-30-52l-107-61c-13-8-30 2-30 17v146Z"
              />
            </g>
          </g>
          <g id="center" filter="url(#filter14_ddd_309_3368)">
            <mask
              id="mask14_309_3368"
              width="334"
              height="367"
              x="338"
              y="202"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_15"
                fill="#fff"
                d="M475 210c19-10 41-10 60 0l107 62c18 11 30 31 30 52v123c0 22-12 42-30 52l-107 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-30-52V324c0-21 12-41 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask14_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M490 202c9-6 21-6 30 0l137 79c9 5 15 15 15 26v158c0 10-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-15-16-15-26V307c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m657 281-152-88v333c0 23 25 38 45 26l107-61c9-6 15-16 15-26V307c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m353 491 107 61c20 12 45-3 45-26V193l-152 88c-9 5-15 15-15 26v158c0 10 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M672 482V324c0-15-17-25-30-17l-107 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M338 471c0 7 4 13 10 17l127 73c13 8 30-2 30-17V420c0-21-11-41-30-52l-107-61c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
          <g id="front-right" filter="url(#filter15_ddd_309_3368)">
            <mask
              id="mask15_309_3368"
              width="334"
              height="368"
              x="504"
              y="298"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_16"
                fill="#fff"
                d="M641 307c18-11 41-11 60 0l107 61c18 11 30 31 30 52v124c0 21-12 41-30 52l-107 61a60 60 0 0 1-60 0l-107-61a60 60 0 0 1-30-52V420c0-21 12-41 30-52l107-61Z"
              />
            </mask>
            <g mask="url(#mask15_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M656 298c9-5 21-5 30 0l137 79c9 6 15 15 15 26v158c0 11-6 21-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-5-15-15-15-26V403c0-11 6-20 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m823 377-152-87v333c0 23 25 37 45 26l107-62c9-5 15-15 15-26V403c0-11-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m519 587 107 62c20 11 45-3 45-26V290l-152 87c-9 6-15 15-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M838 579V421c0-16-17-25-30-18l-107 62a60 60 0 0 0-30 52v123c0 16 17 25 30 18l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M504 567c0 7 4 14 10 17l127 74c13 7 30-2 30-18V517c0-21-12-41-30-52l-107-62c-13-7-30 2-30 18v146Z"
              />
            </g>
          </g>
          <g id="left-corner" filter="url(#filter16_dd_309_3368)">
            <mask
              id="mask16_309_3368"
              width="334"
              height="367"
              x="5"
              y="203"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_17"
                fill="#fff"
                d="M142 211c18-11 41-11 60 0l106 62c19 10 30 30 30 52v123c0 21-11 41-30 52l-106 62a60 60 0 0 1-60 0L35 500a60 60 0 0 1-30-52V325c0-22 11-42 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask16_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M157 202c9-5 20-5 30 0l136 79c10 6 15 16 15 26v158c0 11-5 21-15 26l-136 79c-10 6-21 6-30 0L20 491c-9-5-15-15-15-26V307c0-10 6-20 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m323 281-151-87v333c0 23 25 38 45 26l106-62c10-5 15-15 15-26V307c0-10-5-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m20 491 107 62c20 12 45-3 45-26V194L20 281c-9 6-15 16-15 26v158c0 11 6 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M338 483V325c0-15-16-25-30-17l-106 61a60 60 0 0 0-30 52v124c0 15 16 25 30 17l136-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M5 471c0 7 4 14 10 18l127 73c13 8 30-2 30-17V421c0-21-12-41-30-52L35 308c-13-8-30 2-30 17v146Z"
              />
            </g>
          </g>
          <g id="front-left" filter="url(#filter17_ddd_309_3368)">
            <mask
              id="mask17_309_3368"
              width="335"
              height="368"
              x="171"
              y="298"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_18"
                fill="#fff"
                d="M308 307c19-11 42-11 60 0l107 61c19 11 30 31 30 52v124c0 21-11 41-30 52l-107 61a60 60 0 0 1-60 0l-106-61a60 60 0 0 1-30-52V420c0-21 11-41 30-52l106-61Z"
              />
            </mask>
            <g mask="url(#mask17_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M323 298c10-5 21-5 30 0l137 79c9 6 15 15 15 26v158c0 11-6 21-15 26l-137 79c-9 5-20 5-30 0l-136-79c-10-5-15-15-15-26V403c0-11 5-20 15-26l136-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m490 377-152-87v333c0 23 25 37 45 26l107-62c9-5 15-15 15-26V403c0-11-6-20-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m187 587 106 62c20 11 45-3 45-26V290l-151 87c-10 6-15 15-15 26v158c0 11 5 21 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M505 579V421c0-16-17-25-30-18l-107 62a60 60 0 0 0-30 52v123c0 16 17 25 30 18l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M172 567c0 7 3 14 10 17l126 74c14 7 30-2 30-18V517c0-21-11-41-30-52l-106-62c-14-7-30 2-30 18v146Z"
              />
            </g>
          </g>
          <g id="front-corner" filter="url(#filter18_ddd_309_3368)">
            <mask
              id="mask18_309_3368"
              width="334"
              height="367"
              x="338"
              y="395"
              maskUnits="userSpaceOnUse">
              <path
                id="Polygon_19"
                fill="#fff"
                d="M475 403c19-10 41-10 60 0l107 62c18 11 30 31 30 52v123c0 22-12 42-30 52l-107 62a60 60 0 0 1-60 0l-107-62a60 60 0 0 1-30-52V517c0-21 12-41 30-52l107-62Z"
              />
            </mask>
            <g mask="url(#mask18_309_3368)">
              <path
                id="top"
                fill="#FF6B4A"
                d="M490 395c9-6 21-6 30 0l137 79c9 5 15 15 15 26v158c0 10-6 20-15 26l-137 79c-9 5-21 5-30 0l-137-79c-9-6-15-16-15-26V500c0-11 6-21 15-26l137-79Z"
              />
              <path
                id="top-right"
                fill="#FF6B4A"
                d="m657 474-152-88v333c0 23 25 38 45 26l107-61c9-6 15-16 15-26V500c0-11-6-21-15-26Z"
              />
              <path
                id="top-left"
                fill="#FF6B4A"
                d="m353 684 107 61c20 12 45-3 45-26V386l-152 88c-9 5-15 15-15 26v158c0 10 6 20 15 26Z"
              />
              <path
                id="right"
                fill="#66BEEC"
                d="M672 675V517c0-15-17-25-30-17l-107 61a60 60 0 0 0-30 52v124c0 15 17 25 30 17l137-79Z"
              />
              <path
                id="left"
                fill="#F7EC61"
                d="M338 664c0 7 4 13 10 17l127 73c13 8 30-2 30-17V613c0-21-11-41-30-52l-107-61c-13-8-30 2-30 17v147Z"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_309_3368"
            width="351.3"
            height="403.3"
            x="655"
            y="574"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="490"
            y="669"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dd_309_3368"
            width="351.3"
            height="403.3"
            x="0"
            y="574"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="157"
            y="669"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="324"
            y="766"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_dd_309_3368"
            width="351.3"
            height="403.3"
            x="655"
            y="381"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="490"
            y="477"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_dd_309_3368"
            width="351.3"
            height="403.3"
            x="0"
            y="381"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="157"
            y="477"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="324"
            y="574"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_d_309_3368"
            width="341.3"
            height="399.3"
            x="334"
            y="1"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_dd_309_3368"
            width="351.3"
            height="403.3"
            x="168"
            y="93"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_dd_309_3368"
            width="351.3"
            height="403.3"
            x="490"
            y="93"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter13_dd_309_3368"
            width="351.3"
            height="403.3"
            x="656"
            y="190"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter14_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="324"
            y="189"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter15_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="490"
            y="286"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter16_dd_309_3368"
            width="351.3"
            height="403.3"
            x="1"
            y="190"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter17_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="158"
            y="286"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
          <filter
            id="filter18_ddd_309_3368"
            width="361.3"
            height="403.3"
            x="324"
            y="382"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_309_3368" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect1_dropShadow_309_3368"
              result="effect2_dropShadow_309_3368"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="effect2_dropShadow_309_3368"
              result="effect3_dropShadow_309_3368"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_309_3368"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Cube
