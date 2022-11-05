import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importamos los componentes
import Consola from "./components/Consola";
import Documento from "./components/Documento";
import Inicio from "./components/Inicio";
import SobreNosotros from "./components/SobreNosotros";
import NavbarP from "./components/Navbar/Navbar";
import ReactSwitch from "react-switch";

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label className="labelColor">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarP />}>
              <Route index element={<Inicio />} />
              <Route path="consola" element={<Consola />} />
              <Route path="documento" element={<Documento />} />
              <Route path="sobre-nosotros" element={<SobreNosotros />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
