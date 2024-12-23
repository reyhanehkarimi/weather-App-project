import Navbar from "./Components/ui/Navbar";
import BelowNavbar from "./Components/ui/BelowNavbar";
// import HomePage from "./pages/HomePage";
import HeroSectionCard from "./Components/ui/HeroSectionCard";
import SidebarGraph from "./Components/ui/RightSideBar";
import MapSection from "./Components/ui/MapSection";
import GlobalMap from "./Components/ui/MapSection";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Navbar className="p-0 px-2 fixed mb-2" />
      <BelowNavbar />
      <div className="flex space-x-4 p-4">
        {/* HeroSectionCard */}
        <div className="flex-1">
          <HeroSectionCard />
          {/* <GlobalMap /> */}
          {/* <MapSection /> */}
        </div>

        {/* SidebarGraph */}
        <div className="w-1/4">
          <SidebarGraph />
        </div>
      </div>
    </div>
  );
};

export default App;
