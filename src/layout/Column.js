import React from "react";

export default function Column({
  children,
  className,
  css,
  gap,
  center,
  end,
  padding,
  margin,
}) {
  return (
    <div
      className={className}
      css={css}
      style={{
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
