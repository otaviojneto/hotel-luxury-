import styled from 'styled-components';
import * as images from '../../assets';
import {
  Colors,
  Container as ContainerGrid,
} from '../../styles';

export const Container = styled(ContainerGrid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 240px;
`;

export const Content = styled.div`
  align-items: center;
  background-image: url(${images.BgLuxury});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Blockquote = styled.blockquote`
  color: ${Colors.white};
  padding-bottom: 40px;

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
  color: ${Colors.white};
  display: inline-block;

  a {
    align-items: center;
    color: ${Colors.white};
    display: flex;
    font-size: 14px;
    flex-direction: column;
  }

  img {
    width: 30px;
    padding-top: 10px;
  }
`;
