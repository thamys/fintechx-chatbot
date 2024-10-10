"use client";
import React, { PropsWithChildren } from "react";
import { ConfigProvider, theme } from "antd";
import { getTheme } from "./themes";

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        ...getTheme(isDarkMode ? "dark" : "light"),
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default App;
