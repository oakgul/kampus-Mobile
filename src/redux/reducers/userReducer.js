import { USER_UPDATE } from '../actions/userAction';

function userReducer(state='orhan akgül ve saz ekibi', action) {
    switch (action.type) {
        case USER_UPDATE:
        return action.payload.user;
    
        default:
            return state;
    }
}

export default userReducer;