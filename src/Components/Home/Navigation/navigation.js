import React, { useState } from 'react';
import './navigation.scss';
import Logo from './Logo/logo';
import NavList from './navList';

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => setClick(!click);

  return (
    <div className="navigationContainer">
      <Logo />
      <div className="menuIcon" onClick={handleOnClick}>
        <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
      </div>
      <NavList click={click} />
    </div>
  );
};

export default Navigation;
