import { Container, Fade, Paper } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  getLogged,
  getUserList,
} from "../../store/User/selectors";
import { User } from "../../store/User/types";
import UserList from "./List";

import { useStyles } from "./styles";

const UserComponent: FC = () => {
  //const [viewMode, setViewMode] = useState<boolean>(false);
  const [listMode, ] = useState<boolean>(true);
  //const [updateMode, setUpdateMode] = useState<boolean>(false);
  const logged: boolean = useSelector(getLogged);
  //const user: User | null = useSelector(getLoggedUser);
  const users: User[] = useSelector(getUserList);
  const classes = useStyles();

  //function handleListModeChange() {
  //  setListMode(!listMode);
  //}

  //function handleUpdateModeChange() {}

  return (
    <Fade
      style={{
        overflow: "hidden",
        borderTop: "8px solid #3F51B5",
        borderRadius: "3px",
      }}
      timeout={500}
      in={true}
      mountOnEnter
      unmountOnExit
    >
      <Paper className={classes.paper}>
        <Container className={classes.container}>
            {logged && listMode && <UserList users={users} />}
        </Container>
      </Paper>
    </Fade>
  );
};

export default UserComponent;
