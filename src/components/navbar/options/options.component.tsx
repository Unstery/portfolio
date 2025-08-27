import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { LanguageDropdown } from "./language-dropdown.component";
import { ThemeSwitcher } from "./theme-switcher.component";

export const Options = () => (
  <div className="flex flex-row items-center gap-2">
    <a
      href="https://www.linkedin.com/in/bastienfaisant/"
      target="_blank"
      rel="noreferrer"
      className="btn-icon"
    >
      <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
    </a>
    <a
      href="mailto:fst09bastien@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="btn-icon"
    >
      <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
    </a>
    <ThemeSwitcher />
    <LanguageDropdown />
  </div>
);
