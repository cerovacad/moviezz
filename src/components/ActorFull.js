import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { dashToSpace } from "../utils/helpers";

const styles = theme => ({
  card: {
    width: 450,
    margin: "1rem auto"
  },
  media: {
    height: 350,
    paddingTop: "56.25%" // 16:9
  },
  like: {
    color: "#E57373"
  },
  actions: {
    display: "flex"
  }
});

class RecipeReviewCard extends React.Component {
  state = {
    like: false
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  componentDidMount() {
    this.props.actors.map(actor => {
      if (actor.id === parseInt(this.props.match.params.id, 10)) {
        this.setState({ actor });
        return actor;
      }
      return actor;
    });
  }

  render() {
    const { classes } = this.props;
    const { actor } = this.state;
    return (
      <div>
        {actor ? (
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={`${actor.first_name} ${actor.last_name}`}
              subheader={`Born: ${dashToSpace(actor.born)}`}
            />
            <CardMedia
              className={classes.media}
              image="/img/actors/actor.jpg"
              title={`${actor.born} poster`}
            />
            <CardContent>
              {/* <Typography>Duration: {actor.length}</Typography>
              <br />
              <Typography>Genre: {actor.genre}</Typography>
              <br /> */}
              <Typography>{actor.biography}</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon
                  className={this.state.like ? classes.like : ""}
                  onClick={this.handleLike}
                />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const MSTP = state => {
  return {
    actors: state.actors
  };
};

export default connect(MSTP)(withStyles(styles)(RecipeReviewCard));
