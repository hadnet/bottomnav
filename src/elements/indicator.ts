import styled from 'styled-components';

export const Indicator = styled.div`
  position: absolute;
  left: 0;
  width: 70px;
  height: 70px;
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: darkmagenta;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
Indicator.displayName = 'Indicator';
