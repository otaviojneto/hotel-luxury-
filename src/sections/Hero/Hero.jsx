import React from 'react';
import { Container, Bg, Header } from './styles';
import * as images from '../../assets';
import { Box } from '../../components/index';

const Hero = () => {
  return (
    <Bg>
      <Container>
        <Header>
          <img src={images.trekking} alt="teste" />

          <div>
            <span>CHEGOU O</span>
            <h3></h3>
            <h3>FIAT MOBI TREKKING</h3>
            <span>TÁ TUDO DOMINADO</span>
          </div>
        </Header>
        <Box />
      </Container>
    </Bg>
  );
};

export default Hero;
