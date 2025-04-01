import { createContext } from "react";

import { ThemeContextType } from "../models/theme-context-type.model";

const defaultValue: ThemeContextType = {
  isDark: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);
