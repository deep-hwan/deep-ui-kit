import React from "react";
interface DrawerProps {
    children: React.ReactNode;
    view: boolean;
    onCancel: () => void;
    theme: "dark" | "light";
}
export default function Drawers(props: Partial<DrawerProps>): import("react/jsx-runtime").JSX.Element;
export {};
