import SingleSupportAgentPage from "../Pages/Admin/SingleSupportAgentPage";
import AdminElderly from "../Pages/Admin/AdminElderly";
import AdminElderlySinglePage from "../Pages/Admin/AdminElderlySinglePage";
import AdminSupportAgents from "../Pages/Admin/AdminSupportAgents";



export const adminRoutes = [
    // manage users
    { path: "Support-Agents", Component: AdminSupportAgents },
    { path: "Support-Agents/:id", Component: SingleSupportAgentPage },
    { path: "elderly", Component: AdminElderly },
    { path: "elderly/:id", Component: AdminElderlySinglePage },
];


