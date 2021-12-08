export const COORDINATE = 'COORDINATE';

export const Coordinate = {
  x: 56.8519,
  y: 60.6122,
  zoom: 12
}

export function getCoordinate() {
  return { type: COORDINATE }
}