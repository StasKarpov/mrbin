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
import reddit from "../assets/img/reddit.jpeg";

const ProductPreview = ({
  history,
  showComments = false,
  showAddRecomendation = false,
  showBack = false,
  backLink = "/",
  showSeeRecomendation = false,
  product: productProps = null
}) => {
  const styles = useStyles();
  const { product: productContext, setProduct } = useContext();
  let product = productProps || productContext;

  const handleShowProduct = () => {
    setProduct(product);
    history.push("/product");
  };

  const handleBack = () => {
    history.push(backLink);
    setProduct(null);
  };

  return product && product.name ? (
    <Card className={styles.p}>
      <Grid container>
        {showBack && (
          <Grid item xs={1}>
            <Icon onClick={handleBack}>keyboard_arrow_left</Icon>
          </Grid>
        )}
        <Grid item xs={10}>
          <Typography
            className={`${styles.alignCenter} ${styles.margin}`}
            variant="h4"
          >
            {product.name}
          </Typography>
        </Grid>
        <Grid className={styles.vote} item xs={1}>
          <Icon>keyboard_arrow_up</Icon>
          <span style={{ fontFamily: "Poppers", fontWeight: "700" }}>
            {Math.floor(Math.random() * 90 + 10)}k
          </span>
          <Icon>keyboard_arrow_down</Icon>
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
          {product.comments.length > 0 ? (
            <Typography variant="subtitle2">{`${product.comments.length} comments availible.`}</Typography>
          ) : (
            <Typography variant="subtitle1">
              Unfortunatly, we dont have a recucling instructions for this
              product. Let's ask Bin Community for help :3
            </Typography>
          )}
        </Grid>
        {showSeeRecomendation && (
          <Grid item align="center" className={styles.p} xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleShowProduct}
            >
              RECYCLING RECOMENDATIONS
            </Button>
          </Grid>
        )}
        {showComments && product.comments.length > 0 && (
          <Comment comment={product.comments[0]} />
        )}
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
    height: "9rem",
    backgroundSize: "contain"
  },
  p: {
    padding: "1rem"
  },
  ml: {
    marginLeft: "1rem",
    marginTop: "-0.5rem"
  },
  alignCenter: {
    textAlign: "center"
  },
  margin: {
    margin: "-9px 0 10px 0"
  },
  vote: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default withRouter(ProductPreview);
