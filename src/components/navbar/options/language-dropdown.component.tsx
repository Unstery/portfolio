import { useTranslation } from "react-i18next";
import { type ChangeEvent } from "react";

import { LanguagesEnum } from "../../../enums/languages.enum";

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const languages: LanguagesEnum[] = [LanguagesEnum.FR, LanguagesEnum.EN];

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="btn-icon w-auto">
      <select onChange={handleLanguageChange} value={i18n.language}>
        {languages.map((langCode) => (
          <option
            key={langCode}
            value={langCode}
            className="bg-background-300 dark:bg-background-600"
          >
            {langCode.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
