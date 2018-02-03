import {
    GET_AGENDA,
    GET_AGENDA_RESULT,
    GET_EVENTS_RESULT,
    GET_ACTIVITY,
    GET_ACTIVITY_RESULT,
    GET_EVALUATION_RESULT,
    NEW_EVALUATION_RESULT
} from '../actions/events';

const initialState = {
    data: null,
    event: null,
    oneEvent: null,
    showLoading: false,
    evaluation: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case GET_AGENDA:
        return{
            ...state,
            showLoading: true
        
        }
        case GET_AGENDA_RESULT:
        return{
            ...state,
            data:action.result,
            showLoading: false
        }
        case GET_EVENTS_RESULT:
        return{
            ...state,
            event: action.result
        }
        case GET_ACTIVITY_RESULT:
        return{
            ...state,
            oneEvent: action.result
        }
        case GET_EVALUATION_RESULT:
        return{
            ...state,
            evaluation: action.result
        }
        case NEW_EVALUATION_RESULT:
        return{
            ...state,
            evaluation: action.result
        }
        default:
            return state;
    }
}
