import React, { useState } from 'react';
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
  {
    index: 1,
    text: 'Kontakt telefoniczny',
    src: img1,
    cName: 'image1',
  },
  {
    index: 2,
    text: 'Umówienie spotkania',
    src: img2,
    cName: 'image2',
  },
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
  {
    index: 7,
    text: 'Podpisanie umowy ',
    src: img7,
    cName: 'image7',
  },
  {
    index: 8,
    text: 'Oszczędność energetyczna ',
    src: img8,
    cName: 'image8',
  },
];

const OurMission = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageSrc, setImageSrc] = useState(img1);

  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSetImage = (sorce) => {
    setImageSrc(sorce);
    setIsHovering(true);
  };

  return (
    <div className="ourMissionContainer" id="ourMission">
      <div className="mainContent">
        <div className="listHolder">
          <div className="titleHolder">Jak wygląda współpraca z nami</div>
          <ul>
            {listItems.map((obj) => (
              <li key={obj.index}>
                <p
                  onMouseLeave={handleOnMouseLeave}
                  onMouseEnter={() => handleSetImage(obj.src)}
                >
                  {obj.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={isHovering ? 'divider' : 'test'}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </div>
  );
};

export default OurMission;
