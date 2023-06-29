import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

interface BottomSheetProps {
  children: React.ReactNode;
  view: boolean;
  onCancel: () => void;
  theme: string;
}

export default function BottomSheet(props: Partial<BottomSheetProps>) {
  const { children, view, onCancel, theme } = props as BottomSheetProps;
  const ref = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    setCurrentY(touch.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setCurrentY(touch.clientY);
  };

  const handleTouchEnd = () => {
    const distance = currentY - startY;

    if (distance > 100) {
      // Close the button sheet
      onCancel();
    }

    setCurrentY(0);
    setStartY(0);
  };

  //
  // 외부클릭
  const clickModalOutside = (event: MouseEvent) => {
    if (view && ref.current && !ref.current.contains(event.target as Node)) {
      onCancel();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [view]);

  //
  // 모달 고정 핸들러
  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [view]);

  return (
    <>
      <LayerBlur isActive={view} />
      <Sheet
        theme={theme}
        isActive={view}
        ref={ref}
        style={{ transform: `translate(-50%, ${currentY - startY}px)` }}
      >
        <CloseBox theme={theme}>
          <button
            type="button"
            onClick={onCancel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </CloseBox>
        <View>{children}</View>
      </Sheet>
    </>
  );
}

const LayerBlur = styled.div<{ isActive: boolean }>`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.25);
`;

const Sheet = styled.div<{ isActive: boolean; theme: string }>`
  z-index: 99990;
  position: fixed;
  top: ${({ isActive }) => (isActive ? "80px" : "100%")};
  left: 50%;
  width: 100%;
  max-width: 560px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => (theme === "dark" ? "#292929" : "#fff")};
  border-radius: 22px 22px 0 0;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  transition: 0.25s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    top: ${({ isActive }) => (isActive ? "6px" : "100%")};
    height: calc(100vh - 6px);
  }
`;

const CloseBox = styled.div<{ theme: string }>`
  width: 100%;
  padding: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 50px;
    height: 6px;
    background-color: ${({ theme }) => (theme === "dark" ? "#444" : "#e0e0e0")};
    border: none;
    outline: none;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &:-webkit-scrollbar-thumb {
    background-color: #a2a2a2;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #e2e2e2;
  }
  &::-webkit-scrollbar-button:start:decrement {
    width: 0;
    height: 0;
    background-color: transparent;
  }
  &::-webkit-scrollbar-button:end:increment {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;
