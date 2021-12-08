export const COORDINATE = 'COORDINATE';

export function getCoordinate(coordinateFromAddress) {
  return { type: COORDINATE, coordinateFromAddress };
}
