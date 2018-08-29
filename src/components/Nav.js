import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { auth } from "../actions/authActions";
import { Redirect } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    outline: "none",
    textDecoration: "none",
    color: "#696969"
  }
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    redirect: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.auth(null);
    this.setState({ redirect: true });
  };

  render() {
    const { classes, isAuth } = this.props;
    const { anchorEl, redirect } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
      {redirect && <Redirect to="/"/>}
        <AppBar color="default" position="static">
          <Toolbar>
            {isAuth ? (
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon onClick={this.handleMenu} />
              </IconButton>
            ) : (
              ""
            )}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              MoviesApp
            </Typography>
            {isAuth && <Button onClick={this.handleLogout} color="inherit">Logout</Button>}
            <div>
              <Menu
                disableAutoFocus={true}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <Link className={classes.link} to="/movies/">
                  <MenuItem onClick={this.handleClose}>Movies</MenuItem>
                </Link>
                <Link className={classes.link} to="/actors/">
                  <MenuItem onClick={this.handleClose}>Actors</MenuItem>
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};

export default connect(
  mapStateToProps,
  { auth }
)(withStyles(styles)(MenuAppBar));
