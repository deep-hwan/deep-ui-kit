import { css } from '@emotion/css'
import React from 'react'

//button
export function Button(props) {
  const { styles, children, type, onClick, color, palette } = props

  return (
    <button
      onClick={onClick}
      type={type ? type : 'button'}
      className={css`
        ${styles}
        transition: 0.3s ease-in-out;
        border: 0;
        background-color: ${palette ? palette : '#333'};
        color: ${color ? color : '#fff'};
        width: 100%;
        height: 3.467em;
        border-radius: 20em;
        font-size: 0.938em;
        text-align: center;
        cursor: pointer;

        &:hover {
          opacity: 0.92;
        }
      `}
    >
      {children}
    </button>
  )
}

//tab
export function Tab(props) {
  const { styles, children, type, onClick, color, palette, border } = props

  return (
    <button
      onClick={onClick}
      type={type ? type : 'button'}
      className={css`
        ${styles}
        transition: 0.3s ease-in-out;
        border: 1px solid ${border ? border : '#ccc'};
        background-color: ${palette ? palette : '#fff'};
        color: ${color ? color : '#555'};
        padding: 0.45em 0.625em;
        border-radius: 6px;
        font-size: 0.875rem;
        color: #666;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f5;
        }
      `}
    >
      {children}
    </button>
  )
}
