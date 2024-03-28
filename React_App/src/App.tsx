import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style/mystyle.css";
import { FrappeProvider } from "frappe-react-sdk";
import Header from "./component/Header.tsx";
import SideBar from "./component/SideBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";

const App: React.FC = () => {
  return (
    <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
      <BrowserRouter>
        <SideBar>
          {/* Pass your child components within the SideBar component */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/request_approvals" element={<About />} />
            <Route path="/reporting" element={<About />} />
            <Route path="/login" element={<About />} />
            <Route path="/raise_request" element={<About />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </FrappeProvider>
  );
};

export default App;
