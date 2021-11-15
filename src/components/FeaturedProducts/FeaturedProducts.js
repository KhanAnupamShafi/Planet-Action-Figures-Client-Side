import { ExpandLessOutlined, FavoriteBorderRounded } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { deepPurple, pink } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import useProducts from "../../hooks/useProducts";
import MuiButton from "../StyledComponent/MuiButton";

const useStyles = makeStyles((Theme) => ({
  card: {
    position: "relative",
    overflowY: "auto",
    maxWidth: 300,
    minHeight: 460,
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
    marginBottom: 50,
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
  const { productsAll, loaded } = useProducts();
  const products = productsAll.slice(0, 6);
  console.log(productsAll);

  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  const classes = useStyles();
  return (
    <>
      {!loaded ? ( //spinner
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          {products.map((data) => (
            <Grid key={data._id} item xs={12} sm={6} md={4} lg={4}>
              <Zoom cascade>
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

                  <CardMedia className={classes.media} image={data?.image} />
                  <CardContent className={classes.content}>
                    <Typography
                      className={"MuiTypography--heading"}
                      variant={"subtitle2"}
                      sx={{ fontSize: 16 }}
                      gutterBottom
                      color={deepPurple[600]}
                    >
                      {data?.title}
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
                      <Box
                        sx={{
                          width: "240px",
                        }}
                      >
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
                            <Typography variant="overline">$</Typography>
                            {data?.price}
                          </Typography>
                          <FavoriteBorderRounded sx={{ color: "#ff8abd" }} />
                        </Box>
                        <Link to={`/product/${data?._id}`}>
                          <MuiButton sx={{ mt: 2 }}>Quick Buy</MuiButton>
                        </Link>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
