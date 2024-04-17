import { Box, Button, IconButton, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import AttachFileIcon from '@mui/icons-material/AttachFile';

import {
  
  ThemeProvider,
  
} from "@mui/material";
interface AccommodationProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const Accommodation: React.FC<AccommodationProps> = ({
  darkMode,
  onCloseDrawer,
}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [fileError, setFileError] = useState('');

  const handleNameChange = (e:any) => {
    setName(e.target.value);
    // Add name validation logic if needed
  };

  const handleAgeChange = (e:any) => {
    setAge(e.target.value);
    // Add age validation logic if needed
  };

  const handleMobileChange = (e:any) => {
    setMobile(e.target.value);
    // Add mobile validation logic if needed
  };


    /*    Const,handler for File Selection*/ 

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsImageEmpty(false);
    }
  };

  const handleLabelClick = () => {
    // This function can be used to trigger the file input click
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
// -----------------------------------------------------------

  /*    Const,handler for Travel Selection*/ 
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
    setError(''); // Reset or adjust error based on the new selection
  };
  // ---------------------------------------------------
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
        width={{ xs: '100%', sm: '100%', md: '90%' }}
        marginBottom="16px" textAlign={"center"}
      >
        <TextField
          label={
            <React.Fragment>
              Name{' '}
              <Typography className="CodeStar" >*</Typography>
            </React.Fragment>
          }
          variant="outlined"
          value={name}
          sx={{
            width: { xs: '100%', sm: '100%', md: '90%' },
          }}
          onChange={handleNameChange}
        />
        <span className="ErrorMsg">{nameError}</span>
      </Box>

      <Box
        width={{ xs: '100%', sm: '100%', md: '90%' }}
        marginBottom="16px" textAlign={"center"}
      >
        <TextField
          label={
            <React.Fragment>
              Age{' '}
              <Typography className="CodeStar">*</Typography>
            </React.Fragment>
          }
          variant="outlined"
          value={age}
          sx={{
            width: { xs: '100%', sm: '100%', md: '90%' },
          }}
          onChange={handleAgeChange}
        />
        <span className="ErrorMsg">{ageError}</span>
      </Box>

      <Box
        width={{ xs: '100%', sm: '100%', md: '90%' }}
        marginBottom="16px" textAlign={"center"}
      >
        <TextField
          label={
            <React.Fragment>
              Mobile{' '}
              <Typography className="CodeStar">*</Typography>
            </React.Fragment>
          }
          variant="outlined"
          value={mobile}
          sx={{
            width: { xs: '100%', sm: '100%', md: '90%' },
          }}
          onChange={handleMobileChange}
        />
        <span className="ErrorMsg">{mobileError}</span>
      </Box>
      <Box
        width={{ xs: '100%', sm: '100%', md: '90%' }}
        marginBottom="16px" textAlign={"center"}
      >
     
          {/* TextField to display selected file name */}
          <TextField
           label={
            <React.Fragment>
              Attach Travel Documentation
              <Typography className="CodeStar">*</Typography>
            </React.Fragment>
          }
            className={`inputsimage ${isImageEmpty ? "input-invalid" : ""}`}
            type="text"
            placeholder="Images"
            value={selectedFile ? selectedFile.name : ""}
            
            onClick={handleLabelClick}
            sx={{ width: { xs: '100%', sm: '100%', md: '90%' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachFileIcon
                    onClick={handleLabelClick}
                    className="AttachReporticon"
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )
            }}
          />
         
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            name="image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
               <span className="FileMsg">{fileError}</span>

    </Box>

    <Box
      width={{ xs: '100%', sm: '100%', md: '90%' }}
      marginBottom="16px"
      textAlign="center"
    >
      <TextField
        select
        label={
          <React.Fragment>
            Category
            <Typography className="CodeStar">*</Typography>
          </React.Fragment>
        }
        value={selectedOption}
        onChange={handleOptionChange}
        variant="outlined"
        sx={{
          width: { xs: '100%', sm: '100%', md: '90%' }
        }}
      >
        {/* Dropdown menu items */}
        <MenuItem value="vendor">Vendor</MenuItem>
        <MenuItem value="meeting">Meeting</MenuItem>
        <MenuItem value="events">Events</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>
      {/* Error message display */}
      <span className="ErrorMsg">{error}</span>
    </Box>


              </ThemeProvider>
        <Box display="flex" flexDirection="column" alignItems="center">
          <p> Testing </p>

          <Box sx={{ display: "flex" }}>
            <Button className="cancelBtn" onClick={onCloseDrawer}>
              Cancel
            </Button>

            <Button className="saveBtn">Submit</Button>
          </Box>
        </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Accommodation;
