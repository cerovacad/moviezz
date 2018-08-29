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
    height: 230
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "inherit",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "0.75rem"
  }

});

class Inputs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <div className={classes.container}>
          <Input
            placeholder="Email"
            className={classes.input}
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Input
            placeholder="Password"
            className={classes.input}
            error={false}
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Input
            placeholder="Repeat password"
            className={classes.input}
            error={false}
            inputProps={{
              "aria-label": "Description"
            }}
          />
          <Button variant="contained" className={classes.button}>
            Sign Up
          </Button>
          <Link className={classes.link} to="/login">Already have an account?</Link>
        </div>
      </Paper>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Inputs);
