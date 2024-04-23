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

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toast } from "react-toastify";

import { ThemeProvider } from "@mui/material";
interface AccommodationProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Accommodation: React.FC<AccommodationProps> = ({
  darkMode,
  onCloseDrawer,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [fileError, setFileError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);
  const [dateError, setDateError] = useState("");

  // Name Validation
  const handleNameChange = (e: any) => {
    let value = e.target.value;

    // Remove any numbers from the input value
    value = value.replace(/[0-9]/g, "");

    // Ensure the name contains at least three letters
    if (value.replace(/\s/g, "").length < 3) {
      setNameError("Name must be at least 3 letters and not contain numbers ");
    } else {
      setNameError("");
    }

    // Update the state with the sanitized value
    setName(value);
  };
  // Age Validation
  const handleAgeChange = (e: any) => {
    let value = e.target.value;
    // Remove any non-numeric characters from the input
    value = value.replace(/\D/, "");
    // Limit the input to a maximum of 3 digits
    value = value.slice(0, 3);
    setAge(value);
    // Check if the value is numeric and up to 3 digits
    const isValid = /^\d{0,3}$/.test(value);
    // Only set the error message if the input is not valid
    setAgeError(isValid ? "" : "Age must be numeric and up to 3 digits");
  };
  // Mobile Validation
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
  // File Validation
  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    setFileError(file ? "" : "File attachment is required");
  };
  // Select_Option Validation
  const handleOptionChangeAccommodation = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    setCategoryError(value ? "" : "Category is required");
  };
  // From_Date Validation
  const handleFromDateChange = (date: any) => {
    setFromDate(date);
    // Clear any existing error message
    setDateError("");
  };

  // To_Date Validation
  const handleToDateChange = (date: any) => {
    setToDate(date);
    // Check if the "To" date is greater than the "From" date
    if (fromDate && date < fromDate) {
      setDateError("To date must be greater than From date");
    } else {
      // Clear error if dates are valid
      setDateError("");
    }
  };
  // From_Time Validation
  const handleFromTimeChange = (date: any) => {
    setFromTime(date);
    // Clear any existing error message
    setDateError("");
  };
  // To_Time Validation
  const handleToTimeChange = (date: any) => {
    setToTime(date);
    // Clear any existing error message
    setDateError("");
  };

  const handleSubmit = () => {
    toast.success("Accommodation Request Successfully Created");
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
  console.log(
    name,
    age,
    mobile,
    selectedFile,
    selectedOption,
    fromDate,
    toDate,
    fromTime,
    toTime
  );

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
              Accommodation
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
                    <Typography>
                      Name <code className="CodeStar">*</code>
                    </Typography>
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
                    <Typography>
                      Age <code className="CodeStar">*</code>
                    </Typography>
                  }
                  variant="outlined"
                  value={age}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  onChange={handleAgeChange}
                  disabled={!name}
                />
                <span className="ErrorMsg">{ageError}</span>
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                <TextField
                  label={
                    <Typography>
                      Mobile <code className="CodeStar">*</code>
                    </Typography>
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
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign={"center"}
              >
                {/* TextField to display selected file name */}
                <TextField
                  disabled={!name || !age || !mobile}
                  label={
                    <Typography>
                      Attach Travel Documentation{" "}
                      <code className="CodeStar">*</code>
                    </Typography>
                  }
                  className={`inputsimage ${
                    isImageEmpty ? "input-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Images"
                  value={selectedFile ? selectedFile.name : ""}
                  onClick={() => document.getElementById("fileInput")?.click()}
                  sx={{ width: { xs: "100%", sm: "100%", md: "90%" } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AttachFileIcon
                          onClick={() =>
                            document.getElementById("fileInput")?.click()
                          }
                          className="AttachReporticon"
                          style={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Hidden file input */}
                <input
                  type="file"
                  id="fileInput"
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <span className="ErrorMsg">{fileError}</span>
              </Box>

              <Box
                width={{ xs: "100%", sm: "100%", md: "90%" }}
                marginBottom="16px"
                textAlign="center"
              >
                <TextField
                  disabled={!name || !age || !mobile || !selectedFile}
                  select
                  label={
                    <Typography>
                      Reason for Travel <code className="CodeStar">*</code>
                    </Typography>
                  }
                  value={selectedOption}
                  onChange={handleOptionChangeAccommodation}
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
                  <MenuItem value="other">Others</MenuItem>
                </TextField>
                {/* Error message display */}
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
                  disabled={
                    !name || !age || !mobile || !selectedFile || !selectedOption
                  }
                  onChange={handleFromDateChange}
                  value={fromDate}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <Typography>
                      Check In Date <code className="CodeStar">*</code>
                    </Typography>
                  }
                  renderInput={(params) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                  // You can add any necessary props here for DatePicker
                />

                {/* DatePicker for selecting 'To' date */}
                <DatePicker
                  value={toDate}
                  onChange={handleToDateChange}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !selectedFile ||
                    !selectedOption ||
                    !fromDate
                  }
                  label={
                    <Typography>
                      Check Out Date <code className="CodeStar">*</code>
                    </Typography>
                  }
                  renderInput={(params) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                  disabledDays={{ before: fromDate }}
                  // You can add any necessary props here for DatePicker
                />
              </Box>
              {dateError && <span className="ErrorMsg">{dateError}</span>}
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
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !selectedFile ||
                    !selectedOption ||
                    !fromDate ||
                    !toDate
                  }
                  value={fromTime}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <Typography>
                      Check In Time Date <code className="CodeStar">*</code>
                    </Typography>
                  }
                  renderInput={(params: any) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                  onChange={handleFromTimeChange}
                />

                <TimePicker
                  disabled={
                    !name ||
                    !age ||
                    !mobile ||
                    !selectedFile ||
                    !selectedOption ||
                    !fromDate ||
                    !toDate ||
                    !fromTime
                  }
                  value={toTime}
                  sx={{
                    width: { xs: "49.5%", sm: "49.5%", md: "44.5%" },
                  }}
                  label={
                    <Typography>
                      Check Out Time <code className="CodeStar">*</code>
                    </Typography>
                  }
                  renderInput={(params: any) => <TextField {...params} />}
                  adapter={AdapterDayjs}
                  onChange={handleToTimeChange}
                />
              </Box>
            </ThemeProvider>

            <Box display="flex" flexDirection="column" alignItems="center">
              <Box sx={{ display: "flex" }}>
                <Button className="cancelBtn" onClick={onCloseDrawer}>
                  Cancel
                </Button>

                <Button
                  className="saveBtn"
                  disabled={!toTime}
                  onClick={handleSubmit}
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

export default Accommodation;
