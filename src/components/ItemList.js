import React from "react";

export default function ItemList({
  children,
  css,
  className,
  gap,
  row,
  padding,
  margin,
}) {
  return (
    <ul
      css={css}
      className={className}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: row ? "row" : "column",
        rowGap: gap,
        columnGap: row && gap,
        padding: padding ? padding : 0,
        margin: margin,
      }}
    >
      {children}
    </ul>
  );
}
