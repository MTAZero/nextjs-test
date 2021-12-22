const prefix = 'auth/';

const type = {
    UPDATE_STATE: prefix + 'update_state',

    GET_LIST_NUMBERS: prefix + 'get_list_numbers',
    GET_LIST_NUMBER_SUCCESS: prefix + 'get_list_number_success',
};

const action = {
    updateState: (state = {}) => {
        return {
            type: type.UPDATE_STATE,
            payload: {
                state,
            },
        };
    },

    // get number
    getListNumbers: () => {
        return {
            type: type.GET_LIST_NUMBERS,
            payload: {},
        };
    },
    getListNumberSuccess: (numbers: any = {}) => {
        return {
            type: type.GET_LIST_NUMBER_SUCCESS,
            payload: {
                numbers,
            },
        };
    },
};

export const GlobalActions = action;

export default {
    type,
    action,
};
