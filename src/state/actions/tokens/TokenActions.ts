import { BaseURL } from "../../../components/Constants";
import { Dispatch } from "redux";
import axios from 'axios'
import { TOKENS_LOADING, TOKENS_FAIL, TOKENS_SUCCESS } from "./TokenActionTypes";

export const GetToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: TOKENS_LOADING
        })

        const res = await axios.get(`${BaseURL}/swap/v1/tokens`)

        dispatch({
            type: TOKENS_SUCCESS,
            payload: res.data.records
        })

    } catch (error) {
        dispatch({
            type: TOKENS_FAIL
        })
    }
}

