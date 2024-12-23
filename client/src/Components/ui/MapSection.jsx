import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GlobalMap = () => {
  const markers = [
    { position: [47.6062, -122.3321], label: "Seattle, AU" },
    { position: [48.8566, 2.3522], label: "Paris, FR" },
    { position: [35.6895, 139.6917], label: "Tokyo, JP" },
    { position: [-33.8688, 151.2093], label: "Sydney, AU" },
  ];

  return (
    <div className="relative h-[500px] bg-gray-900 text-white">
      {/* H1 در بالا سمت چپ */}
      <h1 className="absolute top-4 left-4 z-20 text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
        Global Map
      </h1>
      <div className="absolute top-2 left-2 z-10 p-5 bg-white rounded-lg shadow-lg">
        <h3 className="mb-3 text-black font-semibold">
          Explore global map of wind, weather and oceans condition.
        </h3>
        <img
          src="https://via.placeholder.com/150"
          alt="Weather"
          className="w-full rounded-lg mb-3"
        />
        <button className="w-full py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition">
          Get started
        </button>
      </div>
      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GlobalMap;
