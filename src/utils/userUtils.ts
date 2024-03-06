export function getUserFullName(user: IUser | undefined) {
  if (!user?.firstName) return '';

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const firstName = capitalizeFirstLetter(user.firstName);
  const lastName = capitalizeFirstLetter(user.lastName);

  return `${firstName} ${lastName}`;
}
