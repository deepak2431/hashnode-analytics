import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Container, Typography, Box, Button } from "@mui/material";

const ErrorName = () => {
  return (
    <div className="error_page">
      <Navbar />
      <Container sx={{ marginTop: 20 }}>
        <Typography variant="h5" sx={{ color: "#00B074" }}>
          OOPS. You haven't entered user name.
        </Typography>
        <Box style={{ marginTop: 5 }}>
          <Typography variant="h6" sx={{ color: "gray" }}>
            Please enter your user name !!!
          </Typography>
        </Box>
        <Box style={{ marginTop: 20 }}>
          <Typography variant="p">
            We could not show the analytics without your details.
          </Typography>
        </Box>
        <Box>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default ErrorName;
