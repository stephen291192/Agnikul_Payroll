import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { toast } from "react-toastify";
import { ThemeProvider } from "@mui/material";
interface AccommodationProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Travel: React.FC<AccommodationProps> = ({ darkMode, onCloseDrawer }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [fileError, setFileError] = useState("");
  const [reasonforTravel, setReasonforTravel] = useState("");

  const [modeofTravel, setModeofTravel] = useState("");

  const [error, setError] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = React.useState(null);
  const [toTime, setToTime] = React.useState(null);
  const [categoryError, setCategoryError] = useState("");
  const [dateError, setDateError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Name Validation
  const handleNameChange = (e: any) => {
    let value = e.target.value;
    value = value.replace(/[0-9]/g, "");

    if (value.replace(/\s/g, "").length < 3) {
      setNameError("Name must be at least 3 letters and not contain numbers");
    } else {
      setNameError("");
    }
    setName(value);
  };

  const handleAgeChange = (e: any) => {
    let value = e.target.value;
    value = value.replace(/\D/, "");
    value = value.slice(0, 3);
    setAge(value);
    const isValid = /^\d{0,3}$/.test(value);
    // setAgeError(isValid ? "" : "Age must be numeric and up to 3 digits");
  };

  const handleMobileChange = (e: any) => {
    let value = e.target.value;
    // Remove any non-numeric characters from the input
    value = value.replace(/\D/, "");
    // Limit the input to exactly 10 digits
    value = value.slice(0, 10);
    setMobile(value);
    // Check if the value is exactly 10 digits
    const isValid = /^\d{10}$/.test(value);
    // Only set the error message if the input is not valid
    setMobileError(isValid ? "" : "Mobile number must be exactly 10 digits");
  };

  const today = dayjs();

  const ModeofTravel = (event) => {
    const value = event.target.value;
    setModeofTravel(value);
    // setCategoryError(value ? "" : "Category is required");
  };

  const ReasonForTravel = (event) => {
    const value = event.target.value;
    setReasonforTravel(value);
    // setCategoryError(value ? "" : "Category is required");
  };

  const handleFromDateChange = (date) => {
    setFromDate(date);
    // Clear any existing error message
    setDateError("");
  };

  // Handler function for "To" date change
  const handleToDateChange = (date) => {
    setToDate(date);
    if (fromDate && date < fromDate) {
      setDateError("To date must be greater than From date");
    } else {
      setDateError("");
    }
  };

  const handleFromTimeChange = (date) => {
    setFromTime(date);
    // Clear any existing error message
    setDateError("");
  };
  const handleToTimeChange = (newTime: Date | null) => {
    if (fromTime && newTime && dayjs(newTime).isAfter(fromTime)) {
      setToTime(newTime);
    } else {
      toast.warning("Selected To time must be greater than From time");
    }
  };
  // Save Function
  const Submit = () => {
    toast.success("Travel requested successfully");
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
              color: "#fff",
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <div className="m-4">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              flexGrow={1}
              className="drawerTitle"
              sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
            >
              Travel Request
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
            <ThemeProvider theme={ThemeColor}>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <TextField
                  label={
                    <>
                      Name{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  value={name}
                  onChange={handleNameChange}
                />
                <span className="ErrorMsg">{nameError}</span>
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <TextField
                  label={
                    <>
                      Age{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  variant="outlined"
                  value={age}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  onChange={handleAgeChange}
                  disabled={!name}
                />
                {/* <span className="ErrorMsg">{ageError}</span> */}
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <TextField
                  label={
                    <>
                      Mobile{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  variant="outlined"
                  value={mobile}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  onChange={handleMobileChange}
                  disabled={!name || !age}
                />
                <span className="ErrorMsg">{mobileError}</span>
              </Box>

              <Box
                className="Box"
                marginBottom="16px"
                textAlign="center"
                sx={{
                  gap: "10px",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                  },
                }}
              >
                <DatePicker
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <>
                      From Date{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  disabled={!name || !age || !mobile}
                  onChange={handleFromDateChange}
                  value={fromDate}
                  minDate={today}
                  renderInput={(params: any) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                />

                {/* DatePicker for selecting 'To' date */}
                <DatePicker
                  value={toDate}
                  onChange={handleToDateChange}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  minDate={fromDate}
                  disabled={!name || !age || !mobile || !fromDate}
                  label={
                    <>
                      To Date{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  renderInput={(params) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                />
              </Box>

              {/* {dateError && <span className="ErrorMsg">{dateError}</span>} */}

              <Box
                className="Box"
                marginBottom="16px"
                textAlign="center"
                sx={{
                  gap: "10px",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                  },
                }}
              >
                <TimePicker
                  disabled={!name || !age || !mobile || !fromDate || !toDate}
                  value={fromTime}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <>
                      From Time{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  renderInput={(params: any) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                  onChange={handleFromTimeChange}
                />

                <TimePicker
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <>
                      To Time{" "}
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  value={toTime}
                  renderInput={(params: any) => <TextField {...params} />}
                  onChange={handleToTimeChange}
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !fromDate ||
                    !toDate ||
                    !fromTime
                  }
                  adapter={AdapterDayjs}
                />
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign="center"
              >
                <TextField
                  select
                  label={
                    <>
                      Mode of Travel
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </>
                  }
                  value={modeofTravel}
                  onChange={ModeofTravel}
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !fromDate ||
                    !toDate ||
                    !fromTime ||
                    !toTime
                  }
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                    textAlign: "left",
                  }}
                >
                  {/* Dropdown menu items */}
                  <MenuItem value="vendor">Flight</MenuItem>
                  <MenuItem value="meeting">Train</MenuItem>
                  <MenuItem value="events">Bus</MenuItem>
                  <MenuItem value="other">Others</MenuItem>
                </TextField>
                {/* Error message display */}
                {/* <span className="ErrorMsg">{error}</span> */}
              </Box>
              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign="center"
              >
                <TextField
                  select
                  label={
                    <React.Fragment>
                      Reason For Travel
                      <Typography className="CodeStar" variant="Code">
                        *
                      </Typography>
                    </React.Fragment>
                  }
                  value={reasonforTravel}
                  onChange={ReasonForTravel}
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !fromDate ||
                    !toDate ||
                    !fromTime ||
                    !toTime ||
                    !modeofTravel
                  }
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                    textAlign: "left",
                  }}
                >
                  {/* Dropdown menu items */}
                  <MenuItem value="vendor">Vendor</MenuItem>
                  <MenuItem value="meeting">Meeting</MenuItem>
                  <MenuItem value="events">Events</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
                {/* Error message display */}
                {/* <span className="ErrorMsg">{error}</span> */}
              </Box>
            </ThemeProvider>

            <Box display="flex" flexDirection="column" alignItems="center">
              <Box sx={{ display: "flex" }}>
                <Button className="cancelBtn" onClick={onCloseDrawer}>
                  Cancel
                </Button>

                <Button
                  className="saveBtn"
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !fromDate ||
                    !toDate ||
                    !fromTime ||
                    !toTime ||
                    !modeofTravel ||
                    !reasonforTravel
                  }
                  onClick={Submit}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default Travel;
