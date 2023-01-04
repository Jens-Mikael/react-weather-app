import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const CurrentWeather = ({weather} ) => {
  return (
    <>
      <Paper elevation={5} sx={{ m: "5rem 2rem" }}>
        <Grid container spacing={4}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <h1>sun</h1>
          </Grid>

          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Grid container direction="column">
              <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2">Helsinki</Typography>
              </Grid>
              <Grid display="flex" justifyContent="center" alignItems="center">
                <Grid container>
                  <Grid
                    xs={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h1">{weather.main.temp}</Typography>
                  </Grid>
                  <Grid
                    xs={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid container direction="column">
                      <Grid display="flex" justifyContent="center">
                        <Typography variant="h5">{weather.wind.speed}m/s</Typography>
                      </Grid>
                      <Divider />
                      <Grid display="flex" justifyContent="center">
                        <Typography variant="h4">{weather.main.humidity}%</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CurrentWeather;
