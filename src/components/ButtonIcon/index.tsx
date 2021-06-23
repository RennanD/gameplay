import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, IconWrapper, Icon, ButtonText } from './styles';

import discordImage from '../../assets/discord.png';

interface ButtonIconProps extends TouchableOpacityProps {
  children: string;
}

export function ButtonIcon({
  children,
  ...rest
}: ButtonIconProps): JSX.Element {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={discordImage} />
      </IconWrapper>

      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
