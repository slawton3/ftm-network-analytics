import { BaseURL } from "../../../components/Constants";
import { Dispatch } from "redux";
import axios from 'axios'
import { PRICES_FAIL, PRICES_LOADING, PRICES_SUCCESS } from "./PricesActionTypes";

const GetToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: PRICES_LOADING
        })

        const res = await axios.get(`${BaseURL}+/swap/v1/prices`)

        dispatch({
            type: PRICES_SUCCESS,
            payload: res.data.records
        })


    } catch (error) {
        dispatch({
            type: PRICES_FAIL
        })
    }
}