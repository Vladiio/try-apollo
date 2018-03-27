import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';


const Menu = () => (
  <div className='Menu'>
    <ul>
      <NavLink 
        className='Menu__link'
        to='/usd'
        activeClassName='Menu__link--active'
        >USD
      </NavLink>
      <NavLink
        to='/uah'
        activeClassName='Menu__link--active'
        >UAH
      </NavLink>
    </ul>
  </div>
);

export default Menu;