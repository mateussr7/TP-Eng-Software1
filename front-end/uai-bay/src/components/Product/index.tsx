import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { getProducts } from "../../store/Products/selectors";
import { Fade, Paper } from "@material-ui/core";
import { ProductList } from "./List";
import { AddProduct } from "./Add";
import { getLoggedUser } from "../../store/User/selectors";
import { User } from "../../store/User/types";
import { Product as ProductEntity } from "../../store/Products/types";

export const Product: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const products = useSelector(getProducts);
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [listMode, setListMode] = useState<boolean>(true);
  const [addMode, setAddMode] = useState<boolean>(false);
  const user = useSelector(getLoggedUser);

  function handleAddMode() {
    setAddMode(!addMode);
    setListMode(!listMode);
  }

  function addNewProduct(product: ProductEntity): void {}

  function cancellAdd() {
    setListMode(true)
    setAddMode(false)
  }

  function handleProductinView(product: ProductEntity) {
    setViewMode(true);
    setListMode(false);
    setAddMode(false);
  }

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
      <Paper className={classes.paper}>
        {listMode && (
          <ProductList
            products={products}
            setAddMode={handleAddMode}
            setViewMode={handleProductinView}
            user={user as User}
          />
        )}
        {addMode && (
          <AddProduct addProduct={addNewProduct} cancellAdd={cancellAdd} />
        )}
      </Paper>
    </Fade>
  );
};
