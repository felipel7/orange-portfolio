export function formatDate(date: string) {
  const splitDate = date.split('-');
  const month = splitDate[1];
  const year = splitDate[0].slice(2);

  return `${month}/${year}`;
}

export function getCurrentMonthYear() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${year.toString()}-${month.toString().padStart(2, '0')}`;
}
