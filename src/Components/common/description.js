import React from 'react';
import './description.scss';

const Description = ({ icon, title, text }) => {
  return (
    <div className='salesContainer'>
      <img src={icon} alt={title} />
      <h1>{title}</h1>
      <div className='descriptionContainer'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Description;
