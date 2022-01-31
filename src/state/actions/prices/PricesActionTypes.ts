export const PRICES_LOADING = "PRICES_LOADING"
export const PRICES_FAIL = "PRICES_FAIL"
export const PRICES_SUCCESS = "PRICES_SUCCESS"

export type Prices = {
    symbol: string,
    price: string
}

export interface PricesLoading {
    type: typeof PRICES_LOADING
}

export interface PricesFail {
    type: typeof PRICES_FAIL
}

export interface PricesSuccess {
    type: typeof PRICES_SUCCESS
    payload: Prices
}

export type PricesDispatchTypes = PricesLoading | PricesFail | PricesSuccess