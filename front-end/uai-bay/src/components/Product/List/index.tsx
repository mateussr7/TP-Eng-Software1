import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FC } from "react-router/node_modules/@types/react";
import { Product } from "../../../store/Products/types";
import { useStyles } from "./styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import { User } from "../../../store/User/types";
import { useDispatch } from "react-redux";
import { addItem, addItemSagas } from "../../../store/Cart/actions";
import { fetchProductsSagas } from "../../../store/Products/sagas";
import { fetchProducts } from "../../../store/Products/actions";
import { useHistory } from "react-router-dom";

interface ProductListProps {
  products: Product[];
  setAddMode: () => void;
  setViewMode: (product: Product) => void;
  user: User;
}

export const ProductList: FC<ProductListProps> = ({
  products,
  setAddMode,
  setViewMode,
  user,
}: ProductListProps) => {
  const classes = useStyles();
  const [listedProducts, setListedProducts] = useState<Product[]>([]);
  const history = useHistory()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setListedProducts(products);
  }, [products]);

  function handleCartButtonClick(product: Product){
    dispatch(addItemSagas(product))
  }

  return (
    <Grid item style={{ width: "100%" }}>
      <List>
        {listedProducts.map((product) => (
          <ListItem button key={product.id} className={classes.listProduct}>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <div className={classes.productDiv}>
              <Typography>
                {product.name} - {product.brand}
              </Typography>
              <div>
                <Typography>R${product.price}</Typography>
              </div>
            </div>
            <div className={classes.buttonDiv}>
              <IconButton style={{ justifyContent: "center" }} onClick={() => handleCartButtonClick(product)}>
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      {user.isAdmin && (
        <div className={classes.newProductButtonDiv}>
          <Button color="primary" variant="contained" onClick={setAddMode}>
            New Product <AddIcon />
          </Button>
        </div>
      )}
    </Grid>
  );
};
