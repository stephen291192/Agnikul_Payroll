import { Margin } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { toast } from "react-toastify";

interface ReimbursementProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Reimbursement: React.FC<ReimbursementProps> = ({
  darkMode,
  onCloseDrawer,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageEmpty, setIsImageEmpty] = useState(false);
  const [fileError, setFileError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    setFileError(file ? "" : "File attachment is required");
  };

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    setCategoryError(value ? "" : "Category is required");
  };
  const handleSubmit = () => {
    toast.success("Reimbursement Request Successfully Created");
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
  return (
    <Box>
      <div className="m-4">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            flexGrow={1}
            className="drawerTitle"
            sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
          >
            Reimbursement for HR Purpose
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
              {/* TextField to display selected file name */}
              <TextField
                label={
                  <Typography>
                    Attach Bill <code className="CodeStar">*</code>
                  </Typography>
                }
                className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
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
                disabled={!selectedFile}
                select
                label={
                  <Typography>
                    Reason for Reimbursement <code className="CodeStar">*</code>
                  </Typography>
                }
                value={selectedOption}
                onChange={handleOptionChange}
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "90%" },
                  textAlign: "left",
                }}
              >
                {/* Dropdown menu items */}
                <MenuItem value="vendor">Travel</MenuItem>
                <MenuItem value="meeting">Accommodation</MenuItem>
                <MenuItem value="events">Food</MenuItem>
              </TextField>
              {/* Error message display */}
              <span className="ErrorMsg">{error}</span>
            </Box>
          </ThemeProvider>

          <Box display="flex" flexDirection="column" alignItems="center">
            <Box sx={{ display: "flex" }}>
              <Button className="cancelBtn" onClick={onCloseDrawer}>
                Cancel
              </Button>

              <Button
                className="saveBtn"
                disabled={!selectedOption}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Reimbursement;
