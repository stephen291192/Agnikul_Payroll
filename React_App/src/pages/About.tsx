import { Box } from "@mui/material";
import React from "react";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <Box
    // sx={{
    //   color: darkMode ? "#FFF" : "#000",
    // }}
    >
      <div className="m-4">
        <h2>Coming Soon...</h2>
      </div>
    </Box>
  );
};

export default About;
