import { getSessionKey } from '../../utils';
import actions from './actions';

const default_numbers = {
    code: '',
    issue: '',
    date: '',
    week: '',
    weekZh: '',
    firstNum: [],
    secondNum: [],
    thirdNum: [],
    encourageNum: [],
};

const initState = {
    numbers: default_numbers,
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case actions.type.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state,
            };

        case actions.type.GET_LIST_NUMBERS:
            return state;

        case actions.type.GET_LIST_NUMBER_SUCCESS:
            return {
                ...state,
                ...{
                    numbers: action.payload.numbers,
                },
            };

        default:
            return state;
    }
};

export default reducer;
