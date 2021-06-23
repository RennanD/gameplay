import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const UserContent = styled.View``;

export const AvatarImage = styled.Image``;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-size: ${RFValue(24)}px;

  margin-right: 5px;

  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.title500};
  `}
`;

export const UserName = styled.Text`
  font-size: ${RFValue(24)}px;

  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.title700};
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
  `}
`;
