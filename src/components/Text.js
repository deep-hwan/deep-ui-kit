import React from "react";

export default function Text(props) {
  const { as, children, css, className, fontSize, color, w } = props;

  return (
    <>
      {as === "p" && (
        <p
          style={{
            fontSize: fontSize ? fontSize : "0.938rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "normal",
            margin: 0,
          }}
          css={css}
          className={className}
        >
          {children}
        </p>
      )}

      {as === "span" && (
        <span
          style={{
            fontSize: fontSize ? fontSize : "0.813rem",
            color: color ? color : "#797979",
            fontWeight: w ? w : "normal",
          }}
          css={css}
          className={className}
        >
          {children}
        </span>
      )}

      {!as && (
        <p
          style={{
            fontSize: fontSize ? fontSize : "0.938rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "normal",
            margin: 0,
          }}
          css={css}
          className={className}
        >
          {children}
        </p>
      )}
    </>
  );
}
