import React from "react";
interface DialogProps {
    children: React.ReactNode;
    view: boolean;
    onCancel: () => void;
    cancelTab: boolean;
    theme: string;
}
export default function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
export {};
