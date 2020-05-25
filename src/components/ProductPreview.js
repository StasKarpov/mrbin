import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useContext } from "../context/app";
import Comment from "./Comment";

const ProductPreview = ({
  history,
  showComments = false,
  showAddRecomendation = false,
  showBack = false,
  showSeeRecomendation = false
}) => {
  const styles = useStyles();
  const { product, setProduct } = useContext();

  const handleShowProduct = () => {
    history.push("/product");
  };

  const handleBack = () => {
    history.push("/");
    setProduct(null);
  };

  return product && product.name ? (
    <Card className={styles.p}>
      <Grid container>
        {showBack && (
          <Grid item xs={12}>
            <Icon onClick={handleBack}>keyboard_arrow_left</Icon>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h3">{product.name}</Typography>
        </Grid>
        <Grid item xs={5}>
          <CardMedia className={styles.media} image={product.image} />
        </Grid>
        <Grid item xs={7}>
          <CardContent>
            <Typography variant="subtitle1">{product.desciption}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography variant="subtitle2">{`${product.comments.length} comments availible.`}</Typography>
        </Grid>
        {showSeeRecomendation && (
          <Grid item align="center" className={styles.p} xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleShowProduct}
            >
              See recomendations
            </Button>
          </Grid>
        )}
        {showComments && <Comment comment={product.comments[0]} />}
        {showAddRecomendation && (
          <Grid item align="center" className={styles.p} xs={12}>
            <Button
              onClick={() => history.push("/addRecomendation")}
              variant="outlined"
              color="secondary"
              className={styles.p}
            >
              Add recomendation
            </Button>
          </Grid>
        )}
      </Grid>
    </Card>
  ) : null;
};

const useStyles = makeStyles(theme => ({
  media: {
    width: "9rem",
    height: "9rem"
  },
  p: {
    padding: "1rem"
  }
}));

export default withRouter(ProductPreview);
