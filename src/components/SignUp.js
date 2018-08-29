import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "2rem auto",
    width: 350,
    height: 270,
  },
  container: {
    // alignText: "center",
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
    marginTop: "1rem",
    fontSize: "0.75rem"
  },
  err: {
    textAlign: "center",
    padding: "0.25rem",
    color: "#E57373"
  }
});

class Inputs extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    err: null
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleConfirmPasswordChange = e => {
    this.setState({ confirmPassword: e.target.value });
  };
  handleSignUp = () => {
    if (this.state.password === this.state.confirmPassword) {
      console.log(this.state);
      this.props.history.push("/");
    } else {
      this.setState({
        password: "",
        confirmPassword: "",
        err: true
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { email, password, confirmPassword, err } = this.state;
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
            error={err}
            inputProps={{
              "aria-label": "Description"
            }}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <Input
            placeholder="Repeat password"
            className={classes.input}
            error={err}
            inputProps={{
              "aria-label": "Description"
            }}
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
          {err && <div className={classes.err} >Passwords do not match. Try again.</div>}
          <Button
            onClick={this.handleSignUp}
            variant="contained"
            className={classes.button}
          >
            Sign Up
          </Button>
          <Link className={classes.link} to="/login">
            Already have an account?
          </Link>
        </div>
      </Paper>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Inputs);
