import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, router) => async (dispatch) => {
    try {
        //login
        const { data } = await api.signIn(formData);
        // console.log(data);
        dispatch({ type: AUTH, data });

        router.push('/');

    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        //signup
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
}

