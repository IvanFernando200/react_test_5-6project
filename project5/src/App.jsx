import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokedexPokeInfo from "./pages/PokedexPokeInfo";

import ProtecteRoutes from "./pages/ProtecteRoutes";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtecteRoutes />}>
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:name" element={<PokedexPokeInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
