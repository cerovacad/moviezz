import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "../actions/authActions";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "2rem auto",
    width: 350,
    height: 180
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    color: "inherit",
    textAlign: "center",
    marginTop: "1rem"
  }
});

class Inputs extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleLogin = () => {
    console.log(this.state);
    this.props.auth(`${this.state.email}${this.state.password}`);
    this.props.history.push('/movies')
  };
  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <Paper className={classes.root} elevation={1}>
        <div className={classes.container}>
          <Input
            placeholder="Email"
            className={classes.input}
            inputProps={{
              "aria-label": "Description"
            }}
            value={email}
            onChange={this.handleEmailChange}
          />
          <Input
            placeholder="Password"
            className={classes.input}
            error={false}
            inputProps={{
              "aria-label": "Description"
            }}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <Button
            onClick={this.handleLogin}
            variant="contained"
            className={classes.button}
          >
            Login
          </Button>
          <Link className={classes.link} to="/signup">
            Don't have an account?
          </Link>
        </div>
      </Paper>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { auth })(withStyles(styles)(Inputs));
