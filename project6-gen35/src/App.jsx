import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import HotelsIdPage from "./pages/HotelsIdPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ReservationPage from "./pages/ReservationPage";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHoltelsTrunk } from "./store/slices/hotels.slice";
import PrincipalHeader from "./components/shared/PrincipalHeader";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/hotels";
    dispatch(getHoltelsTrunk(url));
  }, []);

  return (
    <div>
      <PrincipalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelsIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/reservations" element={<ReservationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
