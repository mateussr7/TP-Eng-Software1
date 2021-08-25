import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FC } from "react-router/node_modules/@types/react";
import { User } from "../../../store/User/types";
import { useStyles } from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }: UserListProps) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [listedUsers, setListedUsers] = useState<User[]>([])

  useEffect(() => {
    setListedUsers(users)
  }, [users])


  function deleteUser(id: number){
      setListedUsers(listedUsers.filter((el) => el.id != id))
  }

  return (
    <Grid item style={{width: '100%'}}> 
      <List>
        {listedUsers.map((el) => (
          <ListItem button key={el.id} className={classes.listItem}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <div className={classes.userDiv}>
              <Typography>
                {el.name} - {el.telephone} - {el.email}
              </Typography>
            </div>
            <div className={classes.trashDiv}>
              <IconButton onClick={(event) => deleteUser(el.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default UserList;
