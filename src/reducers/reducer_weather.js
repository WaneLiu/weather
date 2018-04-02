import { FETCH_WEATHER } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return !state ? [action.payload.data] : [action.payload.data, ...state];
  }
  return state;
}
