import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import datjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  content: {
    padding: 25,
  },
  image: {
    minWidth: 200,
    minHeight: 200,
  },
};

class User extends Component {
  render() {
    const {
      classes,
      user: { title, url, id },
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia image={url} title={title} className={classes.image} />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${id}`}
            color="primary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {url}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(User);
