import React,{ useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroH1, HeroItems} from './DatenschutzHeroElements';

const DatenschutzHero = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
             <HeroItems>
                 <HeroH1>Datenschutz</HeroH1>
             </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default DatenschutzHero;
