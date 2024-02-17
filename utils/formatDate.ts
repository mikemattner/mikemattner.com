export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

export const listYear = (date: string) => {
  return new Date(date).getFullYear().toString();
};

export const convertDate = (date: string): string => {
  return new Date(date).getFullYear().toString();
};
