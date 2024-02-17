export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const loginUser = (userData) => ({
    type: LOGIN_USER,
    payload: userData,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});