import { Navigate, Outlet } from "react-router-dom";

const ProtectedPage = ({ isLogged }) => {
  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/form" />;
  }
};

export default ProtectedPage;
