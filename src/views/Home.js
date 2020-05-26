import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import ProductPreview from "../components/ProductPreview";
import logo from "../assets/img/logo.png";
import { withRouter } from "react-router-dom";
import { useContext } from "../context/app";
import Scanner from "../components/Scanner";

const Home = ({ history }) => {
  const styles = useStyles();
  const { loadProducts, products, setProduct, product } = useContext();
  const [scan, setScan] = React.useState(false);
  React.useEffect(() => {
    loadProducts();
  }, []);

  const handleSetProduct = (event, p) => {
    setProduct(p);
  };

  const goToCommunity = () => {
    history.push("/community");
  };

  const onScan = () => {
    setScan(false);
    setProduct(products[0]);
  };

  const onError = () => {
    console.log("error");
  };

  return scan ? (
    <Scanner onDetected={onScan} />
  ) : (
    <div className={styles.root}>
      <Grid container direction="column" alignItems="center">
        <Grid className={styles.mt} item>
          <Typography className={styles.alignCenter} variant="h5">
            Discover how to recycle your waste
          </Typography>
        </Grid>
        <Grid className={styles.mt} item>
          <Button
            size="large"
            color="primary"
            variant="outlined"
            onClick={() => setScan(true)}
          >
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
                <TextField {...params} label="Enter a product name" />
              )}
            />
          </div>
        </Grid>
        <Grid item className={styles.mt} xs={12}>
          <ProductPreview showSeeRecomendation product={product} />
        </Grid>
        {!(product && product.name) && (
          <div className={styles.logo}>
            <img src={logo} />
            <div>Mr Bin</div>
          </div>
        )}
        <Grid item className={styles.mt} xs={12}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={() => goToCommunity()}
          >
            {" "}
            + Join bin community{" "}
          </Button>
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
  },
  logo: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "60px",
    color: "#18A86B",
    fontFamily: "Poppins",
    "& img": {
      width: "111px"
    },
    "& div": {
      marginTop: "-28px"
    }
  },
  alignCenter: {
    textAlign: "center"
  }
}));

export default withRouter(Home);
