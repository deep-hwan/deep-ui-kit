import styled from "@emotion/styled";
import React from "react";

interface LoadingSpinnerProps {
  size?: string;
}

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return (
    <LoadingWrap>
      <Loading size={size}></Loading>
    </LoadingWrap>
  );
}

interface LoadingProps {
  size?: string;
}

//styled
const LoadingWrap = styled.div`
  width: 100%;
  display: flex;
`;
const Loading = styled.span<LoadingProps>`
  width: ${({ size }) => (size ? size : "30px")};
  min-width: ${({ size }) => (size ? size : "30px")};
  height: ${({ size }) => (size ? size : "30px")};
  min-height: ${({ size }) => (size ? size : "30px")};
  border: 3px solid #ccc;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
