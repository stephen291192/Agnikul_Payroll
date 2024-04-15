import { Box } from "@mui/material";
import React from "react";
import Picture from "../assets/picture1.png";
import Picture1 from "../assets/pic1.png";
import Picture2 from "../assets/pic2.png";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Card, CardContent, Typography, Grid } from "@mui/material";

interface AboutProps {
  darkMode: boolean;
}

const LandingPage: React.FC<AboutProps> = ({ darkMode }) => {
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, align in row on medium screens
          justifyContent: "space-between",
          alignItems: "center",
          // zIndex: "2",
          color: darkMode ? "#FFF" : "#000",
          bgcolor: darkMode ? "" : "#effaef",
          textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on medium screens
        }}
      >
        <div>
          <Box className="title">
            Good Morning{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                animation: "zoomInOut 2s ease infinite",
              }}
            >
              Rajesh !
            </Box>{" "}
          </Box>

          <Box
            className="Subtitle"
            sx={{
              color: darkMode ? "#FFF" : "", // Conditionally apply color based on dark mode
              textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on medium screens
            }}
          >
            Life is 10% what happens to us and 90% how we react to it
          </Box>
          <span className="titleAut">- DENNIS P. KIMBRO</span>
        </div>
        <div>
          <Box
            sx={{
              textAlign: { xs: "center", md: "right" }, // Center image on small screens, align right on medium screens
            }}
          >
            <img src={Picture} alt="Small Logo" width="130px" />
          </Box>
        </div>
      </Box>
      <br />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} sx={{}}>
          <Card
            className="slideFromLeft"
            sx={{
              bgcolor: darkMode ? "#222222" : "#FFF",
              color: darkMode ? "#fff" : "#000",
              display: "flex",
              flexDirection: "column",

              height: "100%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Typography>Policy</Typography>
              <Typography color="textSecondary">
                <img
                  src={Picture1}
                  className="landingPic"
                  alt="Landing Picture"
                />
              </Typography>
            </CardContent>
            <span className="view">View All</span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="slideFromBottom"
            sx={{
              bgcolor: darkMode ? "#222222" : "#FFF",
              color: darkMode ? "#fff" : "#5B5B5B",
              display: "flex",
              flexDirection: "column",
              height: "100%",

              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "600" }}>Payslip</Typography>
              <Typography color="textSecondary">
                <img
                  src={Picture2}
                  className="landingPic"
                  alt="Landing Picture"
                />
              </Typography>
            </CardContent>
            <span className="view">View All</span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid
            container
            spacing={3}
            direction="column"
            sx={{ width: isTablet ? "500px" : "auto" }}
          >
            <Grid item xs={12} md={12}>
              <Card
                className="slideFromTop"
                sx={{
                  bgcolor: darkMode ? "#222222" : "#FFF",
                  color: darkMode ? "#fff" : "#5B5B5B",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <CardContent>
                  <p style={{ fontWeight: "600" }}>Announcements</p>
                  <span color="textSecondary" className="listName">
                    <li>Leave for Jan 20 2024 is Approved </li>
                    <li>Reimbursement Bill has to be attached clearly </li>
                    <li>Reimbursement Bill has to be attached clearly </li>
                    <li>Reimbursement Bill has to be attached clearly </li>
                  </span>

                  <span className="view">View All</span>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              {" "}
              {/* Adjusted md prop to 12 */}
              <Card
                className="slideFromRight"
                sx={{
                  bgcolor: darkMode ? "#222222" : "#FFF",
                  color: darkMode ? "#fff" : "#5B5B5B",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <CardContent>
                  <p style={{ fontWeight: "600" }}>Upcoming Holiday</p>
                  <span color="textSecondary" className="listName">
                    <li>15 January Monday Pongal </li>
                    <li>16 January Tuesday Thiruvalluvar day </li>
                    <li>15 January Monday Pongal </li>
                  </span>
                  <span className="view">View All</span>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
