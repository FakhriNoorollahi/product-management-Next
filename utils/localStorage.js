export function saveLocalStorage(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getDataLocalStorage(key) {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
}

export function removeDataLocalStorage(key) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}
