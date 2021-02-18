import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Container as Content } from '../../styles';

export const Container = styled(Content)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  position: absolute;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;

    a {
      color: ${Colors.white};
      font-size: 16px;
      font-weight: 300;
      padding: 12px 4px;
      position: relative;
      transition: 0.15s ease-in-out;

      & + a {
        margin-left: 30px;
      }

      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        left: 50%;
        bottom: 0;
        transition: 0.3s ease-in-out;
        transform: translateX(-50%);
      }

      &:hover {
        font-weight: 700;
        color: ${Colors.grayLight};

        &::after {
          width: 100%;
          background-color: ${Colors.grayLight};
        }
      }
    }
  }
`;

export const Brand = styled(Link)`
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 0 0 40px 40px;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  text-align: center;
  width: 256px;

  &::after {
    opacity: 0;
    z-index: -10;
  }

  h1 {
    color: ${Colors.secondary};
    font-family: 'Source Serif Pro', serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 36px;
  }

  h2 {
    color: ${Colors.secondary};
    font-family: 'Source Serif Pro', serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 8px;
  }
`;
