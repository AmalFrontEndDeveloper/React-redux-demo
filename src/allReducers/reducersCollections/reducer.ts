import { combineReducers } from 'redux';
import { rateComponentReducer } from '../../modules/rate/_duck/reducers';
import { userDetailsComponentReducer } from '../../modules/userDetails/_duck/reducers';


const uGaugeReducer = combineReducers({
    userDetails: userDetailsComponentReducer,
    rateDetails:rateComponentReducer
})

export default uGaugeReducer;