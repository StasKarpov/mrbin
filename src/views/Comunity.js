import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, TextField } from "@material-ui/core";
import { Grid, Icon } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useContext } from "../context/app";
import ProductPreview from "../components/ProductPreview";
import { DESTINATIONS } from "../config/mock_old";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const CreateRecomendation = ({ history }) => {
  const { products } = useContext();
  const styles = useStyles();

  return (
    <Grid container>
      {products.map((p, i) => (
        <Grid className={styles.mb} key={i} item xs={12}>
          <ProductPreview showSeeRecomendation product={p} showBack={i === 0} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withRouter(CreateRecomendation);

const useStyles = makeStyles(theme => ({
  mb: {
    marginBottom: "1rem"
  }
}));
