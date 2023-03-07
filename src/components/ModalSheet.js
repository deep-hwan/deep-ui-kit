import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

export default function ModalSheet(props) {
  const { children, view, onCancel, title } = props
  const ref = useRef()

  //
  // 외부클릭
  const clickModalOutside = event => {
    if (view && !ref.current?.contains(event.target)) {
      onCancel()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [view])

  //
  // 모달 고정 핸들러
  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (view) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [view])

  return (
    <>
      <LayerBlur isActive={view} />
      <Sheet isActive={view} ref={ref}>
        <Title>
          <h1>{title}</h1>
          <button type="button" onClick={onCancel}>
            <TabSvg />
          </button>
        </Title>

        <View>{children}</View>
      </Sheet>
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
  //
  -webkit-backdrop-filter: blur(6px);
  /* backdrop-filter: blur(6px); */
  background-color: rgba(0, 0, 0, 0.35);
`

const Sheet = styled.div`
  z-index: 99990;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '60%' : '100%')};
  left: 50%;
  transform: translateX(-50%);
  //
  width: 100%;
  //
  height: calc(100vh - 60px);
  //
  display: flex;
  flex-direction: column;
  //
  background-color: #fff;
  border-radius: 22px 22px 0 0;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  //
  transition: 0.25s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    top: ${({ isActive }) => (isActive ? '60%' : '100%')};
    //
    height: calc(100vh - 20px);
  }
`

const Title = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  /* background-color: #333; */

  h1 {
    font-size: 1.125rem;
    color: #333;
  }

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

const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: transparent; */
  }

  &:-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #e2e2e2;
  }
  &::-webkit-scrollbar-button:start:decrement {
    width: 0;
    height: 0;
    background-color: transparent;
  }
  &::-webkit-scrollbar-button:end:increment {
    width: 0;
    height: 0;
    background-color: transparent;
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
