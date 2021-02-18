import React from 'react';
import { Btn, Link } from './styles';

const Button = ({ children, to, onClick }) => {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }

  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
