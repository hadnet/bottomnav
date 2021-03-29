import React, {ReactNode} from 'react';
import * as FontAwesome from 'react-icons/fa';
import styled from 'styled-components';
import type {IconType} from 'react-icons';
import {HEX} from '../elements/bar';

export type LinkProps = {
  color?: string | HEX;
  to?: string;
  icon: keyof typeof FontAwesome;
  children?: ReactNode;
};

const Anchor = styled.a<{color: LinkProps['color']}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({color}) => color ?? '#D48C00'};
  width: 100%;
`;
Anchor.displayName = 'Anchor';

const Title = styled.span`
  position: absolute;
  top: -70px;
  left: 50%;
  background-color: darkmagenta;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, 15%);
  user-select: none;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    bottom: -3px;
    left: 50%;
    background-color: darkmagenta;
    transform: translateX(-48%) rotate(45deg);
  }
`;
Title.displayName = 'Title';

export const Icon = styled.span`
  font-size: 24px;
  position: relative;
  display: block;
  line-height: 78px;
  text-align: center;
  transition: 0.5s;
`;
Icon.displayName = 'Icon';

export function Link({color, to, icon, children}: LinkProps) {
  const FAIcon: IconType = FontAwesome[icon];
  return (
    <Anchor color={color} href={to}>
      <Icon>
        <FAIcon />
      </Icon>
      <Title>{children}</Title>
    </Anchor>
  );
}
