import React from 'react';
import { Link } from 'react-router-dom';

// import Home from './Home';
// import About from './About';

const Navigation = () => {
  return(
    <nav className={'deep-purple darken-1'}>
      <div className={'nav-wrapper'}>
        <ul className={'nav'}>
          <li>
            <Link to={'/'}>
              <button className={'white-text'}>Home</button>
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              <button className={'white-text'}>About</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
