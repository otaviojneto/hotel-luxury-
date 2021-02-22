import styled from 'styled-components';
import { Colors } from '../../styles';

export const BgFooter = styled.footer`
  align-items: center;
  background-color: ${Colors.secondary};
  display: flex;
  margin-top: 80px;
  position: relative;
  padding-bottom: 60px;
  padding-top: 80px;

    &::before {
    background-color: ${Colors.secondary};
    content: '';
    height: 108px;
    left: calc(50% - 50px);
    position: absolute;
    top: -32px;
    transform: rotate(45deg);
    width: 88px;
    }

  h3 {
    color: ${Colors.white};
  }

  h5 {
    color: ${Colors.white};
    letter-spacing: 4px;
    padding-left: 16px;
  }

  p {
    color: ${Colors.white};
    font-size: 12px;
    line-height: 16px;
    padding: 20px 0 60px 0;
  }

  ul {
    padding-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    padding-top: 12px;
  }

  a {
    color: ${Colors.white};
    padding-bottom: 12px;
  }

  img {
    padding-right: 10px;
  }

  span {
    color: ${Colors.white};
    font-size: 14px;
    margin-bottom: 20px;
  }

  form {
  display: flex;
  margin-top: 30px;
  }

   input {
    background-color: transparent;
    border: 2px solid ${Colors.primary};
    border-radius: 6px 0 0 6px;
    caret-color: ${Colors.white};
    color: ${Colors.white};
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 10px;

    &::placeholder {
      color: ${Colors.white};
      font-size: 16px;
      font-weight: 700;
    }
`;

export const Btn = styled.button`
  background-color: ${Colors.primary};
  border-radius: 0 6px 6px 0;
  color: ${Colors.secondary};
  cursor: pointer;
  font-weight: 700;
  padding: 16px;
`;
