import styled, {css, StyledComponent} from 'styled-components';

type ListProps = StyledComponent<'ul', HTMLUListElement> & {
  Item: StyledComponent<'li', HTMLLIElement, {active: number; tag: number}>;
};

export const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
` as ListProps;
List.displayName = 'List';

List.Item = styled.li<{active: number; tag: number}>`
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
List.Item.displayName = 'Item';
