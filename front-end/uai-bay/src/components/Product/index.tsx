import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { getProducts, getProductInView } from "../../store/Products/selectors";
import { Fade, Paper } from "@material-ui/core";
import { ProductList } from "./List";
import { AddProduct } from "./Add";
import { getLoggedUser } from "../../store/User/selectors";
import { User } from "../../store/User/types";

export const Product: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const products = useSelector(getProducts);
  const productInView = useSelector(getProductInView);
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [listMode, setListMode] = useState<boolean>(true);
  const [addMode, setAddMode] = useState<boolean>(false);
  const user = useSelector(getLoggedUser)

  function handleAddMode() {
    setAddMode(!addMode);
    setListMode(!listMode);
  }

  function handleViewMode() {
    setViewMode(!viewMode);
    setListMode(!listMode);
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
            setViewMode={handleViewMode}
            user={user as User}
          />
        )}
        {addMode && <AddProduct />}
      </Paper>
    </Fade>
  );
};
