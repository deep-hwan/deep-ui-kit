import React from "react";

export default function Item({
  children,
  css,
  className,
  key,
  padding,
  margin,
}) {
  return (
    <li
      key={key}
      css={css}
      className={className}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        listStyle: "none",
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </li>
  );
}
