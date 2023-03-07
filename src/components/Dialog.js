import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

export default function Dialog(props) {
  const { children, view, onCancel, title } = props
  const ref = useRef()

  const clickModalOutside = event => {
    if (view && !ref.current?.contains(event.target)) {
      onCancel()
    }
  }

  useEffect(() => {
    if (view) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [view])

  return (
    <>
      <LayerBlur isActive={view} />
      <DialogView isActive={view} ref={ref}>
        <View>
          <button type="button" onClick={onCancel}>
            <TabSvg />
          </button>

          {children}
        </View>
      </DialogView>
    </>
  )
}

const LayerBlur = styled.div`
  z-index: 9999;
  //
  position: fixed;
  top: 0;
  left: 0;
  //
  width: 100vw;
  height: 100vh;
  //
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  /* backdrop-filter: blur(6px); */
  background-color: rgba(0, 0, 0, 0.35);
`

const DialogView = styled.div`
  z-index: 99999;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '48%' : '100%')};
  left: 50%;
  transform: ${({ isActive }) =>
    isActive ? 'translate(-50%, -50%)' : 'translate(-50%, 0)'};
  //

  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //
  padding: 20px;
  //
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  //
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
`

const View = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 0.938rem;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;

    svg {
      width: 26px;
      fill: #ccc;
      transition: 0.3s ease-in-out;

      &:hover {
        fill: #bbb;
      }
    }
  }
`

const TabSvg = () => {
  return (
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
  )
}
