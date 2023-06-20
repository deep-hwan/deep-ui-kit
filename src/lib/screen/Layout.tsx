import { css, CSSObject } from "@emotion/css";
import React, { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

export function Section(props: SectionProps) {
  const { children } = props;

  return (
    <section
      className={css({
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.3s ease-in-out",
      })}
    >
      {children}
    </section>
  );
}

interface RowProps {
  children?: ReactNode;
  gap?: string;
  start?: boolean;
  end?: boolean;
  padding?: string;
  margin?: string;
}

export function Row(props: RowProps) {
  const { children, gap, start, end, padding, margin } = props;

  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: start ? "start" : end ? "end" : "center",
        columnGap: gap,
        padding,
        margin,
        transition: "0.3s ease-in-out",
      })}
    >
      {children}
    </div>
  );
}

interface ColumnProps {
  children?: ReactNode;
  gap?: string;
  center?: boolean;
  end?: boolean;
  padding?: string;
  margin?: string;
}

export function Column(props: ColumnProps) {
  const { children, gap, center, end, padding, margin } = props;

  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: ${center ? "center" : end ? "end" : "start"};
        row-gap: ${gap};
        padding: ${padding};
        margin: ${margin};
        transition: 0.3s ease-in-out;
      `}
    >
      {children}
    </div>
  );
}

interface BoxProps {
  children?: ReactNode;
  gap?: string;
  center?: boolean;
  end?: boolean;
  padding?: string;
  margin?: string;
  maxWidth?: string;
}

export function Box(props: BoxProps) {
  const { children, gap, center, end, padding, margin, maxWidth } = props;

  return (
    <div
      className={css({
        width: "100%",
        maxWidth,
        display: "flex",
        flexDirection: "column",
        alignItems: center ? "center" : end ? "end" : "start",
        rowGap: gap,
        padding,
        margin,
        transition: "0.3s ease-in-out",
      })}
    >
      {children}
    </div>
  );
}

interface SizedBoxProps {
  children?: ReactNode;
  width?: string;
  height?: string;
}

export function SizedBox(props: SizedBoxProps) {
  const { children, width, height } = props;

  return (
    <div
      className={css({
        height: width ? "100%" : height,
        width: height ? "100%" : width,
      })}
    >
      {children}
    </div>
  );
}
