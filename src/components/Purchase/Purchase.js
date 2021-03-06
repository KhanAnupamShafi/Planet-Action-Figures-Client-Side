import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm/AdressForm";
import OrderReview from "./OrderReview/OrderReview";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Slider from "react-slick/";
import { CheckBoxRounded } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Planetactionfigures.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Place your order"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <OrderReview />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      light: "#5a477f",
      main: "#361a59",
      dark: "#210038",
      contrastText: "#ffecb3",
    },
    secondary: {
      main: "#C01D2C",
      light: "#af5c59",
      dark: "#4b0108",
    },
    text: {
      disabled: "#2231fe",
    },
  },
  typography: {
    fontFamily: ["Nunito", "Playfair Display", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

export default function Purchase({ singleProduct }) {
  const [activeStep, setActiveStep] = React.useState(2);
  const [confiremedOrder, setConfiremedOrder] = React.useState(false);

  console.log(confiremedOrder);

  const settings = {
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          zIndex: 0,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Order Review
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center">
        <CssBaseline />
        <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              bgcolor: "background.default",
            }}
          >
            <Typography>{singleProduct.type}</Typography>
          </Paper>
          <Slider {...settings}>
            <div style={{ overflow: "hidden" }}>
              <Box
                component="img"
                sx={{
                  m: "auto",
                  textAlign: "center",
                  height: 500,
                  display: "block",
                  maxWidth: 667,
                  overflow: "hidden",
                }}
                src={singleProduct.image}
                alt="label"
              />
            </div>
            <div>
              <Box
                component="img"
                sx={{
                  m: "auto",
                  textAlign: "center",
                  height: 500,
                  display: "block",
                  maxWidth: 667,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={singleProduct.image}
                alt="label"
              />
            </div>
            <div>
              <Box
                component="img"
                sx={{
                  m: "auto",
                  textAlign: "center",
                  height: 500,
                  display: "block",
                  maxWidth: 667,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={singleProduct.image}
                alt="label"
              />
            </div>
          </Slider>

          <Grid item xs={12} md={12}>
            <CardActionArea component="a" href="#">
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Product Description
                  </Typography>
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, bgcolor: "#f3f3f3" }}
                  >
                    Brand
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {singleProduct.brand}
                  </Typography>
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, bgcolor: "#f3f3f3" }}
                  >
                    Made By
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {singleProduct.manufacturer}
                  </Typography>
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, bgcolor: "#f3f3f3" }}
                  >
                    Size (In cm)
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {singleProduct.size}
                  </Typography>
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, bgcolor: "#f3f3f3" }}
                  >
                    Weight (g)
                  </Typography>
                  <Typography gutterBottom sx={{ color: "text.secondary" }}>
                    {singleProduct.weight}
                  </Typography>

                  <Typography
                    gutterBottom
                    sx={{
                      width: "99%",
                      flexShrink: 0,
                      bgcolor: "warning.light",
                      p: 1,
                    }}
                  >
                    Detail Info:
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="primary.dark"
                    sx={{
                      width: "99%",
                      flexShrink: 0,
                      bgcolor: "warning.light",
                      p: 2,
                    }}
                  >
                    "{singleProduct.description}"
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                  image={singleProduct.image}
                  alt="image"
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Container component="main" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <React.Fragment>
                {activeStep === steps.length || confiremedOrder ? (
                  <React.Fragment>
                    <CheckBoxRounded color="success" />
                    <Typography variant="h5" color="secondary" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is-
                      <Typography component="span" color="info.light">
                        {singleProduct._id}
                      </Typography>{" "}
                      We have emailed your order confirmation, and will send you
                      an update when your order has shipped.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {/* {getStepContent(activeStep)} */}

                    <OrderReview singleProduct={singleProduct} />
                    <Typography component="h1" variant="h4" align="center">
                      Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    <AddressForm
                      singleProduct={singleProduct}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      steps={steps}
                      setConfiremedOrder={setConfiremedOrder}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
            <Copyright />
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
