import { css } from "@emotion/css";
import React, { ReactNode } from "react";

type SerializedStyles = ReturnType<typeof css>;

interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong";
  children?: ReactNode;
  fontSize?: string;
  color?: string;
  w?: string;
}

export function Title(props: TitleProps) {
  const { as, children, fontSize, color, w } = props;

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
          `}
        >
          {children}
        </strong>
      )}
    </>
  );
}

interface TextProps {
  children?: ReactNode;
  fontSize?: string;
  color?: string;
  w?: string;
}

export function Text(props: TextProps) {
  const { children, fontSize, color, w } = props;

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
        `}
      >
        {children}
      </p>
    </>
  );
}

interface TextSpanProps {
  children: ReactNode;
  fontSize?: string;
  color?: string;
  w?: string;
}
export function TextSpan(props: TextSpanProps) {
  const { children, fontSize, color, w } = props;

  return (
    <span
      className={css`
        margin: 0;
        font-size: ${fontSize ? fontSize : "0.813rem"};
        color: ${color ? color : "#797979"};
        font-weight: ${w ? w : "normal"};
        transition: 0.3s ease-in-out;
        white-space: pre-line;
      `}
    >
      {children}
    </span>
  );
}
