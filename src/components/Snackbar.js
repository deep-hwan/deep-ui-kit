import { css } from '@emotion/css'
import React, { useEffect, useRef } from 'react'

export default function AlartSnackbar({ children, isView, onCancel }) {
  const ref = useRef()

  const clickModalOutside = event => {
    if (isView && !ref.current?.contains(event.target)) {
      onCancel()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isView])

  return (
    <div
      ref={ref}
      className={css`
        z-index: 99999;
        //
        position: fixed;
        top: ${isView ? '0' : '-100%'};
        left: 50%;
        transform: translateX(-50%);
        //
        width: 100%;
        max-width: 500px;
        //
        display: flex;
        flex-direction: column;
        padding: 30px 20px;
        //
        opacity: ${isView ? 1 : 0};
        //
        transition: 0.3s ease-in-out;
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 600px) {
          top: auto;
          bottom: ${isView ? '0' : '-100%'};
        }
      `}
    >
      <div
        className={css`
          position: relative;
          width: 100%;
          background-color: #fff;
          border-radius: 14px;
          box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
          padding: 16px 16px;
          display: flex;
          flex-direction: column;
          row-gap: 4px;
        `}
      >
        <button
          className={css`
            z-index: 999;
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            cursor: pointer;
            align-items: center;
            user-select: none;
            transition: 0.3s ease-in-out;
            border: none;
            cursor: pointer;
            background-color: transparent;

            svg {
              width: 100%;
              height: 100%;
              fill: #e0e0e0;
            }
          `}
          type="button"
          onClick={() => onCancel()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <g
              id="그룹_96430"
              data-name="그룹 96430"
              transform="translate(-1139 -96)"
            >
              <circle
                id="타원_1270"
                data-name="타원 1270"
                cx="12.5"
                cy="12.5"
                r="12.5"
                transform="translate(1139 96)"
                fill="#fff"
              />
              <path
                id="xBtn"
                d="M25.481,7.8a12.5,12.5,0,1,0,0,17.677,12.5,12.5,0,0,0,0-17.677m-6.32,12.824-2.519-2.519-2.52,2.52a1.038,1.038,0,0,1-1.467-1.467l2.52-2.52L12.66,14.126a1.038,1.038,0,0,1,1.467-1.467l2.515,2.516,2.515-2.515a1.035,1.035,0,0,1,1.464,1.464l-2.515,2.515,2.52,2.519-.221.221.221-.221a1.038,1.038,0,0,1-1.467,1.467"
                transform="translate(1134.858 91.858)"
                fill="current"
              />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
