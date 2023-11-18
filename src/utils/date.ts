export const getMonthName = (date: Date) => {
  const monts = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабря",
  };

  return monts[date.getMonth() as keyof typeof monts];
};

export const getDayMonthFromDate = (date: Date) => {
  const day = date.getDate();
  const month = getMonthName(date);
  return `${day} ${month}`;
};

export const getDateTextRole = (startDate: Date, endDate: Date) => {
  const startMonth = getMonthName(startDate).toLowerCase();
  const endMonth = getMonthName(endDate).toLowerCase();

  if (startMonth !== endMonth) {
    return `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;
  }
  return `${startDate.getDate()} - ${endDate.getDate()} ${endMonth}`;
};
