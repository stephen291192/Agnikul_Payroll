import { Box } from "@mui/material";
import React from "react";

interface AboutProps {
  darkMode: boolean;
}

const LandingPage: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <Box
      sx={{
        color: darkMode ? "#FFF" : "#000",
      }}
    >
      <div className="">
        <p className="title">Good Morning Raja ! </p>

        <p className="Subtitle">
          Life is 10% what happens to us and 90% how we react to it
        </p>
        <span>- DENNIS P. KIMBRO </span>
      </div>
      <div></div>
    </Box>
  );
};

export default LandingPage;
