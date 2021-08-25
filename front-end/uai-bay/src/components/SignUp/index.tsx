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

export const SignUp: FC = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [passVisibility, setPassVisibility] = useState<boolean>(false);

  function handleNameChange(value: string) {
    setName(value);
  }

  function handleEmailChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleTelephoneChange(value: string) {
    setTelephone(value);
  }

  function handlePassVisibility() {
    setPassVisibility(!passVisibility);
  }

  function getTextFieldType(): string {
    if (passVisibility) return "text";
    else return "password";
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
        <Grid item container spacing={3} className={classes.root}>
          <div className={classes.main_container}>
            <div className={classes.labelDiv}>
              <Typography className={classes.signupLabel}>Sign Up</Typography>
            </div>
            <TextField
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleEmailChange(e.target.value as string)
              }
              variant="outlined"
              color="primary"
              label="E-mail"
              className={classes.textFieldStyle}
            />
            <TextField
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleNameChange(e.target.value as string)
              }
              variant="outlined"
              color="primary"
              label="Name"
              className={classes.textFieldStyle}
            />
            <OutlinedInput
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePasswordChange(e.target.value as string)
              }
              color="primary"
              placeholder="Password"
              type={getTextFieldType()}
              className={classes.textFieldStyle}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handlePassVisibility} edge="end">
                    {!passVisibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <TextField
              value={telephone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTelephoneChange(e.target.value as string)
              }
              variant="outlined"
              color="primary"
              label="Telephone"
              className={classes.textFieldStyle}
            />
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Sign Up
            </Button>
          </div>
        </Grid>
      </Paper>
    </Fade>
  );
};
