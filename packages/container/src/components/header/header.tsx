import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AppBar, Grid, Avatar, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/slices/user.slice";

export default function SimpleMenu() {
  const user = useSelector(userSelector);
  return (
    <AppBar>
      <Toolbar>
        <Grid justify="space-between" container >
          <Grid item>
            <Button variant="outlined" color="inherit" component={Link} to='/' > Home </Button>
            <Button variant="outlined" color="inherit" component={Link} to='/order' > Order </Button>
            <Button variant="outlined" color="inherit" component={Link} to='/stock' > Stock </Button>
          </Grid>
          {
            user &&
            <Grid item>
              <Typography display="inline">
                {user.name}
              </Typography>
              <Avatar src={user.photo} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                {user.name}
              </Avatar>
            </Grid>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}