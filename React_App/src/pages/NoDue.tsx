import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Grid,
} from "@mui/material";

interface NoDueProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const NoDue: React.FC<NoDueProps> = ({ darkMode, onCloseDrawer }) => {
  const [officialDocumentsValue, setOfficialDocumentsValue] =
    useState<string>("");
  const [idCardValue, setIdCardValue] = useState<string>("");
  const [laptopValue, setLaptopValue] = useState<string>("");
  const [notebookValue, setNotebookValue] = useState<string>("");
  const [mobileValue, setMobileValue] = useState<string>("");
  const [stationeryValue, setStationeryValue] = useState<string>("");



  const SelectOptionFun = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(event.target.value);
    console.log("Updated value:", event.target.value, officialDocumentsValue);
  };

  return (
    <Box className='nodue_form'>
      <div className="m-4">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            flexGrow={1}
            className="drawerTitle"
            sx={{ color: darkMode ? "#fff" : "#5b5b5b" }}
          >
            No Due Request
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

        <Grid container alignItems="center" spacing={2}  width={{ xs: "140%", sm: "120%", md: "50%" }}
                marginBottom="16px"textAlign={"right"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6} display="flex" flexBasis="flex-end" >
            <Typography>Yes</Typography>
            <Typography>No</Typography>

            <Typography>N/A</Typography>

          </Grid>
         
        </Grid>
        <Grid container alignItems="center" spacing={3} paddingLeft="5vw" width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted Official Documents?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="officialDocuments"
                name="officialDocuments"
                value={officialDocumentsValue}
                onChange={(event) =>
                  SelectOptionFun(event, setOfficialDocumentsValue)
                }
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label=""
                  sx={{
                    color: "#4d8c52",
                    // "& .MuiTypography-root": { fontSize: "14px" },
                    "& .Mui-checked": { color: "#4D8C52" },
                  }}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label=""
                  sx={{
                    color: "#4d8c52",
                    // "& .MuiTypography-root": { fontSize: "14px" },
                    "&.Mui-checked": { color: "#4D8C52" },
                  }}
                />
                <FormControlLabel
                  value="pending"
                  control={<Radio />}
                  label=""
                  sx={{
                    color: "#4d8c52",
                    // "& .MuiTypography-root": { fontSize: "14px" },
                    "&.Mui-checked": { color: "#4D8C52" },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container alignItems="center" spacing={3} paddingLeft="5vw"  width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted ID Cards?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={idCardValue}
              onChange={(event) => SelectOptionFun(event, setIdCardValue)}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        </Grid>

        <Grid container alignItems="center" spacing={3} paddingLeft="5vw" width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted Laptop?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={laptopValue}
              onChange={(event) => SelectOptionFun(event, setLaptopValue)}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>

        <Grid container alignItems="center" spacing={3} paddingLeft="5vw"  width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted Notebook?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={notebookValue}
              onChange={(event) => SelectOptionFun(event, setNotebookValue)}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} paddingLeft="5vw" width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted Mobile?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={mobileValue}
              onChange={(event) => SelectOptionFun(event, setMobileValue)}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} paddingLeft="5vw"  width={{ xs: "140%", sm: "120%", md: "110%" }}
                marginBottom="16px"textAlign={"left"}>
          <Grid item xs={4} sm={6} md={6} xl={6} lg={6}>
            <Typography>Have you submitted Stationery Items?</Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={stationeryValue}
              onChange={(event) => SelectOptionFun(event, setStationeryValue)}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#4D8C52" },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="column"  alignItems="center">
          <Box sx={{ display: "flex" }}>
            <Button className="cancelBtn" onClick={onCloseDrawer}>
              Cancel
            </Button>

            <Button disabled={!officialDocumentsValue||!idCardValue||!notebookValue||!laptopValue||!mobileValue||!stationeryValue} className="saveBtn">Submit</Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default NoDue;
