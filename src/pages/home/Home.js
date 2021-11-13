import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gql, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//import material ui components
import {
  Box,
  Typography,
  TextField,
  Container,
  Stack,
  Button,
} from "@mui/material";

//import components
import Navbar from "../../components/Navbar";

const GET_USER = gql`
  query USER($userName: String!) {
    user(username: $userName) {
      name
      tagline
      dateJoined
      location
      photo
      numFollowing
      numFollowers
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const [getUserDetails, { loading, data, error }] = useLazyQuery(GET_USER, {
    variables: { userName },
  });

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    if (userName === "") {
      history.push("/user-not-found");
    } else {
      dispatch({ type: "SET_USER_NAME", payload: userName });
      if (loading) {
        return <p>Loading...</p>;
      } else if (error) {
        history.push("/user-not-found");
      }
      getUserDetails();
      if (data) {
        console.log(data.user)
        dispatch({ type: "SET_NAME", payload: data.user.name });
        dispatch({ type: "SET_PHOTO_URL", payload: data.user.photo });
        dispatch({ type: "SET_FOLLOWING", payload: data.user.numFollowing});
        dispatch({ type: "SET_FOLLOWERS", payload: data.user.numFollowers});
        history.push("/profile-analytics");
      }
    }
  };

  return (
    <div className="home">
      <Navbar />
      <Container sx={{ marginTop: "5rem" }}>
        <Typography variant="h4">
          Unlock your Hashnode profile Analytics
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginTop: "2rem" }}>
          <TextField
            id="username_input"
            sx={{ width: "30rem" }}
            variant="outlined"
            label="Enter hashnode username"
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleSubmit}>
            View Analytics
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
