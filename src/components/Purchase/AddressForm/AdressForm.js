import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Button, FormControl, FormHelperText, Input } from "@mui/material";
import { useForm } from "react-hook-form";

const payments = [{ name: "Card type", detail: "Visa" }];

export default function AddressForm({
  activeStep,
  setActiveStep,
  steps,
  setConfiremedOrder,
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  //Handle Order Data
  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setConfiremedOrder(true);
          console.log(result);

          reset();
        }
      });
  };
  return (
    <React.Fragment>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 1 }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: "warning.light" }}>
          Hello anupam
        </Typography>
        <Typography
          variant="subtitle2"
          color="inherit"
          sx={{ textAlign: "left" }}
          noWrap
        >
          Email:
        </Typography>
        <Input fullWidth disabled defaultValue="e@s.com" />
        <input
          hidden
          type="text"
          placeholder="Email"
          defaultValue="e@s.com"
          {...register("email")}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("firstName", { required: true })}
              type="text"
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("lastName", { required: true })}
              type="text"
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("address", { required: true })}
              type="text"
              required
              id="address"
              name="address"
              label="Address line"
              fullWidth
              autoComplete="shipping address-line"
              variant="standard"
            />
            {errors.address && errors.address.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("city", { required: true })}
              type="text"
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
            {errors.city && errors.city.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("state")}
              type="text"
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("zip", { required: true })}
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
            {errors.zip && errors.zip.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("country", { required: true })}
              required
              type="text"
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
            {errors.country && errors.country.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("phone", { required: true })}
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              autoComplete="+880 "
              variant="standard"
            />
            {errors.phone && errors.phone.type === "required" && (
              <Typography variant="caption" component="span" color="error">
                This is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment details
            </Typography>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button
              type="button"
              color="primary"
              onClick={handleBack}
              sx={{ mt: 3, ml: 1 }}
            >
              Back
            </Button>
          )}

          {activeStep === steps.length - 1 ? (
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={!isDirty || !isValid}
              //   onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Confirm Purchase
            </Button>
          ) : (
            <Button
              color="primary"
              type="button"
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}
