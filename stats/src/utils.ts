export const datestringToDate = (dateString: string): Date => {
  // 10/08/2018 => [10, 08, 2018]
  const dateArr = dateString.split('/').map((date) => parseInt(date));

  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0] + 1);
};
