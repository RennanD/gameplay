import React from 'react';

import { Container, Header } from './styles';

import { Profile } from '../../components/Profile';

export function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}
