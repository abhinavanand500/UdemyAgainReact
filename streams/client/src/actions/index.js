import { formValues } from "redux-form";
import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types.js";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const createStreams = (formValues) =>asyc dispatch =>{   
    streams.post('/streams',formValues)
}