import React from "react";

export default function Row({
  children,
  className,
  css,
  gap,
  start,
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
        flexDirection: "row",
        alignItems: (start && "start") || (end && "end") || "center",

        columnGap: gap,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}
