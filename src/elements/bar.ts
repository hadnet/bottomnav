import styled from 'styled-components';

export type HEX = `#${string}`;
type BarProps = {
  borderRadius?: number;
  bgColor?: string | HEX;
};

export const Bar = styled.div<BarProps>`
  position: relative;
  width: 350px;
  height: 70px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: ${({bgColor}) => bgColor ?? 'white'};
  border-radius: ${({borderRadius}) => `${borderRadius ?? 35}px`};
`;
Bar.displayName = 'Bar';
