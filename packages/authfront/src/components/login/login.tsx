import React from 'react';
import useLogin from './useLogin';
import { Paper, Grid, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';

function Login() {
  const { username,
    password,
    submitCredential,
    onChangeUsername,
    onChangePassword,
  } = useLogin();
  return (
    <Paper style={{ maxWidth: '500px', margin: '100px auto 0 auto' }}>
      <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            ☻
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField id="username" label="Username" type="email" fullWidth autoFocus required
              value={username} onChange={onChangeUsername} />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            ♦
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField id="password" label="Password" type="password" fullWidth required
              value={password} onChange={onChangePassword} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <FormControlLabel control={
              <Checkbox
                color="primary"
              />
            } label="Remember me" />
          </Grid>
          <Grid item>
            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button variant="outlined" color="primary" style={{ textTransform: "none" }}
            onClick={submitCredential}
          >Login</Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default Login;
