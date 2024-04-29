import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtecteRoutes = () => {
  const trainer = useSelector((slices) => slices.trainer);
  if (trainer.length >= 3) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtecteRoutes;
