import { AddBoxOutlined, PhotoAlbum } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { green, pink, purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../../components/PageHeader/PageHeader";
import MuiButton from "../../../components/StyledComponent/MuiButton";

const useStyles = makeStyles((theme) => ({
  root: {
    p: 2,
  },
  input: {
    color: purple[900],
    fontWeight: 600,
  },
}));

const AddProduct = () => {
  const classes = useStyles();

  const [type, setType] = React.useState("Action Figure");
  const [stat, setStat] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //Post products to be added
    fetch("https://murmuring-bayou-10657.herokuapp.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setStat(true);
        reset();
      });
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <PageHeader
        title="Admin Panel"
        subTitle="Add New Products"
        icon={
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <AddBoxOutlined fontSize="large" />
          </Avatar>
        }
      />
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 850,
          m: "auto",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={12} md={6} sx={{ textAlign: "center" }}>
            <TextField
              {...register("title")}
              autoComplete="Title"
              name="title"
              required
              fullWidth
              id="title"
              label="Title"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />
            <TextField
              type="number"
              inputProps={{ step: 0.01, min: 0 }}
              {...register("price")}
              autoComplete="Price"
              name="price"
              required
              fullWidth
              id="price"
              label="Price"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />

            <TextField
              {...register("brand")}
              autoComplete="Brand"
              name="brand"
              required
              fullWidth
              id="brand"
              label="Brand"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />

            <TextField
              {...register("manufacturer")}
              autoComplete="Manufacturer"
              name="manufacturer"
              required
              id="manufacturer"
              label="Manufacturer"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...register("isLimited")} defaultChecked />}
                label="Limited Ed.?"
                sx={{
                  m: "auto",
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <FormControl sx={{ p: 2 }}>
              <InputLabel fullWidth id="demo-simple-select-label">
                Type
              </InputLabel>
              <Select
                {...register("type")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
              >
                <MenuItem selected value={"Action Figure"}>
                  Action Figure
                </MenuItem>
                <MenuItem value={"Statues"}>Statues</MenuItem>
                <MenuItem value={"Vinyl Figure"}>Vinyl Figure</MenuItem>
                <MenuItem value={"Life-Size Bust"}>Life-Size Bust</MenuItem>
                <MenuItem value={"Collectible Figurine"}>
                  Collectible Figurine
                </MenuItem>
                <MenuItem value={"Prop-Replica"}>Prop-Replica</MenuItem>
                <MenuItem value={"Bobblehead"}>Bobblehead</MenuItem>
                <MenuItem value={"Plush"}>Plush</MenuItem>
              </Select>
            </FormControl>

            <TextField
              {...register("weight")}
              autoComplete="Weight"
              name="weight"
              required
              id="Weight"
              label="Weight"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />

            <TextField
              {...register("size")}
              autoComplete="Size"
              name="size"
              required
              id="Size"
              label="Size"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />
            <TextField
              {...register("description")}
              fullWidth
              required
              label="Description"
              placeholder="Write Product Description"
              multiline
              rows={4}
              rowsMax={6}
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FormControl
              sx={{ width: "70%", m: "auto", pb: 5 }}
              variant="standard"
            >
              <InputLabel htmlFor="input-with-icon-adornment">
                Image Url
              </InputLabel>
              <Input
                required
                type="url"
                {...register("image")}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <PhotoAlbum color="error" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <MuiButton
          onClick={() => reset()}
          sx={{ display: "inline", maxWidth: 250, m: 1 }}
        >
          Reset
        </MuiButton>
        <MuiButton
          type="submit"
          sx={{ display: "inline", maxWidth: 250, m: 1 }}
        >
          Submit
        </MuiButton>
        {stat && <Alert severity="success">successfully added product!</Alert>}
      </Paper>
    </div>
  );
};

export default AddProduct;
