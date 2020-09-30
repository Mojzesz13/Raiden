import React from 'react';
import './aboutUs.scss';
import Description from '../../common/desription';
import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';
import icon4 from '../../../assets/icon4.svg';
import icon5 from '../../../assets/icon5.svg';
import icon6 from '../../../assets/icon6.svg';

const firstTitle = 'Obniżanie kosztów energii';
const secondTitle =
  'Negocjacja i zamrażanie stawek sprzedażowych energii elektrycznej';
const thidTitle = 'Przeprowadzanie audytów energetycznych';
const forthTitle =
  'Optymalizacja kosztów dystrybucji prądu i opłat przemysłowych';
const fifthTitle =
  'Dobór odpowiednich parametrów dystrybucji pod zapotrzebowanie klienta';
const sixTitle = 'Sprzedaż i montaż baterii niwelujących moc bierną';

const AboutUs = () => {
  return (
    <div className="aboutUsContainer" id="aboutUs">
      <div className="title">CZYM SIĘ ZAJMUJEMY?</div>
      <div className="tailsContainer">
        <Description icon={icon1} title={firstTitle} />
        <Description icon={icon2} title={secondTitle} />
        <Description icon={icon3} title={thidTitle} />
        <Description icon={icon4} title={forthTitle} />
        <Description icon={icon5} title={fifthTitle} />
        <Description icon={icon6} title={sixTitle} />
      </div>
    </div>
  );
};

export default AboutUs;
