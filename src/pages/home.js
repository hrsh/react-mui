import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import User from "../components/User";

class home extends Component {
  state = {
    users: null,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=10&_limit=20")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentUsers = this.state.users ? (
      this.state.users.map((user) => <User key={user.id} user={user} />)
    ) : (
      <p>Loading ...</p>
    );
    return (
      <Grid container spacing={8}>
        <Grid item sm={8} xs={12}>
          {recentUsers}
        </Grid>
        <Grid item sm={4} xs={12}>
          Side bar
        </Grid>
      </Grid>
    );
  }
}

export default home;
