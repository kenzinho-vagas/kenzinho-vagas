import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardUser from "../pages/DashboardUser";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/dashboardAmin" element={<DashboardAdmin />} />
      <Route path="/dashboardUser" element={<DashboardUser />} />
    </Routes>
  );
}

export default RoutesMain;