import React from 'react';
import { Link } from 'react-scroll';
import './button.scss';

const Button = ({ buttonText, linkTo }) => {
  return (
    <div className='buttonContainer'>
      <Link
        className='contactButton'
        activeClass='active'
        to={linkTo}
        spy={true}
        smooth={true}
        duration={500}
      >
        <span />
        <span />
        <span />
        <span />
        {buttonText}
      </Link>
    </div>
  );
};

export default Button;
