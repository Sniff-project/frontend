import { memo, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "@assets/Icons/map/marker.png";
import L from "leaflet";

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const defaultPos = { lat: 49.0266, lng: 31.4826 };

const Map = ({
  position = defaultPos,
  draggable = false,
  onPosChange,
  onLoad,
  scrollWheelZoom = false,
  text = "Мене знайшли тут",
  style,
  ...rest
}) => {
  const markerRef = useRef();
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const newPosition = marker.getLatLng();
          const ukraineBounds = L.latLngBounds(
            L.latLng(44.182524, 22.132763), // south-west corner of Ukraine
            L.latLng(52.391435, 40.336914) // north-east corner of Ukraine
          );
          if (!ukraineBounds.contains(newPosition)) {
            marker.setLatLng(position); //reset position if marker is dragged outside of Ukraine
          } else {
            onPosChange(newPosition); // update position if marker is dragged within Ukraine
          }
        }
      },
    }),
    [onPosChange, position]
  );

  const handleOnLoad = () => {
    onLoad && onLoad(position);
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      attributionControl={false}
      scrollWheelZoom={scrollWheelZoom}
      whenReady={handleOnLoad}
      style={style}
      {...rest}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        ref={markerRef}
        position={position}
        draggable={draggable}
        eventHandlers={eventHandlers}
        icon={customIcon}>
        <Popup>{text}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
