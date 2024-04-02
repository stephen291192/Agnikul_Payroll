import React, { useState, useEffect } from "react";
import { IconButton, Box, Avatar } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 15px",
        background: "#FFF",
        borderBottom: "1px solid #d1d1d1",
        bgcolor: darkMode ? "#222222" : "#fff",
        color: darkMode ? "#eeeeed" : "",
      }}
    >
      <Box sx={{ display: isOpenMenu ? "block" : "none" }}>
        <img src={Logo} alt="Logo" width="180px" />
      </Box>
      <Box sx={{ display: isOpenMenu ? "none" : "block" }}>
        <img src={LogoSmall} alt="Small Logo" width="30px" />
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
          }}
        >
          {/* <IconButton sx={{ color: darkMode ? "#eeeeed" : "" }}>
            <IoIosSearch size={20} />
          </IconButton> */}
          <IconButton
            sx={{ color: darkMode ? "#eeeeed" : "" }}
            onClick={toggleDarkMode}
          >
            <IoMoonOutline size={20} />
          </IconButton>
          <IconButton sx={{ color: darkMode ? "#eeeeed" : "" }}>
            <VscBellDot size={20} />
          </IconButton>
        </Box>

        <Box className="avatarpic">
          <Avatar src={avatarPic} alt="Avatar" onClick={toggleDropdown} />
          {/* {isOpen && (
            <Box>
              <Box sx={{ py: 1 }}>
                <button>Profile</button>
                <button>Switch Desk</button>
                <button>Log Out</button>
              </Box>
            </Box>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
