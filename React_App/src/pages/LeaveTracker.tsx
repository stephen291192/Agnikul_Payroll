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
import { border, borderRadius, fontSize } from "@mui/system";

interface LeaveTrackerProps {
  darkMode: boolean;
}

const LeaveTracker: React.FC<LeaveTrackerProps> = ({ darkMode }) => {
  const usersData = [
    {
      S_no: "1",
      Date: "01-04-2024",
      RequestId: "#00001",
      LeaveType: "Casual Leave",
      NumberofDays: "2",
      RequestStatus: "Approved",
    },
    {
      S_no: "2",
      Date: "3-04-2024",
      RequestId: "#00002",
      LeaveType: "Sick Leave",
      NumberofDays: "4",
      RequestStatus: "Pending",
    },
    {
      S_no: "3",
      Date: "14-04-2024",
      RequestId: "#00003",
      LeaveType: "Casual Leave",
      NumberofDays: "1",
      RequestStatus: "Rejected",
    },
    {
      S_no: "4",
      Date: "25-04-2024",
      RequestId: "#00004",
      LeaveType: "Sick Leave",
      NumberofDays: "2",
      RequestStatus: "Approved",
    },
    {
      S_no: "5",
      Date: "01-04-2024",
      RequestId: "#00001",
      LeaveType: "Casual Leave",
      NumberofDays: "2",
      RequestStatus: "Pending",
    },
    {
      S_no: "6",
      Date: "01-04-2024",
      RequestId: "#00001",
      LeaveType: "Casual Leave",
      NumberofDays: "2",
      RequestStatus: "Pending",
    },
    {
      S_no: "7",
      Date: "01-04-2024",
      RequestId: "#00001",
      LeaveType: "Casual Leave",
      NumberofDays: "2",
      RequestStatus: "Pending",
    },
  ];
  const [details, setDetails] = useState(usersData);
  const [drawerDetails, setDrawerDetails] = useState([]);
  console.log("details", details);
  const ViewFunction = () => {
    toast.warning("Coming Soon...");
  };

  const DataFun = (item: any) => {
    setDrawerDetails(item);
  };

  const columns = [
    {
      key: "S_no",
      label: "S.No",
      _style: {
        width: "7%",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
        fontSize: "14px",
        borderTopLeftRadius: "5px",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "Date",
      label: "Date",
      _style: {
        width: "%",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
        fontSize: "14px",
        textAlign: "center",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "RequestId",
      label: "Request ID",
      _style: {
        width: "20%",
        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "LeaveType",
      label: "Leave Type",
      _style: {
        width: "20%",

        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "NumberofDays",
      label: "Number of Days",
      _style: {
        width: "20%",
        fontSize: "14px",
        textAlign: "center",
        color: darkMode ? "#FFF" : "#222222",
        backgroundColor: darkMode ? "#4d8c52" : "#A5D0A9",
      },
      filter: false,
      sorter: false,
    },
    {
      key: "RequestStatus",
      label: "Request Status",
      _style: {
        width: "20%",

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
      <Box
        // className="chartBox"
        sx={{
          marginBottom: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          //   background: "red",
          "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "space-evenly",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: darkMode ? "#222222" : "#fff",
            color: darkMode ? "#d1d1d1" : "#5b5b5b",
            padding: "30px",
            borderRadius: "5px",
            // animation: "slideFromLeft 0.9s ease forwards",
          }}
        >
          Chart 1
        </Box>
        <Box
          sx={{
            backgroundColor: darkMode ? "#222222" : "#fff",
            color: darkMode ? "#d1d1d1" : "#5b5b5b",
            width: "100%",
            padding: "30px",
            borderRadius: "5px",
            // animation: "slideFromLeft 0.7s ease forwards",
          }}
        >
          Chart 2
        </Box>
      </Box>

      <div
        style={{
          backgroundColor: darkMode ? "#222222" : "#fff",
          color: darkMode ? "#d1d1d1" : "#5b5b5b",
          padding: "15px",
          borderRadius: "5px",
          //   animation: "slideFromLeft 1s ease forwards",
        }}
      >
        <CSmartTable
          //   cleaner
          clickableRows
          columns={columns}
          //   columnFilter
          //   columnSorter
          items={details}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          //   selectable
          //   tableFilter
          tableProps={{
            className: "add-this-class red-border ",
            responsive: true,
            striped: true,
            hover: true,
          }}
          tableBodyProps={{
            className: "align-middle tableData",
            // style: { textAlign: "center", fontSize: "14px", color: "#5B5B5B" },
          }}
          //   scopedColumns={{
          //     action: (item: any) => {
          //       return (
          //         <td className="ActionData">
          //           <div className="viewicon">
          //             <MdOutlineVisibility
          //               size={20}
          //               onClick={() => {
          //                 toggleDrawer(true, "visibility");
          //                 DataFun(item);
          //               }}
          //             />
          //           </div>
          //           <div className="editicon">
          //             <MdOutlineModeEdit size={20} onClick={ViewFunction} />
          //           </div>
          //         </td>
          //       );
          //     },
          //   }}
        />
      </div>
    </>
  );
};

export default LeaveTracker;
