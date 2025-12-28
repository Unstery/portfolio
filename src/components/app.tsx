import { useEffect, useRef, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { i18nInit } from "../translations/i18n";
import en from "../translations/en.json";
import fr from "../translations/fr.json";
import { PortfolioProvider } from "../modules/portfolio";
import { PortfolioPage } from "./portfolio.page";
import { CategoryEnum } from "../api/enum/category.enum";
import { ExperiencePage } from "./experience.page";
import { Navbar } from "./navbar";
import { ThemeProvider } from "../modules/theme";
import { ProjectPage } from "./project.page";
import { Footer } from "./footer";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18nInit({ resources });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

interface AppProps {
  category: CategoryEnum;
  entityId?: string;
}

export const App = ({ category, entityId }: AppProps) => {
  const { i18n } = useTranslation();

  const categoriesRef = useRef<Map<string, HTMLElement>>(new Map());

  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    "Profile"
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") ?? "en";
    i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <PortfolioProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar
                categoriesRef={categoriesRef}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              {category === CategoryEnum.PROFILE && (
                <PortfolioPage
                  categoriesRef={categoriesRef}
                  setActiveCategory={setActiveCategory}
                />
              )}
              {category === CategoryEnum.EXPERIENCE && (
                <ExperiencePage experienceId={entityId!} />
              )}
              {category === CategoryEnum.PROJECT && (
                <ProjectPage projectId={entityId!} />
              )}
              <Footer />
            </div>
          </ThemeProvider>
        </PortfolioProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
