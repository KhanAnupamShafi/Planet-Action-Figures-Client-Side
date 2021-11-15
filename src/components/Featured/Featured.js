import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
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
      <Box component={Link} to="/explore" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          color="warning"
          sx={{
            "&:hover": { bgcolor: purple[400], color: "#f3f3f3" },
          }}
        >
          Shop Now
        </Button>
      </Box>

      <Typography variant="h5" sx={{ my: 3 }}>
        <span className={classes.textGradient}>Planetactionfigure.com!</span>{" "}
        has the best selection of collectibles, toys and more!
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
              <Slide left cascade>
                <Paper elevation={0} sx={{ my: 2 }}>
                  <img width="160" height="120" src={imgPath} alt="" />
                </Paper>
              </Slide>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Featured;
