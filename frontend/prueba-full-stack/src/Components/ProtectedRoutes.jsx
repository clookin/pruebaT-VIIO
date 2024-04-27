import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokenExist = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== "";
  };

  if (tokenExist()) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
export default ProtectedRoutes;