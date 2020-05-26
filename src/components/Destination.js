import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { DESTINATIONS } from "../config/mock";
import { makeStyles } from "@material-ui/core/styles";

export default ({ text, destinationId }) => {
  const styles = useStyles();

  const destination = DESTINATIONS.find(({ id }) => id === destinationId) || {};
  return (
    <Grid container>
      <Grid item xs={2}>
        <div
          className={styles.label}
          style={{ backgroundColor: destination.color || "white" }}
        />
      </Grid>
      <Grid
        item
        container
        justify="left"
        style={{ alignItems: "center" }}
        xs={10}
      >
        <Typography className={styles.ml} variant="subtitle2">
          {text}
        </Typography>
      </Grid>
      <Grid item container justify="flex-end" xs={12}>
        <Button variant="outlined" href={destination.link}>
          {destination.name}
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  label: {
    borderRadius: "100%",
    width: "2rem",
    height: "2rem",
    margin: "1rem"
  },
  alignLeft: {
    textAlign: "left"
  },
  ml: {
    marginLeft: "1rem"
  }
}));
