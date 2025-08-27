import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../../modules/theme";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className="btn-icon">
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="w-4 h-4" />
    </button>
  );
};
