import {
  BorderColorTwoTone,
  StarsOutlined,
  Subtitles,
  TrendingFlat,
} from "@mui/icons-material";

import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Alert,
  Avatar,
  FormControlLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import MuiButton from "../../../components/StyledComponent/MuiButton";
import { useForm } from "react-hook-form";
import { blueGrey } from "@mui/material/colors";

const Review = () => {
  const [value, setValue] = React.useState("Love It!");
  const [rating, setRating] = React.useState("5");
  const [success, setSuccess] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`https://murmuring-bayou-10657.herokuapp.com/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }

        reset();
      });
  };
  return (
    <div>
      <PageHeader
        title={`Post Review`}
        subTitle={<TrendingFlat />}
        icon={
          <Avatar
            sx={{ bgcolor: blueGrey[500], color: "#f1f1f1" }}
            variant="rounded"
          >
            <BorderColorTwoTone fontSize="large" />
          </Avatar>
        }
      />

      <Paper sx={{ maxWidth: "sm", m: "auto" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <FormControl style={{ width: "80%" }} variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Your Name
            </InputLabel>
            <Input
              required
              {...register("name")}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            required
            {...register("title")}
            style={{ width: "80%" }}
            id="input-with-icon-textfield"
            label="Review Title"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Subtitles />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            required
            {...register("review")}
            style={{ width: "80%" }}
            placeholder="write review.."
            multiline
            rows={4}
            variant="standard"
          />

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <FormControl component="fieldset">
              <RadioGroup
                {...register("recommendation")}
                row
                aria-label="recommendation"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Love It!"
                  control={<Radio />}
                  label="Love It!"
                />
                <FormControlLabel
                  value="Not Good!"
                  control={<Radio />}
                  label="Not Good!"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", zIndex: 2 }}>
            <FormControl sx={{ p: 2 }}>
              <InputLabel id="demo-simple-select-label">Rating</InputLabel>
              <Select
                {...register("rating")}
                valueAsNumber
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rating}
                label="Rating"
                onChange={handleRating}
              >
                <MenuItem selected value={"1"}>
                  <StarsOutlined />
                </MenuItem>
                <MenuItem value={"2"}>
                  <StarsOutlined />
                  <StarsOutlined />
                </MenuItem>
                <MenuItem value={"3"}>
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                </MenuItem>
                <MenuItem value={"4"}>
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                </MenuItem>
                <MenuItem value={"5"}>
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                  <StarsOutlined />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <MuiButton type="submit">Submit</MuiButton>
        </Box>
        {success && (
          <Alert severity="success" color="info">
            Successfully posted{" "}
          </Alert>
        )}
      </Paper>
    </div>
  );
};

export default Review;
