import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./notfound.scss"

export class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
        <h1 className='emoji'>🤔</h1>
        <h3>Sorry, page not found or still under construction.</h3>
        <Link to="/" element="/home">Go back to homepage</Link>
      </div>
      
    )
  }
}

export default NotFound