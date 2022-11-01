import { Navigate, Route, Routes } from "react-router-dom";
import DashboardAdmin from "../pages/DashboardAdmin";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<DashboardAdmin />} />
    </Routes>
  );
}

export default RoutesMain;