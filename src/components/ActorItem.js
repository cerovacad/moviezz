import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: 200,
    margin: "1rem auto",
  },
  media: {
    height: 340
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#6B6B6B"
  },
};

function MediaCard(props) {
  const { classes } = props;
  const { id, first_name, last_name } = props.actorInfo;
  return (
    <Card className={classes.card}>
      <Link className={classes.link} to={`/actors/${id}`}>
        <CardMedia
          className={classes.media}
          image="/img/actors/actor.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            {`${first_name} ${last_name}`}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
