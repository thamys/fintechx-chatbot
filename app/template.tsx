"use client";
import React, { PropsWithChildren, Suspense } from "react";
import { ConfigProvider, theme } from "antd";
import { getTheme } from "./themes";
import Loading from "./components/Loading";

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
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ConfigProvider>
  );
};

export default App;
