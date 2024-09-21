import { Routes, Route } from "react-router-dom";
import {
  FindRoomate,
  Home,
  Homepage,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
} from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.home} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.register} element={<Login />} />
          <Route path={path.login} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.TIM_NGUOI_O_GHEP} element={<FindRoomate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
