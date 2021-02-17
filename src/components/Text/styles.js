import styled from 'styled-components';

const Txt = styled.p`
  font-family: ${props =>
    props.family ? props.family : 'FuturaPT Medium'};
  font-size: ${props => (props.size ? props.size : 16)}px;
  font-style: ${props => props.italic && 'italic'};
  font-weight: ${props => props.weight && props.weight};
  line-height: ${props =>
    props.lineHeight && `${props.lineHeight}px`};
  margin-bottom: ${props => props.mb && `${props.mb}px`};
  margin-top: ${props => props.mt && `${props.mt}px`};
  text-align: ${props => props.align && props.align};
`;

export default Txt;
