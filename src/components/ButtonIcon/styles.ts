import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(56)}px;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 8px;

  flex-direction: row;

  align-items: center;
`;

export const IconWrapper = styled.View`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.line};

  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;

  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`;
