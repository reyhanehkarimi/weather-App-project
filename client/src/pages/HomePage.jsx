// import React, { useState } from "react";

// function HomePage() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const weatherData = [
//     {
//       day: "Mon",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Tue",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Wed",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Thu",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Fri",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Sat",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
//     {
//       day: "Sun",
//       temp: "16°",
//       description: "sunny",
//       icon: "🌤️",
//       realFeel: "18°",
//       wind: "N.E, 5-8 km/h",
//       pressure: "1000MB",
//       humidity: "51%",
//       sunrise: "6:02 AM",
//       sunset: "8:19 PM",
//       time: "11:42 PM",
//     },
    
//   ];

//   return (
//     <div className="flex justify-start items-start min-h-screen bg-stone-950">
//       <div className="flex space-x-4 mt-10 ml-10">
//         {weatherData.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`cursor-pointer transition-all duration-500 rounded-3xl ${
//               activeIndex === index
//                 ? "w-56 h-56 bg-blue-100 text-gray-800"
//                 : "w-28 h-56 bg-zinc-900 text-white "
//             } flex flex-col justify-between items-center p-4`}
//           >
//             <div className="flex items-center justify-between w-full">
//               <div className="text-xl">{item.day}</div>
//               <hr />
//               <div className="text-4xl font-bold">{item.icon}</div>
//             </div>
//             <div className="text-3xl font-bold">{item.temp}</div>
//             {activeIndex === index && (
//               <div className="mt-2 text-xs overflow-hidden text-center">
//                 <div>Real Feel: {item.realFeel}</div>
//                 <div>Wind: {item.wind}</div>
//                 <div>Pressure: {item.pressure}</div>
//                 <div>Humidity: {item.humidity}</div>
//                 <div>
//                   Sunrise: {item.sunrise} &nbsp; Sunset: {item.sunset}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;
