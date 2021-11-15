import { Card, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ffeceb",
    backgroundColor: "#110022",
    paddingRight: theme.spacing(2),
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(4),
    color: "#3c4bb1",
  },
  pageTitle: {
    padding: theme.spacing(2),
  },
}));

const PageHeader = (props) => {
  const { icon, title, subTitle } = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} square className={classes.root}>
      <Box className={classes.pageHeader}>
        <Grid container maxWidth="sm" justifyContent="center">
          <Grid item xs={12} sm={12} md={1}>
            <Card className={classes.pageIcon}>{icon}</Card>
          </Grid>
          <Grid item xs={12} sm={12} md={11}>
            <Box className={classes.pageTitle}>
              <Typography variant="h5" component="h1" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" component="div">
                {subTitle}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PageHeader;
