import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import { GallerieContainer, GallerieContent, GallerieH1, GallerieItems } from './GallerieHeroElement';

const GallerieHero = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GallerieContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GallerieContent>
        <GallerieItems>
          <GallerieH1>Gallerie</GallerieH1>
        </GallerieItems>
      </GallerieContent>
    </GallerieContainer>
  );
};

export default GallerieHero;
