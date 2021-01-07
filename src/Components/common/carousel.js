import React from 'react';
import './carousel.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from './button';

const textContent = {
  text1: 'TAŃSZA ENERGIA PORAŻA ZYSKIEM ',
  text2:
    'Jeśli chciałbyś pracować w jednej z najszybciej rozwijających się firm w Polsce, skontaktuj się z nami!',
  text3: 'Oszczędność to najlepszy wybór!',
};

const ControlledCarousel = () => {
  return (
    <Carousel className='carouselContainer' interval={3500}>
      <Carousel.Item className='itemContainer'>
        <div className='d-block w-100' />
        <Carousel.Caption>
          <div className='slide'>
            <h1>{textContent.text1}</h1>
            <Button buttonText={'sprawdź'} linkTo={'ourMission'} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='itemContainer'>
        <div className='d-block w-100' />
        <Carousel.Caption>
          <div className='slide second'>
            <h2>KARIERA</h2>
            <p>{textContent.text2}</p>
            <Button buttonText={'kontakt'} linkTo={'brief'} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='itemContainer'>
        <div className='d-block w-100' />
        <Carousel.Caption>
          <div className='slide'>
            <h1>{textContent.text3}</h1>
            <Button buttonText={'zamów audyt'} linkTo={'brief'} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
