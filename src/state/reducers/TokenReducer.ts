import { Tokens, TokensDispatchTypes, TOKENS_FAIL, TOKENS_LOADING, TOKENS_SUCCESS } from "../actions/tokens/TokenActionTypes"

export interface DefaultStateI {
    loading: boolean,
    tokens?: Tokens
}

export const defaultState: DefaultStateI = {
    loading: false
}

const tokenReducer = (state: DefaultStateI = defaultState, action: TokensDispatchTypes): DefaultStateI => {
    switch (action.type){
        case TOKENS_FAIL: {
            return {
                loading: false
            }
        }
        case TOKENS_LOADING: {
            return {
                loading: true
            }
        }
        case TOKENS_SUCCESS: {
            return {
                loading: false,
                tokens: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default tokenReducer
