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

const styles = theme => ({
  card: {
    maxWidth: 450,
    margin: "1rem auto"
  },
  media: {
    height: 600,
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
    this.props.movies.map(movie => {
      if (movie.id === parseInt(this.props.match.params.id, 10)) {
        this.setState({ movie });
        return movie;
      }
      return movie;
    });
  }

  render() {
    const { classes } = this.props;
    const { movie } = this.state;
    return (
      <div>
        {movie ? (
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={movie.title}
              subheader={movie.release_year}
            />
            <CardMedia
              className={classes.media}
              image="/img/movies/poster.jpg"
              title={`${movie.title} poster`}
            />
            <CardContent>
              <Typography>Duration: {movie.length}</Typography>
              <br />
              <Typography>Genre: {movie.genre}</Typography>
              <br />
              <Typography>{movie.description}</Typography>
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
    movies: state.movies
  };
};

export default connect(MSTP)(withStyles(styles)(RecipeReviewCard));
