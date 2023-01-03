import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const CurrentWeather = () => {
  return (
    <>
      <Paper>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <h1>hi</h1>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Grid container>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CurrentWeather;
