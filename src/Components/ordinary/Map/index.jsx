import { memo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "@assets/Icons/map/marker.png";

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = ({ lat, lng, scrollWheelZoom = false, style }) => {
  const [position, setPosition] = useState([lat, lng]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      attributionControl={false}
      scrollWheelZoom={scrollWheelZoom}
      style={style}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Мене знайшли тут</Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
