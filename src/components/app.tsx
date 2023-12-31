import { I18nextProvider, useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { i18nInit } from '../translations/i18n';
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import { PortfolioProvider } from '../modules/portfolio';
import { PortfolioPage } from './portfolio.page';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18nInit({ resources });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    },
  },
});

export const App = () => {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <PortfolioProvider>
          <PortfolioPage />
        </PortfolioProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
