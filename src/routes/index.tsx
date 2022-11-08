import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardUser from "../pages/DashboardUser";
import { ProtectedRoutes } from "../contexts/ProtectedRouter";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
      <Route path="/dashboardUser" element={<DashboardUser />} />
    </Route>
  </Routes>
);

export default RoutesMain;
