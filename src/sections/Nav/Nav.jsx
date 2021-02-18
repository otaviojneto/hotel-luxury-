import React from 'react';
import { Link } from 'react-router-dom';
import { Brand, Container, Navigation } from './styles';

const menuList = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Facilities',
    link: '/facilities',
  },
  {
    id: 3,
    name: 'Rooms',
    link: '/rooms',
  },
  {
    id: 4,
    name: 'Contact-us',
    link: '/contact',
  },
];

const Nav = () => {
  return (
    <Navigation>
      <Container>
        <Brand to="/">
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
        </Brand>

        <div>
          {menuList.map(item => (
            <Link key={item.id} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </Container>
    </Navigation>
  );
};

export default Nav;
