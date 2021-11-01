import React from "react";

import { Paper, Stack, Typography } from "@mui/material";

import FacebookImg from "../assets/fb.jpeg";

const Profile = () => {
  return (
    <div className="profile">
      <Paper elevation={0}>
        <Stack direction="row" spacing={2}>
          <img src={FacebookImg} alt="Facebook" style={{ width: "100px" }} />
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            Facebook
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "2.5rem", color: "gray" }}
          >
            @facebook
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default Profile;
