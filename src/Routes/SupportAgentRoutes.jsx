import SupportAgentsElderly from "../Pages/SupportAgent/SupportAgentsElderly";
import SupportAgentsElderlySinglePage from "../Pages/SupportAgent/SupportAgentsElderlySinglePage";

export const SupportAgentRoutes = [

    // manage users
    { path: "elderly", Component: SupportAgentsElderly },
    { path: "elderly/:id", Component: SupportAgentsElderlySinglePage }, 
];
