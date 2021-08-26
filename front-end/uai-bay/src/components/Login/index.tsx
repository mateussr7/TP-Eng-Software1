import {
  Button,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/User/actions";

export const Login: FC = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passVisibility, setPassVisibility] = useState<boolean>(true);
  const classes = useStyles();

  function handleLoginClickButton(){
    dispatch(login({email: email, password: password}))
  }

  function handleEmailChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handlePassVisibility() {
    setPassVisibility(!passVisibility);
  }

  function getTextFieldType(): string {
    if (!passVisibility) return "text";
    else return "password";
  }

  return (
    <Fade
      style={{
        overflow: "hidden",
        marginTop: "80px",
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
        <Grid
          item
          container
          direction="column"
          spacing={3}
          className={classes.root}
        >
          <div className={classes.main_container}>
            <div className={classes.labelDiv}>
              <Typography className={classes.loginLabel}>Login</Typography>
            </div>
            <TextField
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleEmailChange(event.target.value as string)
              }
              color="primary"
              variant="outlined"
              label="E-mail"
              className={classes.textFieldStyle}
            />
            <OutlinedInput
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePasswordChange(e.target.value as string)  
              }
              color="primary"
              label="Password"
              type={getTextFieldType()}
              className={classes.textFieldStyle}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handlePassVisibility} edge="end">
                    {passVisibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={handleLoginClickButton}
            >
              Login
            </Button>
            <Button>
              <Link to="/signup"> or Sign Up</Link>
            </Button>
          </div>
        </Grid>
      </Paper>
    </Fade>
  );
};
