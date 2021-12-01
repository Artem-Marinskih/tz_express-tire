import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useEffect } from 'react';

import './ContainerMap.scss';

export function ContainerMap({ coordinate }) {

  return (
    <div className="ContainerMap">
     <YMaps>
        <Map
          defaultState={{
            center: [coordinate.x, coordinate.y],
            zoom: 12,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          className="ContainerMap__map"
        >
        <Placemark geometry={[coordinate.x, coordinate.y]} />
        </Map>
      </YMaps>
    </div>
  );
}
