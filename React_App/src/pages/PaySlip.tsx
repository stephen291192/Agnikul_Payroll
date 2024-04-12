import { Margin } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";

interface AboutProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const PaySlip: React.FC<AboutProps> = ({ darkMode, onCloseDrawer }) => {
  return (
    <Box>
      <div className="m-4">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            flexGrow={1}
            className="drawerTitle"
            sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
          >
            Payment Request
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
          <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
            <TextField
              id=""
              label="From"
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "14px" }, // Change the color to your desired color
              }}
              fullWidth
            />
          </Box>
          <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
            <TextField
              id=""
              label="To"
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "14px" }, // Change the color to your desired color
              }}
              fullWidth
            />
          </Box>
          <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
            <TextField
              // id="outlined-multiline-flexible"
              label="Reason"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { fontSize: "14px" }, // Change the color to your desired color
              }}
            />{" "}
          </Box>

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

export default PaySlip;
