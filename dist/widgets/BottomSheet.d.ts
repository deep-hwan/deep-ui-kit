import React from "react";
interface BottomSheetProps {
    children: React.ReactNode;
    view: boolean;
    onCancel: () => void;
    theme: string;
}
export default function BottomSheet(props: Partial<BottomSheetProps>): import("react/jsx-runtime").JSX.Element;
export {};
