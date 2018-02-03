import {CHANGE_WEATHER} from '../actions/homescreen';

const initialState = {
    currentWeather: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case CHANGE_WEATHER:
        return{
            ...state,
            currentWeather:10
        }
        default:
            return state;
    }
}
