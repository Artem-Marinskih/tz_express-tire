import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';
import { Coordinate } from '../../store/actions'
import './ContainerMap.scss';

export function ContainerMap() {
  return (
    <div className="ContainerMap">
      <YMaps>
        <Map
          state={{
            center: [Coordinate.x, Coordinate.y],
            zoom: Coordinate.zoom,
            controls: ['zoomControl', 'fullscreenControl'],
            yandexMapDisablePoiInteractivity: true,
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl', 'layout.ImageWithContent']}
          className="ContainerMap__map"
        >
          <Polygon
            geometry={[Coordinate.x, Coordinate.y]}
            options={{
              preset: 'islands#redIcon',
            }}
          />
          <Placemark geometry={[Coordinate.x, Coordinate.y]} />
          
        </Map>
      </YMaps>
    </div>
  );
}
