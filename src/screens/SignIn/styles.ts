import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.Image`
  width: 100%;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 30px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(40)}px;

  margin-bottom: 16px;

  line-height: ${RFValue(40)}px;

  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.title700};
  `}
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  text-align: center;

  margin-bottom: 64px;

  line-height: ${RFValue(25)}px;

  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.title500};
  `}
`;
