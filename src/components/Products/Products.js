import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Fade, Flip } from "react-reveal";
import { dataGoals } from "../../data/Data";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Products = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2F4F5",
      }}
    >
      <Box
        sx={{
          mt: 10,
          py: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#f17674", letterSpacing: "1px", fontWeight: "600" }}
          >
            High-End Figures, Statues &amp; Everything in Between
          </Typography>
        </Container>
        <Container>
          <Grid container spacing={3}>
            {dataGoals.map(({ idx, title, info, Icon, backgroundColor }) => (
              <Grid key={idx} item xs={12} sm={12} md={3}>
                <Flip left cascade>
                  <Paper
                    outlined="true"
                    sx={{
                      minHeight: "265px",
                      backgroundColor: backgroundColor,
                      my: 5,
                      p: 1,
                      "&:hover": {
                        cursor: "pointer",
                        color: "warning.light",
                        backgroundColor: "primary.dark",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: "h1.fontSize", color: "#f17674" }} />
                    <Typography variant="h5"> {title}</Typography>
                    <Divider variant="middle" />
                    <Typography variant="body2" sx={{ lineHeight: 2, mt: 3 }}>
                      {info}
                    </Typography>
                  </Paper>
                </Flip>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ maxWidth: "200px", margin: "10px auto", padding: "20px" }}>
        <Typography
          variant="OVERLINE"
          sx={{ color: "warning", letterSpacing: "2px" }}
        >
          Our Products
        </Typography>
        <Divider />
      </Box>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "#f17674",
              letterSpacing: "1px",
              fontWeight: "600",
              pb: 5,
            }}
          >
            Featured Products
          </Typography>
        </Container>

        <Container>
          <Grid container rowSpacing={10} spacing={3}>
            <FeaturedProducts />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
