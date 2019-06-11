import {combineReducers} from 'redux'
import {rate} from './rate';
import {trades} from './trades';

export default combineReducers({
  rate,
  trades,
})
