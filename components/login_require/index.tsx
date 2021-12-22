import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    useLocation,
    Switch,
    Route,
} from 'react-router-dom';
import { RouterLinks } from '../../const';
// import { RouterLinks } from '../const';
import { useActions } from '../../redux';

export const LoginRequireComponent = (props: any) => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const location = useLocation();

    const dispatch = useDispatch();
    const actions = useActions();

    useEffect(() => {
        dispatch(actions.AuthActions.checkSession());
    });

    if (!isLoggedIn) {
        if (props.redirect)
            // return <Redirect to={props.redirect} from={location.pathname} />;
            return (
                <Redirect
                    to={{
                        pathname: props.redirect,
                        state: {
                            from: location.pathname,
                        },
                    }}
                />
            );
        else
            return (
                <Redirect
                    to={{
                        pathname: RouterLinks.LOGIN_PAGE,
                        state: {
                            from: location.pathname,
                        },
                    }}
                />
            );
    }

    return (
        <Switch>
            <Route
                {...props}
                onEnter={() => {
                    // dispatch(actions.AuthActions.checkSession());
                }}
            />
        </Switch>
    );
};
