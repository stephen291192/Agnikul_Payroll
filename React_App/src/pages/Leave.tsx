import { Margin } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface LeaveProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Leave: React.FC<LeaveProps> = ({ darkMode, onCloseDrawer }) => {
  return (
    <Box>
      <div className="m-4">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            flexGrow={1}
            className="drawerTitle"
            sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
          >
            Leave Request
          </Box>
          <Button
            className="closeX"
            sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
            onClick={onCloseDrawer}
          >
            X
          </Button>
        </Box>
        <br />
        <br />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ display: "flex" }}>
            <Button className="cancelBtn" onClick={onCloseDrawer}>
              Cancel
            </Button>

            <Button className="saveBtn">Submit</Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Leave;
