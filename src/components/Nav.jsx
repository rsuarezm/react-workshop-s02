import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav () {
    return (
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/dograndom'>Dog</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/dogbreeds'>Dog Breeds</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/catrandom'>Cat</NavLink>
        </li>
      </ul>
    )
}
export default Nav;
