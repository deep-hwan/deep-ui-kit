import { css } from "@emotion/css";
import React from "react";

//Section
export function Section(props) {
  const { styles, children } = props;

  return (
    <section
      className={css`
        ${styles}
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.3s ease-in-out;
      `}
    >
      {children}
    </section>
  );
}

//row
export function Row(props) {
  const { styles, children, gap, start, end, padding, margin } = props;

  return (
    <div
      className={css`
        ${styles}
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: ${(start && "start") || (end && "end") || "center"};
        column-gap: ${gap};
        padding: ${padding};
        margin: ${margin};
        transition: 0.3s ease-in-out;
      `}
    >
      {children}
    </div>
  );
}

//column
export function Column(props) {
  const { styles, children, gap, center, end, padding, margin } = props;

  return (
    <div
      className={css`
        ${styles}
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: ${(center && "center") || (end && "end") || "start"};
        column-gap: ${gap};
        padding: ${padding};
        margin: ${margin};
        transition: 0.3s ease-in-out;
      `}
    >
      {children}
    </div>
  );
}

//Box
export function Box(props) {
  const { styles, children, gap, center, end, padding, margin, maxWidth } =
    props;

  return (
    <div
      className={css`
        ${styles}
        width: 100%;
        max-width: ${maxWidth};
        display: flex;
        flex-direction: column;
        align-items: ${(center && "center") || (end && "end") || "start"};
        column-gap: ${gap};
        padding: ${padding};
        margin: ${margin};
        transition: 0.3s ease-in-out;
      `}
    >
      {children}
    </div>
  );
}

//Padding
export function SizedBox(props) {
  const { styles, children, width, height } = props;

  return (
    <div
      className={css`
        ${styles}
        height: ${(width && "100%") || height};
        width: ${(height && "100%") || width};
      `}
    >
      {children}
    </div>
  );
}
