import React from "react";
interface SnackbarProps {
    children: React.ReactNode;
    view: boolean;
    onCancel: () => void;
    cancelTab: boolean;
    theme: "dark" | "light";
}
export default function Snackbar(props: SnackbarProps): import("react/jsx-runtime").JSX.Element;
export {};
