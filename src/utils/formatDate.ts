export function formatDate(date: string) {
  const splitDate = date.split('-');
  const month = splitDate[1];
  const year = splitDate[0].slice(2);

  return `${month}/${year}`;
}
