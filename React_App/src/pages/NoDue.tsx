import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
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

  const SelectOptionFun = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(event.target.value);
    console.log("Updated value:", event.target.value, officialDocumentsValue);
  };

  return (
    <Box>
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginRight: "16px" }}>
            Have you submitted Official Documents?
          </Box>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="officialDocuments"
              name="officialDocuments"
              value={officialDocumentsValue}
              onChange={(event) =>
                SelectOptionFun(event, setOfficialDocumentsValue)
              }
              sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                sx={{
                  color: "#4d8c52",
                  "& .MuiTypography-root": { fontSize: "14px" },
                  "&.Mui-checked": { color: "#4D8C52" },
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                sx={{
                  color: "#4d8c52",
                  "& .MuiTypography-root": { fontSize: "14px" },
                  "&.Mui-checked": { color: "red" },
                }}
              />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="N/A"
                sx={{
                  color: "#4d8c52",
                  "& .MuiTypography-root": { fontSize: "14px" },
                  "&.Mui-checked": { color: "#5d5d5d" },
                }}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginRight: "16px" }}>Have you submitted ID Card?</Box>
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
                label={<span style={{ fontSize: "14px" }}>Yes</span>}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "red" },
                    }}
                  />
                }
                label={<span style={{ fontSize: "14px" }}>No</span>}
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#5d5d5d" },
                    }}
                  />
                }
                label={<span style={{ fontSize: "14px" }}>N/A</span>}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginRight: "16px" }}>Have you submitted Laptop?</Box>
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
                label={<span style={{ fontSize: "14px" }}>Yes</span>}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "red" },
                    }}
                  />
                }
                label={<span style={{ fontSize: "14px" }}>No</span>}
              />
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#4d8c52",
                      "&.Mui-checked": { color: "#5d5d5d" },
                    }}
                  />
                }
                label={<span style={{ fontSize: "14px" }}>N/A</span>}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ display: "flex" }}>
            <Button className="cancelBtn" onClick={onCloseDrawer}>
              Cancel
            </Button>

            <Button className="saveBtn">Submit</Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default NoDue;
