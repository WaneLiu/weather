import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
const rootReducer = combineReducers({
  weathehr: WeatherReducer
});

export default rootReducer;
