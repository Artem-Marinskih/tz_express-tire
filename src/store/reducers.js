import { COORDINATE } from './actions';

const INITIAL_STATE = {
  coordinate: {
    x: 56.8519,
    y: 60.6122,
    zoom: 12,
  },
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COORDINATE:
      return {
        ...state,
        coordinate: action.coordinateFromAddress,
      };

    default:
      return state;
  }
}
