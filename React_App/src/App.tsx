import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style/mystyle.css";
import "./pages/LandingPage.css";
import { FrappeProvider } from "frappe-react-sdk";
import Header from "./component/Header.tsx";
import SideBar from "./component/SideBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage.tsx";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const toggleMenu = () => {
    setIsOpenMenu((prevMenuState) => !prevMenuState);
  };
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      const parsedDarkMode = JSON.parse(storedDarkMode);
      setDarkMode(parsedDarkMode);
    }
  }, []);

  return (
    <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
      <BrowserRouter>
        <Header
          darkMode={darkMode}
          isOpenMenu={isOpenMenu}
          toggleDarkMode={toggleDarkMode}
        />
        <SideBar
          darkMode={darkMode}
          isOpenMenu={isOpenMenu}
          toggleMenu={toggleMenu}
        >
          <Routes>
            <Route path="/" element={<LandingPage darkMode={darkMode} />} />
            <Route
              path="/request_approvals"
              element={<About darkMode={darkMode} />}
            />
            <Route path="/reporting" element={<About darkMode={darkMode} />} />
            <Route path="/generate" element={<About darkMode={darkMode} />} />

            {/* Add more routes here if needed */}
          </Routes>
        </SideBar>
      </BrowserRouter>
    </FrappeProvider>
  );
};

export default App;
