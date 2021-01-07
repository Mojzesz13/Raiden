import React from 'react';
import './Home.scss';
import HomeHeader from './HomeHeader/HomeHeader';
import OurMission from './OurMission/ourMission';
import AboutUs from './AboutUs/aboutUs';
import Brief from './Brief/Brief';
import Footer from '../Home/Footer/Footer';
import ScrollArrow from '../common/scrollUpButton';

const Home = () => {
  return (
    <div className='homeContainer' id='main'>
      <HomeHeader />
      <ScrollArrow />
      <AboutUs />
      <OurMission />
      <Brief />
      <Footer />
    </div>
  );
};

export default Home;
