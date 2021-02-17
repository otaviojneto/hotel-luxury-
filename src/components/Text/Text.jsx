import React from 'react';
import Txt from './styles';

const Text = ({
  children,
  align,
  color,
  lineHeight,
  mb,
  mt,
  size,
  weight,
  italic,
}) => (
  <Txt
    align={align}
    color={color}
    lineHeight={lineHeight}
    mb={mb}
    mt={mt}
    size={size}
    weight={weight}
    italic={italic}
  >
    {children}
  </Txt>
);

export default Text;
