import React from "react";

export default function Title(props) {
  const { as, children, css, className, fontSize, color, w } = props;

  return (
    <>
      {as === "h1" && (
        <h1
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "3.375rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h1>
      )}

      {as === "h2" && (
        <h2
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "3rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h2>
      )}

      {as === "h3" && (
        <h3
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "2.625em",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h3>
      )}

      {as === "h4" && (
        <h4
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "2.25rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h4>
      )}

      {as === "h5" && (
        <h5
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "1.875rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h5>
      )}

      {as === "h6" && (
        <h6
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "1.75rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </h6>
      )}

      {as === "strong" && (
        <strong
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "1.625rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
          }}
          className={className}
        >
          {children}
        </strong>
      )}

      {!as && (
        <strong
          css={css}
          style={{
            fontSize: fontSize ? fontSize : "1.625rem",
            color: color ? color : "#333",
            fontWeight: w ? w : "bold",
            margin: 0,
          }}
          className={className}
        >
          {children}
        </strong>
      )}
    </>
  );
}
