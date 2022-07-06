import {Dispatch } from "redux";

export const GetPokemin = () => async(dispatch: Dispatch) = {
    try {
        dispatch({
            type: "LOADING_POKEMON"
        })
        
    } catch(e) {

    }
};