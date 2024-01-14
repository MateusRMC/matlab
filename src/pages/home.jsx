import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./home.scss";
import { Outlet, Link } from 'react-router-dom';

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <div id="homepage">
      <h1>Welcome to MatLab!</h1>
      <h2>The News Web Application</h2>
        <div id="cta">
          <Link to="/login">
            <button>Sign In</button>
          </Link>
          <br />
          <Link className='signup' to="/register">Don't have an account? Sign Up</Link>
          <footer>Made by <a href='https://github.com/MateusRMC'>Mateus Rocha</a></footer>
        </div>
      </div>
      </>
    );
  }
}

export default Home