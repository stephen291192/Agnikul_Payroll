import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { IoMoonOutline } from "react-icons/io5";
import avatarPic from "../assets/avatar.png";
import Logo from "../assets/LogoAgnikul.png";
import LogoSmall from "../assets/LogoSmall.png";
interface HeaderProps {
  darkMode: boolean;
  isOpenMenu: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  isOpenMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest(".profile-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white"}>
      <div className="container mx-auto py-4 flex justify-between items-center border-b border-gray-300">
        {/* <img className="pl-3" src={Logo} alt="Logo" width="180px" /> */}

        <div
          style={{ display: isOpenMenu ? "block" : "none" }}
          className="logo pl-3"
        >
          <img src={Logo} alt="Logo" width="200px" />
        </div>
        <div
          style={{ display: isOpenMenu ? "none" : "block" }}
          className="smallLogo pl-3"
        >
          <img src={LogoSmall} alt="Small Logo" />
        </div>
        {/* </div> */}
        <div className="flex justify-end space-x-6 items-center">
          <div className="flex items-center space-x-6 cursor-pointer">
            <IoIosSearch
              size={20}
              className={darkMode ? "text-white" : "text-gray"}
            />
            <IoMoonOutline
              size={20}
              className={darkMode ? "text-white" : "text-gray"}
              onClick={toggleDarkMode} // Add toggleDarkMode onClick
            />
            <VscBellDot
              size={20}
              className={darkMode ? "text-white" : "text-gray"}
            />
          </div>
          <div className="relative inline-block pr-6">
            <img
              src={avatarPic}
              alt="Avatar"
              className={`h-10 w-10 rounded-full cursor-pointer ${
                darkMode ? "bg-gray-200" : "bg-white"
              }`}
              onClick={toggleDropdown}
            />
            {isOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="py-1">
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      darkMode
                        ? "text-gray-200 hover:text-gray-700"
                        : "text-gray-700"
                    } hover:bg-gray-100`}
                  >
                    Profile
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      darkMode
                        ? "text-gray-200 hover:text-gray-700"
                        : "text-gray-700"
                    } hover:bg-gray-100`}
                  >
                    Switch Desk
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      darkMode
                        ? "text-gray-200 hover:text-gray-700"
                        : "text-gray-700"
                    } hover:bg-gray-100`}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
