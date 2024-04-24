import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style/mystyle.css";
import "./pages/LandingPage.css";
import "./style/animation.css";

import "@coreui/coreui-pro/dist/css/coreui.min.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FrappeProvider } from "frappe-react-sdk";
import Header from "./component/Header.tsx";
import SideBar from "./component/SideBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage.tsx";
import ThemeColor from "./component/ThemeColor.tsx";
import Leave from "./pages/Leave.tsx";
import TrackRequest from "./pages/TrackRequest.tsx";
import LeaveTracker from "./pages/LeaveTracker.tsx";
import Bills from "./pages/Bills.tsx";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  // Disable right-click close browser tools
  // -------------- Start ---------------
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (
  //       event.keyCode === 123 ||
  //       event.keyCode === 85 ||
  //       (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
  //       (event.ctrlKey && event.shiftKey && event.keyCode === 74) ||
  //       (event.ctrlKey && event.shiftKey && event.keyCode === 67)
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  // Disable F12 and Ctrl+Shift+I
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  //   window.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     window.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // ---------Browser Tool END ------------------

  const toggleMenu = () => {
    setIsOpenMenu((prevMenuState) => !prevMenuState);
  };

  // Dark Mode Function
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  // If Darkmode means no change Refreshing time
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

  const themeColor = createTheme({
    palette: {
      primary: {
        main: darkMode ? "#d1d1d1" : "#2D5831",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "",
              color: darkMode ? "#d1d1d1" : "#000",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "#3f9747",
            },
            "&.Mui-focused fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "#3f9747",
            },
            "& input::placeholder": {
              color: darkMode ? "#d1d1d1" : "#000", // Set placeholder color to red when darkMode is true
            },
            "& input": {
              color: darkMode ? "#d1d1d1" : "#000", // Set typing text color to red when darkMode is true
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#000", // Set input label color to red when darkMode is true
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              color: darkMode ? "#d1d1d1" : "#000",
            },
            color: darkMode ? "#d1d1d1" : "#000",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#000", // Set date picker icon color to red when darkMode is true
          },
        },
      },
    },
  });

  return (
    <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
      <BrowserRouter>
        {/* <ThemeColor darkMode={darkMode} /> */}
        {/* <ThemeProvider theme={themeColor}> */}

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
              path="/requestapprovals"
              element={<About darkMode={darkMode} />}
            />
            <Route path="/reports" element={<About darkMode={darkMode} />} />
            <Route
              path="/requestapprovals"
              element={<About darkMode={darkMode} />}
            />
            <Route
              path="/trackrequest"
              element={<TrackRequest darkMode={darkMode} />}
            />
            <Route
              path="/leavetracker"
              element={<LeaveTracker darkMode={darkMode} />}
            />
            <Route path="/bills" element={<Bills darkMode={darkMode} />} />

            {/* Add more routes here if needed */}
          </Routes>
        </SideBar>
        {/* </ThemeProvider> */}
        <ToastContainer />
      </BrowserRouter>
    </FrappeProvider>
  );
};

export default App;
