import { css } from '@emotion/css'
import React from 'react'

// backTab
export function BackTab(props) {
  const { styles, onClick, size, color, padding } = props

  return (
    <button
      onClick={onClick}
      type="button"
      className={css`
        ${styles}
        transition: 0.3s ease-in-out;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: ${padding};

        &:hover {
          opacity: 0.6;
        }
      `}
    >
      <div
        className={css`
          width: ${size ? size : '20px'};
          height: ${size ? size : '20px'};

          path {
            fill: #333;
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <g id="back-icon" transform="translate(-216 -86)">
            <rect
              id="사각형_8376"
              data-name="사각형 8376"
              transform="translate(216 86)"
              fill="none"
              opacity="0"
            />
            <path
              id="패스_32763"
              data-name="패스 32763"
              d="M21.558,2.406l-9.408,8.2a1.445,1.445,0,0,1-1.955.024l-9.749-8A1.429,1.429,0,0,1,0,1.614a1.4,1.4,0,0,1,.427-1A1.428,1.428,0,0,1,1.416.206h.019a1.416,1.416,0,0,1,.953.356l8.739,7.117,8.454-7.3A1.463,1.463,0,0,1,21.56.392,1.4,1.4,0,0,1,22,1.4a1.394,1.394,0,0,1-.442,1.006"
              transform="translate(232 86) rotate(90)"
              fill={color ? color : 'current'}
            />
          </g>
        </svg>
      </div>
    </button>
  )
}

// CancelTab
export function CancelTab(props) {
  const { styles, onClick, size, color, padding } = props

  return (
    <button
      onClick={onClick}
      type="button"
      className={css`
        ${styles}
        transition: 0.3s ease-in-out;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: ${padding};

        &:hover {
          opacity: 0.6;
        }
      `}
    >
      <div
        className={css`
          width: ${size ? size : '20px'};
          height: ${size ? size : '20px'};

          path {
            fill: #444;
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.495 16.509">
          <path
            id="cancel-tab"
            d="M16.141,14.286l-.183.171v0l.177-.177L10.081,8.239l6-6A1.332,1.332,0,0,0,16.078.369a1.342,1.342,0,0,0-1.862.013l-5.991,6-5.993-6A1.338,1.338,0,0,0,.366.4a1.331,1.331,0,0,0,.02,1.85L6.379,8.237l-6,6.009A1.33,1.33,0,0,0,.385,16.11a1.354,1.354,0,0,0,1.858-.02l5.991-5.981,5.99,5.98a1.318,1.318,0,0,0,.913.415c.036,0,.071.005.107.005a1.159,1.159,0,0,0,.845-.364,1.328,1.328,0,0,0,.052-1.859"
            transform="translate(0 0)"
            className={css`
              transition: 0.3s ease-in-out;
            `}
          />
        </svg>
      </div>
    </button>
  )
}
