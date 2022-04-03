import React from "react";

//material ui import
import { Paper, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const ProfileStats = () => {
  const following = useSelector((state) => state.homereducer.numFollowing);
  const followers = useSelector((state) => state.homereducer.numFollowers);
  const reactions = useSelector((state) => state.homereducer.numReactions);


  return (
    <div className="profile_stats">
      <Paper elevation={0}>
        <Typography variant="h4" style={{ fontWeight: "bolder" }}>
          Profile Summary
        </Typography>
        <Stack direction="row" spacing={6} style={{ marginTop: "1rem" }}>
          <Stack spacing={0}>
            <Typography variant="h5" style={{ color: "#A8A8A8" }}>
              Following
            </Typography>
            <Typography variant="h4">{following}</Typography>
          </Stack>
          <Stack spacing={0}>
            <Typography variant="h5" style={{ color: "#A8A8A8" }}>
              Followers
            </Typography>
            <Typography variant="h4">{followers}</Typography>
          </Stack>
          <Stack spacing={0}>
            <Typography variant="h5" style={{ color: "#A8A8A8" }}>
              Appreciation
            </Typography>
            <Typography variant="h4">{reactions}</Typography>
          </Stack>
          <Stack spacing={0}>
            <Typography variant="h5" style={{ color: "#A8A8A8" }}>
              Avg. Post Popularity
            </Typography>
            <Typography variant="h4">40</Typography>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default ProfileStats;
