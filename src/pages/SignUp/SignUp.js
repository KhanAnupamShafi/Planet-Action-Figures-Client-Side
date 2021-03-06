import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "../../images/Background/card-bg.jpg";
import { Link, NavLink, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Alert, CircularProgress } from "@mui/material";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Planet Action Figures
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const { user, isLoading, registerUser, error } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password, data.firstName, history);

    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/home">
              <Button
                type="button"
                variant="contained"
                sx={{ mb: 5 }}
                color="secondary"
              >
                Go Back Home
              </Button>
            </Link>
            <Avatar sx={{ m: 1, bgcolor: "error.light" }}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h3">
              Sign{" "}
              <Typography
                component="span"
                variant="h3"
                sx={{ color: "warning.dark" }}
              >
                Up
              </Typography>
            </Typography>

            {!isLoading ? (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("firstName")}
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                    {errors.firstName && (
                      <Typography variant="caption" component="p" color="error">
                        {errors.firstName.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("lastName")}
                      fullWidth
                      id="lastName"
                      label="Last Name (optional)"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email")}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <Typography variant="caption" component="p" color="error">
                        {errors.email.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password")}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />

                    {errors.password && (
                      <Typography variant="caption" component="p" color="error">
                        {errors.password.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password2")}
                      required
                      fullWidth
                      name="password2"
                      label="Confirm Password"
                      type="password"
                      id="password2"
                      autoComplete="confirm-password"
                    />
                    {errors.password2 && (
                      <Typography variant="caption" component="p" color="error">
                        {errors.password2.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="secondary"
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NavLink
                      to="/login"
                      variant="body2"
                      className="style-links"
                    >
                      Already have an account?{" "}
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ ml: 2 }}
                      >
                        Sign In
                      </Button>{" "}
                    </NavLink>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box sx={{ mt: 3 }}>
                {" "}
                <CircularProgress color="secondary" />
              </Box>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            {user?.email && (
              <Alert severity="success">Successfully Created User</Alert>
            )}
          </Box>

          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
