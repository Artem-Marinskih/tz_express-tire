import { YMaps, Map } from 'react-yandex-maps';
import './ContainerMap.scss';

export function ContainerMap() {
  return (
    <div className="ContainerMap">
      <YMaps>
        <Map defaultState={{ center: [56.8519, 60.6122], zoom: 12 }} className="ContainerMap__map"/>
      </YMaps>
    </div>
  );
}
