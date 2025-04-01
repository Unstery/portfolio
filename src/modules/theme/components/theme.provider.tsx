import { PropsWithChildren, useState } from "react";

import { ThemeContext } from "./theme.context";

const getInitialTheme = () => {
  const isDark = localStorage.getItem("theme") === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  return isDark;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
