import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

type LayoutProps = {
  children: any
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
    <Header/>
    <main>{children}</main> 
    <Footer/>
   </Container> 
  );
};

export default Layout;