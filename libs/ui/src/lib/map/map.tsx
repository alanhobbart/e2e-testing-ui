
import Map from 'react-map-gl';
 
export interface MapProps {}
export function MapView(props: MapProps) {

  return (
    <Map
    initialViewState={{
      longitude: -6.2,
      latitude: 53.3856,
      zoom: 12
    }}
    style={{width: 600, height: 250}}
    mapStyle='mapbox://styles/mapbox/streets-v9'
    mapboxAccessToken='pk.eyJ1IjoiYWhvYmJhcnQiLCJhIjoiY2wxZGQ0b2sxMDA4dzNpbWlrYTNlMjdtNCJ9.IfFgGLULSnDh35HBMxTJvQ'
  />
  );
}

export default MapView;
