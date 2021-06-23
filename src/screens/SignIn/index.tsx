import React from 'react';

import { Container, HeroImage, Content, Title, SubTitle } from './styles';

import illustrationImage from '../../assets/illustration.png';

export function SignIn(): JSX.Element {
  return (
    <Container>
      <HeroImage source={illustrationImage} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se {'\n'}e organize suas {'\n'}jogatinas
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games favoritos com seus amigos
        </SubTitle>
      </Content>
    </Container>
  );
}
