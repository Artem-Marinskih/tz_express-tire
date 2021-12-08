import { useSelector } from 'react-redux';
import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';

import './ContainerMap.scss';

export function ContainerMap() {
  const coordinate = useSelector((state) => state.coordinate);

  return (
    <div className="ContainerMap">
      <YMaps>
        <Map
          state={{
            center: [coordinate.x, coordinate.y],
            zoom: coordinate.zoom,
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
