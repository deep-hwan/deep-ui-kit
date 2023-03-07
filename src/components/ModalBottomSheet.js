import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

export default function ModalBottomSheet(props) {
  const { children, view, onCancel, onClick, title, action, actionName } = props
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
          <button type="button" className="cancel" onClick={onCancel}>
            취소
          </button>
          <h1>{title}</h1>
          {action && (
            <button
              type="button"
              className="submit"
              onClick={() => {
                onClick()
                onCancel()
              }}
            >
              {actionName ? actionName : '확인'}
            </button>
          )}
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
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.25);
`

const Sheet = styled.div`
  z-index: 99990;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '80px' : '100%')};
  left: 50%;
  transform: translateX(-50%);
  //
  width: 100%;
  max-width: 560px;
  //
  height: calc(100vh - 60px);
  //
  display: flex;
  flex-direction: column;
  //
  background-color: #fff;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  //
  transition: 0.25s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    top: ${({ isActive }) => (isActive ? '20px' : '100%')};
    //
    height: calc(100vh - 20px);
  }
`

const Title = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  min-height: 54px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e2e2e2;

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
  }

  .cancel {
    left: 16px;
    color: #999;
  }

  .submit {
    right: 16px;
    color: #0090ff;
    transition: 0.3s ease-in-out;

    &:hover {
      font-weight: 500;
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
