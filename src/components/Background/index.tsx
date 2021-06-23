import React from 'react';

import { useTheme } from 'styled-components';
import { Container } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps): JSX.Element {
  const { secondary80, secondary100 } = useTheme().colors;

  return <Container colors={[secondary80, secondary100]}>{children}</Container>;
}
