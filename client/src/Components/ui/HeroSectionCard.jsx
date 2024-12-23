import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HeroSectionCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const weatherData = [
    {
      day: "Mon",
      temp: "18°",
      description: "Partly cloudy",
      icon: "⛅",
      realFeel: "20°",
      wind: "E, 10-15 km/h",
      pressure: "1012MB",
      humidity: "60%",
      sunrise: "6:10 AM",
      sunset: "8:15 PM",
    },
    {
      day: "Tue",
      temp: "20°",
      description: "Sunny",
      icon: "☀️",
      realFeel: "22°",
      wind: "S.E, 8-12 km/h",
      pressure: "1008MB",
      humidity: "50%",
      sunrise: "6:12 AM",
      sunset: "8:13 PM",
    },
    {
      day: "Wed",
      temp: "15°",
      description: "Rainy",
      icon: "🌧️",
      realFeel: "13°",
      wind: "W, 12-20 km/h",
      pressure: "1005MB",
      humidity: "70%",
      sunrise: "6:15 AM",
      sunset: "8:10 PM",
    },
    {
      day: "Thu",
      temp: "17°",
      description: "Overcast",
      icon: "☁️",
      realFeel: "16°",
      wind: "N.W, 5-10 km/h",
      pressure: "1010MB",
      humidity: "65%",
      sunrise: "6:18 AM",
      sunset: "8:08 PM",
    },
    {
      day: "Fri",
      temp: "22°",
      description: "Sunny",
      icon: "☀️",
      realFeel: "24°",
      wind: "S, 10-14 km/h",
      pressure: "1007MB",
      humidity: "45%",
      sunrise: "6:20 AM",
      sunset: "8:06 PM",
    },
    {
      day: "Sat",
      temp: "19°",
      description: "Thunderstorm",
      icon: "⛈️",
      realFeel: "18°",
      wind: "N.E, 15-25 km/h",
      pressure: "1002MB",
      humidity: "75%",
      sunrise: "6:22 AM",
      sunset: "8:03 PM",
    },
    {
      day: "Sun",
      temp: "16°",
      description: "Windy",
      icon: "🌨️",
      realFeel: "14°",
      wind: "E, 20-30 km/h",
      pressure: "1008MB",
      humidity: "55%",
      sunrise: "6:25 AM",
      sunset: "8:00 PM",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-950 p-4 md:p-8">
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {weatherData.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer transition-all duration-500 rounded-3xl ${
              activeIndex === index
                ? "w-40 md:w-60 h-60 bg-blue-100 text-gray-800"
                : "w-24 md:w-28 h-60 bg-zinc-900 text-white"
            } flex flex-col justify-between items-center p-4`}
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-sm md:text-xl">{item.day}</div>
              <div className="text-3xl md:text-4xl font-bold mt-2">{item.icon}</div>
            </div>
            <div className="text-xl md:text-3xl font-bold">{item.temp}</div>
            {activeIndex === index && (
              <div className="mt-2 text-xs overflow-hidden text-center">
                <div>Real Feel: {item.realFeel}</div>
                <div>Wind: {item.wind}</div>
                <div>Pressure: {item.pressure}</div>
                <div>Humidity: {item.humidity}</div>
                <div>
                  Sunrise: {item.sunrise} &nbsp; Sunset: {item.sunset}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="flex-grow mt-4 h-[330px] w-[1010px] ml-4 lg:ml-0 ">
        <div className="flex justify-between py-2">
        <h1 className="text-lg">Global Map</h1>
        <button className="bg-stone-900 px-2 rounded-full">View wide✨</button>
        </div>
  <MapContainer
    center={[20, 0]}
    zoom={2}
    className="h-full w-full rounded-3xl"
  >
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    />
    <Marker position={[20, 0]}>
      <Popup>Center of the Map</Popup>
    </Marker>
  </MapContainer>
</div>

    </div>
  );
}

export default HeroSectionCard;
