import React from "react";
import ActorItem from "../components/ActorItem";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';

const styles = {
  // card: {
  //   display: "flex",
  //   flexWrap: "wrap"
  // }
};

const Actors = ({ classes, actors }) => (
  <div>
  {/* {console.log(actors)} */}
    {actors.map(actor => (
      <ActorItem key={actor.id} actorInfo={actor} />
    ))}
  </div>
);

Actors.propTypes = {
  classes: PropTypes.object.isRequired
};

const MSTP = state => {
  return {
    actors: state.actors
  };
};

export default connect(MSTP)(withStyles(styles)(Actors));
