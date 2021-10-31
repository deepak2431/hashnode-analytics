import React from 'react';
import {gql, useQuery} from '@apollo/client';

//import material ui components
import { Box, Typography } from '@mui/material';

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

    return(
        <div className="home">
            <Navbar />
        </div>
    );
}

export default Home;