import React from "react";

export default function Box({
  children,
  className,
  css,
  gap,
  center,
  end,
  padding,
  margin,
  width,
}) {
  return (
    <div
      className={className}
      css={css}
      style={{
        width: width ? width : "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: (center && "center") || (end && "end") || "start",

        rowGap: gap,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}
