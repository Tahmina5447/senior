
import './App.css'
import { Route } from "react-router-dom";
import CustomRoutes from './Routes/CustomRoutes'
import { publicRoutes } from "./Routes/publicRoutes";
import { superAdminRoutes } from './Routes/superAdminRoute';
import { Toaster } from 'react-hot-toast';
import AdminDashboardLayout from './Layout/AdminDashboardLayout';
import AdminDashboardHome from './Pages/Admin/AdminDashboardHome';
import SupportAgentDashboardLayout from './Layout/SupportAgentDashboardLayout';
import SuperAdminDashboardLayout from './Layout/SuperAdminDashboardLayout';
import SuperAdminDashboardHome from './Pages/SuperAdmin/SuperAdminDashboardHome';
import { adminRoutes } from './Routes/adminRoutes';
import AlertsPage from './Pages/SupportAgent/AlertsPage';
import { SupportAgentRoutes } from './Routes/SupportAgentRoutes';
import ScrollToTop from './Shared/ScrollToTop/ScrollToTop';

function App() {


  return (
    <>
      <div>
        <ScrollToTop/>
        <CustomRoutes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* ------------------------admin dashboard route--------------------- */}
          <Route
            path="/admin/dashboard"
            element={
              // <AuthSuperAdmin>
              <AdminDashboardLayout></AdminDashboardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<AdminDashboardHome />} />
            {adminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* ------------------------support-agent dashboard route--------------------- */}
          <Route
            path="/support-agent/dashboard/"
            element={
              // <AuthSuperAdmin>
              <SupportAgentDashboardLayout></SupportAgentDashboardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<AlertsPage />} />
            {SupportAgentRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* -------------------super admin routing strat---------- */}
          <Route
            path="/super-admin/dashboard/"
            element={
              // <AuthSuperAdmin>
              <SuperAdminDashboardLayout></SuperAdminDashboardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<SuperAdminDashboardHome />} />
            {superAdminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* -------------------super admin routing end---------- */}
        </CustomRoutes>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>

    </>
  );
}

export default App;
