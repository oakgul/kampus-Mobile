import { USER_LOGIN } from '../actions/userAction';

const initialState = {
    // success : false,
    token : '122sa234da5435d6y7a7sd21AYuc393809',
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