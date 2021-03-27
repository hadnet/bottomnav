import styled, {css} from 'styled-components';

type ItemProps = {
  active: number;
  tag: number;
};

export const Item = styled.li<ItemProps>`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  cursor: pointer;
  z-index: 1;
  &:hover > a > span:nth-child(2) {
    visibility: visible;
    opacity: 1;
    top: -40px;
  }
  ${({active, tag}) =>
    active === tag &&
    css`
      & > a {
        color: white;
      }
      & ~ div {
        transform: translateX(calc(70px * ${tag}));
      }
    `}
`;
Item.displayName = 'Item';
