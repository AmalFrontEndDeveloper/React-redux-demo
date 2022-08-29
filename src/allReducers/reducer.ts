import { combineReducers } from 'redux';
import uGaugeReducer from './reducersCollections/reducer'

const AppReducers = combineReducers({
    uGaugeApp: uGaugeReducer
})

export type AppState = ReturnType<typeof AppReducers>
export default AppReducers;
