import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, TextField } from "@material-ui/core";
import { Grid, Icon } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useContext } from "../context/app";
import ProductPreview from "../components/ProductPreview";
import { DESTINATIONS } from "../config/mock";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CreateRecomendation = ({ history }) => {
  const { product } = useContext();
  const [destinations, setDestinations] = React.useState([]);

  const addDestinationField = () => {
    setDestinations([...destinations, {}]);
  };

  return product && product.name ? (
    <Grid container>
      <Grid item xs={12}>
        <ProductPreview showBack />
      </Grid>
      {destinations.map((d, i) => (
        <Grid item xs={12}>
          <div style={{ width: "18rem", margin: "1rem" }}>
            <Card>
              <CardContent>
                <TextField label="Enter comment" />
                <Autocomplete
                  options={DESTINATIONS}
                  getOptionLabel={option => option.name}
                  fullWidth
                  //onChange={(e, v) => handleSetDestination(i, v.id)}
                  renderInput={params => (
                    <TextField {...params} label="Choose a destination" />
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
          <Icon>add</Icon> Add ddestination
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined">
          Submit
        </Button>
      </Grid>
    </Grid>
  ) : null;
};

export default withRouter(CreateRecomendation);
