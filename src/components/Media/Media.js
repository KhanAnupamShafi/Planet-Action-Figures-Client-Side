import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactPlayer from "react-player";
import React from "react";
import video from "../../images/Video/Red_Pyramid_Thing_Website_video_v2_5mb.mp4";
import image from "../../images/Background/banner_bottom.jpg";
import sale from "../../images/sale.jpg";
import { Link } from "react-router-dom";

const Media = () => {
  const useStyles = makeStyles({
    playerWrapper: {
      minHeight: "225px",
      position: "relative",
    },
    reactPlayer: {
      position: "relative",
      overflowY: "hidden",
      transform: `translate(-0%, 0%)`,
    },
  });

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box
        className={classes.playerWrapper}
        display={{ xs: "none", md: "block" }}
      >
        <img width="100%" src={image} alt="banner" />
        {/* <iframe
          src={video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        /> */}
      </Box>

      <Grid container spacing={5} alignItems="center">
        <Grid item md={5}>
          <Box
            component={Link}
            to="/explore"
            display={{ xs: "none", md: "block" }}
          >
            <ReactPlayer
              width="100%"
              className={classes.reactPlayer}
              controls
              autoPlay
              loop
              muted={true}
              url={video}
              playing={true}
            />
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box>
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              width="100%"
              height={360}
              src={sale}
              alt="sale"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Media;
