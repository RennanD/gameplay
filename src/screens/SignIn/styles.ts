import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroImage = styled.Image`
  width: 100%;
  height: ${RFPercentage(48)}px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 30px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: ${RFValue(40)}px;

  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;

  margin-bottom: 64px;
`;
