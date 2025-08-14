import type { i18n } from 'i18next';

export const calculateMonthDiff = (startDateString: Date, endDateString: Date) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const totalMonths = yearDiff * 12 + monthDiff;

  // Rounded to the nearest month
  const dayDiff = endDate.getDate() - startDate.getDate();
  return dayDiff >= 15 ? totalMonths + 1 : totalMonths;
};

export const formatDate = (
  i18n: i18n
) => (
  date: Date,
  options: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat(i18n.language, options).format(new Date(date));

export const formatDateRange = (
  i18n: i18n
) => (
  startDateString: Date,
  endDateString: Date,
  options: Intl.DateTimeFormatOptions
) => {
    const startFormattedDate = formatDate(i18n)(startDateString, options);
    const endFormattedDate = formatDate(i18n)(endDateString, options);
    return startFormattedDate === endFormattedDate ? startFormattedDate : `${startFormattedDate}/${endFormattedDate}`;
  }
