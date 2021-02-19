import styled from 'styled-components';
import { Colors } from '../../styles';

export const Rest = styled.div`
  align-items: center;
  display: flex;

  & + div {
    padding-top: 90px;
  }

  div {
    border-left: 2px solid ${Colors.secondary};
    padding: 0 40px;
  }

  h2 {
    color: ${Colors.secondary};
    font-family: 'Source Serif Pro', serif;
    font-size: 34px;
    letter-spacing: 1px;
    line-height: 36px;
  }

  h3 {
    color: ${Colors.secondary};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  img {
    width: 600px;
  }
`;

export const Info = styled.div`
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
  padding: 83px 0;
`;
