export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_RESULT = 'LOGIN_REQUEST_RESULT';

export const LAST_CHECKIN = 'LAST_CHECKIN';
export const LAST_CHECKIN_RESULT = 'LAST_CHECKIN_RESULT';

export const NEW_CHECKIN = 'NEW_CHECKIN';
export const NEW_CHECKIN_RESULT = 'NEW_CHECKIN_RESULT';



export const RESET_SUCCESS = 'RESET_SUCCESS';




export const loginRequest = (token) => ({
    type: LOGIN_REQUEST,
    token
})

export const lastCheckin = (username) => ({
    type: LAST_CHECKIN,
    username
})

export const newCheckin = (slug, username) => ({
    type: NEW_CHECKIN,
    slug,
    username
})

export const resetSuccess = () => ({
    type: RESET_SUCCESS,
})




