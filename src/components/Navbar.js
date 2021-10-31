import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../assets/fb.jpeg";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#ffffff",
        }}
      >
        <Toolbar>
          <Link to="/">
            <img
              src={Logo}
              alt="Hashnode Analytics"
              style={{ width: "50px" }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
