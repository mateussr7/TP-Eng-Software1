import { Button, Grid, TextField } from "@material-ui/core";
import React, { FC, useState } from "react";
import { Product, ProductType } from "../../../store/Products/types";
import { useStyles } from "./styles";

interface AddProductProps {
  addProduct: (product: Product) => void;
}

export const AddProduct: FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState<ProductType>(
    ProductType.ELETRONICS
  );

  const classes = useStyles();

  function handleName(value: string) {
    setName(value);
  }

  function handleDescription(value: string) {
    setDescription(value);
  }

  function handleBrand(value: string) {
    setBrand(value);
  }

  function handleAmount(value: number) {
    setAmount(value);
  }

  function handlePrice(value: number) {
    setPrice(value);
  }

  function handleProductType(value: ProductType) {
    setProductType(value);
  }

  return (
    <Grid item style={{ width: '90%'}}>
      <div className={classes.textFieldDiv}>
        <TextField
          value={name}
          variant="outlined"
          onChange={(event) => handleName(event.target.value as string)}
          label="Name"
          className={classes.textFieldStyle}
        />
        <TextField
          value={description}
          variant="outlined"
          onChange={(event) => handleDescription(event.target.value as string)}
          label="Description"
          className={classes.textFieldStyle}
        />
        <TextField
          value={brand}
          variant="outlined"
          onChange={(event) => handleBrand(event.target.value as string)}
          label="Brand"
          className={classes.textFieldStyle}
        />
        <TextField
          value={amount}
          variant="outlined"
          onChange={(event) => handleAmount(Number(event.target.value as string) | 0)}
          label="Amount"
          className={classes.textFieldStyle}
        />
        <TextField
          value={price}
          variant="outlined"
          onChange={(event) =>
            handlePrice(Number(event.target.value as string) | 0)
          }
          label="Price"
          className={classes.textFieldStyle}
        />
        <div className={classes.buttonDiv}>
          <Button
            variant="contained"
            color="primary"
            style={{marginRight: '2px'}}
          >
            Add New Product
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{marginLeft: '2px'}}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Grid>
  );
};
