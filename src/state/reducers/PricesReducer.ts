import { Prices, PricesDispatchTypes, PRICES_FAIL, PRICES_LOADING, PRICES_SUCCESS } from "../actions/prices/PricesActionTypes"

export interface DefaultStateI {
    loading: boolean,
    prices?: Prices
}

export const defaultState: DefaultStateI = {
    loading: false
}

const priceReducer = (state: DefaultStateI = defaultState, action: PricesDispatchTypes): DefaultStateI => {
    switch (action.type){
        case PRICES_FAIL: {
            return {
                loading: false
            }
        }
        case PRICES_LOADING: {
            return {
                loading: true
            }
        }
        case PRICES_SUCCESS: {
            return {
                loading: false,
                prices: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default priceReducer
