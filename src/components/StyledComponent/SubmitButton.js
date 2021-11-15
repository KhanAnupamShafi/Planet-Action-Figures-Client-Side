import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));

export default function SubmitButton(props) {
  const classes = useStyles();
  const { text, size, color, variant, ...other } = props;
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      {...other}
    >
      {text}
    </Button>
  );
}
