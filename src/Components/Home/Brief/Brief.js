import React, { useState } from 'react';
import './brief.scss';
import ContactForm from '../../common/contacForm';
import RodoPolicy from '../../common/rodoPolicy';

const textContent = [
  {
    text: 'Chcesz zmniejszyć rachunki za prąd w swojej firmie?',
    cName: 'firstClass',
  },
  {
    text:
      'Chciałbyś spróbować swoich sił w pracy handlowca lub masz do nas pytania?',
    cName: 'firstClass',
  },
  {
    text: 'Chętnie udzielimy Ci na nie odpowiedzi.',
    cName: 'firstClass',
  },
  {
    text: 'Oszczędność to najlepszy wybór, więc skontaktuj się z nami!',
    cName: 'secondClass',
  },
];

const Brief = () => {
  const [openPolicy, setOpenPolicy] = useState(false);

  const handleOpenPolicy = () => {
    setOpenPolicy((prevState) => !prevState);
  };

  return (
    <div
      className={openPolicy ? 'briefContainer activeBrief' : 'briefContainer '}
      id="brief"
    >
      <h2 className="title">Kontakt</h2>
      <div className="textContainer">
        {textContent.map((obj) => (
          <p className={obj.cName}>{obj.text}</p>
        ))}
      </div>
      <ContactForm handleOpenPolicy={handleOpenPolicy} />
      <RodoPolicy visibleCondition={openPolicy} />
    </div>
  );
};

export default Brief;
