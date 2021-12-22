import { AuthActions } from './auth/actions';
import { PostActions } from './posts/actions';
import { GlobalActions } from './global/actions';

export const useActions = () => {
    const actions = {
        AuthActions,
        PostActions,
        GlobalActions,
    };

    return actions;
};
