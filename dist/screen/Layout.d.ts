import { ReactNode } from "react";
interface SectionProps {
    children?: ReactNode;
}
export declare function Section(props: SectionProps): import("react/jsx-runtime").JSX.Element;
interface RowProps {
    children?: ReactNode;
    gap?: string;
    start?: boolean;
    end?: boolean;
    padding?: string;
    margin?: string;
}
export declare function Row(props: RowProps): import("react/jsx-runtime").JSX.Element;
interface ColumnProps {
    children?: ReactNode;
    gap?: string;
    center?: boolean;
    end?: boolean;
    padding?: string;
    margin?: string;
}
export declare function Column(props: ColumnProps): import("react/jsx-runtime").JSX.Element;
interface BoxProps {
    children?: ReactNode;
    gap?: string;
    center?: boolean;
    end?: boolean;
    padding?: string;
    margin?: string;
    maxWidth?: string;
}
export declare function Box(props: BoxProps): import("react/jsx-runtime").JSX.Element;
interface SizedBoxProps {
    children?: ReactNode;
    width?: string;
    height?: string;
}
export declare function SizedBox(props: SizedBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
