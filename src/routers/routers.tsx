import Home from "../page/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegiterVehicle from "@/page/regiterVehicle/regiterVehicle";
import Drivers from "@/page/drivers/drivers";
import DriveDetails from "@/page/driveDetails/driveDetails";

const routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regiterVehicle" element={<RegiterVehicle />} />
        <Route path="/drives" element={<Drivers />} />
        <Route path="/drive/:id" element={<DriveDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routers;
