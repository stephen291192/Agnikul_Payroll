import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import { AiOutlineBars } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { RiFocus3Line } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { VscNote } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiSymantec } from "react-icons/si";
import { PiNotepadBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import { useTheme } from "@mui/material/styles";

import { BsPersonRaisedHand } from "react-icons/bs";
import { TbFocus2 } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import iconPic1 from "../assets/icon001.svg";
import iconPic2 from "../assets/icon002.svg";
import iconPic3 from "../assets/icon.svg";
import iconPic4 from "../assets/icon1.svg";
import iconPic5 from "../assets/icon4.svg";
import { useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import { AiOutlineDown } from "react-icons/ai";

import iconPic6 from "../assets/icon5.svg";
import iconPic7 from "../assets/icon6.svg";
import iconPic8 from "../assets/icon7.svg";

import { MdOutlineDashboard } from "react-icons/md";
import { PiUserListLight, PiNotepad } from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
interface MenuItem {
  path: string;
  name: string;
  icon: JSX.Element;
  isOpenMenu?: boolean;
  submenu?: MenuItem[];
  isActive?: boolean;
}

interface SideBarProps {
  children: React.ReactNode;
  darkMode: boolean;
  isOpenMenu: boolean;
  toggleMenu: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  children,
  darkMode,
  isOpenMenu,
  toggleMenu,
}) => {
  const [rotateIcon, setRotateIcon] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)"); // Define the breakpoint for mobile screens

  useEffect(() => {
    if (isMobile) {
      closeMenu(); // Close the menu by default on mobile screens
    }
  }, [isMobile]);

  // Function to close the menu
  const closeMenu = () => {
    toggleMenu(); // Calls the toggleMenu function passed as a prop
  };
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      path: "/requestapprovals",
      name: "Request Approvals",
      icon: <SiSymantec />,
      // icon: <img src={iconPic2} alt="track request Icon" />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <PiNotepadBold />,
      // icon: <img src={iconPic2} alt="track request Icon" />,
    },
    {
      path: "/generate",
      name: "Generate",
      icon: <PiNotePencilBold />,
      submenu: [
        {
          path: "/generate/payslip",
          name: "Payslip",
          icon: <HiOutlineHandRaised />,
        },
        {
          path: "/generate/noDue",
          name: "No Due",
          icon: <HiOutlineHandRaised />,
        },
        {
          path: "/generate/travel",
          name: "Travel",
          icon: <HiOutlineHandRaised />,
        },
        {
          path: "/generate/accommodation",
          name: "Accommodation",
          icon: <HiOutlineHandRaised />,
        },
      ],
      // icon: <img src={iconPic3} alt="Leave Tracker Icon" />,
    },
    {
      path: "/calendar",
      name: "Calendar",
      icon: <IoCalendarOutline />,
      // icon: <img src={iconPic4} alt="Payslip Icon" />,
    },
    {
      path: "/salaryStructure",
      name: "Salary Structure",
      icon: <BsCashCoin />,
      // icon: <img src={iconPic5} alt="Payslip Icon" />,
    },
    {
      path: "/runpayslip",
      name: "Run Payslip",
      icon: <PiHandCoinsFill />,
      // icon: <img src={iconPic6} alt="Payslip Icon" />,
    },
    {
      path: "/employeeDetails",
      name: "Employee Details",
      icon: <HiOutlineUserGroup />,
      // icon: <img src={iconPic7} alt="Payslip Icon" />,
    },
    {
      path: "/leavetracker",
      name: "Leave Tracker",
      icon: <RiFocus3Line />,
      // icon: <img src={iconPic8} alt="Payslip Icon" />,
    },
  ]);

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(
    new Array(menuItems.length).fill(false)
  );

  const toggleSubMenu = (index: number) => {
    setIsOpenSubMenu((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Menu Active color if refresh means not change color
  const toggleActiveMenu = (index: number) => {
    sessionStorage.setItem("activeMenuItemIndex", index.toString());

    setMenuItems((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isActive: i === index, // Set isActive true for clicked item, false for others
      }))
    );
  };
  const theme = useTheme();

  useEffect(() => {
    const activeIndex = sessionStorage.getItem("activeMenuItemIndex");
    if (activeIndex !== null) {
      toggleActiveMenu(parseInt(activeIndex));
    }
  }, []);

  // Function to handle icon rotation
  const handleIconRotation = () => {
    setRotateIcon(!rotateIcon);
    toggleMenu();
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: darkMode ? "#222222" : "",
      }}
    >
      <Box
        sx={{
          width: isOpenMenu ? "230px" : "45px",
          transition: "width 0.3s ease",
          borderRight: "1px solid #d1d1d1",
          bgcolor: darkMode ? "#222222" : "#fff",
          color: darkMode ? "primary.contrastText" : "text.primary",
          position: isMobile ? "absolute" : "fixed",
          top: 0,
          bottom: 0,
          zIndex: 1,
          overflowY: "auto",
          // paddingLeft: isMobile ? "10px" : "20px", // Set paddingLeft based on isMobile
        }}
      >
        <div className="top-section">
          <IconButton
            onClick={() => {
              handleIconRotation();
            }}
            sx={{
              cursor: "pointer",
              color: darkMode ? "#eeeeed" : "#000000",
              "&:hover": {
                animation: "pulse 1s infinite",
              },
              transform: rotateIcon ? "rotate(90deg)" : "rotate(0deg)", // Rotate the icon based on the state
              transition: "transform 0.4s ease", // Add transition for smooth rotation effect
            }}
          >
            <AiOutlineBars size={22} />
          </IconButton>
        </div>
        {menuItems.map((item, index) => (
          <div key={index} className="menu">
            <Box
              component={Link}
              to={item.path}
              onClick={() => {
                item.submenu && toggleSubMenu(index);
                toggleActiveMenu(index);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                // color: "red",
                bgcolor: item.isActive
                  ? darkMode
                    ? "#4d8c52"
                    : "#4D8C52"
                  : "",
                "&:hover": {
                  bgcolor: item.isActive
                    ? darkMode
                      ? "#4d8c52d1"
                      : "#4d8c52d1"
                    : darkMode
                    ? "#363636"
                    : "#f0f0f0",
                  // color: darkMode ? "red" : "#000",
                },
              }}
              style={{
                color: item.isActive
                  ? darkMode
                    ? "#fff"
                    : "#FFF" // Active and darkMode
                  : darkMode
                  ? "#fff"
                  : "#323232", // Normal darkMode: red, Otherwise: black
              }}
            >
              <div>
                {!isOpenMenu ? (
                  <div className="icon">{item.icon}</div>
                ) : (
                  <Box
                    className="icon"
                    sx={{
                      animation: isOpenMenu
                        ? `slideInLeft ${index * 0.2}s ease forwards`
                        : "none",
                    }}
                  >
                    {item.icon} <span className="menuName"> {item.name}</span>
                    {item.submenu && (
                      <div className="arrow-container">
                        <MdKeyboardArrowDown
                          className={
                            isOpenSubMenu[index] ? "arrow-open" : "arrow-closed"
                          }
                        />
                      </div>
                    )}
                  </Box>
                )}
              </div>
            </Box>
            {item.submenu && isOpenSubMenu[index] && isOpenMenu && (
              <div className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <Box
                    key={subIndex}
                    component={Link}
                    to={subItem.path}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        bgcolor: "#f0f0f0",
                        color: "#000",
                      },
                    }}
                  >
                    <div className="submenuName1">
                      {/* {subItem.icon} */}
                      <span className="submenuName">{subItem.name}</span>
                    </div>
                  </Box>
                ))}
              </div>
            )}
          </div>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          background: "#effaef",
          bgcolor: darkMode ? "#222222" : "#effaef",
          paddingTop: "64px", // Assuming the height of the header is 64px
          paddingLeft: isOpenMenu ? (isMobile ? "20px" : "230px") : "20px",
          height: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        <main
          style={{
            background: darkMode ? "#494949" : "",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {children}
        </main>
      </Box>
    </Box>
  );
};

export default SideBar;
