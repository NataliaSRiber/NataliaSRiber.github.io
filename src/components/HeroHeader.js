import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
      <nav className="nav-header">
        <div>
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <div>
          <Link to="/projects" className="nav-link">Projects</Link>
        </div>
        <div>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    )
  }
}
