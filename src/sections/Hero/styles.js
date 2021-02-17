import styled from 'styled-components';
import * as images from '../../assets';

export const Bg = styled.div`
  background-image: url(${images.BgMain});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
`;

export const Container = styled.section`
  font-size: 1rem;
  height: 100vh;
  max-width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 83.333%;
  }
`;

export const Header = styled.header`
  display: flex;
  padding-left: 10%;
  padding: 38px 10% 0;

  div {
    margin-left: 15px;

    span {
      font-size: 16px;
      font-style: oblique;
      font-weight: 600;
      letter-spacing: 0.32px;
      line-height: 27px;
    }

    h3 {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 37px;
      font-style: oblique;
      letter-spacing: 0.32px;
      line-height: 37px;
      margin-left: -1px;
    }
  }
`;
