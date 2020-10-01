import React, { useState, useEffect } from 'react';
import './ourMission.scss';
import img1 from '../../../assets/bg1.jpg';
import img2 from '../../../assets/bg2.jpg';
import img3 from '../../../assets/bg3.jpg';
import img4 from '../../../assets/bg4.jpg';
import img5 from '../../../assets/bg5.jpg';
import img6 from '../../../assets/bg6.jpg';
import img7 from '../../../assets/bg7.jpg';
import img8 from '../../../assets/bg8.jpg';
import img9 from '../../../assets/bg9.jpg';

const listItems = [
  {
    index: 1,
    text: 'Kontakt telefoniczny',
    src: img1,
  },
  {
    index: 2,
    text: 'Umówienie spotkania',
    src: img2,
  },
  {
    index: 3,
    text: 'Wykonanie audytu energetycznego',
    src: img3,
  },
  {
    index: 4,
    text: 'Wybranie najlepszej oferty z rynku energetycznego',
    src: img4,
  },
  {
    index: 5,
    text: 'Negocjacje stawek sprzedażowych',
    src: img5,
  },
  {
    index: 6,
    text: 'Optymalizacja kosztów dystrybucji',
    src: img6,
  },
  {
    index: 7,
    text: 'Podpisanie umowy ',
    src: img7,
  },
  {
    index: 8,
    text: 'Oszczędność energetyczna ',
    src: img8,
  },
];

const OurMission = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isTablet, setIsTablet] = useState(false);

  const resize = () => {
    let currentView = window.innerWidth <= 1099;
    if (currentView !== isTablet) {
      setIsTablet(currentView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();
    return window.removeEventListener('resize', resize.bind(this));
  });

  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSetImage = (source) => {
    setImageSrc(source);
    setIsHovering(true);
  };

  console.log();

  return (
    <div className="ourMissionContainer" id="ourMission">
      <div
        className="mainContent"
        style={
          isTablet
            ? { backgroundImage: `url(${imageSrc})` }
            : { backgroundImage: `url(${img9})` }
        }
      >
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
        className={isHovering ? 'divider' : 'notHovering'}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </div>
  );
};

export default OurMission;
