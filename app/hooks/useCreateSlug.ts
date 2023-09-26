export const useCreateSlug = (name: string) => {
  return name
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};
