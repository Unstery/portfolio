import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../../modules/theme";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-10 h-10 flex justify-center items-center bg-background-300 dark:bg-background-600 p-[10px] rounded-2xl cursor-pointer"
    >
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="w-4 h-4" />
    </button>
  );
};
