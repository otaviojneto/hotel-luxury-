import React from 'react';
import { Container } from '../../styles';
import { Info, Rest } from './styles';
import { Button } from '../../components';
import recreations from '../../Mocks/recreations';

const Services = () => {
  return (
    <Container>
      <Info>
        Copy All our room types are including complementary
        breakfast
      </Info>

      {recreations.map(item => (
        <Rest>
          <div>
            <h2 key={item.id}>{item.title}</h2>
            <h3>{item.text}</h3>
            <Button to={item.link}>{item.button}</Button>
          </div>

          <img src={item.image} />
        </Rest>
      ))}
    </Container>
  );
};
export default Services;
