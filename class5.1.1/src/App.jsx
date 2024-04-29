import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/shared/NavBar";
import FooterPage from "./pages/FooterPage";
import CountryPage from "./pages/CountryPage";
import ProtectedPage from "./pages/ProtectedPage";
import { useState } from "react";
import FormPage from "./pages/FormPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/form" element={<FormPage setIsLogged={setIsLogged} />} />

        <Route element={<FooterPage />}>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>

        <Route element={<ProtectedPage isLogged={isLogged} />}>
          <Route path="/country/:name" element={<CountryPage />} />
        </Route>

        <Route
          path="*"
          element={
            <h2>
              <mark>404 | Error not found</mark>
            </h2>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
