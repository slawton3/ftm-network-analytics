import { combineReducers } from "redux";
import priceReducer from "./PricesReducer";
import tokenReducer from './TokenReducer'

const RootReducer = combineReducers({
    token: tokenReducer,
    price: priceReducer
})

export default RootReducer