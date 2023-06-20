import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

export default function Drawer({ children, view, onCancel, theme }) {
  // 모달 고정 및 외부 클릭감지
  const ref = useRef();
  const clickModalOutside = (event) => {
    if (view && !ref.current?.contains(event.target)) {
      onCancel();
    }
  };

  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [view]);

  return (
    <>
      <Layer isActive={view} />
      <DrawerBox theme={theme} isActive={view} ref={ref}>
        <Sticky>
          <CancelTab onClick={onCancel} theme={theme}>
            <CancelIcon />
          </CancelTab>
        </Sticky>

        <View>{children}</View>
      </DrawerBox>
    </>
  );
}

//
const CancelIcon = () => {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 26.0181C20.1797 26.0181 26 20.1978 26 13.0181C26 5.83836 20.1797 0.0180664 13 0.0180664C5.8203 0.0180664 0 5.83836 0 13.0181C0 20.1978 5.8203 26.0181 13 26.0181Z"
        fill="#333333"
      />
      <rect x="5" y="5" width="16" height="16" rx="8" fill="#fff" />
      <path
        d="M22.193 3.8251C20.375 2.0069 18.0586 0.768664 15.5368 0.266967C13.015 -0.23473 10.4011 0.02265 8.0256 1.00656C5.65009 1.99046 3.61971 3.65671 2.1912 5.79457C0.762693 7.93243 0.000228882 10.4459 0.000228882 13.0171C0.000228882 15.5883 0.762693 18.1018 2.1912 20.2396C3.61971 22.3775 5.65009 24.0437 8.0256 25.0276C10.4011 26.0115 13.015 26.2689 15.5368 25.7672C18.0586 25.2655 20.375 24.0273 22.193 22.2091C24.6307 19.7712 26.0002 16.4647 26.0002 13.0171C26.0002 9.56947 24.6307 6.26304 22.193 3.8251ZM15.62 17.1611L13.001 14.5421L10.38 17.1631C10.1776 17.3655 9.90319 17.4791 9.61701 17.4791C9.33082 17.4791 9.05637 17.3655 8.854 17.1631C8.65164 16.9607 8.53796 16.6863 8.53796 16.4001C8.53796 16.1139 8.65164 15.8395 8.854 15.6371L11.475 13.0161L8.859 10.4001C8.6647 10.1961 8.55786 9.92427 8.56133 9.64259C8.56479 9.36091 8.67827 9.09175 8.87753 8.89263C9.07678 8.6935 9.34601 8.5802 9.6277 8.57692C9.90938 8.57364 10.1812 8.68066 10.385 8.8751L13.001 11.4921L15.616 8.8751C15.8178 8.67327 16.0916 8.55988 16.377 8.55988C16.6624 8.55988 16.9362 8.67327 17.138 8.8751C17.3398 9.07693 17.4532 9.35067 17.4532 9.6361C17.4532 9.92153 17.3398 10.1953 17.138 10.3971L14.522 13.0131L17.143 15.6321C17.3454 15.8345 17.459 16.1089 17.459 16.3951C17.459 16.6813 17.3454 16.9557 17.143 17.1581C16.9406 17.3605 16.6662 17.4741 16.38 17.4741C16.0938 17.4741 15.8194 17.3605 15.617 17.1581"
        fill="#current"
      />
    </svg>
  );
};

// styled
const Layer = styled.div`
  z-index: 9989;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.35);
`;

const DrawerBox = styled.div`
  z-index: 9990;
  display: none;
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? 0 : "-100%")};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => (theme === "dark" ? "#2a2a2a" : "#fff")};
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
  overflow: auto;
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1080px) {
    max-width: 320px;
    display: flex;
  }
`;

const Sticky = styled.div`
  z-index: 9997;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 14px;
  right: 14px;
  cursor: pointer;
  padding-right: 16px;
`;

const CancelTab = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  user-select: none;
  transition: 0.3s ease-in-out;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  transition: 0.25s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => (theme === "dark" ? "#404040" : "#e0e0e0")};
    transition: 0.25s ease-in-out;
  }
`;

const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
