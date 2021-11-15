import { Alert, Avatar, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiButton from "../../../components/StyledComponent/MuiButton";
import { useForm } from "react-hook-form";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { SupervisedUserCircle } from "@mui/icons-material";
import { green } from "@mui/material/colors";

const MakeAdmin = () => {
  const [isCreated, setIsCreated] = useState(false);
  console.log(isCreated);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Update email to server

    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsCreated(true);
          console.log(result);
        }
      });
    reset();
  };
  console.log(errors);

  return (
    <div>
      <PageHeader
        icon={
          <Avatar
            sx={{ bgcolor: green[500], color: "#f4f4f4" }}
            variant="rounded"
          >
            <SupervisedUserCircle fontSize="large" />
          </Avatar>
        }
        title={
          <Typography sx={{ mb: 2, pb: 2 }} variant="h4">
            Admin Panel
          </Typography>
        }
        subTitle={` Add an Admin`}
      />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            fullWidth
            id="outlined-full-width"
            label="Email"
            placeholder="example@gmail.com"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.email && errors.email.type === "required" && (
            <Typography variant="caption" component="span" color="error">
              This is required
            </Typography>
          )}

          <MuiButton type="submit">Make Admin</MuiButton>
        </form>
        {isCreated && (
          <Alert severity="info">Admin Creation Successful !</Alert>
        )}
      </Container>
    </div>
  );
};

export default MakeAdmin;
