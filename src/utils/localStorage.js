export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    // localStorage.setItem(key, value);
};

export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const removeItem = (key) => {m
    localStorage.removeItem(key);
};