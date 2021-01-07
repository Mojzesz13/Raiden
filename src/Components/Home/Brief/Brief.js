import React, { useState } from 'react';
import './brief.scss';
import ContactForm from '../../common/contacForm';
import RodoPolicy from '../../common/rodoPolicy';

const textContent = [
  {
    text: 'Chcesz zmniejszyć rachunki za prąd w swojej firmie?',
    cName: 'firstClass',
    index: '1a',
  },
  {
    text:
      'Chciałbyś spróbować swoich sił w pracy handlowca lub masz do nas pytania?',
    cName: 'firstClass',
    index: '2a',
  },
  {
    text: 'Chętnie udzielimy Ci na nie odpowiedzi.',
    cName: 'firstClass',
    index: '3a',
  },
  {
    text: 'Oszczędność to najlepszy wybór, więc skontaktuj się z nami!',
    cName: 'secondClass',
    index: '4a',
  },
];

const Brief = () => {
  const [openPolicy, setOpenPolicy] = useState(true);

  const handleOpenPolicy = () => {
    setOpenPolicy((prevState) => !prevState);
  };

  return (
    <div
      className={openPolicy ? 'briefContainer ' : 'briefContainer  activeBrief'}
      id='brief'
    >
      <h2 className='title'>Kontakt</h2>
      <div className='textContainer'>
        {textContent.map((obj) => (
          <p key={obj.index} className={obj.cName}>
            {obj.text}
          </p>
        ))}
      </div>
      <ContactForm handleOpenPolicy={handleOpenPolicy} />
      <RodoPolicy visibleCondition={openPolicy} />
    </div>
  );
};

export default Brief;
