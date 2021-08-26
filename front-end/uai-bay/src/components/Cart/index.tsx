import {
  Button,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInCart } from "../../store/Cart/selectors";
import { useStyles } from "./styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeItemSagas } from "../../store/Cart/actions";
import { Product } from "../../store/Products/types";
import { getLoggedUser } from "../../store/User/selectors";
import { User } from "../../store/User/types";
import { addSale } from "../../store/Sales/actions";
import { useHistory } from "react-router-dom";

export const CartComponent: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsInCart: Product[] = useSelector(getProductsInCart);
  const user: User = useSelector(getLoggedUser) as User
  const history = useHistory()

  function handleDeleteIconClick(idProduct: number) {
    dispatch(removeItemSagas(idProduct));
  }

  function handleAddNewSale(){
    dispatch(addSale({customer: user}, productsInCart))
    history.push("/")
  }

  const [salePrice, setSalePrice] = useState(0);

  useEffect(() => {
    let value: number = productsInCart.reduce((sum, next) => {
      return sum + (next.price as number);
    }, 0);
    setSalePrice(value);
  }, [productsInCart]);

  return (
    <Fade
      style={{
        overflow: "hidden",
        borderTop: "8px solid #3F51B5",
        borderRadius: "3px",
        marginLeft: "20px",
      }}
      timeout={500}
      in={true}
      mountOnEnter
      unmountOnExit
    >
      <Paper>
        <Grid item>
          <div>
            <List>
              {productsInCart.map((product) => (
                <ListItem key={product.id} className={classes.listProduct}>
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
                    <IconButton
                      style={{ justifyContent: "center" }}
                      onClick={() =>
                        handleDeleteIconClick(product.id as number)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </ListItem>
              ))}
            </List>
            <div className={classes.finishSaleButtonDiv}>
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "20%",
                }}
              >
                <Typography>Sale Value: {salePrice}</Typography>
                <Button variant="contained" color="primary" onClick={handleAddNewSale}>
                  Finish Sale
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Paper>
    </Fade>
  );
};
