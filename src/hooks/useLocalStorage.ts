export default function useLocalStorage() {
  const getItem = (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // eslint-disable-next-line
  const setItem = (key: string, value: any) => {
    try {
      if (!value) localStorage.removeItem(key);
      else {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { getItem, setItem };
}
