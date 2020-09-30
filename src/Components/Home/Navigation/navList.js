import React from 'react';
import './navList.scss';
import { Link } from 'react-scroll';

const NavList = ({ click }) => {
  return (
    <nav className={click ? 'headerLinks active' : 'headerLinks'}>
      <Link
        className="navLink"
        activeClass="active"
        to="aboutUs"
        spy={true}
        smooth={true}
        duration={500}
      >
        CZYM SIĘ ZAJMUJEMY?
      </Link>
      <Link
        className="navLink"
        activeClass="active"
        to="ourMission"
        spy={true}
        smooth={true}
        duration={500}
      >
        WSPÓŁPRACA
      </Link>
      <Link
        className="navLink"
        activeClass="active"
        to="brief"
        spy={true}
        smooth={true}
        duration={500}
      >
        KONTAKT
      </Link>
    </nav>
  );
};

export default NavList;
