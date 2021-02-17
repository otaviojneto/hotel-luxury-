import React from 'react';
import * as Images from '../../assets';
import { ImageMobi, Square } from './styles';
import { Col } from '../../styles';
import Text from '../Text';

const Box = () => {
  return (
    <Square>
      <Col xs={6}>
        <ImageMobi src={Images.CentralMu} alt={'d'} />
        <footer>
          <Text>CENTRAL MULTIMIDIA</Text>
        </footer>
      </Col>
    </Square>
  );
};

export default Box;
