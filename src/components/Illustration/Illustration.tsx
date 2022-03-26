import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import type IllustrationProps from './Illustration.types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Illustration.scss'

const Illustration = ({ className, children, fullWidth = true, slide = false }: IllustrationProps) => {
  if (!slide) return <div className={`illustration full-width-${fullWidth} ${className}`}>{children}</div>

  return (
    <div className="slide-container">
      <Carousel
        className={`slide ${className}`}
        showStatus={false}
        infiniteLoop={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="indicator selected"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            )
          }

          return (
            <li
              className="indicator"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button className="handle left" type="button" onClick={onClickHandler} title={label}></button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button className="handle right" type="button" onClick={onClickHandler} title={label}></button>
          )
        }
      >
        {children as React.ReactChild[]}
      </Carousel>
      <p className="slide-description side-margins">
        <i>Each slide shows a different case and solution</i>
      </p>
    </div>
  )
}

export default Illustration
