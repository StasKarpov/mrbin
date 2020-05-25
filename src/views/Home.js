import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import ProductPreview from "../components/ProductPreview";

import { useContext } from "../context/app";

export const Home = () => {
  const styles = useStyles();
  const { products, setProduct, product } = useContext();

  React.useEffect(() => {
    const { loadProducts } = useContext();
    loadProducts();
  }, []);

  const handleSetProduct = (event, p) => {
    setProduct(p);
  };

  return (
    <div className={styles.root}>
      <Grid container direction="column" alignItems="center">
        <Grid className={styles.mt} item>
          <Typography variant="h5">Welcome to Mr.Bin</Typography>
        </Grid>
        <Grid className={styles.mt} item>
          <Button size="large" color="primary" variant="outlined">
            Scan barcode
          </Button>
        </Grid>
        <Grid className={styles.mt} item>
          <Typography variant="h6">OR</Typography>
        </Grid>
        <Grid className={styles.mt} item xs={12}>
          <div style={{ width: "16rem" }}>
            <Autocomplete
              options={products}
              getOptionLabel={option => option.name}
              id="debug"
              fullWidth
              onChange={handleSetProduct}
              renderInput={params => (
                <TextField {...params} label="Enter a name" />
              )}
            />
          </div>
        </Grid>
        <Grid item className={styles.mt} xs={12}>
          <ProductPreview showSeeRecomendation showBack product={product} />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    "&  .MuiGrid-item": {}
  },
  mt: {
    marginTop: "2rem"
  }
}));
