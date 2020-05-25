import React from "react";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../api";

const AppContext = React.createContext();

function AppProvider(props) {
  const [localization, _] = React.useState("pl_warsaw_sriodmiejscie");

  const [products, setProducts] = React.useState([]);

  const [product, setProduct] = React.useState({ comments: [] });

  const loadProducts = async () => {
    setProducts(await fetchProducts());
  };

  return (
    <AppContext.Provider
      value={{
        localization,
        products,
        loadProducts,
        product,
        setProduct
      }}
      {...props}
    />
  );
}

const useContext = () => React.useContext(AppContext);

const AppProviderRouter = withRouter(AppProvider);

export { useContext, AppProviderRouter as AppProvider };
