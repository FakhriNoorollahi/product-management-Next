export const setCookie = (tokens) => {
  if (typeof window !== "undefined") {
    // your code with access to window or document object here
    document.cookie = `token=${tokens}; path=/; max-age=${60 * 60};`;
  }
};

export const getCookie = () => {
  if (typeof window !== "undefined") {
    // your code with access to window or document object here
    if (!document.cookie) return;

    return document.cookie.split("=")[1];
  }
};

export const removeCooki = () => {
  if (typeof window !== "undefined") {
    // your code with access to window or document object here
    document.cookie = "token=; max-age=0; path=/";
  }
};
