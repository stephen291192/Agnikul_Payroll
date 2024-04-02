import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import { AiOutlineBars } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
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
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      path: "/",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      path: "/request_approvals",
      name: "Request Approvals",
      icon: <PiUserListLight />,
    },
    {
      path: "/reporting",
      name: "Reporting",
      icon: <PiNotepad />,
    },
    {
      path: "/generate",
      name: "Generate",
      icon: <AiOutlineFileAdd />,
      isOpenMenu: false,
    },
    {
      path: "/calendar",
      name: "Calendar",
      icon: <LuCalendarDays />,
    },
    {
      path: "/salary_structure",
      name: "Salary Structure",
      icon: <BsCashCoin />,
    },
  ]);

  const toggleSubMenu = (index: number) => {
    setMenuItems((prevState) => {
      const updatedMenuItems = [...prevState];
      const isOpenMenu = updatedMenuItems[index].isOpenMenu;

      // Toggle the submenu visibility for the clicked parent menu
      updatedMenuItems[index].isOpenMenu = !isOpenMenu;

      // Close all submenus if the "Dashboard" menu item is clicked again
      if (index === 0 && !isOpenMenu) {
        updatedMenuItems.forEach((item, i) => {
          if (i !== index && item.isOpenMenu) {
            item.isOpenMenu = false;
          }
        });
      }

      return updatedMenuItems;
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
  useEffect(() => {
    const activeIndex = sessionStorage.getItem("activeMenuItemIndex");
    if (activeIndex !== null) {
      toggleActiveMenu(parseInt(activeIndex));
    }
  }, []);

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
          width: isOpenMenu ? "200px" : "45px",
          transition: "width 0.3s ease",
          borderRight: "1px solid #d1d1d1",
          // boxShadow: darkMode
          //   ? "5px 0px 5px 5px rgba(255,255,225,0.5)"
          //   : "5px 0px 5px -5px rgba(255,255,255,0.75)",
          bgcolor: darkMode ? "#222222" : "#fff",
          color: darkMode ? "primary.contrastText" : "text.primary",
        }}
      >
        <div className="top-section">
          <IconButton
            onClick={toggleMenu}
            sx={{
              "&:hover": { animation: "pulse 1s infinite" },
              cursor: "pointer",
              color: darkMode ? "#eeeeed" : "#000000  ",
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
                toggleActiveMenu(index); // Toggle active state when clicked
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "#f0f0f0",
                  color: "#000",
                },
                bgcolor: item.isActive ? "#4D8C52" : "transparent", // Green background color when active
                color: item.isActive ? "white" : "inherit", // White text color when active
              }}
            >
              <div>
                {!isOpenMenu ? (
                  <div className="icon">{item.icon}</div>
                ) : (
                  <div className="icon">
                    {item.icon} <span className="menuName"> {item.name}</span>
                  </div>
                )}
              </div>
            </Box>
          </div>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background: "#effaef",
          bgcolor: darkMode ? "#222222" : "#effaef",
        }}
      >
        <main
          style={{
            background: darkMode ? "#494949" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {" "}
          {children}
        </main>
      </Box>
    </Box>
  );
};

export default SideBar;
