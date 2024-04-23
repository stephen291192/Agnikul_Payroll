import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import { createTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import AttachFileIcon from "@mui/icons-material/AttachFile";
interface LeaveProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Leave: React.FC<LeaveProps> = ({ darkMode, onCloseDrawer }) => {
  const [lessthan4Formshow, setLessthan4Formshow] = useState(false);
  const [morethan4Formshow, setMorethan4Formshow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionDrop, setSelectedOptionDrop] = useState("");

  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedDateM, setSelectedDateM] = React.useState(null);
  const [selectedDateM2, setSelectedDateM2] = React.useState(null);

  const [fromTime, setFromTime] = React.useState(null);
  const [fromTimeM, setFromTimeM] = React.useState(null);

  const [toTime, setToTime] = React.useState(null);
  const [toTimeM, setToTimeM] = React.useState(null);

  const [totalHours, setTotalHours] = React.useState<number | null>(null);
  const [totalHoursM, setTotalHoursM] = React.useState<number | null>(null);
  const [totalDays, setTotalDays] = React.useState(null);
  const [reason, setReason] = React.useState<string>("");
  const [reasonM, setReasonM] = React.useState<string>("");

  const [reasonError, setReasonError] = React.useState<string>("");
  const [reasonErrorM, setReasonErrorM] = React.useState<string>("");

  const [btnShow, setBtnShow] = useState(false);
  const [btnShowM, setBtnShowM] = useState(false);

  const [fileError, setFileError] = React.useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeDrop = (event: any) => {
    setSelectedOptionDrop(event.target.value);
    setReasonM("");
    setSelectedFile(null);
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    setFileError(file ? "" : "File attachment is required");
  };

  const handleLessthan4Change = () => {
    setLessthan4Formshow(true);
    setMorethan4Formshow(false);
    setBtnShowM(false);
    setBtnShow(true);
  };

  const handleMorethan4Change = () => {
    setMorethan4Formshow(true);
    setLessthan4Formshow(false);
    setBtnShowM(true);
    setBtnShow(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFromTime(null);
    setToTime(null);
    setTotalHours(null);
    setReason("");
  };
  const FromTimeChangeFun = (time) => {
    setFromTime(time);
    setToTime(null);
    setTotalHours(null);
    setReason("");
  };

  const ToTimeChangeFun = (newTime: Date | null) => {
    if (fromTime && newTime && dayjs(newTime).isAfter(fromTime)) {
      setToTime(newTime);
    } else {
      toast.warning("Selected To time must be greater than From time");
      setTotalHours(null);
    }
  };

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

  // Total Hours
  React.useEffect(() => {
    if (fromTime && toTime) {
      const duration = dayjs(toTime).diff(fromTime, "minute"); // Calculate the duration in minutes between fromTime and toTime
      const hours = Math.floor(duration / 60); // Extract hours from total minutes
      const minutes = duration % 60; // Extract remaining minutes
      const totalHours = hours + minutes / 60; // Combine hours and minutes into total hours
      setTotalHours(totalHours); // Set the total hours
    } else {
      setTotalHours(null); // If either fromTime or toTime is null, set total hours to null
    }
  }, [fromTime, toTime]);

  // Save Function
  const handleSubmit = () => {
    toast.success("Leave requested successfully");
    onCloseDrawer();
  };

  // ...........More Than option ...........

  const handleDateChangeM = (date) => {
    setSelectedDateM(date);
    setSelectedDateM2(null);
    setFromTimeM(null);
    setToTimeM(null);
    setTotalHoursM(null);
    setReasonM("");
  };

  const handleDateChangeM2 = (date: Date | null) => {
    if (date && selectedDateM && date < selectedDateM) {
      return;
    }
    setSelectedDateM2(date);
    setFromTimeM(null);
    setToTimeM(null);
    setTotalHoursM(null);
    setReasonM("");
  };

  const FromTimeChangeFunM = (time) => {
    setFromTimeM(time);
    setToTimeM(null);
    setTotalHoursM(null);
    setReasonM("");
  };

  const ToTimeChangeFunM = (newTime: Date | null) => {
    if (fromTimeM && newTime && dayjs(newTime).isAfter(fromTimeM)) {
      setToTimeM(newTime);
    } else {
      toast.warning("Selected To time must be greater than From time");
      setTotalHoursM(null);
    }
  };

  React.useEffect(() => {
    if (selectedDateM && selectedDateM2) {
      let totalDays = 0;

      for (
        let date = selectedDateM.clone();
        date.isBefore(selectedDateM2) || date.isSame(selectedDateM2, "day");
        date = date.add(1, "day")
      ) {
        if (date.day() !== 0) {
          totalDays++;
        }
      }

      // Set total days in state
      setTotalDays(totalDays);
    } else {
      // Reset total days if any required input is missing
      setTotalDays(null);
    }
  }, [selectedDateM, selectedDateM2]);

  // React.useEffect(() => {
  //   if (selectedDateM && selectedDateM2 && fromTimeM && toTimeM) {
  //     // Calculate total duration in minutes between selected dates
  //     const durationInMinutes = dayjs(selectedDateM2).diff(
  //       selectedDateM,
  //       "minute"
  //     );

  //     // Calculate total duration in hours between selected times
  //     const durationInHours = dayjs(toTimeM).diff(fromTimeM, "hour", true);

  //     // Calculate total number of full days based on 8-hour workdays
  //     const totalDays = Math.floor(durationInMinutes / (8 * 60));

  //     // Calculate remaining hours and minutes after full days
  //     const remainingMinutes = durationInMinutes % (8 * 60);
  //     const remainingHours = Math.floor(remainingMinutes / 60);
  //     const remainingMinutesLeft = remainingMinutes % 60;

  //     // Calculate total hours including remaining hours from partial days
  //     const totalHours =
  //       totalDays * 8 +
  //       durationInHours +
  //       remainingHours +
  //       remainingMinutesLeft / 60;

  //     // Set total days and total hours in state
  //     setTotalDays(totalDays);
  //     setTotalHoursM(totalHours);
  //   } else {
  //     // Reset total days and total hours if any required input is missing
  //     setTotalDays(null);
  //     setTotalHoursM(null);
  //   }
  // }, [selectedDateM, selectedDateM2, fromTimeM, toTimeM]);

  const ReasonValidationM = (e: any) => {
    const data = e.target.value.trim();
    if (data.length < 6) {
      setReasonErrorM("Reason should be 6 letters");
    } else {
      setReasonErrorM("");
    }
  };

  // Save Function
  const handleSubmitM = () => {
    toast.success("Leave requested successfully");
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
                        From Time{" "}
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
                        To Time{" "}
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
                        ? `${Math.floor(totalHours)} hours ${Math.round(
                            (totalHours % 1) * 60
                          )} minutes`
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
                    value={reason}
                    onChange={(e) => {
                      ReasonValidation(e), setReason(e.target.value);
                    }}
                    disabled={
                      !selectedDate || !fromTime || !toTime || !totalHours
                    }
                  />
                </Box>
                <span className="ErrorMsg">{reasonError}</span>
              </Box>
            )}

            {btnShow && (
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Button className="cancelBtn" onClick={onCloseDrawer}>
                  Cancel
                </Button>

                <Button
                  className="saveBtn"
                  disabled={
                    // !selectedDate ||
                    // !fromTime ||
                    // !toTime ||
                    // !totalHours ||
                    !reason || reasonError
                  }
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            )}

            {/* .................Morethan 4 Days....... */}
            {morethan4Formshow && (
              <Box>
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
                  <DatePicker
                    label={
                      <>
                        From Date{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    sx={{
                      gap: "10px",
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                      },
                    }}
                    minDate={today} // Set minimum date to today's date
                    value={selectedDateM}
                    format="DD-MM-YYYY"
                    onChange={handleDateChangeM}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                    adapter={AdapterDayjs} // Use AdapterDayjs for date picker
                    variant="outlined"
                  />

                  <DatePicker
                    label={
                      <>
                        To Date{" "}
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
                    value={selectedDateM2}
                    format="DD-MM-YYYY"
                    minDate={selectedDateM}
                    disabled={!selectedDateM}
                    onChange={handleDateChangeM2}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                    adapter={AdapterDayjs} // Use AdapterDayjs for date picker
                    variant="outlined"
                  />
                </Box>
                <br />
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
                        From Time{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    value={fromTimeM}
                    disabled={!selectedDateM || !selectedDateM2}
                    onChange={FromTimeChangeFunM}
                    renderInput={(params) => <TextField {...params} />}
                    adapter={AdapterDayjs}
                  />

                  <TimePicker
                    label={
                      <>
                        To Time{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    value={toTimeM}
                    disabled={!selectedDateM || !selectedDateM2 || !fromTimeM}
                    onChange={ToTimeChangeFunM}
                    renderInput={(params: any) => <TextField {...params} />}
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
                    select
                    label={
                      <>
                        Leave Type
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    value={selectedOptionDrop}
                    onChange={handleOptionChangeDrop}
                    variant="outlined"
                    disabled={
                      !selectedDateM ||
                      !selectedDateM2 ||
                      !fromTimeM ||
                      !toTimeM
                    }
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "100%" },
                      textAlign: "left",
                    }}
                  >
                    {/* Dropdown menu items */}
                    <MenuItem value="CasualLeave">Casual Leave</MenuItem>
                    <MenuItem value="SickLeave">Sick Leave</MenuItem>
                    <MenuItem value="MaternityLeave">Maternity Leave</MenuItem>
                    <MenuItem value="PaternityLeave">Paternity Leave</MenuItem>
                  </TextField>
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
                        Total No. of Days{" "}
                        <Typography variant="code" className="CodeStar">
                          *
                        </Typography>
                      </>
                    }
                    variant="outlined"
                    fullWidth
                    disabled={
                      !selectedDateM ||
                      !selectedDateM2 ||
                      !fromTimeM ||
                      !toTimeM
                    }
                    value={totalDays !== null ? `${totalDays} days` : ""}

                    // value={
                    //   totalHoursM !== null
                    //     ? `${Math.floor(totalHoursM / 8)} days ${Math.floor(
                    //         totalHoursM % 8
                    //       )} hours ${Math.round(
                    //         (totalHoursM % 1) * 60
                    //       )} minutes`
                    //     : ""
                    // }
                  />
                </Box>
                <br />
                {selectedOptionDrop === "CasualLeave" && (
                  <>
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
                        value={reasonM}
                        onChange={(e) => {
                          ReasonValidationM(e), setReasonM(e.target.value);
                        }}
                        disabled={
                          !selectedDateM ||
                          !selectedDateM2 ||
                          !fromTimeM ||
                          !toTimeM ||
                          totalHoursM
                        }
                      />
                    </Box>
                    <span className="ErrorMsg">{reasonErrorM}</span>
                  </>
                )}
                {selectedOptionDrop === "SickLeave" && (
                  <>
                    <Box
                      // className={"Box"}
                      sx={{
                        margin: "0 auto",
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                        },
                      }}
                    >
                      {/* TextField to display selected file name */}
                      <TextField
                        label={
                          <React.Fragment>
                            Attach Certificate
                            <Typography className="CodeStar" variant="Code">
                              *
                            </Typography>
                          </React.Fragment>
                        }
                        className={`inputsimage ${
                          isImageEmpty ? "input-invalid" : ""
                        }`}
                        type="text"
                        placeholder="Images"
                        value={selectedFile ? selectedFile.name : ""}
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                        sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <AttachFileIcon
                                onClick={() =>
                                  document.getElementById("fileInput").click()
                                }
                                className="AttachReporticon"
                                style={{ cursor: "pointer" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

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
                  </>
                )}

                {/* {selectedOptionDrop === "MaternityLeave" && (
                  <>
                    <p>Testing</p>
                  </>
                )} */}
              </Box>
            )}
          </ThemeProvider>

          {btnShowM && (
            <Box sx={{ display: "flex", marginTop: "15px" }}>
              <Button className="cancelBtn" onClick={onCloseDrawer}>
                Cancel
              </Button>

              <Button
                className="saveBtn"
                disabled={
                  !selectedDateM ||
                  !selectedDateM2 ||
                  !fromTimeM ||
                  !toTimeM ||
                  totalHoursM ||
                  selectedOptionDrop === "CasualLeave"
                    ? !reasonM || reasonErrorM
                    : "" || selectedOptionDrop === "SickLeave"
                    ? !selectedFile || fileError
                    : ""
                }
                onClick={handleSubmitM}
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
