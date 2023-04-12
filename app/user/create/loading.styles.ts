"use client";

import { color } from "@lets-code-br/design-system-web";
import { ProgressBar } from "react-loader-spinner";
import styled from "styled-components";

export const LoaderWrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled(ProgressBar).attrs({
  height: 80,
  width: 80,
  ariaLabel: "progress-bar-loading",
  wrapperClass: "progress-bar-wrapper",
  borderColor: "#A6F750",
  barColor: "#A6F750",
})``;
