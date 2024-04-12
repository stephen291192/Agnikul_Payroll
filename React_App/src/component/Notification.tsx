import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { VscBellDot } from "react-icons/vsc";

interface NotificationProps {
  darkMode: boolean;
}

const Notification: React.FC<NotificationProps> = ({ darkMode }) => {
  const [showNotification, setShowNotification] = useState(false);
  alert("aaa");
  const handleNotificationClick = () => {
    // Toggle the notification state
    alert("sda");
    setShowNotification(!showNotification);
  };

  return (
    <>
      <IconButton
        sx={{ color: darkMode ? "#eeeeed" : "" }}
        onClick={handleNotificationClick}
      >
        <VscBellDot size={20} />
      </IconButton>
      {showNotification && (
        <div style={{ background: "red", color: "white", padding: "10px" }}>
          You have a new notification!
        </div>
      )}
    </>
  );
};

export default Notification;
