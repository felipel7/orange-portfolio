export function getUserFullName(user: User | undefined) {
  if (!user?.firstname) return '';

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const firstName = capitalizeFirstLetter(user.firstname);
  const lastName = capitalizeFirstLetter(user.lastname);

  return `${firstName} ${lastName}`;
}
