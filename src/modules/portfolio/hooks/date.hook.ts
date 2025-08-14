import { useTranslation } from 'react-i18next';

import { calculateMonthDiff, formatDate, formatDateRange } from '../utils/date.utils';

export const useDate = () => {
  const { i18n } = useTranslation();

  return {
    calculateMonthDiff,
    formatDate: formatDate(i18n),
    formatDateRange: formatDateRange(i18n),
  };
};
