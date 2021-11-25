import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/"> Home </Link>
        <Link to="/order"> order </Link>
        <Link to="/stock"> stock </Link>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ horizontal: "center", vertical: "center" }}
        >
          <MenuItem onClick={handleClose}>1</MenuItem>
          <MenuItem onClick={handleClose}>2</MenuItem>
          <MenuItem onClick={handleClose}>3</MenuItem>
          <MenuItem onClick={handleClose}>10</MenuItem>
          <MenuItem onClick={handleClose}>20</MenuItem>
          <MenuItem onClick={handleClose}>300</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}