import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./home.css";

export class home extends Component {
  static propTypes = {}

  render() {
    return (
      <div id="homepage">
      <h1>Welcome to MatLab!</h1>
      <h2>This is a news webpage createad by Mateus Rocha in 2024</h2>
      <h2>Sign In to see the content</h2>
      <button onClick="">Sign In</button>
      </div>
    );
  }
}

export default home