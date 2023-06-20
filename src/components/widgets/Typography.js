import { css } from "@emotion/css";
import React from "react";

// 타이틀
export function Title(props) {
  const { as, children, styles, fontSize, color, w } = props;

  return (
    <>
      {as === "h1" && (
        <h1
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "3.375rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h1>
      )}

      {as === "h2" && (
        <h2
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "3rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h2>
      )}

      {as === "h3" && (
        <h3
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "2.625rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h3>
      )}

      {as === "h4" && (
        <h4
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "2.25rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h4>
      )}

      {as === "h5" && (
        <h5
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "1.875rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h5>
      )}

      {as === "h6" && (
        <h6
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "1.75rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </h6>
      )}

      {as === "strong" && (
        <strong
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "1.625rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </strong>
      )}

      {!as && (
        <strong
          className={css`
            margin: 0;
            font-size: ${fontSize ? fontSize : "1.625rem"};
            color: ${color ? color : "#333"};
            font-weight: ${w ? w : "bold"};
            transition: 0.3s ease-in-out;
            ${styles}
          `}
        >
          {children}
        </strong>
      )}
    </>
  );
}

// Text
export function Text(props) {
  const { as, children, fontSize, color, w, styles } = props;

  return (
    <>
      <p
        className={css`
          margin: 0;
          font-size: ${fontSize ? fontSize : "0.938rem"};
          color: ${color ? color : "#333"};
          font-weight: ${w ? w : "normal"};
          transition: 0.3s ease-in-out;
          white-space: pre-line;
          ${styles}
        `}
      >
        {children}
      </p>
    </>
  );
}

// TextSpan
export function TextSpan(props) {
  const { children, fontSize, color, w, styles } = props;

  return (
    <span
      className={css`
        margin: 0;
        font-size: ${fontSize ? fontSize : "0.813rem"};
        color: ${color ? color : "#797979"};
        font-weight: ${w ? w : "normal"};
        transition: 0.3s ease-in-out;
        white-space: pre-line;
        ${styles}
      `}
    >
      {children}
    </span>
  );
}
