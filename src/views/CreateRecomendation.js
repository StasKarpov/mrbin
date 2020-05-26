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

const CreateRecomendation = ({ history }) => {
  const { product, setProducts, setProduct, products } = useContext();
  const [destinations, setDestinations] = React.useState([]);

  const addDestinationField = () => {
    setDestinations([...destinations, {}]);
  };

  const goHome = () => {
    history.push("/");
  };

  const submit = () => {
    const newProducts = JSON.parse(JSON.stringify(products));
    newProducts.find(({ id }) => id === 3).comments = [
      {
        text: "",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "Opakowanie z kartonu",
            destination: "paper_pl_warsaw"
          },
          {
            text: "Kryszeczka",
            destination: "mix_pl_warsaw"
          }
        ]
      }
    ];
    console.log(newProducts);
    setProducts(newProducts);
    setProduct(newProducts[2]);
    history.push("/");
  };

  return product && product.name ? (
    <Grid container>
      <Grid item xs={12}>
        <ProductPreview showBack />
      </Grid>
      {destinations.map((d, i) => (
        <Grid item xs={12}>
          <div style={{ width: "327px", marginTop: "1rem" }}>
            <Card>
              <CardContent>
                <TextField fullWidth label="Enter the packaging type" />
                <Autocomplete
                  options={DESTINATIONS}
                  getOptionLabel={option => option.name}
                  fullWidth
                  //onChange={(e, v) => handleSetDestination(i, v.id)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Chose a recommended bin type"
                    />
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button onClick={addDestinationField}>
          {" "}
          <Icon>add</Icon> Add the waste type
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined" onClick={submit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  ) : (
    (() => {
      goHome();
      return null;
    })()
  );
};

export default withRouter(CreateRecomendation);
