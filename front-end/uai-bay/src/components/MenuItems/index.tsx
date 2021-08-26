import React, { FC } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface ItemListProps {
  logged: boolean;
}

export const ItemsList: FC<ItemListProps> = ({ logged }: ItemListProps) => {
  return (
    <div>
      {logged && (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/products"
        >
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
      )}
      {logged && (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/customers"
        >
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
        </Link>
      )}
      {logged && (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/employees"
        >
          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItem>
        </Link>
      )}
    </div>
  );
};
