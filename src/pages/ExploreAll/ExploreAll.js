import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import React from "react";
import Navigation from "../../components/shared/Navigation/Navigation";
import { fakeData } from "../../data/Data";
import blueBg from "../../images/Background/blue-bg.jpg";
import { Loyalty, ShoppingCart } from "@mui/icons-material";
import MuiButton from "../../components/StyledComponent/MuiButton";
import cardBg from "../../images/Background/banner.jpg";
import { Link } from "react-router-dom";

const ExploreAll = () => {
  const useStyles = makeStyles({
    bg: {
      background: `url(${blueBg}), linear-gradient(#660024, transparent),
          linear-gradient(to top left, #990036, transparent),
          linear-gradient(to top right, #F2462E, transparent)`,
      backgroundPosition: "top center",
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundBlendMode: "screen",

      //   height: 380,

      // margin: 'auto',
    },

    box: {
      background: `url(${cardBg}), linear-gradient(#660024, transparent),        
          linear-gradient(to top right, #F2462E, transparent)`,
      backgroundPosition: "top center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "color-dodge",
    },
    items: {
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
      "&:hover $media": {
        transform: "scaleX(1.090)",
      },
      "&:focus $media": {
        transform: "scaleX(1.090)",
      },
    },
    media: {
      overflow: "hidden",
      // 16:9
      // pt: "56.25%",

      transition: " all .5s",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Navigation />
      {/* Hero unit */}
      <Box
        className={classes.bg}
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="warning.dark"
            gutterBottom
          >
            Collectibles &amp; Action Figures
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            100% Guaranteed Authentic Policy
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" color="warning">
              View All PRODUCTS
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* /* ----------------------------- //card section ----------------------------- */}
      <Box className={classes.box}>
        <Container
          sx={{
            py: 8,
            overflow: "hidden",
            bgcolor: "rgba(	0, 0, 0, .5)",
          }}
          maxWidth="xl"
        >
          {/* End hero unit */}
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 2, md: 5 }}
            spacing={5}
            sx={{ p: 2 }}
          >
            {fakeData.map((data, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Badge
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  color="secondary"
                  overlap="rectangular"
                  variant="rectangular"
                  badgeContent={data.isLimited ? "Limited" : <Loyalty />}
                >
                  <Card
                    className={classes.items}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        color="secondary"
                      >
                        Heading
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                      <Divider />
                      <Divider />
                      <Typography gutterBottom variant="h6" component="h2">
                        $ 333
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="h2"
                      >
                        From:
                        <Typography
                          sx={{ ml: 2 }}
                          gutterBottom
                          variant="subtitle1"
                          component="span"
                        >
                          Marvel Iron Star
                        </Typography>
                      </Typography>

                      <Divider />
                      <Divider />
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Link to={`/product/${data?.index}`}>
                        <MuiButton size="small" variant="contained">
                          Purchase
                        </MuiButton>
                      </Link>

                      <Button size="small">
                        <ShoppingCart />
                      </Button>
                    </CardActions>
                  </Card>
                </Badge>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ExploreAll;
