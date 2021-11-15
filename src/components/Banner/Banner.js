import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

import image from "../../images/Background/action-toys-wallpapers.jpg";

const Banner = () => {
  const useStyle = makeStyles({
    overlay: {
      background: `rgba(5, 9, 7, 0.62)`,
      color: "white",
    },

    bigImage: {
      height: "60vh",
      backgroundSize: "cover",
      backgroundPosition: `50% 50%`,
      backgroundImage: `url(${image})`,
    },
  });
  const classes = useStyle();

  return (
    <Container
      className={classes.bigImage}
      maxWidth="xl"
      sx={{ m: "auto", bgcolor: "red" }}
    >
      <Box className={classes.overlay}>
        <Typography gutterBottom variant="h4">
          Welcome to Planet Action Figures
        </Typography>
      </Box>
    </Container>
  );
};

export default Banner;
