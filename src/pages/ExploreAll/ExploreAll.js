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
import Typewriter from "typewriter-effect";
import blueBg from "../../images/Background/blue-bg.jpg";
import { Loyalty, ShoppingCart } from "@mui/icons-material";
import MuiButton from "../../components/StyledComponent/MuiButton";
import cardBg from "../../images/Background/banner.jpg";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ShowMoreText from "react-show-more-text";
import { Zoom } from "react-reveal";

const ExploreAll = () => {
  const { productsAll } = useProducts();

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
          <Container display={{ xs: "none", md: "block" }}>
            <Typography variant="div" display={{ xs: "none", md: "block" }}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 1,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Mighty Thor Animated Style Statue")
                    .deleteAll()
                    .typeString("DISNEY+ DAY DEALS")
                    .deleteAll()
                    .typeString("Black Friday Deals")
                    .deleteAll()
                    .start();
                }}
              />
            </Typography>
          </Container>

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
            sx={{ p: 1 }}
          >
            {productsAll.map((data, index) => (
              <Grid item key={data?._id} xs={12} sm={6} md={4} lg={3}>
                <Zoom cascade>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    color="secondary"
                    overlap="rectangular"
                    variant="rectangular"
                    badgeContent={data?.isLimited ? "Limited" : <Loyalty />}
                  >
                    <Card
                      className={classes.items}
                      sx={{
                        height: "600px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      <CardMedia
                        component="img"
                        className={classes.media}
                        image={data?.image}
                        alt="toy picture"
                      />
                      <CardContent
                        sx={{ flexGrow: 1, justifyContent: "space-around" }}
                      >
                        <Typography gutterBottom variant="h6" color="secondary">
                          {data?.title}
                        </Typography>
                        <ShowMoreText
                          /* Default options */
                          lines={3}
                          more="Show more"
                          less="Show less"
                          className="content-css"
                          anchorClass="my-anchor-css-class"
                          expanded={false}
                          width={280}
                          truncatedEndingComponent={"... "}
                        >
                          <Typography gutterBottom variant="body2">
                            {data?.description}
                          </Typography>
                        </ShowMoreText>

                        <Divider />
                        <Divider sx={{ mb: 2 }} />
                        <Typography gutterBottom variant="h5" fontWeight={600}>
                          ${data?.price}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography gutterBottom variant="subtitle1">
                            From:
                            <Typography
                              sx={{ ml: 1 }}
                              gutterBottom
                              variant="subtitle2"
                              color="error.light"
                            >
                              {data?.brand}
                            </Typography>
                          </Typography>
                          <Typography gutterBottom variant="subtitle1">
                            By:
                            <Typography
                              sx={{ ml: 1 }}
                              gutterBottom
                              variant="subtitle2"
                              color="error.light"
                            >
                              {data?.manufacturer}
                            </Typography>
                          </Typography>
                        </Box>

                        <Divider />
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Link to={`/product/${data?._id}`}>
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
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ExploreAll;
