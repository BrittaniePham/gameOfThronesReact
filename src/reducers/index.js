import { combineReducers } from 'redux';
import flash from './flash';
import episodes from './episodes'

const rootReducer = combineReducers({
  flash,
  episodes,
});

export default rootReducer;
