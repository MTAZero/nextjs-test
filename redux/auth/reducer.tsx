import { getSessionKey } from "../../utils";
import actions from "./actions";

const default_user = {
    fullname: "",
    phone: "",
    sex: 1,
    dob: new Date(),
    address: "",
    email: "",
    file: null,
    role: "",
};

const initState = {
    isLoggedIn: getSessionKey() !== null,
    token: getSessionKey(),
    userInfo: default_user,
};

const reducer = (state = initState, action: any) => {
    console.log("action : ", action)

    switch (action.type) {
        case actions.type.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state,
            };

        case actions.type.LOGIN:
            return state;

        case actions.type.LOGOUT:
            return state;

        case actions.type.CHECK_SESSION:
            return state;

        case actions.type.REGISTER:
            return state 

        default:
            return state;
    }
};

export default reducer;
