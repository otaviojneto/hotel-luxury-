import React from 'react';
import { Container } from '../../styles';
import { Arrow, Infos } from './styles';
import * as images from '../../assets';

const Text = () => {
  return (
    <Container>
      <Infos>
        <h1>Testimonials</h1>
        <h3>
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </h3>
        <h5>Mr. and Mrs. Baxter, UK</h5>

        <Arrow>
          <button>
            <img src={images.ChevronLeft} alt="Left" />
          </button>
          <button>
            <img src={images.ChevronRight} alt="Right" />
          </button>
        </Arrow>
      </Infos>
    </Container>
  );
};

export default Text;
