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
    <div className="h-10 flex justify-center items-center bg-background-300 dark:bg-background-600 p-[10px] rounded-2xl">
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
        className="bg-background-300 dark:bg-background-600 text-text-700 dark:text-text-200 cursor-pointer"
      >
        {languages.map((langCode) => (
          <option key={langCode} value={langCode}>
            {langCode.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
