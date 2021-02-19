import React from 'react';
import {
  Blockquote,
  Button,
  Container,
  Content,
  Scroll,
} from './styles';
import * as Images from '../../assets';

const Hero = () => {
  return (
    <Content>
      <Container>
        <Blockquote>
          <h5>WELCOME TO</h5>

          <h1>LUXURY</h1>

          <h6>HOTELS</h6>

          <p className="luxury-text">
            Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates. Copy
          </p>

          <Button to="/">
            <img
              className="btn-logo"
              src={Images.IconBtn}
              alt="logo"
            />
            <span>BOOK NOW</span>
          </Button>
        </Blockquote>

        <Scroll>
          <a href="#">
            <span>Scroll</span>
            <img src={Images.Scroll} alt="scroll" />
          </a>
        </Scroll>
      </Container>
    </Content>
  );
};

export default Hero;
