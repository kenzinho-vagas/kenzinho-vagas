import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import DashboardAdmin from "../pages/DashboardAdmin";
import { DashboardUser } from "../pages/DashboardUser";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<DashboardUser />} />
    <Route path="/dashboardAmin" element={<DashboardAdmin />} />
  </Routes>
);

export default RoutesMain;