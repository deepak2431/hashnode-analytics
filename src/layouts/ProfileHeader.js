import React from "react";
import { useSelector } from "react-redux";

import { Stack, Container } from "@mui/material";

//import components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProfileStats from "../components/ProfileStats";

const ProfileHeader = () => {

  return (
    <div className="profile_header">
      <Navbar />
      <Container style={{ marginTop: "2rem" }}>
        <Stack spacing={2}>
          <Profile />
          <ProfileStats />
        </Stack>
      </Container>
    </div>
  );
};

export default ProfileHeader;
