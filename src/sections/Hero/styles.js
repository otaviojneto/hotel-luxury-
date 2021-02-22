import styled from 'styled-components';
import * as images from '../../assets';
import {
  Colors,
  Container as ContainerGrid,
} from '../../styles';
import { Link as Btn } from '../../components/Button/styles';

export const Container = styled(ContainerGrid)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 240px;
`;

export const Button = styled(Btn)`
  margin: 0 auto;
`;

export const Content = styled.div`
  align-items: center;
  background-image: font-size: ${props => (props.bg ? props.bg : ${Colors.secondary})}px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
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
    flex-direction: column;
    font-size: 14px;
  }

  img {
    padding-top: 10px;
    width: 30px;
  }
`;
