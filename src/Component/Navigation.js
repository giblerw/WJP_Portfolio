import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav id="header" className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between" >

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDiv" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDiv">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navigation;
