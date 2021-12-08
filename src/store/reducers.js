import { COORDINATE, Coordinate } from './actions';

export function reducer(state = Coordinate, action) {
  console.log(state)
  switch (action.type) {
    case COORDINATE:
      return { 
        ...state, 
        x: 57.8519,
        y: 60.6122,
        zoom: 17 };

    default:
      return state;
  }
}
