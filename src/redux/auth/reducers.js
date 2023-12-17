import * as actions from './actions';
import { LOGOUT } from './actions';

/**
 * Initial/Original Authentication State
 * @type {{credentials: {email: null, name: null, password: null}, user_id: null, permissions: null,}}
*/

const incremented = {
    credentials: {
        name: null,
        email: null,
        password: null,
    },
    permissions: null,
    user_id: null,
}

/**
 * Authenticate redux reducer
 * @param state
 * @param action
 * @returns {{credentials: {email: null, name: null, password: null}, user_id: null, permissions: null,}}
 * @constructor
 */

export default function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case actions.LOGIN:
            return Object.assign({}, state , action.payload.credentials);
        case LOGOUT:
            return initial_state;   
        default:
            return state;     
    }
}