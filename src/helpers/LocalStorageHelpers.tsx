export function getLocalStorageValue(key: string, initialValue?: unknown): unknown {
  try {
    const storedItem = window.localStorage.getItem(key);

    return storedItem ? JSON.parse(storedItem) : initialValue;
  } catch (error) {
    console.log('getOrSaveLocalStorage', error);
    return initialValue;
  }
}

export function setLocalStorageValue(key: string, valueToStore: unknown): unknown {
  try {
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch (error) {
    console.log('setLocalStorageValue', error);
  }
  return valueToStore;
}