export function formatDate(date: string | undefined) {
  if (!date) return '';
  const splitDate = date.split('-');
  const month = splitDate[1];
  const year = splitDate[0].slice(2);

  return `${month}/${year}`;
}
