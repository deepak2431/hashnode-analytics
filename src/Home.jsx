import React from 'react';
import {gql, useQuery} from '@apollo/client';

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

    const { loading, error, data } = useQuery(USER);

    if(loading) {
        console.log("Data is getting loaded");
    }
    if(error) {
        console.log(error)
    }
    console.log(data)

    return(
        <div className="analytics">
            <h3>HashNode Analytics</h3>
        </div>
    );
}

export default Home;