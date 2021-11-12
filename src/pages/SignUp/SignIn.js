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
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Alert, CircularProgress } from "@mui/material";

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

export default function SignIn() {
  const { user, signInUser, isLoading, error } = useAuth();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password);

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
                in
              </Typography>
            </Typography>
            {!isLoading ? (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                <TextField
                  {...register("email")}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  {...register("password")}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="secondary"
                >
                  Sign In
                </Button>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ textAlign: "left", mb: 3 }}
                >
                  <Grid item xs>
                    <Link to="/register" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <NavLink
                      className="style-links"
                      to="/register"
                      variant="body2"
                    >
                      {"Don't have an account?"}
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ ml: 2 }}
                      >
                        Sign Up
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
                {error && <Alert severity="error">{error}</Alert>}
                {user?.email && (
                  <Alert severity="success">Successfully Logged In</Alert>
                )}
                <Copyright sx={{ mt: 5 }} />
              </Box>
            ) : (
              <Box sx={{ mt: 3 }}>
                {" "}
                <CircularProgress color="secondary" />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
