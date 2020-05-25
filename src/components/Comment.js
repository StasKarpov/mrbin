import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Destination from "./Destination";

export default ({ comment }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="subtitle1">{comment.text}</Typography>
      </Grid>
      {comment.parts.map(p => (
        <Grid key={p.id} item xs={12}>
          <Destination text={p.text} destinationId={p.destination} />
        </Grid>
      ))}
    </Grid>
  );
};
