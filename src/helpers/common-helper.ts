export const getAge = () => {
  const currentDate = new Date();
  const birthDate = new Date('2003-05-25');

  let years = currentDate.getFullYear() - birthDate.getFullYear();

  // Vérifier si l'anniversaire n'est pas encore passé cette année
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    years--;
  }

  return years;
}