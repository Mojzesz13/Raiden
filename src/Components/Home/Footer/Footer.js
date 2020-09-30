import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerConainer">
      <div className="column">
        <p>Raiden</p>
        <p>ul.Mariacka 7/3</p>
        <p>40-014 Katowice</p>
      </div>
      <div className="column">
        <a href="https://www.facebook.com/Raiden-Polska-Energia-111047260640361">
          <i className="fab fa-facebook-square fa-2x" />
        </a>
        <p>tel. 514 029 843</p>
        <a href="mailto:biuro@raiden.pl">biuro@raiden.pl</a>
      </div>
      <div className="column">
        <p>Pn-pt: 07:00 - 15:00</p>
        <p>Sb: nieczynne</p>
        <p>Nd: nieczynne</p>
      </div>
    </div>
  );
};

export default Footer;
