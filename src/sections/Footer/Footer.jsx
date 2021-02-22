import React from 'react';
import { Container, Col, Row } from '../../styles';
import { BgFooter, Btn } from './styles';
import * as images from '../../assets';

const Icons = [
  {
    icon: images.Face,
    name: 'Facebook',
  },
  {
    icon: images.Twitter,
    name: 'Twitter',
  },
  {
    icon: images.Insta,
    name: 'Insta',
  },
];

const Infos = [
  {
    name: 'About Us',
    link: '/',
  },
  {
    name: 'Contact',
    link: '/',
  },
  {
    name: 'Terms & Conditions',
    link: '/',
  },
];
const Footer = () => {
  return (
    <BgFooter>
      <Container>
        <Row>
          <Col>
            <h3>LUXURY</h3>
            <h5>HOTELS</h5>

            <p>
              497 Evergreen Rd. Roseville, CA 95673 +44 345 678
              903 luxury_hotels@gmail.com
            </p>
          </Col>

          <Col>
            {Infos.map(item => (
              <ul>
                <li>
                  <a href={item.link}>{item.name}</a>
                </li>
              </ul>
            ))}
          </Col>
          <Col>
            <ul>
              {Icons.map(item => (
                <li>
                  <a href="https://www.facebook.com/">
                    <img src={item.icon} alt="Face" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <span class="form-text">
              Subscribe to our newsletter
            </span>

            <form>
              <input
                type="text"
                class="form-group-input"
                placeholder="Email Address"
              />
              <Btn>
                <a href="#">OK</a>
              </Btn>
            </form>
          </Col>
        </Row>
      </Container>
    </BgFooter>
  );
};
export default Footer;
