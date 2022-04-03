import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gql, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//import material ui components
import { Typography, TextField, Container, Stack, Button } from "@mui/material";

//import components
import Navbar from "../../components/Navbar";

const GET_USER = gql`
  query getUserDetails($userName: String!) {
    user(username: $userName) {
      name
      tagline
      dateJoined
      location
      photo
      numFollowing
      numFollowers
      numReactions
    }
  }
`;

const GET_POSTS = gql`
  query getUserPosts($userName: String!) {
    user(username: $userName) {
      post1: publication {
        posts(page: 1) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post2: publication {
        posts(page: 2) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post3: publication {
        posts(page: 3) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post4: publication {
        posts(page: 4) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post5: publication {
        posts(page: 5) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post6: publication {
        posts(page: 6) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post7: publication {
        posts(page: 7) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post8: publication {
        posts(page: 8) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post9: publication {
        posts(page: 9) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post10: publication {
        posts(page: 10) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post11: publication {
        posts(page: 11) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
      post12: publication {
        posts(page: 12) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      }
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const [getUserDetails,{ data: user_data, error: user_error },] = useLazyQuery(GET_USER, {
    variables: { userName },
  });

  const [getUserPosts, { data: post_data, error: post_error },] = useLazyQuery(GET_POSTS, {
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
      if (user_data && post_data) {
        dispatch({
          type: "SET_NAME",
          payload: user_data.user.name,
        });
        dispatch({
          type: "SET_PHOTO_URL",
          payload: user_data.user.photo,
        });
        dispatch({
          type: "SET_FOLLOWING",
          payload: user_data.user.numFollowing,
        });
        dispatch({
          type: "SET_FOLLOWERS",
          payload: user_data.user.numFollowers,
        });
        dispatch({
          type: "SET_REACTIONS",
          payload: user_data.user.numReactions,
        });

        console.log(post_data)
        dispatch({
          type: "SET_POSTS",
          payload: post_data,
        });

        history.push("/profile-analytics");
      }
      else if (user_error || post_error) {
        history.push("/user-not-found");
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
          <Button
            variant="contained"
            onClick={() => {
              getUserDetails();
              getUserPosts();
              handleSubmit();
            }}
          >
            View Analytics
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
