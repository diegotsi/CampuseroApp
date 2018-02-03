import {
   LOGIN_REQUEST,
   LOGIN_REQUEST_RESULT,
   NEW_CHECKIN_RESULT,
   RESET_SUCCESS,
} from '../actions/user';

const initialState = {
    data: null,
    success: null,
    evaluation: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST_RESULT:
            return{
                ...state,
                data: action.result,
            }
        case NEW_CHECKIN_RESULT:
            return{
                ...state,
                success: action.success
            }
        case RESET_SUCCESS:
            return{
                ...state,
                success: null
            }
        default:
            return state;
    }
}
