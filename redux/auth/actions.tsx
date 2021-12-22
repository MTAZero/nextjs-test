const prefix = 'auth/'

const type = {
    UPDATE_STATE: prefix + 'update_state',

    LOGIN: prefix + 'LOGIN',
    LOGOUT: prefix + 'LOGOUT',

    CHECK_SESSION: prefix + 'check_session',

    RESET_STATE: prefix + 'reset_state'
}

const action = {
    updateState: (state = {}) => {
        return {
            type: type.UPDATE_STATE,
            payload: {
                state
            }
        }
    },

    login: (username = "", password = "") => {
        return {
            type: type.LOGIN,
            payload: {
                username,
                password
            }
        }
    },
    logout: () => {
        return {
            type: type.LOGOUT,
            payload: {

            }
        }
    },

    checkSession: () => {
        return {
            type: type.CHECK_SESSION,
            payload: {
                
            }
        }
    },

    resetState: () => {
        return {
            type: type.RESET_STATE,
            payload: {
                
            }
        }
    }
}

export const AuthActions = action

export default {
    type,
    action
}