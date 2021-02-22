import { Link as Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

const style = css`
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 200px;
  color: ${Colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;

  img {
    margin-right: 15px;
    padding-bottom: 1px;
    width: 16px;
  }
`;

export const Btn = styled.button`
  ${style}
`;
export const Link = styled(Route)`
  ${style}
`;
