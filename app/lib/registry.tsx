"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { DSProvider } from "@lets-code-br/design-system-web";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return (
      <DSProvider>
        <div>
          {children}
          <ToastContainer />
        </div>
      </DSProvider>
    );

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <div>
        <DSProvider>{children}</DSProvider>
        <ToastContainer />
      </div>
    </StyleSheetManager>
  );
}
