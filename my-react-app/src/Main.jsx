import React from "react";
import {
  Box,
  Typography,
  Card,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";

const Main = () => {
  const fakeData = [
    {
      type: "positive",
      title: "Great Product",
      description: "I loved this product! It exceeded my expectations.",
    },
    {
      type: "negative",
      title: "Not Recommended",
      description: "Unfortunately, this product didn't meet my expectations.",
    },
    {
      type: "positive",
      title: "Excellent Service",
      description: "The customer service was outstanding. Highly recommended.",
    },
    {
      type: "negative",
      title: "Quality Issues",
      description: "The quality of the product was disappointing.",
    },
  ];

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
        <img style={{width:"250px"}} src="https://london-post.co.uk/wp-content/uploads/2023/02/2CB060F7-824B-447D-88F8-EAEC3937DCB8.png" alt="amazon" />
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
        <Button
          variant="contained"
          startIcon={<CloudDownloadIcon />}
          sx={{ mb: 1, backgroundColor: "#0077B5", color: "white" }}
        >
          Download selected reviews
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
          {["positive", "negative"].map((type) => (
            <Checkbox
              key={type}
              icon={type === "positive" ? <ThumbUpIcon /> : <ThumbDownIcon />}
              checkedIcon={
                type === "positive" ? (
                  <ThumbUpIcon style={{color:"#4CAF50"}} />
                ) : (
                  <ThumbDownIcon style={{color:"#D9534F"}} />
                )
              }
            />
          ))}
        </Box>
        <Checkbox
          icon={<StarIcon />}
          checkedIcon={<StarIcon style={{color:"#F0A136"}} />}
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
            </Typography>
            <List>
              {fakeData.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
