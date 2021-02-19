import styled from 'styled-components';
import { Colors } from '../../styles';

export const Infos = styled.div`
  margin-top: 114px;

  h1 {
    color: ${Colors.secondary};
    font-family: 'Source Serif Pro', serif;
    font-size: 34px;
    line-height: 76px;
    text-align: center;
  }

  h3 {
    color: ${Colors.secondary};
    font-size: 22px;
    line-height: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  h5 {
    color: ${Colors.secondary};
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 24px;
    text-align: center;
  }
`;
export const Arrow = styled.button`
  background-color: ${Colors.white};
  display: flex;
  margin: 0 auto;

  Button {
    align-items: center;
    background-color: ${Colors.primary};
    border-radius: 8px;
    display: flex;
    height: 35px;
    justify-content: center;
    margin: 0 8px;
    width: 40px;
  }
`;
