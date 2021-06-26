import {combineReducers} from 'redux'
import plasticReducer from './plasticReducer'

const reducers = combineReducers({
    plastic: plasticReducer
})

export default reducers