import React, { useState, useEffect } from "react";
import { IconButton, Box, Avatar } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

import { VscBellDot } from "react-icons/vsc";
import { IoMoonOutline } from "react-icons/io5";
import Logo from "../assets/LogoAgnikul.png";
import LogoSmall from "../assets/LogoSmall.png";
import avatarPic from "../assets/avatar.png";

interface HeaderProps {
  darkMode: boolean;
  isOpenMenu: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  toggleDarkMode,
  isOpenMenu,
  darkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const dropdownMenu = document.querySelector(".profile-dropdown");
      if (isOpen && dropdownMenu && !dropdownMenu.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      className="HeaderWrapper"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: darkMode ? "#222222" : "#fff",
        color: darkMode ? "#eeeeed" : "",
        animation: "fadeIn 1s ease forwards",
      }}
    >
      <Box sx={{ display: isOpenMenu ? "block" : "none" }}>
        <img src={Logo} alt="Logo" width="180px" />
      </Box>
      <Box sx={{ display: isOpenMenu ? "none" : "block" }}>
        <img src={LogoSmall} alt="Small Logo" width="30px" />
      </Box>
      <Box
        className="payrollText"
        sx={{
          color: darkMode ? "#fff" : "#323232",
          display: { xs: "none", sm: "block" },
          animation: "fadeIn 2s ease forwards", // Apply fadeIn animation
        }}
      >
        Payroll Management
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: darkMode ? "#222222" : "#fff",
            color: darkMode ? "#eeeeed" : "",
            animation: "fadeIn 3s ease forwards",
          }}
        >
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              color: darkMode ? "#eeeeed" : "",
            }}
          >
            {darkMode ? <CiLight size={25} /> : <IoMoonOutline size={20} />}
          </IconButton>
          <IconButton sx={{ color: darkMode ? "#eeeeed" : "" }}>
            <IoSettingsOutline size={20} />
          </IconButton>

          <IconButton sx={{ color: darkMode ? "#eeeeed" : "" }}>
            <VscBellDot size={20} />
          </IconButton>
        </Box>

        <Box className="avatarpic" sx={{ position: "relative" }}>
          <Avatar src={avatarPic} alt="Avatar" onClick={toggleDropdown} />
          {isOpen && (
            <Box
              className="profile-dropdown"
              sx={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                zIndex: 9999,
                border: "1px solid #d1d1d1",
                borderRadius: "4px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                minWidth: "150px",
                cursor: "pointer",
                bgcolor: darkMode ? "#222222" : "#fff",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  "&:hover": { bgcolor: darkMode ? "#333333" : "#f0f0f0" },
                }}
              >
                <span style={{ marginRight: "8px" }}>Profile</span>
              </Box>
              <Box
                sx={{
                  p: 1,
                  "&:hover": { bgcolor: darkMode ? "#333333" : "#f0f0f0" },
                }}
              >
                <span style={{ marginRight: "8px" }}>Switch Desk</span>
              </Box>
              <Box
                sx={{
                  p: 1,
                  "&:hover": { bgcolor: darkMode ? "#333333" : "#f0f0f0" },
                }}
              >
                <span style={{ marginRight: "8px" }}>Log Out</span>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
