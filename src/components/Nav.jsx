import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div>logo</div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Support</Link></li>
      <li><Link to="/">About</Link></li>
      </ul>
    </>
  );
};

export default Nav;
