export const useLocaleStore = defineStore('locale', () => {
  const locale = ref('ru');

  const setLocale = (newLocale: string) => {
    locale.value = newLocale;
  };

  return { locale, setLocale };
});
