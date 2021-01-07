import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
import logo from '../../../../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt='RaidenLogo' />
      </Link>
    </div>
  );
};

export default Logo;
