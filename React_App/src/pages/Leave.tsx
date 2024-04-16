import { Margin } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { createTheme } from "@mui/material/styles";
import { toast } from "react-toastify";

interface LeaveProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Leave: React.FC<LeaveProps> = ({ darkMode, onCloseDrawer }) => {
  const [lessthan4Formshow, setLessthan4Formshow] = useState(false);
  const [morethan4Formshow, setMorethan4Formshow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [fromTime, setFromTime] = React.useState(null);
  const [toTime, setToTime] = React.useState(null);
  const [totalHours, setTotalHours] = React.useState<number | null>(null);
  const [reasonError, setReasonError] = React.useState<string>("");
  const [btnShow, setBtnShow] = useState(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    setBtnShow(true);
  };
  const handleLessthan4Change = () => {
    setLessthan4Formshow(true);
    setMorethan4Formshow(false); // Ensure only one form is shown at a time
  };

  const handleMorethan4Change = () => {
    setMorethan4Formshow(true);
    setLessthan4Formshow(false); // Ensure only one form is shown at a time
  };

  const FromTimeChangeFun = (time) => {
    setFromTime(time);
  };

  const ToTimeChangeFun = (newTime: Date | null) => {
    if (fromTime && newTime && dayjs(newTime).isAfter(fromTime)) {
      setToTime(newTime);
    } else {
      toast.warning("Selected To time must be greater than From time");
    }
  };
  React.useEffect(() => {
    if (fromTime && toTime) {
      const duration = dayjs(toTime).diff(fromTime, "hour", true); // Calculate the duration in hours between fromTime and toTime
      setTotalHours(duration); // Set the total hours
    } else {
      setTotalHours(null); // If either fromTime or toTime is null, set total hours to null
    }
  }, [fromTime, toTime]);
  // Validation
  const ReasonValidation = (e: any) => {
    const data = e.target.value.trim();
    if (data.length < 6) {
      setReasonError("Reason should be 6 letters");
    } else {
      // setReason(e.target.value);
      setReasonError("");
    }
  };

  const today = dayjs();

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      <Box sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}>
        {/* <div className="m-4"> */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            flexGrow={1}
            className="drawerTitle"
            // sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
          >
            Leave Request
          </Box>
          <Button
            className="closeX"
            sx={{ color: darkMode ? "#fff" : "#5B5B5B" }}
            onClick={onCloseDrawer}
          >
            X
          </Button>
        </Box>
        <br />
        <br />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          flexDirection="column"
        >
          <ThemeProvider theme={ThemeColor}>
            <Box>
              <RadioGroup
                row
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <FormControlLabel
                  sx={{ marginRight: { sm: "120px" } }}
                  value={"lessthan4"}
                  control={<Radio />}
                  label="Less than 4 hours"
                  onClick={handleLessthan4Change}
                />
                <FormControlLabel
                  value={"morethan4"}
                  control={<Radio />}
                  label="More than 4 hours"
                  onClick={handleMorethan4Change}
                />
              </RadioGroup>
            </Box>
            <br />
            {/* .................Lessthan 4 Days...*/}
            {lessthan4Formshow && (
              <Box>
                <Box className={"Box"} marginBottom="16px">
                  <DatePicker
                    label={
                      <>
                        Date{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                      },
                    }}
                    minDate={today} // Set minimum date to today's date
                    value={selectedDate}
                    format="DD-MM-YYYY"
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                    adapter={AdapterDayjs} // Use AdapterDayjs for date picker
                    variant="outlined"
                  />
                </Box>
                <Box
                  className={"Box"}
                  sx={{
                    gap: "10px",
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                    },
                  }}
                >
                  <TimePicker
                    label={
                      <>
                        From{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    value={fromTime}
                    disabled={!selectedDate}
                    onChange={FromTimeChangeFun}
                    renderInput={(params) => <TextField {...params} />}
                    adapter={AdapterDayjs}
                  />

                  <TimePicker
                    label={
                      <>
                        To{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    value={toTime}
                    disabled={!selectedDate || !fromTime}
                    onChange={ToTimeChangeFun}
                    renderInput={(params) => <TextField {...params} />}
                    adapter={AdapterDayjs}
                  />
                </Box>
                <br />
                <Box
                  className={"Box"}
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                    },
                  }}
                  textAlign={"center"}
                >
                  <TextField
                    label={
                      <>
                        Total Time Taken{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    variant="outlined"
                    fullWidth
                    disabled={!selectedDate || !fromTime || !toTime}
                    value={
                      totalHours !== null
                        ? `${totalHours.toFixed(2)} hours`
                        : ""
                    }
                  />
                </Box>
                <br />
                <Box
                  className={"Box"}
                  sx={{
                    // margin: "0 auto",
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                    },
                  }}
                >
                  {" "}
                  <TextField
                    label={
                      <React.Fragment>
                        Reason{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </React.Fragment>
                    }
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={ReasonValidation}
                  />
                </Box>
                <span className="ErrorMsg">{reasonError}</span>
              </Box>
            )}
            {/* .................Morethan 4 Days....... */}
            {morethan4Formshow && (
              <>
                <p>I am More than 4 days form </p>
              </>
            )}
          </ThemeProvider>
          {btnShow && (
            <Box sx={{ display: "flex", marginTop: "15px" }}>
              <Button className="cancelBtn" onClick={onCloseDrawer}>
                Cancel
              </Button>

              <Button
                className="saveBtn"
                disabled={
                  !selectedDate ||
                  !fromTime ||
                  !toTime ||
                  !totalHours ||
                  reasonError
                }
              >
                Submit
              </Button>
            </Box>
          )}
        </Box>
        {/* </div> */}
      </Box>
    </LocalizationProvider>
  );
};

export default Leave;
