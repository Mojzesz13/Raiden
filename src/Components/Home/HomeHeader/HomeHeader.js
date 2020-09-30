import React from 'react';
import ControlledCarousel from '../../common/carousel';
import Navigation from '../Navigation/navigation';
import './HomeHeader.scss';

const HomeHeader = () => {
  return (
    <div className="homeHeaderContainer">
      <Navigation />
      <ControlledCarousel />
    </div>
  );
};

export default HomeHeader;
