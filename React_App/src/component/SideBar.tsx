import React, { useState, useEffect } from "react";

// Pages Imports

import PaySlip from "../pages/PaySlip";
import Drawer from "@mui/material/Drawer";
import Leave from "../pages/Leave";
import Travel from "../pages/Travel";
import Accommodation from "../pages/Accommodation";
import Reimbursement from "../pages/Reimbursement";
import NoDue from "../pages/NoDue";

// NPM Link
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Icon Import
import { IconButton, Box } from "@mui/material";
import { AiOutlineBars } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { RiFocus3Line } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { VscNote } from "react-icons/vsc";
import { IoCalendar } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { IoHandLeftOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiSymantec } from "react-icons/si";
import { PiNotepadBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import { BsPersonRaisedHand } from "react-icons/bs";
import { TbFocus2 } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUserListLight, PiNotepad } from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";

interface MenuItem {
  path: string;
  name: string;
  icon: JSX.Element;
  isOpenMenu?: boolean;
  submenu?: MenuItem[];
  isActive?: boolean;
  onClick?: () => void;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentDrawer, setCurrentDrawer] = useState<string>("");

  const toggleDrawer = (open: boolean, drawerType: string) => {
    setIsOpen(open);
    setCurrentDrawer(drawerType);
  };

  const handleCloseDrawer = () => {
    toggleDrawer(false, "");
  };
  // Close the menu by default on mobile screens
  useEffect(() => {
    if (isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  // Function to close the menu
  const closeMenu = () => {
    toggleMenu(); // Calls the toggleMenu function passed as a prop
  };

  const handleOpen = () => {
    alert("Welcome");
  };

  // sidebar Menu Items list
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      onClick: handleOpen,
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
      icon: <MdCalendarMonth />,
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
      icon: <MdOutlineGroup />,
      // icon: <img src={iconPic7} alt="Payslip Icon" />,
    },
    {
      path: "/leavetracker",
      name: "Leave Tracker",
      icon: <RiFocus3Line />,
      // icon: <img src={iconPic8} alt="Payslip Icon" />,
    },
  ]);

  const [usermenuItems, setUserMenuItems] = useState<MenuItem[]>([
    {
      name: "Raise Request",
      icon: <IoHandLeftOutline />,
      path: "",

      submenu: [
        {
          path: "",
          name: "Payslip",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "Payslip"),
        },
        {
          path: "",
          name: "Leave",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "Leave"),
        },
        {
          path: "",
          name: "Travel",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "Travel"),
        },
        {
          path: "",
          name: "Accommodation",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "Accommodation"),
        },
        {
          path: "",
          name: "Reimbursement",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "Reimbursement"),
        },
        {
          path: "",
          name: "No Due",
          icon: <HiOutlineHandRaised />,
          onClick: () => toggleDrawer(true, "NoDue"),
        },
      ],
      // icon: <img src={iconPic3} alt="Leave Tracker Icon" />,
    },
    {
      path: "TrackRequest",
      name: "Track Request",
      icon: <TbFocus2 />,
      // onClick: () => toggleDrawer(true),
      // icon: <img src={iconPic4} alt="Payslip Icon" />,
    },
    {
      path: "/LeaveTracker",
      name: "Leave Tracker",
      icon: <LuCalendarDays />,
      // icon: <img src={iconPic5} alt="Payslip Icon" />,
    },
    {
      path: "/Payslip",
      name: "Payslip",
      icon: <BsCashCoin />,
      // icon: <img src={iconPic6} alt="Payslip Icon" />,
    },
    {
      path: "/SalaryStructure",
      name: "Salary Structure",
      icon: <CgNotes />,
      // icon: <img src={iconPic7} alt="Payslip Icon" />,
    },
    {
      path: "/Calendar",
      name: "Calendar",
      icon: <IoCalendarOutline />,
      // icon: <img src={iconPic8} alt="Payslip Icon" />,
    },
    // {
    //   path: "/ProjectLead",
    //   name: "Project Lead",
    //   icon: <RiFocus3Line />,
    // },
    {
      path: "/Bills",
      name: "Bills",
      icon: <VscNote />,
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

  //
  const toggleActiveMenu = (index: number) => {
    sessionStorage.setItem("activeMenuItemIndex", index.toString());

    setUserMenuItems((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isActive: i === index, // Set isActive true for clicked item, false for others
      }))
    );
  };

  // const theme = useTheme();
  // IF Refresh means not change to active menu bgcolor
  useEffect(() => {
    const activeIndex = sessionStorage.getItem("activeMenuItemIndex");
    if (activeIndex !== null) {
      toggleActiveMenu(parseInt(activeIndex));
    }
  }, []);

  // Function to handle side bar icon rotation
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
          // borderRight: "1px solid #d1d1d1",
          bgcolor: darkMode ? "#222222" : "#fff",
          color: darkMode ? "primary.contrastText" : "text.primary",
          position: isMobile ? "absolute" : "fixed",
          top: 0,
          bottom: 0,
          zIndex: 1,
          overflowY: "auto",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        {usermenuItems.map((item, index) => (
          <div key={index} className="menu" onClick={item.onClick}>
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
                      // width: "200px",
                      // backgroundColor: "red",
                      // display: "flex",
                      // justifyContent: "space-evenly",
                      // float: "left",
                      animation: isOpenMenu
                        ? `slideInLeft ${index * 0.2}s ease forwards`
                        : "none",
                    }}
                  >
                    {item.icon}
                    <span className="menuName">{item.name}</span>
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
                        bgcolor: darkMode ? "#363636" : "#f0f0f0",
                        color: darkMode ? "#fff" : "#000",
                      },
                    }}
                    onClick={subItem.onClick}
                  >
                    <div className="submenuName1">
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

      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: darkMode ? "#222222" : "#FFF",
            color: darkMode ? "#fff" : "#000",
            width: "40%",
          },
          "@media (max-width: 600px)": {
            "& .MuiPaper-root": {
              width: "75%",
            },
          },
          "@media (max-width: 1024px)": {
            "& .MuiPaper-root": {
              width: "75%",
            },
          },
        }}
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false, "")}
      >
        <Box sx={{ padding: "20px" }}>
          {currentDrawer === "Payslip" && (
            <PaySlip darkMode={darkMode} onCloseDrawer={handleCloseDrawer} />
          )}
          {currentDrawer === "Leave" && (
            <Leave darkMode={darkMode} onCloseDrawer={handleCloseDrawer} />
          )}
          {currentDrawer === "Travel" && (
            <Travel darkMode={darkMode} onCloseDrawer={handleCloseDrawer} />
          )}
          {currentDrawer === "Accommodation" && (
            <Accommodation
              darkMode={darkMode}
              onCloseDrawer={handleCloseDrawer}
            />
          )}
          {currentDrawer === "Reimbursement" && (
            <Reimbursement
              darkMode={darkMode}
              onCloseDrawer={handleCloseDrawer}
            />
          )}
          {currentDrawer === "NoDue" && (
            <NoDue darkMode={darkMode} onCloseDrawer={handleCloseDrawer} />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
