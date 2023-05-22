import { memo, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "@assets/Icons/map/marker.png";

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = ({
  position,
  draggable,
  onPosChange,
  scrollWheelZoom = false,
  style,
}) => {
  const markerRef = useRef();
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const newPosition = marker.getLatLng();
          onPosChange(newPosition);
        }
      },
    }),
    [onPosChange]
  );

  return (
    <MapContainer
      center={position}
      zoom={13}
      attributionControl={false}
      scrollWheelZoom={scrollWheelZoom}
      style={style}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        ref={markerRef}
        position={position}
        draggable={draggable}
        eventHandlers={eventHandlers}
        icon={customIcon}>
        <Popup>Мене знайшли тут</Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
