import Home from '../page/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegiterVehicle from '@/page/regiterVehicle/RegiterVehicle';
import Drivers from '@/page/Drivers/Drivers';
import DriveDetails from '@/page/DriveDetails/DriveDetails';



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