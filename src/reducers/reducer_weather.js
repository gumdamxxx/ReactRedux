import { FETCH_WEATHER } from '../actions/index';
export default function (state = [] , action ) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('action.payload.data:',action.payload.data);
            return [action.payload.data, ...state];
    }
    console.log('Action Weather', action);
    return state;
}