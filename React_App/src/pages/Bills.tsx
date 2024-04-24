import React, { useState } from "react";
import { CSmartTable } from "@coreui/react-pro";
import { Box, Drawer, TextField, Button, Typography } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  MdOutlineVisibility,
  MdFilterList,
  MdOutlineModeEdit,
} from "react-icons/md";
import { toast } from "react-toastify";

interface BillsProps {
  darkMode: boolean;
}

const Bills: React.FC<BillsProps> = ({ darkMode }) => {
  const usersData = [
    {
      S_no: "1",
      RequestId: "#00001",
      RequestType: "Leave",
      RequestStatus: "Pending",
    },
    {
      S_no: "2",
      RequestId: "#00002",
      RequestType: "Travel",
      RequestStatus: "Approved",
    },
    {
      S_no: "3",
      RequestId: "#00003",
      RequestType: "Payslip",
      RequestStatus: "Pending",
      FromDate: "20.04.2024",
      ToDate: "22.04.2024",
      Reason: "Going to hospital",
    },
    {
      S_no: "4",
      RequestId: "#00004",
      RequestType: "Accommodation",
      RequestStatus: "Rejected",
    },
    {
      S_no: "5",
      RequestId: "#00005",
      RequestType: "No Due",
      RequestStatus: "Pending",
    },
    {
      S_no: "6",
      RequestId: "#00006",
      RequestType: "Leave",
      RequestStatus: "Pending",
    },
    {
      S_no: "7",
      RequestId: "#00001",
      RequestType: "Leave",
      RequestStatus: "Pending",
    },
  ];
  const [details, setDetails] = useState(usersData);
  const [drawerDetails, setDrawerDetails] = useState([]);
  console.log("details", details);
  const ViewFunction = () => {
    toast.warning("Coming Soon...");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentDrawer, setCurrentDrawer] = useState<string>("");

  const toggleDrawer = (open: boolean, drawerType: string) => {
    setIsOpen(open);
    setCurrentDrawer(drawerType);
  };

  const handleCloseDrawer = () => {
    toggleDrawer(false, "");
  };

  const DataFun = (item: any) => {
    setDrawerDetails(item);
  };

  const columns = [
    {
      key: "S_no",
      label: "S.No",
      _style: {
        width: "10%",
        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
        borderTopLeftRadius: "5px",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "RequestId",
      label: "Request Id",
      _style: {
        width: "28%",

        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: true,
      sorter: true,
    },
    {
      key: "RequestType",
      label: "Request Type",
      _style: {
        width: "25%",

        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: true,
      sorter: true,
    },
    {
      key: "RequestStatus",
      label: "Request Status",
      _style: {
        width: "25%",

        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: true,
      sorter: true,
    },
    {
      key: "action",
      label: "Action",
      _style: {
        width: "15%",

        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",

        borderTopRightRadius: "5px",
      },
      filter: false,
      sorter: false,
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222222" : "#fff",
          color: darkMode ? "#d1d1d1" : "#5b5b5b",
          padding: "15px",
          // animation: "slideFromLeft 1s ease forwards",
        }}
      >
        <CSmartTable
          cleaner
          clickableRows
          columns={columns}
          // columnFilter
          columnSorter
          items={details}
          // itemsPerPageSelect
          itemsPerPage={10}
          pagination
          //   selectable
          tableFilter
          tableProps={{
            className: "add-this-class red-border",
            responsive: true,
            striped: true,
            hover: true,
          }}
          tableBodyProps={{
            className: "align-middle tableData",
            // style: { textAlign: "center", backgroundColor: "red" },
          }}
          scopedColumns={{
            action: (item: any) => {
              return (
                <td className="ActionData">
                  <div className="viewicon">
                    <MdOutlineVisibility
                      size={20}
                      onClick={() => {
                        toggleDrawer(true, "visibility");
                        DataFun(item);
                      }}
                    />
                  </div>
                </td>
              );
            },
          }}
        />
      </div>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: darkMode ? "#222222" : "#FFF",
            color: darkMode ? "#fff" : "#000",
            width: "50%",
          },
          "@media (max-width: 600px)": {
            "& .MuiPaper-root": {
              width: "80%",
            },
          },
          "@media (max-width: 1024px)": {
            "& .MuiPaper-root": {
              width: "85%",
            },
          },
        }}
        anchor="right"
        open={isOpen}
        onClose={handleCloseDrawer}
      >
        {/* Content for the drawer */}
        <Box sx={{ padding: "20px" }}>
          <Box>
            <div className="m-4">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  flexGrow={1}
                  className="drawerTitle"
                  sx={{ color: darkMode ? "#d1d1d1" : "#5b5b5b" }}
                >
                  {drawerDetails.RequestType} Request Details
                </Box>
                <Button
                  className="closeX"
                  sx={{
                    color: darkMode ? "#d1d1d1" : "#5b5b5b",
                  }}
                  onClick={handleCloseDrawer}
                >
                  X
                </Button>
              </Box>
            </div>
          </Box>
        </Box>
        <br />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              width={{ xs: "100%", sm: "100%", md: "90%" }}
              marginBottom="16px"
              textAlign={"center"}
            >
              {drawerDetails && drawerDetails.FromDate && (
                <TextField
                  label="From Date"
                  value={drawerDetails?.FromDate}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  variant="outlined"
                />
              )}
            </Box>
            <Box
              width={{ xs: "100%", sm: "100%", md: "90%" }}
              marginBottom="16px"
              textAlign={"center"}
            >
              {drawerDetails && drawerDetails.ToDate && (
                <TextField
                  label="To Date"
                  value={drawerDetails?.ToDate}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                  variant="outlined"
                />
              )}
            </Box>
            <Box
              width={{ xs: "100%", sm: "100%", md: "90%" }}
              marginBottom="16px"
              textAlign={"center"}
            >
              {drawerDetails && drawerDetails.Reason && (
                <TextField
                  label={
                    <Typography>
                      Reason <code className="CodeStar"> *</code>
                    </Typography>
                  }
                  multiline
                  rows={4}
                  variant="outlined"
                  value={drawerDetails.Reason}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                    },
                  }}
                />
              )}
            </Box>
          </Box>
        </LocalizationProvider>
      </Drawer>
    </>
  );
};

export default Bills;
