import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';

import './ContainerMap.scss';

export function ContainerMap({ coordinate }) {
  return (
    <div className="ContainerMap">
      <YMaps>
        <Map
          defaultState={{
            center: [coordinate.x, coordinate.y],
            zoom: 5,
            controls: ['zoomControl', 'fullscreenControl'],
            yandexMapDisablePoiInteractivity: true,
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl', 'layout.ImageWithContent']}
          className="ContainerMap__map"
        >
          <Polygon
            geometry={[coordinate.x, coordinate.y]}
            options={{
              preset: 'islands#redIcon',
            }}
          />
          <Placemark geometry={[coordinate.x, coordinate.y]} />
          
        </Map>
      </YMaps>
    </div>
  );
}
