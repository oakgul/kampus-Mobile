import { USER_LOGIN } from '../actions/userAction';

const initialState = {
    token : null,
    tag : 'bilgisayar'
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            state = {
                ...state,
                // success : action.payload.success,
                token : action.payload.token,
                tag : action.payload.tag
            }
            return state;
        // return [...state, action.payload]
    
        default:
            return state;
    }
}

export default userReducer;