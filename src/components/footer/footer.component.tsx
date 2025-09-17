import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-5 mx-auto w-full max-w-screen-lg">
      <hr className="border-background-300 dark:border-background-600" />
      <p className="text-center text-text-secondary-light dark:text-text-secondary-dark">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
};
