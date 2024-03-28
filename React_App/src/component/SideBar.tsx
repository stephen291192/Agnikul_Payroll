import React, { useState } from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoAgnikul.png";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUserListLight } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";

import LogoSmall from "../assets/LogoSmall.png";
import { AiOutlineBars } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import Header from "./Header";

interface MenuItem {
  path: string;
  name: string;
  icon: JSX.Element;
  isOpen?: boolean;
  submenu?: MenuItem[];
}

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("sidebar--open");
      sidebar.classList.toggle("sidebar--closed");
    }
    setIsOpen(!isOpen);
  };

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
      isOpen: false,
      submenu: [
        {
          path: "/generate/template",
          name: "Template",
          icon: <AiOutlineFileAdd />,
        },
        {
          path: "/generate/report",
          name: "Report",
          icon: <PiNotepad />,
        },
      ],
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
      const isOpen = updatedMenuItems[index].isOpen;

      // Toggle the submenu visibility for the clicked parent menu
      updatedMenuItems[index].isOpen = !isOpen;

      // Close all submenus if the "Dashboard" menu item is clicked again
      if (index === 0 && !isOpen) {
        updatedMenuItems.forEach((item, i) => {
          if (i !== index && item.isOpen) {
            item.isOpen = false;
          }
        });
      }

      return updatedMenuItems;
    });
  };

  return (
    <div
      className={`flex shadow-sm ${
        darkMode ? "bg-gray-200 text-gray-500" : ""
      }`}
    >
      <div
        style={{ width: isOpen ? "230px" : "50px" }}
        className={`h-screen text-gray-700 sidebar ${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        }
      `}
      >
        <div className="top-section ">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src={Logo} alt="Logo" width="250px" />
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <div
              style={{ display: isOpen ? "none" : "block" }}
              className="smallLogo"
            >
              <img src={LogoSmall} alt="Small Logo" />
            </div>
            <AiOutlineBars
              size={22}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className={`block px-4 py-2 hover:bg-green-300 hover:bg-opacity-25 ${
                darkMode ? "hover:text-gray-200" : "hover:text-gray-700"
              } flex items-center justify-between`}
              onClick={() => item.submenu && toggleSubMenu(index)}
            >
              <div className="flex items-center space-x-4">
                <div className="icon">{item.icon}</div>
                <div
                  className={`link-text ${
                    darkMode
                      ? "text-white hover:text-gray-900"
                      : "text-gray-900"
                  }`}
                >
                  {item.name}
                </div>
              </div>
              {/* Render submenu toggle icon */}
              {item.submenu && (
                <div className="flex items-center">
                  <HiChevronDown
                    size={20}
                    className={`transform ${
                      item.isOpen ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </div>
              )}
            </NavLink>
            {/* Render submenu if it exists and is open */}
            {item.submenu && item.isOpen && (
              <div className="ml-8">
                {item.submenu.map((subitem, subindex) => (
                  <NavLink
                    key={subindex}
                    to={subitem.path}
                    className={`block px-4 py-2 hover:bg-green-300 hover:bg-opacity-25 ${
                      darkMode ? "hover:text-gray-200" : "hover:text-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="icon">{subitem.icon}</div>
                      <div
                        className={`link-text ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {subitem.name}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-grow">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default SideBar;
