import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function MyMap() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export const MapWindow = () => {
  return (
    <MapContainer
      center={[38.69365283385019, -9.22157927789338]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ overflow: "hidden" }}
      className="min-h-full min-h-full grow"
      id="map"
    >
      <MyMap />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.69365283385019, -9.22157927789338]}>
        <Popup autoClose={false} closeOnEscapeKey={false} closeOnClick={false}>
          Abnormal infrared signal detected. <br /> High probability of fire.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
