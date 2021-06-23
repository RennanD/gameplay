import React from 'react';

import {
  Container,
  UserContent,
  AvatarImage,
  User,
  Greeting,
  UserName,
  Message,
} from './styles';

export function Profile(): JSX.Element {
  return (
    <Container>
      {/* <AvatarImage /> */}
      <UserContent>
        <User>
          <Greeting>Olá</Greeting>
          <UserName>Rennan Oliveira</UserName>
        </User>

        <Message>Hoje é dia de vitória</Message>
      </UserContent>
    </Container>
  );
}
