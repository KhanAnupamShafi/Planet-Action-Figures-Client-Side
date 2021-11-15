import { RateReview, Star } from "@mui/icons-material";
import { Avatar, Container, Divider, Paper, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PageHeader from "../PageHeader/PageHeader";

const ReviewCollection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-bayou-10657.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <PageHeader
        title="WHAT COLLECTORS ARE SAYING"
        subTitle={<Typography variant="span">Reviews</Typography>}
        icon={
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <RateReview fontSize="large" />
          </Avatar>
        }
      />
      <Container sx={{ bgcolor: "red", py: 2 }}>
        {reviews.map(({ _id, name, rating, title, review }) => (
          <Paper
            key={_id}
            elevation={5}
            sx={{ mt: 4, p: 5, bgcolor: "#F3D8CD" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle2">{name}</Typography>

              <Typography>
                {Array.from({ length: parseInt(rating) }, (_, index) => (
                  <Star key={index} color="error" />
                ))}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ my: 2, textAlign: "left" }}>
              <Typography gutterBottom variant="h6">
                {title}
              </Typography>
              <Typography gutterBottom variant="caption" color="success.light">
                Verified Purchase
              </Typography>
            </Box>

            <Box sx={{ bgclor: "rgba(0, 0, 0, 0.87);" }}>
              <Typography variant="body1">{review}</Typography>
            </Box>
          </Paper>
        ))}
      </Container>
    </div>
  );
};

export default ReviewCollection;
