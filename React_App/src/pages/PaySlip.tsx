import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toast } from "react-toastify";

interface PayslipProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const PaySlip: React.FC<PayslipProps> = ({ darkMode, onCloseDrawer }) => {
  const [fromDate, setFromDate] = useState(null);

  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState("");
  const [reasonError, setReasonError] = useState("");

  const handleCancel = () => {
    onCloseDrawer();
  };

  const ThemeColor = createTheme({
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
              color: darkMode ? "#d1d1d1" : "#5b5b5b", // Set typing text color to red when darkMode is true
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#EFFFEF !important",
            color: darkMode ? "#5b5b5b" : "#5b5b5b", // Set typing text color to red when darkMode is true
            "&:hover": {
              backgroundColor: "#4D8C52 !important",
              color: "#fff !important",
            },
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#5b5b5b", // Set input label color to red when darkMode is true
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              color: darkMode ? "#d1d1d1" : "#000",
            },
            color: darkMode ? "#d1d1d1" : "#5b5b5b",
          },
        },
      },

      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? "#d1d1d1" : "#5b5b5b", // Set date picker icon color to red when darkMode is true
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            "&$checked": {
              color: "#d1d1d1", // Change the border color when the radio button is checked
            },
          },
        },
      },
    },
  });

  // Validations

  const handleSubmit = () => {
    toast.success("Payslip requested successfully");
    onCloseDrawer();
  };

  const handleFromDateChange = (date: any) => {
    setFromDate(date);
    if (toDate && date && date > toDate) {
      setToDate(date);
    }
    setToDate(null);
    setReason("");
    setReasonError("");
  };

  const handleToDateChange = (date: any) => {
    if (date && fromDate && date < fromDate) {
      return;
    }
    setToDate(date);
    setReason("");
    setReasonError("");
  };

  const ReasonValidation = (e: any) => {
    const data = e.target.value.trim();
    if (data.length < 6) {
      setReasonError("Reason should be 6 letters");
    } else {
      // setReason(e.target.value);
      setReasonError("");
    }
  };

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
            <ThemeProvider theme={ThemeColor}>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <DatePicker
                  label={
                    <Typography>
                      From <code className="CodeStar">*</code>
                    </Typography>
                  }
                  value={fromDate}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  views={["month"]}
                  onChange={handleFromDateChange}
                  renderInput={(params: any) => <TextField {...params} />}
                  variant="outlined"
                />
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <DatePicker
                  label={
                    <Typography>
                      To <code className="CodeStar"> *</code>
                    </Typography>
                  }
                  value={toDate}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  views={["month"]}
                  minDate={fromDate}
                  onChange={handleToDateChange}
                  disabled={!fromDate}
                  renderInput={(params: any) => <TextField {...params} />}
                  variant="outlined"
                />
              </Box>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <TextField
                  label={
                    <Typography>
                      Reason <code className="CodeStar"> *</code>
                    </Typography>
                  }
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
                  onChange={(e) => {
                    ReasonValidation(e), setReason(e.target.value);
                  }}
                />
                <span className="ErrorMsg">{reasonError}</span>
              </Box>
            </ThemeProvider>
            <Box sx={{ display: "flex" }}>
              <Button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                disabled={!fromDate || !toDate || !reason || reasonError}
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
