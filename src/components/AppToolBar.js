import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppToolBar = () => {
  return (
    <AppBar position="relative" >
      <Toolbar>
        <Typography variant="h6">Weather app</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppToolBar;