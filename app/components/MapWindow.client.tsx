import { stat } from "fs";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function MyMap() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export const MapWindow = ({ status }) => {
  return (
    <MapContainer
      center={[38.693196642457295, -9.220889360925968]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ overflow: "hidden" }}
      className=" grow"
      id="map"
    >
      <MyMap />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.693196642457295, -9.220889360925968]}>
        <Popup autoClose={false} closeOnEscapeKey={false} closeOnClick={false}>
          {status?<div>

          <span className="font-bold">Humidade: </span>
          {status?.hum ? status?.hum : "0"}%<br />
          <span className="font-bold">Temp: </span>
          {status?.temp ? status?.temp : "0"} ºC<br />
          <span className="font-bold">Fogo detetado: </span>
          {status?.flame ? status?.flame ==="1"?"Sim":"Não":"Não"}
          </div>:<span>
            A carregar...</span>}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
