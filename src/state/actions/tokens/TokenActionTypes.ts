export const TOKENS_LOADING = "TOKENS_LOADING"
export const TOKENS_FAIL = "TOKENS_FAIL"
export const TOKENS_SUCCESS = "TOKENS_SUCCESS"

export type Tokens = [{
    symbol: string,
    address: string,
    name: string,
    decimals: number

}]

export interface TokensLoading {
    type: typeof TOKENS_LOADING
}

export interface TokensFail {
    type: typeof TOKENS_FAIL
}

export interface TokensSuccess {
    type: typeof TOKENS_SUCCESS
    payload: Tokens
}

export type TokensDispatchTypes = TokensLoading | TokensFail | TokensSuccess