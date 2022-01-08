import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

//import React components
import SummaryCard from "../components/SummaryCard";
import { useSelector } from "react-redux";

const GET_POSTS = gql`
  query POST_USER($userName: String!) {
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
      },
      post2: publication {
        posts(page: 2) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post3: publication {
        posts(page: 3) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post4: publication {
        posts(page: 4) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post5: publication {
        posts(page: 5) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post6: publication {
        posts(page: 6) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post7: publication {
        posts(page: 7) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post8: publication {
        posts(page: 8) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post9: publication {
        posts(page: 9) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post10: publication {
        posts(page: 10) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post11: publication {
        posts(page: 11) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
      post12: publication {
        posts(page: 12) {
          title
          slug
          cuid
          popularity
          dateAdded
          totalReactions
        }
      },
    }
  }
`;

const SummarySection = () => {

  const userName = useSelector((state) => state.homereducer.userName)

  const [getUserDetails, { loading, data, error } ] = useLazyQuery(GET_POSTS, {
   variables: { userName } 
  })

  useEffect(() => {

    getUserDetails();
    if (data) {
      console.log(data);
    } 
    else if (error) {
      console.log(error);
    }

    // eslint-disable-next-line
  }, [ userName ])


  return (
    <div className="summary_section">
      <SummaryCard />
    </div>
  );
};

export default SummarySection;
