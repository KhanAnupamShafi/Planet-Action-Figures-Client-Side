import { ExpandLessOutlined, FavoriteBorderRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { deepPurple, pink } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import { fakeData } from "../../data/Data";
import MuiButton from "../StyledComponent/MuiButton";

const useStyles = makeStyles((Theme) => ({
  card: {
    position: "relative",
    overflowY: "auto",
    maxWidth: 300,
    minHeight: 500,
    margin: "auto",
    display: "inline-block",
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
    paddingTop: "70.25%",
    transition: " all .5s",
  },
  content: {
    textAlign: "left",
    padding: Theme.spacing(3),
  },
  divider: {
    margin: `${Theme.spacing(1)}`,
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid purple",
    "&:not(:first-of-type)": {
      marginLeft: Theme.spacing(1),
    },
  },
}));

const FeaturedProducts = () => {
  const products = fakeData.slice(0, 6);
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  const classes = useStyles();
  return (
    <>
      {products.map((data) => (
        <Grid key={data.index} item xs={12} sm={6} md={4} lg={4}>
          <Card className={classes.card}>
            {data.isLimited && (
              <CardHeader
                sx={{
                  position: "absolute",

                  top: 0,
                  left: 0,
                  zIndex: 2,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    className={classes.avatar}
                    sx={{
                      color: "white",
                      bgcolor: pink[500],
                      fontSize: "12px",
                      p: 1,
                      width: "100%",
                      height: "100%",
                    }}
                    variant="square"
                    aria-label="recipe"
                  >
                    Limited Edition
                  </Avatar>
                }
              />
            )}

            <CardMedia
              className={classes.media}
              image={
                "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
              }
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
                color={deepPurple[600]}
              >
                Nature Around Us
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                <ShowMoreText
                  lines={2}
                  more={"Read More"}
                  less={<ExpandLessOutlined sx={{ display: "block" }} />}
                  onClick={onClick}
                  anchorClass={classes.heading}
                  expanded={expand}
                  width={220}
                  truncatedEndingComponent={"... "}
                >
                  {data.description}
                </ShowMoreText>
              </Typography>
              <Divider className={classes.divider} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "space-around",
                }}
              >
                <Box sx={{ width: "240px" }}>
                  <Typography variant="body2" fontSize="large">
                    From: Marvel
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Typography variant="subtitle2" fontSize="large">
                      <Typography variant="overline" component="span">
                        $
                      </Typography>
                      333
                    </Typography>
                    <FavoriteBorderRounded sx={{ color: "#ff8abd" }} />
                  </Box>
                  <MuiButton sx={{ mt: 2 }}>Quick Buy</MuiButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default FeaturedProducts;
