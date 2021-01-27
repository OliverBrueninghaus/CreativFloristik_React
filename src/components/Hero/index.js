import React,{ useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroBtn, HeroH1, HeroItems, HeroP} from './HeroElements';

const Hero = () => {

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
                 <HeroH1>Willkommen</HeroH1>
                 <HeroP>Wir freuen uns auf Ihren Besuch!</HeroP>
                 <HeroBtn>
                   <a href="#kontakt">Öffnungszeiten</a>
                 </HeroBtn>
             </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
