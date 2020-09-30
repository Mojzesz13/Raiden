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
  const [isHovering, setIsHovering] = useState(false);
  const [imageSrc, setImageSrc] = useState(img1);

  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSetImage = () => {
    setImageSrc(listItems[0].src);
    setIsHovering(true);
  };

  const handleSetImage1 = () => {
    setImageSrc(listItems[1].src);
    setIsHovering(true);
  };

  const handleSetImage2 = () => {
    setImageSrc(listItems[2].src);
    setIsHovering(true);
  };

  const handleSetImage3 = () => {
    setImageSrc(listItems[3].src);
    setIsHovering(true);
  };

  const handleSetImage4 = () => {
    setImageSrc(listItems[4].src);
    setIsHovering(true);
  };

  const handleSetImage5 = () => {
    setImageSrc(listItems[5].src);
    setIsHovering(true);
  };

  const handleSetImage6 = () => {
    setImageSrc(listItems[6].src);
    setIsHovering(true);
  };
  const handleSetImage7 = () => {
    setImageSrc(listItems[7].src);
    setIsHovering(true);
  };

  return (
    <div className="ourMissionContainer" id="ourMission">
      <div className="mainContent">
        <div className="listHolder">
          <div className="titleHolder">Jak wygląda współpraca z nami</div>
          <ul>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage}
              >
                {listItems[0].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage1}
              >
                {listItems[1].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage2}
              >
                {listItems[2].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage3}
              >
                {listItems[3].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage4}
              >
                {listItems[4].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage5}
              >
                {listItems[5].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage6}
              >
                {listItems[6].text}
              </p>
            </li>
            <li>
              <p
                onMouseLeave={handleOnMouseLeave}
                onMouseEnter={handleSetImage7}
              >
                {listItems[7].text}
              </p>
            </li>
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

/* <ul>
            {listItems.map((obj, index) => (
              <li
                key={index}
                onMouseEnter={(handleOnMouseEnter, handleTest(obj.text))}
                onMouseLeave={handleOnMouseLeave}
              >
                <p>{obj.text}</p>
              </li>
            ))}
          </ul> */
