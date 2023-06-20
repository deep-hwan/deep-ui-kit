import { ReactNode } from "react";
interface TitleProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong";
    children: ReactNode;
    fontSize?: string;
    color?: string;
    w?: string;
}
export declare function Title(props: TitleProps): import("react/jsx-runtime").JSX.Element;
interface TextProps {
    children: ReactNode;
    fontSize?: string;
    color?: string;
    w?: string;
}
export declare function Text(props: TextProps): import("react/jsx-runtime").JSX.Element;
interface TextSpanProps {
    children: ReactNode;
    fontSize?: string;
    color?: string;
    w?: string;
}
export declare function TextSpan(props: TextSpanProps): import("react/jsx-runtime").JSX.Element;
export {};
