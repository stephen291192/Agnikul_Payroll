import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputLabel,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer, toast } from "react-toastify";

// import ThemeColor from "../component/ThemeColor";

interface PayslipProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const PaySlip: React.FC<PayslipProps> = ({ darkMode, onCloseDrawer }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [reason, setReason] = React.useState<string>("");

  const handleCancel = () => {
    onCloseDrawer();
  };

  const handleSubmit = () => {
    toast.success("Payslip requested successfully");
    onCloseDrawer();
  };

  const handleFromDateChange = (date: Date | null) => {
    setFromDate(date);
    if (toDate && date && date > toDate) {
      setToDate(date);
    }
  };

  const handleToDateChange = (date: Date | null) => {
    if (date && fromDate && date < fromDate) {
      return;
    }
    setToDate(date);
  };

  const themeColor = createTheme({
    palette: {
      primary: {
        main: darkMode ? "#d1d1d1" : "#2D5831",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "",
              color: darkMode ? "#d1d1d1" : "#000",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "#3f9747",
            },
            "&.Mui-focused fieldset": {
              borderColor: darkMode ? "#d1d1d1" : "#3f9747",
            },
            "& input::placeholder": {
              color: darkMode ? "#d1d1d1" : "#000", // Set placeholder color to red when darkMode is true
            },
            "& input": {
              color: darkMode ? "#d1d1d1" : "#000", // Set typing text color to red when darkMode is true
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#000", // Set input label color to red when darkMode is true
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              color: darkMode ? "#d1d1d1" : "#000",
            },
            color: darkMode ? "#d1d1d1" : "#000",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#000", // Set date picker icon color to red when darkMode is true
          },
        },
      },
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <div className="m-4">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              flexGrow={1}
              className="drawerTitle"
              sx={{ color: darkMode ? "#d1d1d1" : "#5b5b5b" }}
            >
              Payslip Request
            </Box>
            <Button
              className="closeX"
              sx={{
                color: darkMode ? "#d1d1d1" : "#5b5b5b",
              }}
              onClick={onCloseDrawer}
            >
              X
            </Button>
          </Box>
          <br />
          <br />
          <Box display="flex" flexDirection="column" alignItems="center">
            <ThemeProvider theme={themeColor}>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
              >
                <DatePicker
                  required
                  label="From"
                  value={fromDate}
                  views={["month"]}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  onChange={handleFromDateChange}
                  renderInput={(params) => <TextField {...params} />}
                  variant="outlined"
                />
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
              >
                <DatePicker
                  label="To"
                  value={toDate}
                  views={["month"]} // Restrict to monthly selection
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  minDate={fromDate}
                  onChange={handleToDateChange}
                  disabled={!fromDate}
                  renderInput={(params) => <TextField {...params} />}
                  placeholder="Month"
                  variant="outlined"
                />
              </Box>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
              >
                <TextField
                  label="Reason"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={reason}
                  disabled={!fromDate || !toDate}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  minDate={fromDate}
                  onChange={(e) => setReason(e.target.value)}
                />
              </Box>
            </ThemeProvider>
            <Box sx={{ display: "flex" }}>
              <Button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                disabled={!fromDate || !toDate || !reason}
                className="saveBtn"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default PaySlip;
