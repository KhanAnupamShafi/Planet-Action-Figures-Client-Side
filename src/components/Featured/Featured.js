import { Container, Grid, Paper, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
import React from "react";
import { images } from "../../data/Data";

const useStyles = makeStyles({
  textGradient: {
    "font-weight": "700",
    display: "inline-block",
    "background-image": `linear-gradient(
    135deg,#b42b1f,#f17674)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

const Featured = () => {
  const classes = useStyles();
  console.log(images);
  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ my: 3 }}>
        Welcome to{" "}
        <span className={classes.textGradient}>Planetactionfigure.com!</span>{" "}
        The best selection of collectibles, toys and more!
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {images.map(({ id, imgPath }) => (
          <React.Fragment key={id}>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Paper
                variant="outlined"
                elevation="6"
                sx={{ border: "none", mt: 2 }}
              >
                <img width="120" src={imgPath} alt="" />
              </Paper>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Featured;
