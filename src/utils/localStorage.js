export const readFromLocalStorage = (key, fallback) => {
  const localData = window.localStorage.getItem(key);
  const appData = localData ? JSON.parse(localData) : fallback;
  return appData;
};

export const updateLocalStorage = (key, stringifiedValue) => {
  window.localStorage.setItem(key, stringifiedValue);
};
