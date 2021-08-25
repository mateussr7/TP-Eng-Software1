import React, { FC } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { getLoggedUser } from "../../store/User/selectors";
import { User } from "../../store/User/types";
import { useSelector } from "react-redux";

interface ItemListProps {
  logged: boolean;
}

export const ItemsList: FC<ItemListProps> = (props) => {
  return (
    <div>
      {props.logged && (
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
      {props.logged && (
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
      {props.logged && (
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
      {props.logged && (
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/sales">
          <ListItem>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
        </Link>
      )}
    </div>
  );
};
