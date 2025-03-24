import { useRoutes, Navigate } from "react-router-dom";
import LoginForm from "../pages/Login/LoginForm";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useSelector } from 'react-redux';
import Experience from "../pages/Dashboard/Experience/Experience";
import Biography from "../pages/Dashboard/Biography/Biography";
import Skills from "../pages/Dashboard/Skills/Skills";
import Portfolio from "../pages/Dashboard/Portfolio/Portfolio";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";

const RoutingPage = () => {
  const isAuthenticatedUser = useSelector((state) => state.auth.isAuthenticated);
  
  return useRoutes([
    {
      path: "/",
      element: isAuthenticatedUser ? <Navigate to="/home" replace /> : <LoginForm />,
    },
    {
      path: "/dashboard",
      element: isAuthenticatedUser ? <Dashboard /> : <Navigate to="/" replace />,
      children: [
        { path: "experience", element: <Experience /> },
        { path: "biography", element: <Biography /> },
        { path: "skills", element: <Skills /> },
        { path: "portfolio", element: <Portfolio /> }
      ],
    },
    {
      path:"home",
      element: <Home />
    },
    {
      path:"*", // Catch-all route for unknown paths
      element: <NotFound />
    }
  ]);
};

export default RoutingPage;
