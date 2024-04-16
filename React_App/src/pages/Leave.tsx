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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { createTheme } from "@mui/material/styles";
import { margin } from "@mui/system";

interface LeaveProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Leave: React.FC<LeaveProps> = ({ darkMode, onCloseDrawer }) => {
  const [lessthan4Formshow, setLessthan4Formshow] = useState(false);
  const [morethan4Formshow, setMorethan4Formshow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleLessthan4Change = () => {
    setLessthan4Formshow(true);
    setMorethan4Formshow(false); // Ensure only one form is shown at a time
  };

  const handleMorethan4Change = () => {
    setMorethan4Formshow(true);
    setLessthan4Formshow(false); // Ensure only one form is shown at a time
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
            color: darkMode ? "#d1d1d1" : "#000", // Set date picker icon color to red when darkMode is true
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
            // backgroundColor: "red",
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
                  label="Less than 4 days"
                  onClick={handleLessthan4Change}
                />
                <FormControlLabel
                  value={"morethan4"}
                  control={<Radio />}
                  label="More than 4 days"
                  onClick={handleMorethan4Change}
                />
              </RadioGroup>
            </Box>
            <br />
            {/* .................Lessthan 4 Days...*/}
            {lessthan4Formshow && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  },
                }}
              >
                <DatePicker
                  label={
                    <React.Fragment>
                      From{" "}
                      <Typography variant="code" className="CodeStar">
                        *
                      </Typography>
                    </React.Fragment>
                  }
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                  variant="outlined"
                />
              </Box>
            )}
            {/* .................Morethan 4 Days....... */}
            {morethan4Formshow && (
              <>
                <p>I am More than 4 days form </p>
              </>
            )}
          </ThemeProvider>

          <Box sx={{ display: "flex", marginTop: "15px" }}>
            <Button className="cancelBtn" onClick={onCloseDrawer}>
              Cancel
            </Button>

            <Button className="saveBtn">Submit</Button>
          </Box>
        </Box>
        {/* </div> */}
      </Box>
    </LocalizationProvider>
  );
};

export default Leave;
