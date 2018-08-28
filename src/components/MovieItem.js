import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";

// import { connect } from "react-redux";

const styles = {
  card: {
    margin: "1rem auto",
    maxWidth: 400
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#6B6B6B"
  },
  like: {
    color: "#E57373"
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
};

class ImgMediaCard extends Component {
  state = {
    like: false
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { classes } = this.props;
    const { id, title, description } = this.props.movieInfo;
    return (
      <Card className={classes.card}>
        <Link to={`/movies/${id}`}>
          <CardMedia
            component="img"
            className={classes.media}
            height="150"
            image="/img/movies/poster.jpg"
            title={`${title} movie poster`}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <Link className={classes.link} to={`/movies/${id}`}>
              {title}
            </Link>
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
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
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movieInfo: PropTypes.object.isRequired
};

// const MSTP = state => {
//   return {
//     movies: state.movies
//   }
// }

// export default connect()(withStyles(styles)(ImgMediaCard));

export default withStyles(styles)(ImgMediaCard);
