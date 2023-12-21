import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DemandPlanning = React.lazy(() => import("pages/DemandPlanning"));
const Register = React.lazy(() => import("pages/Registration"));
const DemandForecast = React.lazy(() => import("pages/DemandForecast"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forecast" element={<DemandForecast />} />
          <Route path="/register" element={<Register />} />
          <Route path="/planning" element={<DemandPlanning />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
