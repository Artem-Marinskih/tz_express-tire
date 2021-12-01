import Yamap from 'react-native-yamap';
import './Map.scss';

const route = {
  start: { lat: 0, lon: 0},
  end: { lat: 10, lon: 10},
};

export function Map() {
  return (
    <div className="Map">
      <Yamap 
      userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
      style={{ flex: 1 }}
      />
    </div>
  );
}