import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Square = styled.div`
  color: ${Colors.primary};
  display: flex;
  flex-direction: row-reverse;

  footer {
    align-items: center;
    background-color: #fff;
    font-weight: 700;
    max-width: 220px;
    padding-left: 16px;
  }
`;

export const ImageMobi = styled.img`
  max-width: 220px;
  height: 118px;
  margin: 0 auto;
  margin-bottom: -4px;
`;
