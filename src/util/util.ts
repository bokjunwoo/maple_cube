const MINIMUM_SELECTION_DATE = '2022-11-25';

export const isValidSelectionDate = (date: string): boolean => {
  return date >= MINIMUM_SELECTION_DATE;
};

export const isEndDateGreaterThanStartDate = (
  startDate: string,
  endDate: string
) => {
  return endDate > startDate;
};

export const isValidDateFormat = (date: string): boolean => {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;
  return pattern.test(date) && !isNaN(Date.parse(date));
};

const formatDateToString = (date: Date, subtractDay = 0): string => {
  const targetDate = new Date(date);
  targetDate.setDate(targetDate.getDate() - subtractDay);

  const year = targetDate.getFullYear();
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
  const day = targetDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const isToday = (dateStr: string): boolean => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const todayStr = formatDateToString(currentDate);
  const yesterdayStr = formatDateToString(currentDate, 1);

  if (dateStr === yesterdayStr && currentHour < 5) {
    return false;
  }

  return todayStr > dateStr;
};
