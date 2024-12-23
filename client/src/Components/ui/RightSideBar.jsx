import React from "react";

function SidebarGraph() {
  const chartData = [
    { time: "10AM", type: "Rainy", height: "h-32" },
    { time: "11AM", type: "Sunny", height: "h-36" },
    { time: "12AM", type: "Rainy", height: "h-20" },
    { time: "01PM", type: "Sunny", height: "h-24" },
    { time: "02PM", type: "Heavy", height: "h-14" },
    { time: "03PM", type: "Sunny", height: "h-28" },
  ];
  const weatherData = [
    {
      day: "Mon",
      temp: "18°",
      description: "Partly cloudy",
      icon: "⛅",
      country:"California"
    },
    {
      day: "Tue",
      temp: "20°",
      description: "Sunny",
      icon: "☀️",
      country:"Beijing"
    },
    {
      day: "Wed",
      temp: "15°",
      description: "Rainy",
      icon: "🌧️",
      country:"Jerusalem"
    },
  ];

  return (
    <div className="w-full  text-white">
      
      <div className="flex flex-col space-y-4 bg-transparent text-white p-4 rounded-md mt-6 ml-10">
  <h2 className="text-lg font-bold mb-2 mr-10">Chance of rain</h2>
  <div className="flex relative">
    {/* Vertical labels */}
    <div className="absolute -left-14 top-0 flex flex-col justify-between h-32">
      <span className="text-sm">Rainy <span className="text-sm opacity-10">----------------------------------------------</span></span>
      <span className="text-sm">Sunny <span className="text-sm opacity-10">----------------------------------------------</span></span>
      <span className="text-sm">Heavy <span className="text-sm opacity-10">----------------------------------------------</span></span>
    </div>

    {/* Chart container */}
    <div className="flex items-end space-x-2 h-32 mt-8">
      {chartData.map((data, index) => (
        <div key={index} className="flex flex-col mt-8 items-center space-y-1">
          <div
            className={`w-2 ${data.height} bg-blue-100 rounded-md transition-all duration-500`}
          ></div>
          <span className="text-xs mt-1">{data.time}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="flex flex-col mt-5 gap-5">
        <div className="flex justify-normal flex-row">
        <h1 className="mr-20">Other large cities</h1>
        <a href="#">Show all > </a>
        </div>
        {weatherData.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-72 h-28 bg-zinc-900 text-white flex flex-row items-center justify-between p-4 rounded-3xl"
          >
            <div className="flex flex-col items-start justify-center">
              <div className="text-lg">{item.day}</div>
              <div className="text-sm">{item.country}</div>
              <div className="text-4xl font-bold mt-2">{item.icon}</div>
            </div>
            <div className="text-3xl font-bold">{item.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarGraph;
