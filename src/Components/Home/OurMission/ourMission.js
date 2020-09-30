import React from 'react';
import './ourMission.scss';
import img1 from '../../../assets/bg1.jpg';
import img2 from '../../../assets/bg2.jpg';
import img3 from '../../../assets/bg3.jpg';
import img4 from '../../../assets/bg4.jpg';
import img5 from '../../../assets/bg5.jpg';
import img6 from '../../../assets/bg6.jpg';
import img7 from '../../../assets/bg7.jpg';
import img8 from '../../../assets/bg8.jpg';

const listItems = [
  { index: 1, text: 'Kontakt telefoniczny', src: img1, cName: 'image1' },
  { index: 2, text: 'Umówienie spotkania', src: img2, cName: 'image2' },
  {
    index: 3,
    text: 'Wykonanie audytu energetycznego',
    src: img3,
    cName: 'image3',
  },
  {
    index: 4,
    text: 'Wybranie najlepszej oferty z rynku energetycznego',
    src: img4,
    cName: 'image4',
  },
  {
    index: 5,
    text: 'Negocjacje stawek sprzedażowych',
    src: img5,
    cName: 'image5',
  },
  {
    index: 6,
    text: 'Optymalizacja kosztów dystrybucji',
    src: img6,
    cName: 'image6',
  },
  { index: 7, text: 'Podpisanie umowy ', src: img7, cName: 'image7' },
  { index: 8, text: 'Oszczędność energetyczna ', src: img8, cName: 'image8' },
];

const OurMission = () => {
  return (
    <div className="ourMissionContainer" id="ourMission">
      <div className="mainContent">
        <div className="listHolder">
          <div className="titleHolder">Jak wygląda współpraca z nami</div>
          <ul>
            {listItems.map((obj, index) => (
              <li key={index}>
                <p>{obj.text}</p>
                <img className={obj.cName} src={obj.src} alt={obj.text} />
              </li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default OurMission;

/* <ul>
            <li>
              <p>Kontakt telefoniczny</p>
              <img className="image1" src={img1} alt="img1" />
            </li>
            <li>
              <p>Umówienie spotkania</p>
              <img className="image2" src={img2} alt="img1" />
            </li>
            <li>
              <p>Wykonanie audytu energetycznego</p>
              <img className="image3" src={img3} alt="img1" />
            </li>
            <li>
              <p>Wybranie najlepszej oferty z rynku energetycznego</p>
              <img className="image4" src={img4} alt="img1" />
            </li>
            <li>
              <p>Negocjacje stawek sprzedażowych</p>
              <img className="image5" src={img5} alt="img1" />
            </li>
            <li>
              <p>Optymalizacja kosztów dystrybucji</p>
              <img className="image6" src={img6} alt="img1" />
            </li>
            <li>
              <p>Podpisanie umowy</p>
              <img className="image7" src={img7} alt="img1" />
            </li>
            <li>
              <p>Oszczędność energetyczna</p>
              <img className="image8" src={img8} alt="img1" />
            </li>
          </ul> */
