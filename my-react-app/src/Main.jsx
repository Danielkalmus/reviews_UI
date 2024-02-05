import React, { useState } from "react";
// import axios from "axios";
import {
  Box,
  Typography,
  Card,
  Checkbox,
  Grid,
  // Button,
  TextField,
} from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  // CloudDownload as CloudDownloadIcon,
  Star as StarIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const Main = () => {
  const [positiveChecked, setPositiveChecked] = useState(false);
  const [negativeChecked, setNegativeChecked] = useState(false);

  const handlePositiveChange = () => {
    setPositiveChecked(!positiveChecked);
  };

  const handleNegativeChange = () => {
    setNegativeChecked(!negativeChecked);
  };

  function Params() {
    return positiveChecked && negativeChecked
      ? "?page=1&sentiment=all"
      : positiveChecked
      ? "?page=1&sentiment=positive"
      : negativeChecked
      ? "?page=1&sentiment=negative"
      : "";
  }

  const iframeUrl = "http://192.168.68.113:8080/" + Params();

  // const ExportToExcel = () => {
  //   return axios
  //     .get("http://192.168.68.113:8080/export_to_excel" + Params())
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          border: 1,
          borderRadius: 4,
          borderColor: "#0077B5",
          margin: 3,
          boxShadow: 4,
          backgroundColor: "#F4F6F7",
          padding: 3,
        }}
      >
        <img
          style={{ width: "250px" }}
          src="https://london-post.co.uk/wp-content/uploads/2023/02/2CB060F7-824B-447D-88F8-EAEC3937DCB8.png"
          alt="amazon"
        />
        <Typography variant="h5" gutterBottom color="#0077B5">
          Amazon Reviews App
        </Typography>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          my: 2,
        }}
      >
        {/* <Button
          variant="contained"
          startIcon={<CloudDownloadIcon />}
          sx={{ mb: 1, backgroundColor: "#0077B5", color: "white" }}
          onClick={ExportToExcel}
        >
          Download selected reviews
        </Button> */}
        <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
          <Box>
            <Checkbox
              icon={<ThumbUpIcon />}
              checkedIcon={<ThumbUpIcon style={{ color: "#4CAF50" }} />}
              checked={positiveChecked}
              onChange={handlePositiveChange}
            />
          </Box>
          <Box>
            <Checkbox
              icon={<ThumbDownIcon />}
              checkedIcon={<ThumbDownIcon style={{ color: "#D9534F" }} />}
              checked={negativeChecked}
              onChange={handleNegativeChange}
            />
          </Box>
        </Box>
        <Checkbox
          icon={<StarIcon />}
          checkedIcon={<StarIcon style={{ color: "#F0A136" }} />}
        />
        <TextField
          label={
            <React.Fragment>
              <SearchIcon /> Search Reviews
            </React.Fragment>
          }
          variant="outlined"
          size="small"
          sx={{ mb: 1 }}
        />
      </Card>

      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <Card sx={{ margin: "30px", padding: 3 }}>
            <Typography variant="h6" color="#0077B5">
              Selected Reviews:
            </Typography>{" "}
            {iframeUrl && (
              <iframe
                title="ReviewsFrame"
                width="100%"
                height="400"
                src={iframeUrl}
                allowFullScreen
                style={{ border: "1px solid #ccc", marginTop: "20px" }}
              ></iframe>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
