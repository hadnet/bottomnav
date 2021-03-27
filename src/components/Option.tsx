import React from 'react';
import {LinkProps} from './Link';

export type OptionProps = {
  title: string;
  children?: React.ReactNode;
  icon: LinkProps['icon'];
  to: string;
};

export function Option({children}: OptionProps) {
  return <>{children}</>;
}
