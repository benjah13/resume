import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour, <br />
          Moi c'est &#60;Ben/&#62; .
        </SectionTitle>
        <SectionText>
        Je suis Software Engineer, et passionné par mon metier. Ce site me permettra de me présenter mon parcours et vous permettra de mieux me connaitre.
        </SectionText>
        <Link href="#about"><Button onClick={props.handleClick}>Qui suis-je?</Button>
     </Link> </LeftSection>
    </Section>
  </>
);

export default Hero;