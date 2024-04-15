import * as React from "react";
import { Dayjs } from "dayjs";
import { Box, Button, TextField } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextFieldProps } from "@mui/material/TextField";

interface AboutProps {
  darkMode: boolean;
  onCloseDrawer: () => void;
}

const PaySlip: React.FC<AboutProps> = ({ darkMode, onCloseDrawer }) => {
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(null);
  const [toDate, setToDate] = React.useState<Dayjs | null>(null);
  const [reason, setReason] = React.useState<string>("");

  const handleCancel = () => {
    onCloseDrawer();
  };

  const handleSubmit = () => {
    // Handle submit logic
  };

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
              Payment Request
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
            <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
              <DatePicker
                label="From"
                value={fromDate}
                onChange={(newValue) => setFromDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                variant="outlined"
              />
            </Box>

            <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
              <DatePicker
                label="To"
                value={toDate}
                onChange={(newValue) => setToDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                variant="outlined"
              />
            </Box>

            <Box width={{ xs: "100%", sm: "75%" }} marginBottom="16px">
              <TextField
                label="Reason"
                multiline
                rows={4}
                variant="outlined"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </Button>

              <Button className="saveBtn" onClick={handleSubmit}>
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
