import styled from 'styled-components';
import * as images from '../../assets';
import { Colors } from '../../styles';

export const Content = styled.div`
  align-items: center;
  background-image: url(${images.BgLuxury});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  height: 100vh;
  width: 100%;
`;

export const Blockquote = styled.blockquote`
  color: ${Colors.white};
  padding-top: 120px;

  h5 {
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    line-height: 40px;
  }

  h1 {
    font-size: 80px;
    font-weight: 600;
    line-height: 70px;
  }

  h6 {
    font-size: 26px;
    letter-spacing: 8px;
    line-height: 30px;
  }

  p {
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 20px;
    margin-bottom: 60px;
  }
`;

export const Scroll = styled.div`
  align-items: center;
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
