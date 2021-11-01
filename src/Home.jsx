import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

//import material ui components
import { Box, Typography, TextField, Container, Stack, Button } from '@mui/material';

//import components
import Navbar from './components/Navbar';

const USER = gql`{
  user(username: "deepak2431") {
    name,
    tagline,
    dateJoined,
    location,
    photo,
    numFollowing,
    numFollowers
  }
}
`

const Home = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({type: 'SET_USER_NAME', payload: user})
  }

  return (
    <div className="home">
      <Navbar />
      <Container sx={{ marginTop: "5rem" }}>
        <Typography variant="h4">
          Unlock your Hashnode profile Analytics
        </Typography>
        <Stack direction="row" spacing={2} sx={{marginTop: "2rem"}}>
          <TextField
            id="username_input"
            sx={{ width: "30rem" }}
            variant="outlined"
            label="Enter hashnode username"
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleSubmit}>View Analytics</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;