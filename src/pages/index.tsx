import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Carreer from '../components/Carreer/Carreer';
import Technologies from '../components/Technologies/Technologies';
import { Section } from '../styles/GlobalComponents';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Carreer />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
