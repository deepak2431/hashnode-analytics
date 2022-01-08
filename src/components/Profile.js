import React from "react";

import { Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {

  const userName = useSelector((state) => state.homereducer.userName);
  const name = useSelector((state) => state.homereducer.name);
  const photoUrl = useSelector((state) => state.homereducer.photoUrl);

  return (
    <div className="profile">
      <Paper elevation={0}>
        <Stack direction="row" spacing={2}>
          <img
            src={photoUrl}
            alt="Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            {name}
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "2.5rem", color: "gray" }}
          >
            @{userName}
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default Profile;
