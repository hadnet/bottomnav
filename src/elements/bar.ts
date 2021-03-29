import styled from 'styled-components';

export type HEX = `#${string}`;
type BarProps = {
  borderRadius?: number;
  bgColor?: string | HEX;
  size?: number;
};

export const Bar = styled.div<BarProps>`
  position: relative;
  overflow: hidden;
  width: 70px;
  height: 70px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: ${({bgColor}) => bgColor ?? 'white'};
  border-radius: ${({borderRadius}) => `${borderRadius ?? 35}px`};
  & > ul {
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
  transition: 0.5s;
  &:hover {
    overflow: visible;
    width: ${({size}) => (size ? `${size * 70}px` : `350px`)};
    & > ul {
      visibility: visible;
      opacity: 1;
    }
    & > span {
      visibility: hidden;
      opacity: 0;
    }
  }
`;
Bar.displayName = 'Bar';
